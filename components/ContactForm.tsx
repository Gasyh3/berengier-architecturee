export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Nom
          </label>
          <input
            id="name"
            type="text"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Votre nom"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-700">
            Entreprise
          </label>
          <input
            id="company"
            type="text"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Nom de l'entreprise"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="vous@entreprise.fr"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="+33 6 00 00 00 00"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="text-sm font-medium text-slate-700">
          Type de besoin
        </label>
        <select
          id="type"
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          <option>Plans</option>
          <option>Rendus 3D</option>
          <option>Modélisation complète</option>
          <option>Autre</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          className="min-h-[140px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Décrivez votre besoin..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-dark"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}
