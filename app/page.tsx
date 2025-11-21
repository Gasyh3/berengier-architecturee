import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ReelCard from "@/components/ReelCard";
import Image from "next/image";

const images = [
  {
    src: "/assets/3D/14ce0d00-514b-4e02-988d-92754cbed77b.png"
  },
  {
    src: "/assets/DukeDSC_4803.jpg"
  },

];

const services = [
  {
    title: "Prise de côtes + EDL",
    description: "Relevés précis, synthèses claires et livrables prêts à partager."
  },
  {
    title: "Plan projet",
    description: "Organisation spatiale optimisée, annotations et variantes rapides."
  },
  {
    title: "Plan d’execution",
    description: "Plans détaillés et normalisés pour les équipes chantier."
  },
  {
    title: "Rendus 3D",
    description: "Visuels photoréalistes pour convaincre vos clients et investisseurs."
  }
];

const partners = ["Monolithe", "BatiNova", "Atelier 3G", "Link Travaux", "Horizon Bois", "Quartus Local"];

const contactInfo = [
  { label: "Email", value: "contact@atelier-berengier.fr", icon: "✉" },
  { label: "Téléphone", value: "06 71 23 45 89", icon: "☎" },
  { label: "Disponibilités", value: "Lundi - Vendredi · 8h / 19h", icon: "⌛" },
  { label: "Localisation", value: "Lyon · Interventions France entière", icon: "📍" }
];

const reels = [
  {
    title: "Rendu 3D · Programme tertiaire",
    src: "/assets/videos/vd11.mp4",
    description: "Organisation de plateaux bureaux, circulation optimisée et matériaux premium."
  },
  {
    title: "Rendu 3D · Réhabilitation patrimoniale",
    src: "/assets/videos/vd222.mp4",
    description: "Projection photo-réaliste pour convaincre sur un projet de réhabilitation lourde."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      <section id="services" className="mx-auto max-w-6xl px-6 scroll-mt-24">
        <div className="rounded-3xl border border-accent/40 bg-accent/10 px-6 py-16 shadow-lg shadow-accent/20 sm:px-10">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">Services & tarifs</p>
            <h2 className="text-3xl font-semibold text-slate-900">Des prestations pensées pour vos chantiers</h2>
            <p className="text-base text-slate-700">
              Transparence totale : vous maîtrisez vos coûts tout en gagnant en qualité et en réactivité.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="renders" className="bg-gradient-to-b from-accent/15 via-white to-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Mes derniers rendus 3D
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">Valorisez vos projets par l’image</h2>
            <p className="text-base text-slate-600">
              Des visuels percutants pour sécuriser vos clients, investisseurs et partenaires.
            </p>
          </div>
          <div className="mt-10">
            <Carousel />
          </div>
        </div>
      </section>

      <section id="references" className="mx-auto max-w-6xl px-6 scroll-mt-24">
        <div className="rounded-3xl border border-accent/40 bg-white px-6 py-10 text-center shadow-lg shadow-accent/20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
            Des entreprises qui me font confiance
          </p>
          <div className="mt-8 grid gap-4 text-sm font-semibold uppercase tracking-wide text-slate-600 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-full border border-accent/40 bg-accent/10 px-4 py-3 text-center"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-16 h-full overflow-y-auto">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Réels & présentations</p>
            <h2 className="text-3xl font-semibold text-slate-900">Visualisez les projets en format immersif</h2>
            <p className="text-base text-slate-600">
              Deux formats courts pour faire ressentir le rendu final dans vos présentations clients ou sur vos réseaux.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {reels.map((reel) => (
              <ReelCard key={reel.title} title={reel.title} description={reel.description} src={reel.src} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[32px] border border-accent/40 bg-gradient-to-br from-white via-accent/15 to-white p-8 shadow-[0_45px_120px_-50px_rgba(0,0,0,0.6)] lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contactez-moi</p>
                <h2 className="text-3xl font-semibold text-slate-900">Un interlocuteur unique et disponible</h2>
                <p className="text-base text-slate-700">
                  Un besoin précis, un délai serré, ou simplement une charge de production à déléguer ? Je suis disponible
                  pour échanger rapidement sur vos besoins techniques — plans, rendus, modélisations.
                </p>
                <div className="rounded-3xl border border-white bg-white/70 p-8 text-center shadow-xl shadow-accent/40 backdrop-blur">
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src="/assets/logo/noir_sf.png"
                      alt="Bérengier Architecture"
                      width={180}
                      height={50}
                      className="h-auto w-40"
                    />

                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2">Plans techniques</span>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2">Rendus photoréalistes</span>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2">Soutien chantier</span>
                </div>
              </div>
              <div className="grid gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-accent/30 bg-white/90 p-5 shadow-sm shadow-accent/40 backdrop-blur"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/30 text-lg text-slate-800">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                      <p className="text-base font-semibold text-slate-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 scroll-mt-24">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">À propos</p>
            <h2 className="text-3xl font-semibold text-slate-900">Derrière chaque plan, un regard de terrain</h2>
            <p>
              Diplômé de l’institut CREAD à Lyon, j’ai grandi dans une famille d’entrepreneur du bâtiment. Les chantiers,
              je les connais de l’intérieur, plans à la main comme mains dans le ciment.
            </p>
            <p>
              Depuis 5 ans, je me suis lancé à mon compte comme architecte d’intérieur. J’accompagne les entreprises du
              bâtiment dans leurs projets, en apportant un regard technique, des outils clairs et des rendus de qualité.
            </p>
            <p>
              Rénover, réagencer, valoriser l’existant : pour moi, ce n’est pas juste un métier, c’est une passion.
              Trouver des solutions concrètes, efficaces et bien pensées, c’est ce qui m’anime chaque jour.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-full border border-slate-200 bg-slate-100 p-3 shadow-xl shadow-slate-900/5">
              <div className="absolute inset-0 rounded-full border border-white/40" />
              <Image
                src="/assets/DukeDSC_4803.jpg"
                alt="Portrait de Bérengier"
                fill
                className="rounded-full object-cover"
                sizes="400px"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
