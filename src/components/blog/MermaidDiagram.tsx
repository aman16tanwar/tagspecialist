'use client';

import { useEffect, useId, useRef, useState } from 'react';

type MermaidApi = Awaited<typeof import('mermaid')>['default'];

// Mermaid is ~500KB, so it loads on demand — only on posts that actually contain a
// diagram — and initializes once per page rather than once per diagram.
let mermaidLoader: Promise<MermaidApi> | null = null;

function loadMermaid(): Promise<MermaidApi> {
  if (!mermaidLoader) {
    mermaidLoader = import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: 'base',
        // Must be a concrete stack, not `inherit`. Mermaid measures label widths in a
        // detached element using this value to size each node; if it resolves to a
        // different font than the rendered SVG actually uses, boxes come out too narrow
        // and labels overflow their shapes. Matches the site body font in globals.css.
        fontFamily: "'Open Sans', sans-serif",
        themeVariables: {
          fontSize: '14px',
          // Nodes: near-white navy tint with a blue border, navy text.
          primaryColor: '#f0f4f8',
          primaryTextColor: '#0a192f',
          primaryBorderColor: '#2563eb',
          secondaryColor: '#d9e2ec',
          secondaryTextColor: '#0a192f',
          secondaryBorderColor: '#1d4ed8',
          tertiaryColor: '#ffffff',
          tertiaryTextColor: '#0a192f',
          tertiaryBorderColor: '#d1d5db',
          // Edges and their labels.
          lineColor: '#6b7280',
          textColor: '#374151',
          edgeLabelBackground: '#ffffff',
          // Subgraph containers.
          clusterBkg: '#f9fafb',
          clusterBorder: '#d1d5db',
        },
        flowchart: {
          curve: 'basis',
          htmlLabels: false,
          padding: 16,
          useMaxWidth: true,
        },
      });
      return mermaid;
    });
  }
  return mermaidLoader;
}

// rehype-highlight may wrap the fence contents in nested elements, so recover the
// original diagram source by walking the tree and collecting text.
export function extractText(node: unknown): string {
  if (node == null || node === false || node === true) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (typeof node === 'object' && 'props' in (node as Record<string, unknown>)) {
    const props = (node as { props?: { children?: unknown } }).props;
    return extractText(props?.children);
  }
  return '';
}

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  // useId is stable across server and client; mermaid needs a selector-safe id.
  const domId = `mermaid-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    let cancelled = false;

    loadMermaid()
      .then((mermaid) => mermaid.render(domId, chart))
      .then(({ svg }) => {
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      // mermaid appends a measurement node to <body> keyed by the render id.
      document.getElementById(`d${domId}`)?.remove();
    };
  }, [chart, domId]);

  // If rendering fails, showing the source beats showing nothing.
  if (failed) {
    return (
      <pre className="overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    // `not-prose` keeps @tailwindcss/typography from cascading font-size and line-height
    // onto the SVG's <text> nodes, which would desync rendered glyphs from the widths
    // mermaid measured when it sized each node.
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50/60 p-6">
      <div
        ref={containerRef}
        aria-label="Diagram"
        className="flex min-h-[120px] items-center justify-center [&_svg]:h-auto [&_svg]:max-w-full"
      />
    </div>
  );
}
