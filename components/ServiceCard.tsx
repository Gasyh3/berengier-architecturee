type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-accent/50 bg-white p-6 shadow-lg shadow-accent/20 transition hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <span className="inline-flex items-center rounded-full bg-accent/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800">
          Expertise
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm text-slate-700">{description}</p>
      </div>
    </div>
  );
}
