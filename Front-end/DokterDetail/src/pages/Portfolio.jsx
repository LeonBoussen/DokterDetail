import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const featuredProjects = [
  {
    tag: 'Dokter Quality',
    title: 'Surgical Detail',
    description:
      'Ons meest uitgebreide en prestigieuze pakket. Met chirurgische precisie corrigeren wij onvolkomenheden in de lak en beschermen wij uw voertuig voor de lange termijn.',
    metrics: ['Paint correction', 'Ceramic coating', 'LED eindcontrole'],
    image: 'https://picsum.photos/seed/surgical-detail-treatment/1200/900',
    accent: true,
  },
  {
    tag: 'Meest gekozen',
    title: 'Premium Detail',
    description:
      'Een complete behandeling voor uw voertuig. Van diepe lakdecontaminatie tot interieur stoomreiniging, perfect voor periodieke dieptereiniging en lakonderhoud.',
    metrics: ['Clay bar', 'Stoomreiniging', 'Glansverbetering'],
    image: 'https://picsum.photos/seed/premium-detail-treatment/1200/900',
    accent: false,
  },
  {
    tag: 'Instappakket',
    title: 'Regulier Detail',
    description:
      'Ons instappakket voor een grondige reiniging van uw voertuig, ideaal voor regulier onderhoud, een frisse uitstraling en verzorgd dagelijks gebruik.',
    metrics: ['Handwas', 'Interieurreiniging', 'Op locatie mogelijk'],
    image: 'https://picsum.photos/seed/regulier-detail-treatment/1200/900',
    accent: false,
  },
];

const projectArchive = [
  {
    year: 'Service',
    name: 'Lakcorrectie',
    category: 'Exterieur',
    summary:
      'Meerfasige correctie voor het verwijderen van swirls, waskrassen en zichtbare imperfecties in de lak.',
  },
  {
    year: 'Service',
    name: 'Ceramic Coating',
    category: 'Bescherming',
    summary:
      'Duurzame bescherming voor lak, met langdurige glans en eenvoudiger onderhoud bij correct nazorggebruik.',
  },
  {
    year: 'Service',
    name: 'Interieur Deep Clean',
    category: 'Interieur',
    summary:
      'Diepgaande reiniging van stoelen, tapijt, dorpels en moeilijk bereikbare zones voor een fris en verzorgd interieur.',
  },
  {
    year: 'Service',
    name: 'Pickup & Deliver',
    category: 'Gemak',
    summary:
      'Een aanvullende service waarbij uw voertuig op afspraak wordt opgehaald en na behandeling weer wordt teruggebracht.',
  },
];

const capabilities = [
  {
    icon: '✦',
    title: 'Klinische aanpak',
    description:
      'Wij benaderen detailing als een behandelproces: eerst inspecteren, dan diagnosticeren, daarna gericht corrigeren en beschermen.',
  },
  {
    icon: '▣',
    title: 'Premium producten',
    description:
      'Voor onze premium behandelingen werken wij exclusief met hoogwaardige en gecertificeerde producten voor lak, leder en bescherming.',
  },
  {
    icon: '◌',
    title: 'Één auto tegelijk',
    description:
      'Wij nemen slechts één voertuig per keer in behandeling, zodat iedere stap met volledige focus en compromisloze aandacht wordt uitgevoerd.',
  },
];

const testimonials = [
  {
    quote:
      'Mijn auto zag er na de behandeling weer uit alsof hij net uit de showroom kwam. De glans, afwerking en aandacht voor detail waren direct zichtbaar.',
    name: 'Placeholder Klant',
    role: 'Premium Detail behandeling',
  },
  {
    quote:
      'Wat vooral opviel was de precisie. Niet gewoon schoonmaken, maar echt corrigeren, herstellen en beschermen met zichtbaar resultaat.',
    name: 'Placeholder Klant',
    role: 'Surgical Detail behandeling',
  },
];

const faqs = [
  {
    question: 'Welke behandelingen worden in dit portfolio uitgelicht?',
    answer:
      'Deze portfolio-opzet laat de belangrijkste behandelingen zien: Regulier Detail, Premium Detail, Surgical Detail en aanvullende services zoals coating en pickup & deliver.',
  },
  {
    question: 'Kan iedere behandeling later een eigen detailpagina krijgen?',
    answer:
      'Ja. Elke behandeling kan worden uitgebreid met een eigen pagina voor werkwijze, inbegrepen onderdelen, voor-en-na resultaten en prijsinformatie.',
  },
  {
    question: 'Is deze inhoud al definitief?',
    answer:
      'Nog niet. De structuur is inhoudelijk afgestemd op DokterDetail, maar kan later worden verfijnd met echte foto’s, cases, reviews en behandelingsresultaten.',
  },
  {
    question: 'Kan deze pagina echte aanvragen ondersteunen?',
    answer:
      'Ja. De consultatie-sectie kan direct worden gekoppeld aan een formulierflow voor lakinspecties, intakegesprekken en behandelverzoeken.',
  },
];

export default function Portfolio() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [form, setForm] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    voertuig: '',
    aanvraag: '',
  });

  const filters = ['All', 'Exterieur', 'Bescherming', 'Interieur', 'Gemak'];

  const filteredArchive = useMemo(() => {
    if (activeFilter === 'All') return projectArchive;
    return projectArchive.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Aanvraag verstuurd!');
  };

  return (
    <div className="flex flex-col bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-12 px-6 py-20 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">
            Portfolio / Behandelingen &amp; Resultaten
          </p>
          <h1 className="text-4xl/tight font-bold tracking-tight text-gray-900 md:text-5xl/tight lg:text-6xl/tight">
            Van diagnose tot perfect resultaat, detailing met chirurgische precisie.
          </h1>
          <p className="max-w-xl text-sm/relaxed text-gray-500 md:text-base/relaxed">
            Deze pagina presenteert de behandelingen, kwaliteitsstandaard en zichtbare resultaten van DokterDetail.
            Van regulier onderhoud tot volledige lakcorrectie en duurzame bescherming: iedere service is opgebouwd
            rond precisie, focus en een showroomwaardige afwerking.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/afspraken"
              className="inline-flex items-center gap-2 rounded bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
            >
              Boek een consultatie →
            </Link>
            <a
              href="#werkwijze"
              className="inline-flex items-center gap-2 rounded border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-teal-700 hover:text-teal-700"
            >
              Bekijk onze werkwijze
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
            <img
              src="/assets/placeholders/Dokter_car_inspect.png"
              alt="DokterDetail behandeling"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              Onze Behandelingen
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Uitgelichte services
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Een overzicht van onze belangrijkste behandelingen, samengesteld voor voertuigen die vragen om onderhoud,
              correctie, bescherming en een zichtbare kwaliteitsupgrade.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className={[
                  'group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-200',
                  project.accent
                    ? 'border-teal-200 bg-teal-50/60 shadow-lg hover:-translate-y-1 hover:shadow-xl'
                    : 'border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md',
                ].join(' ')}>
                <img
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700 ring-1 ring-teal-100">
                      {project.tag}
                    </span>
                    {project.accent && (
                      <span className="flex items-center gap-1 text-xs font-medium text-teal-700">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-600" />
                        Uitgelicht
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-snug text-gray-900">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{project.description}</p>
                  </div>
                  <ul className="flex flex-1 flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                        {metric}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/afspraken"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800">
                    Meer Informatie →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="werkwijze" className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Onze Werkwijze
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Iedere behandeling begint met inspectie en eindigt met controle.
          </h2>
          <p className="max-w-md text-sm/relaxed text-gray-500">
            Wij behandelen detailing niet als een standaard wasbeurt, maar als een zorgvuldig opgebouwd traject:
            intake, diagnose, behandeling, bescherming en eindcontrole.
          </p>
          <div className="space-y-3">
            {[
              'Inspectie van lak, interieur en algemene voertuigstaat voor de juiste behandelkeuze.',
              'Gerichte uitvoering met focus op correctie, reiniging en duurzame bescherming.',
              'Afronding met kwaliteitscontrole en heldere oplevering van het eindresultaat.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Behandelstructuur</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-4">
              {['Intake', 'Diagnose', 'Behandeling', 'Eindcontrole'].map((step, index) => (
                <div key={step} className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">0{index + 1}</p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Werkproces</p>
            <img
              src="https://picsum.photos/seed/portfolio-process-1/900/700"
              alt="Inspectie en behandeling"
              width={900}
              height={700}
              loading="lazy"
              className="mt-4 aspect-4/3 w-full rounded-xl object-cover"
            />
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Eindresultaat</p>
            <img
              src="https://picsum.photos/seed/portfolio-process-2/900/700"
              alt="Afwerking en resultaat"
              width={900}
              height={700}
              loading="lazy"
              className="mt-4 aspect-4/3 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Aanvullende Services
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Meer dan alleen een detailbeurt
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Naast onze hoofdbehandelingen bieden wij aanvullende services voor correctie, bescherming,
                interieurverzorging en extra gemak rondom de afspraak.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={[
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    activeFilter === filter
                      ? 'bg-teal-700 text-white'
                      : 'border border-gray-200 bg-white text-gray-600 hover:border-teal-700 hover:text-teal-700',
                  ].join(' ')}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-[88px_1fr] border-b border-gray-200 bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-gray-400 md:grid-cols-[120px_1.2fr_1fr_1.6fr]">
              <span>Type</span>
              <span>Service</span>
              <span className="hidden md:block">Categorie</span>
              <span className="hidden md:block">Omschrijving</span>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredArchive.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[88px_1fr] gap-4 px-6 py-5 text-sm text-gray-600 transition-colors hover:bg-gray-50 md:grid-cols-[120px_1.2fr_1fr_1.6fr]"
                >
                  <span className="font-medium text-gray-400">{item.year}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="mt-1 text-xs text-gray-400 md:hidden">{item.category}</p>
                    <p className="mt-2 text-sm text-gray-500 md:hidden">{item.summary}</p>
                  </div>
                  <span className="hidden md:block">{item.category}</span>
                  <span className="hidden md:block">{item.summary}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="text-3xl text-teal-700">{item.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              Klantervaring
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Vertrouwen opgebouwd door zichtbaar resultaat
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.name + item.role}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <p className="text-base leading-relaxed text-gray-700">“{item.quote}”</p>
                <footer className="mt-6">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-16 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Informatie
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde vragen</h2>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-6">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left text-sm font-medium text-gray-800 transition-colors hover:text-teal-700"
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-lg leading-none">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="mt-3 text-sm/relaxed text-gray-500">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Vraag een consultatie aan</h3>
            <p className="mt-2 text-sm text-gray-500">
              Gebruik dit formulier voor een vrijblijvende aanvraag, lakinspectie of intakegesprek.
              Zo kunnen wij bepalen welke behandeling het beste past bij uw voertuig.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: 'voornaam', label: 'Voornaam', placeholder: 'John' },
                { name: 'achternaam', label: 'Achternaam', placeholder: 'Doe' },
              ].map(({ name, label, placeholder }) => (
                <div key={name} className="space-y-1">
                  <label className="text-xs font-medium text-gray-500">{label}</label>
                  <input
                    name={name}
                    type="text"
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500">E-mailadres</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500">
                Voertuiggegevens (merk / model / bouwjaar)
              </label>
              <input
                name="voertuig"
                value={form.voertuig}
                onChange={handleChange}
                placeholder="BMW 3 Serie 2022"
                className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500">Gewenste behandeling of vraag</label>
              <textarea
                name="aanvraag"
                value={form.aanvraag}
                onChange={handleChange}
                placeholder="Bijvoorbeeld: Premium Detail, ceramic coating, lakcorrectie of pickup & deliver."
                rows={5}
                className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-teal-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
            >
              Consultatie aanvragen
            </button>
            <p className="text-center text-xs text-gray-400">
              Wij nemen binnen één werkdag contact met u op.{' '}
              <Link to="/privacy" className="underline transition-colors hover:text-teal-700">
                Privacyverklaring
              </Link>
              .
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}