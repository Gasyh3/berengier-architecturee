"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative isolate flex min-h-[100vh] items-center justify-center overflow-hidden bg-slate-900 text-white">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[2500ms] ease-out"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-900/80" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-16 flex justify-center">
        <div className="h-16 w-16 rounded-full border border-accent/40 bg-accent/20 blur-xl" />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center transition-all duration-1000 ease-out ${ready ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="px-8 py-4 text-4xl font-semibold tracking-[0.15em] text-white md:text-5xl">
          <Image
            src="/assets/logo/blanc_sf.png"
            alt="Atelier Berengier"
            width={400}
            height={80}
          />
        </div>

      </div>
    </section >
  );
}
