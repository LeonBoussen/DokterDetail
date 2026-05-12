import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Car,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    icon: CalendarDays,
    title: "Plan uw moment",
    description:
      "Kies een gewenste datum en vertel ons welk type behandeling u zoekt.",
  },
  {
    icon: Car,
    title: "Voertuig intake",
    description:
      "Wij beoordelen voertuigtype, staat van de lak en eventuele specifieke aandachtspunten.",
  },
  {
    icon: ShieldCheck,
    title: "Bevestiging op maat",
    description:
      "U ontvangt een voorstel met behandeling, tijdsindicatie en praktische details.",
  },
];

const appointmentTypes = [
  {
    icon: Sparkles,
    title: "Regulier Detail",
    duration: "1 dagdeel",
    description:
      "Voor periodiek onderhoud, een frisse uitstraling en een verzorgde basisbehandeling.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Detail",
    duration: "1 volledige dag",
    description:
      "Voor dieptereiniging, lakdecontaminatie en een merkbaar hoger afwerkingsniveau.",
  },
  {
    icon: Car,
    title: "Surgical Detail",
    duration: "2 tot 3 dagen",
    description:
      "Voor intensieve correctie, coatingtrajecten en maximale cosmetische restauratie.",
  },
];

const faqItems = [
  {
    question: "Is mijn afspraak direct definitief?",
    answer:
      "Nee, na uw aanvraag nemen wij contact op om de details te bevestigen. De afspraak wordt pas definitief na onze bevestiging.",
  },
  {
    question: "Kan ik een voorkeursdatum doorgeven?",
    answer:
      "Ja, u kunt in het formulier een gewenste datum en tijdvak invullen. Wij proberen daar zoveel mogelijk rekening mee te houden.",
  },
  {
    question: "Wat als mijn voertuig extra aandacht nodig heeft?",
    answer:
      "Bij voertuigen met zwaardere vervuiling, lakschade of specifieke wensen stellen wij mogelijk een aangepast behandelvoorstel op.",
  },
];

export default function Afspraak() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    telefoon: "",
    voertuig: "",
    behandeling: "",
    datum: "",
    locatie: "",
    bericht: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Afspraakaanvraag verstuurd!");
  };

  return (
    <div className="flex flex-col bg-white text-gray-900">
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section id="" className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              {/* Left */}
              <div>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
                  <CalendarDays className="h-4 w-4" />
                  Afspraak
                </span>
                <h1 className="max-w-4xl font-serif text-5xl leading-none tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                  Boek een behandeling met chirurgische precisie.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                  Plan eenvoudig uw afspraak voor detailing, lakcorrectie of
                  bescherming. Wij stemmen elk traject af op uw voertuig, wensen
                  en beschikbare planning.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#afspraak-form"
                    className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                  >
                    Plan uw afspraak
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-teal-700 hover:text-teal-700"
                  >
                    Neem eerst contact op
                  </Link>
                </div>
              </div>

              {/* Right – How it works card */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-teal-700">
                  Hoe het werkt
                </p>
                <div className="mt-6 space-y-4">
                  {steps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.title}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="rounded-xl border border-teal-100 bg-teal-50 p-3 text-teal-700">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Behandelingen ── */}
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.28em] text-teal-700">
                Behandelingen
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Kies het traject dat past bij uw voertuig.
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-500">
                Elke afspraak start met een intake en inschatting. Onderstaande
                behandelingen geven een indicatie van scope en tijdsduur.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {appointmentTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="rounded-xl border border-teal-100 bg-teal-50 p-3 text-teal-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Formulier ── */}
        <section id="afspraak-form" className="border-b border-gray-200">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            {/* Left – info */}
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-teal-700">
                Aanvraag
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Vraag uw afspraak aan.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-gray-500">
                Vul uw gegevens in en geef uw voorkeuren door. Wij nemen contact
                op om de behandeling, planning en eventuele aanvullende details
                af te stemmen.
              </p>

              <div className="mt-10 space-y-4">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Clock3 className="mt-0.5 h-5 w-5 text-teal-700" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Reactie binnen korte termijn
                      </p>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Wij beoordelen elke aanvraag handmatig voor een passende
                        planning en correcte inschatting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 text-teal-700" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Op locatie of pickup &amp; deliver
                      </p>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Afhankelijk van behandeling, regio en beschikbaarheid
                        kijken wij naar de meest geschikte uitvoering.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-teal-100 bg-teal-50 p-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-teal-700" />
                    <span className="text-sm font-bold text-teal-900">
                      Dokter Detail Kwaliteitsgarantie
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-teal-700">
                    Elke aanvraag wordt handmatig beoordeeld door onze
                    specialisten om de hoogste standaard te waarborgen.
                  </p>
                </div>
              </div>
            </div>

            {/* Right – form */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-gray-900">
                Afspraakaanvraag
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Vul uw gegevens in en geef uw voorkeuren door voor een
                vrijblijvend behandelvoorstel.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Naam */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "voornaam", label: "Voornaam", placeholder: "John" },
                    { name: "achternaam", label: "Achternaam", placeholder: "Doe" },
                  ].map(({ name, label, placeholder }) => (
                    <div key={name} className="space-y-1">
                      <label className="text-xs font-medium text-gray-500">
                        {label}
                      </label>
                      <input
                        type="text"
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
                      />
                    </div>
                  ))}
                </div>

                {/* E-mail & Telefoon */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      name="telefoon"
                      value={form.telefoon}
                      onChange={handleChange}
                      placeholder="+31 6 12345678"
                      className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                {/* Voertuig & Datum */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">
                      Voertuig
                    </label>
                    <input
                      type="text"
                      name="voertuig"
                      value={form.voertuig}
                      onChange={handleChange}
                      placeholder="Bijv. BMW 3 Serie"
                      className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-500">
                      Gewenste datum
                    </label>
                    <input
                      type="date"
                      name="datum"
                      value={form.datum}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                {/* Behandeling */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-500">
                    Behandeling
                  </label>
                  <div className="relative">
                    <select
                      name="behandeling"
                      value={form.behandeling}
                      onChange={handleChange}
                      className="w-full appearance-none rounded border border-gray-200 bg-white px-3 py-2 pr-10 text-sm text-gray-900 outline-none transition focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="">Kies een behandeling</option>
                      <option value="regulier">Regulier Detail</option>
                      <option value="premium">Premium Detail</option>
                      <option value="surgical">Surgical Detail</option>
                      <option value="advies">Eerst advies / intake</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Locatie */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-500">
                    Locatie of voorkeur
                  </label>
                  <input
                    type="text"
                    name="locatie"
                    value={form.locatie}
                    onChange={handleChange}
                    placeholder="Bijv. Beverwijk, pickup & deliver"
                    className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                {/* Toelichting */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-500">
                    Extra toelichting
                  </label>
                  <textarea
                    name="bericht"
                    value={form.bericht}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Omschrijf de staat van het voertuig, specifieke wensen of bijzonderheden waar wij rekening mee moeten houden."
                    className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded bg-teal-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
                >
                  Verstuur afspraakaanvraag
                </button>

                <p className="text-center text-xs text-gray-400">
                  Wij nemen binnen één werkdag contact met u op.{" "}
                  <Link
                    to="/privacy"
                    className="underline transition-colors hover:text-teal-700"
                  >
                    Privacyverklaring
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left */}
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-teal-700">
                  Informatie
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                  Veelgestelde vragen over afspraken.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-gray-500">
                  Hieronder vindt u antwoorden op praktische vragen rond
                  planning, bevestiging en intake.
                </p>
              </div>

              {/* Right – accordion */}
              <div className="space-y-4">
                {faqItems.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={faq.question}
                      className="rounded-2xl border border-gray-200 bg-white shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-medium text-gray-800 transition-colors hover:text-teal-700"
                      >
                        <span>{faq.question}</span>
                        <span className="shrink-0 text-teal-700">
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-sm leading-7 text-gray-500">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}