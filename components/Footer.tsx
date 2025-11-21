import Image from "next/image";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#renders", label: "Rendus 3D" },
  { href: "#references", label: "Références" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-accent text-slate-900">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-12 text-sm">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-4">
            <Image
              src="/assets/logo/noir_sf.png"
              alt="Bérengier Architecture"
              width={180}
              height={48}
              className="h-auto w-44"
            />
            <p className="text-base text-slate-800">
              Bérengier Architecture accompagne les entreprises du bâtiment avec des plans précis, des rendus 3D
              photoréalistes et un soutien opérationnel flexible.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-800">Contact</p>
            <div className="space-y-2 text-sm">
              <p>berengier.architecture@gmail.com</p>
              <p>+33 7 70 51 61 62</p>
              <p>Lyon · Interventions France entière</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-800">Navigation</p>
            <div className="grid gap-2">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/40 pt-6 text-xs text-slate-800 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bérengier Architecture. Tous droits réservés.</p>

        </div>
      </div>
    </footer>
  );
}
