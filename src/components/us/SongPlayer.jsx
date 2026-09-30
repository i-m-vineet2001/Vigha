
"use client";

import React, { useEffect, useRef, useState } from "react";

import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

import Reveal from "@/components/us/Reveal";

import { songs } from "@/data/us";

const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export default function SongPlayer() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);

  const audioRef = useRef(null);

  const song = songs[index];

  const duration = song.duration || 1;

  /* ---------------------------------- */
  /* Reset when song changes */
  /* ---------------------------------- */

  useEffect(() => {
    setTime(0);
    setPlaying(false);

    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [index]);

  /* ---------------------------------- */
  /* Audio / fallback timer */
  /* ---------------------------------- */

  useEffect(() => {
    const audio = audioRef.current;

    if (audio && song.src) {
      if (playing) {
        audio.play().catch(() => {
          setPlaying(false);
        });
      } else {
        audio.pause();
      }

      return;
    }

    if (!playing) return;

    const timer = setInterval(() => {
      setTime((value) => (value + 1 >= duration ? 0 : value + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, song.src, duration]);

  /* ---------------------------------- */
  /* Seek */
  /* ---------------------------------- */

  const seek = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const percentage = Math.min(
      1,
      Math.max(0, (event.clientX - rect.left) / rect.width),
    );

    const target = Math.round(percentage * duration);

    setTime(target);

    const audio = audioRef.current;

    if (audio && song.src) {
      audio.currentTime = target;
    }
  };

  /* ---------------------------------- */
  /* Previous / Next */
  /* ---------------------------------- */

  const step = (direction) => {
    setIndex((value) => (value + direction + songs.length) % songs.length);
  };

  const progress = Math.min(100, (time / duration) * 100);

  return (
    <section
      id="song"
      className="relative scroll-mt-24 overflow-hidden px-5 py-20 sm:py-28"
    >
      {/* Ambient background glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C6577B]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-1/2 h-48 w-48 rounded-full bg-[#7A2E44]/5 blur-[90px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* ---------------------------------- */}
        {/* Section Heading */}
        {/* ---------------------------------- */}

        <Reveal className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#8d6874] sm:text-[11px]">
            Our Song
          </p>

          <h2 className="mt-4 font-heading text-4xl leading-tight text-[#3f252e] sm:text-5xl">
            Press play,
            <br className="sm:hidden" /> think of me
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#7a5964]/70 sm:text-base">
            Nothing starts on its own — this one is yours to begin.
          </p>
        </Reveal>

        {/* ---------------------------------- */}
        {/* Player */}
        {/* ---------------------------------- */}

        <Reveal delay={0.1} className="mt-14">
          <div className="group/player relative overflow-hidden rounded-[2.5rem] border border-[#C6577B]/12 bg-white/45 p-5 shadow-[0_30px_90px_-35px_rgba(122,46,68,0.32)] backdrop-blur-2xl sm:p-8 lg:p-10">
            {/* Card glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C6577B]/8 blur-[80px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#7A2E44]/5 blur-[80px]"
            />

            <div className="relative">
              {/* ---------------------------------- */}
              {/* Main Player */}
              {/* ---------------------------------- */}

              <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
                {/* Album Art */}

                <div className="relative shrink-0">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 rounded-[2rem] bg-[#C6577B]/10 blur-2xl"
                  />

                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/40 p-1.5 shadow-[0_20px_50px_-22px_rgba(122,46,68,0.45)]">
                    <div className="relative aspect-square w-56 overflow-hidden rounded-[1.35rem] sm:w-64">
                      <Image
                        src={song.cover}
                        alt={song.title}
                        fittingType="fill"
                        className="h-full w-full transition-transform duration-700 group-hover/player:scale-[1.03]"
                      />

                      {/* Image overlay */}

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3f252e]/20 via-transparent to-white/10"
                      />

                      {/* Playing indicator */}

                      {playing && (
                        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-[#3f252e]/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md">
                          <span className="flex items-end gap-[2px]">
                            <span className="h-2 w-[2px] animate-pulse rounded-full bg-white" />
                            <span className="h-3 w-[2px] animate-pulse rounded-full bg-white [animation-delay:120ms]" />
                            <span className="h-2.5 w-[2px] animate-pulse rounded-full bg-white [animation-delay:240ms]" />
                          </span>
                          Playing
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Player Information */}

                <div className="w-full min-w-0 flex-1">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#C6577B]/75">
                      Now playing
                    </p>

                    <h3 className="mt-2 truncate font-heading text-2xl text-[#3f252e] sm:text-3xl">
                      {song.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#7a5964]/65">
                      {song.artist}
                    </p>

                    {song.note && (
                      <p className="mt-3 font-script text-xl text-[#7A2E44]">
                        {song.note}
                      </p>
                    )}
                  </div>

                  {/* Progress */}

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={seek}
                      className="group/progress relative block h-2.5 w-full cursor-pointer overflow-hidden rounded-full border border-[#C6577B]/8 bg-[#C6577B]/8 outline-none focus-visible:ring-2 focus-visible:ring-[#C6577B]/20"
                      aria-label="Seek"
                    >
                      {/* Filled progress */}

                      <span
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#C6577B] to-[#7A2E44] shadow-[0_2px_10px_rgba(198,87,123,0.3)] transition-[width] duration-300 ease-linear"
                        style={{
                          width: `${progress}%`,
                        }}
                      />

                      {/* Progress highlight */}

                      <span
                        className="absolute inset-y-0 left-0 rounded-full bg-white/20"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </button>

                    <div className="mt-2 flex justify-between text-[11px] tabular-nums text-[#8d6874]/65">
                      <span>{fmt(time)}</span>

                      <span>{fmt(duration)}</span>
                    </div>
                  </div>

                  {/* Controls */}

                  <div className="mt-6 flex items-center gap-3">
                    {/* Previous */}

                    <button
                      type="button"
                      onClick={() => step(-1)}
                      className="group/control flex h-11 w-11 items-center justify-center rounded-full border border-[#C6577B]/10 bg-white/45 text-[#6f4b57] shadow-[0_6px_20px_-12px_rgba(122,46,68,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6577B]/20 hover:bg-white/70 hover:text-[#7A2E44] active:scale-95"
                      aria-label="Previous song"
                    >
                      <SkipBack size={17} strokeWidth={1.8} />
                    </button>

                    {/* Play / Pause */}

                    <button
                      type="button"
                      onClick={() => setPlaying((value) => !value)}
                      className="group/play relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#C6577B] to-[#7A2E44] text-white shadow-[0_12px_30px_-10px_rgba(122,46,68,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_-10px_rgba(122,46,68,0.6)] active:scale-95"
                      aria-label={playing ? "Pause" : "Play"}
                    >
                      {/* Shine */}

                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/play:translate-x-full"
                      />

                      {playing ? (
                        <Pause size={21} strokeWidth={1.8} />
                      ) : (
                        <Play size={21} strokeWidth={1.8} className="ml-0.5" />
                      )}
                    </button>

                    {/* Next */}

                    <button
                      type="button"
                      onClick={() => step(1)}
                      className="group/control flex h-11 w-11 items-center justify-center rounded-full border border-[#C6577B]/10 bg-white/45 text-[#6f4b57] shadow-[0_6px_20px_-12px_rgba(122,46,68,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6577B]/20 hover:bg-white/70 hover:text-[#7A2E44] active:scale-95"
                      aria-label="Next song"
                    >
                      <SkipForward size={17} strokeWidth={1.8} />
                    </button>

                    {/* Small decorative audio indicator */}

                    <div className="ml-auto hidden items-center gap-2 text-[#8d6874]/55 sm:flex">
                      <Volume2 size={15} strokeWidth={1.7} />

                      <span className="text-[10px] uppercase tracking-[0.2em]">
                        Our playlist
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------------------------- */}
              {/* Playlist */}
              {/* ---------------------------------- */}

              <div className="mt-10 border-t border-[#C6577B]/10 pt-7">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#8d6874]/65">
                    Playlist
                  </p>

                  <span className="text-[10px] tabular-nums text-[#8d6874]/45">
                    {index + 1} / {songs.length}
                  </span>
                </div>

                <div className="space-y-1.5">
                  {songs.map((s, i) => {
                    const active = i === index;

                    return (
                      <button
                        key={s.title + i}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={cn(
                          "group/track relative flex w-full items-center gap-4 overflow-hidden rounded-2xl p-3 text-left transition-all duration-300",
                          active
                            ? "border border-[#C6577B]/12 bg-white/60 shadow-[0_8px_25px_-18px_rgba(122,46,68,0.35)]"
                            : "border border-transparent hover:bg-white/40",
                        )}
                      >
                        {/* Active indicator */}

                        {active && (
                          <span className="absolute bottom-0 left-0 top-0 w-0.5 rounded-full bg-gradient-to-b from-[#C6577B] to-[#7A2E44]" />
                        )}

                        {/* Cover */}

                        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/50 shadow-sm">
                          <Image
                            src={s.cover}
                            alt=""
                            fittingType="fill"
                            className="h-full w-full transition-transform duration-500 group-hover/track:scale-105"
                          />

                          {active && (
                            <span className="absolute inset-0 flex items-center justify-center bg-[#3f252e]/25">
                              <span className="flex items-end gap-[2px]">
                                <span className="h-2 w-[2px] animate-pulse rounded-full bg-white" />
                                <span className="h-3 w-[2px] animate-pulse rounded-full bg-white [animation-delay:120ms]" />
                                <span className="h-2 w-[2px] animate-pulse rounded-full bg-white [animation-delay:240ms]" />
                              </span>
                            </span>
                          )}
                        </span>

                        {/* Track Info */}

                        <span className="min-w-0 flex-1">
                          <span
                            className={cn(
                              "block truncate text-sm font-medium",
                              active ? "text-[#7A2E44]" : "text-[#4a2732]",
                            )}
                          >
                            {s.title}
                          </span>

                          <span className="mt-0.5 block truncate text-xs text-[#8d6874]/60">
                            {s.artist}
                          </span>
                        </span>

                        {/* Duration */}

                        <span className="shrink-0 text-[11px] tabular-nums text-[#8d6874]/45">
                          {fmt(s.duration || 0)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---------------------------------- */}
      {/* Audio Element */}
      {/* ---------------------------------- */}

      <audio
        ref={audioRef}
        src={song.src || undefined}
        preload="none"
        onTimeUpdate={(event) =>
          setTime(Math.floor(event.currentTarget.currentTime))
        }
        onEnded={() => step(1)}
      />
    </section>
  );
}