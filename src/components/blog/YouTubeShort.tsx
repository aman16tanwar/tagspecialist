'use client';

import { useState } from 'react';

interface YouTubeShortProps {
  id: string;
  title: string;
}

// Click-to-load: until the reader presses play, the page only fetches the thumbnail image.
// The YouTube player (and its cookies and ~1MB of script) loads on click, so nothing is set
// before consent and the post stays fast. The player itself uses the privacy-enhanced domain.
export default function YouTubeShort({ id, title }: YouTubeShortProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="not-prose mb-10 flex flex-col sm:flex-row sm:items-center gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="relative w-full max-w-[220px] mx-auto sm:mx-0 aspect-[9/16] overflow-hidden rounded-lg bg-navy-900 flex-shrink-0">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play video: ${title}`}
          >
            {/* Plain <img>: the site is a static export, so next/image optimisation isn't available. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-navy-900" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="text-center sm:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-1">Short version</p>
        <p className="text-lg font-semibold text-navy-900 mb-1">The whole problem in under a minute</p>
        <p className="text-sm text-gray-600">Watch the test, then read on for the full checklist and the fix.</p>
      </figcaption>
    </figure>
  );
}
