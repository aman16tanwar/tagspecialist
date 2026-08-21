'use client';

import { useEffect, useState } from 'react';
import GithubSlugger from 'github-slugger';

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

/**
 * Builds the heading list for the sidebar.
 *
 * Slugs are produced with the same github-slugger that rehype-slug uses, and every
 * heading level is fed through it in document order — including levels that are not
 * displayed — because the slugger dedupes by appending a counter. Skipping a heading
 * here would desync the sidebar's ids from the ones rendered into the page.
 */
export function buildToc(markdown: string): TocHeading[] {
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];
  let insideFence = false;

  for (const line of markdown.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      insideFence = !insideFence;
      continue;
    }
    if (insideFence) continue;

    const match = /^(#{2,6})\s+(.+?)\s*$/.exec(line);
    if (!match) continue;

    // Strip inline markdown so the slug matches the heading's rendered text content.
    const text = match[2]
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .trim();

    const level = match[1].length;
    const id = slugger.slug(text);
    if (level === 3 || level === 4) headings.push({ id, text, level });
  }

  return headings;
}

interface TableOfContentsProps {
  headings: TocHeading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) return;

    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    // Track the last heading to cross the top of the viewport, so the highlight follows
    // the section actually being read rather than whichever heading is merely visible.
    const observer = new IntersectionObserver(
      (entries) => {
        const crossed = entries
          .filter((entry) => entry.boundingClientRect.top < 140)
          .map((entry) => entry.target.id);
        if (crossed.length > 0) {
          setActiveId(crossed[crossed.length - 1]);
        }
      },
      { rootMargin: '-140px 0px -70% 0px', threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav aria-label="On this page" className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto">
      <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
        On this page
      </p>
      <ul className="space-y-1 border-l border-gray-200">
        {headings.map(({ id, text, level }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={[
                  'block border-l-2 py-1.5 text-sm leading-snug transition-colors',
                  level === 4 ? 'pl-6' : 'pl-4',
                  isActive
                    ? 'border-blue-600 font-semibold text-blue-700'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-navy-900',
                ].join(' ')}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
