"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#renders", label: "Rendus 3D" },
  { href: "#references", label: "Références" },
  { href: "#about", label: "À propos" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 text-slate-900 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <Image
            src="/assets/logo/noir_sf.png"
            alt="Atelier Berengier Logo"
            width={150}
            height={40}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-white shadow-sm transition hover:bg-accent-dark"
          >
            Contactez-moi
          </a>
        </nav>
      </div>
    </header>
  );
}
