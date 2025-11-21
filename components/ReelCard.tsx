"use client";

import { useEffect, useState } from "react";

type ReelCardProps = {
  title: string;
  description: string;
  src: string;
};

export default function ReelCard({ title, description, src }: ReelCardProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mx-auto w-full max-w-xs rounded-[32px] border border-accent/40 bg-slate-950 p-4 shadow-2xl shadow-slate-900/50 sm:max-w-sm lg:max-w-md">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/20 bg-black">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 text-xs font-semibold uppercase tracking-[0.4em] text-white animate-pulse">
            Chargement
          </div>
        )}
        <video
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onLoadedData={() => setLoading(false)}
        >
          <source src={src} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
      <div className="mt-4 space-y-1 text-center text-white">

      </div>
    </div>
  );
}
