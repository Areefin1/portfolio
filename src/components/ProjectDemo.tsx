"use client";

import Image from "next/image";
import { useState } from "react";
import type { Demo } from "../data/projects";

export function ProjectDemo({ title, demo }: { title: string; demo: Demo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mt-4 w-full">
      <div className="relative aspect-video min-h-[200px] w-full rounded-lg bg-ink">
        {!playing ? (
          <button
            type="button"
            aria-label={`Play ${title} demo`}
            className="absolute inset-0 grid cursor-pointer place-items-center overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            onClick={() => setPlaying(true)}
          >
            <Image src={demo.poster} alt="" fill unoptimized className="object-contain" />
            <span className="relative rounded-full bg-accent-deep px-4 py-2 text-sm font-bold text-white">
              <span aria-hidden="true">▶ </span>Play demo
            </span>
          </button>
        ) : demo.kind === "youtube" ? (
          <iframe
            className="absolute inset-0 h-full w-full rounded-lg"
            src={`https://www.youtube-nocookie.com/embed/${demo.videoId}?autoplay=1&playsinline=1`}
            title={`${title} demo`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full rounded-lg"
            aria-label={`${title} demo`}
            src={demo.src}
            poster={demo.poster}
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
      {playing && demo.kind === "youtube" && (
        <a
          className="inline-flex min-h-11 items-center text-sm font-semibold text-accent underline underline-offset-4"
          href={`https://youtu.be/${demo.videoId}`}
          aria-label={`Watch ${title} on YouTube`}
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
}
