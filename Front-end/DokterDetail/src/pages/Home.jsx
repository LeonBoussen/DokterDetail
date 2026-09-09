// src/pages/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Stethoscope, Crown, Car } from 'lucide-react';

const treatments = [
  {
    tag: null,
    title: 'Regulier Detail',
    description:
      'Ons instappakket voor een grondige reiniging van uw voertuig bij u op locatie of maak gebruik van onze pickup&deliver service. Ideaal voor regulier onderhoud en een frisse uitstraling.',
    features: [
      'Handwas exterieur met pH-neutraal shampoo',
      'Velgen en bandenreiniging inclusief tire dressing',
      'Interieur stofzuigen en dashboardreiniging',
      'Ramen reinigen binnen en buiten',
      'Geurbehanding met enzymatische spray',
    ],
    priceLabel: 'Vanaf',
    price: '€ 75',
    highlight: false,
  },
  {
    tag: null,
    title: 'Premium Detail',
    description:
      'Een complete behandeling voor uw voertuig. Van diepe lakdecontaminatie tot interieur stoomreiniging. Perfect voor een periodieke dieptereiniging en lakonderhoud.',
    features: [
      'Alles uit het Regulier pakket',
      'Chemische decontaminatie (ijzer- en teerverwijdering)',
      'Clay bar behandeling voor gladde lak',
      'Enkelvoudige machine polish (glansverbetering)',
      'Interieur stoomreiniging (stoelen, tapijt, dorpels)',
      'Lederreiniging en conditionering',
    ],
    priceLabel: 'Vanaf',
    price: '€ 199',
    highlight: true,
  },
  {
    tag: 'Dokter Quality',
    title: 'Surgical Detail',
    description:
      'Ons meest uitgebreide en prestigieuze pakket. Met chirurgische precisie corrigeren wij elke onvolkomenheid in de lak en beschermen wij uw voertuig voor de lange termijn.',
    features: [
      'Alles uit het Premium pakket',
      'Meerfasige machine paint correction (krassen/swirlmarks)',
      'Ceramic coating applicatie (2–5 jaar bescherming)',
      'Motorruminiging en detailing',
      'Interieur deep clean inclusief headliner en goten',
      'Sealant op alle ramen en velgen',
      'Eindcontrole onder LED-inspectielamp',
    ],
    priceLabel: 'Vanaf',
    price: '€ 449',
    highlight: false,
  },
];

const whyItems = [
  {
    icon: Stethoscope,
    title: 'Klinische pro',
    description:
      'wij voorzien de beste kwaliteit voor de beste prijs',
  },
  {
    icon: Crown,
    title: 'Premium line',
    description:
      'Voor onze premium pakketen werken we exclusief met gecertificeerde en hoogwaardige merken.',
  },
  {
    icon: Car,
    title: 'Ongelimiteerde Aandacht',
    description:
      'Wij nemen slechts één voertuig per keer in behandeling om compromisloze focus en kwaliteit te garanderen.',
  },
];

const faqs = [
  {
    question: 'Hoelang duurt een Surgical Detail?',
    answer:
      'Een volledige Surgical Detail neemt doorgaans 2 tot 3 dagen in beslag, afhankelijk van de staat van de lak en de gewenste coating.',
  },
  {
    question: 'Komen jullie op locatie?',
    answer:
      'Standaard wasbeurten alleen in, Heemskserk, Beverwijk, Uitgeest, Castricum en Velsen-Noord.',
  },
  {
    question: 'Wat is jullie Pickup&Deliver service?',
    answer:
      'Voor een extra fee laten we één van onze agents langs komen om Uw voertuig op te halen wanneer het jouw goed uit komt. Wanneer de auto de gehele beurt heeft gehad kan er een datum en tijd afgesproken worden en dan komt de agent de auto weer terug brengen'
  },
  {
    question: 'Wat is de garantie op keramische coatings?',
    answer:
      'Afhankelijk van het gekozen product bieden wij een garantie van 3 tot 7 jaar, mits correct onderhoud.',
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [form, setForm] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    voertuig: '',
  });

  const handleSliderMove = (clientX) => {
    const container = document.querySelector('.slider-container');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleSliderMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend / EmailJS / Formspree
    alert('Aanvraag verstuurd!');
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="mx-auto w-full max-w-6xl px-6 py-20 flex flex-col-reverse gap-12 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl/tight font-bold tracking-tight text-gray-900 md:text-5xl/tight">
            Uw Auto. Onze Diagnose.<br />
            Perfect Resultaat!
          </h1>
          <p className="max-w-sm text-sm/relaxed text-gray-500">
            Professionele detailing met chirurgische precisie. Wij diagnosticeren elk imperfectie en behandelen het tot op het bot. Zodat uw wagen eruitziet als nieuw uit de showroom.
          </p>
          <Link
            to="/afspraak"
            className="inline-flex items-center gap-2 rounded bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            Boek een Consultatie →
          </Link>
        </div>
        <div className="flex-1">
          <img
            src="https://imgs.search.brave.com/p4FIovq56RJ_yyKJ8Hu7vODj7gzq9yUXH_w3O8tTNW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/NzE5MTI5Ny9waG90/by9jYXItd2l0aC1v/cHRpY3MtaW4tZm9h/bS1hdC10aGUtY2Fy/LXdhc2gtaW4tdGhl/LWdhcmFnZS1jYXIt/Y2FyZS1hbmQtY2Fy/LXdhc2gtaW4tdGhl/LWRldGFpbGluZy53/ZWJwP2E9MSZiPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9alNi/SmN1dU5KMHFoeWtk/eWE5ejlUTE9wdkVu/VGNUald0dWVjQ1NM/Q29IRT0"
            alt="Voorbeeld foto"
            width={612}
            height={408}
            loading="lazy"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-12">

          {/* Header */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              Onze Expertise
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Klinische Behandelingen
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Elk voertuig krijgt een op maat samengesteld behandelplan. Van
              regulier reinigen tot lakbescherming.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {treatments.map((t) => (
              <div
                key={t.title}
                className={[
                  'group relative rounded-2xl border p-8 flex flex-col gap-6 transition-all duration-200',
                  t.highlight
                    ? 'border-teal-200 bg-teal-50/60 shadow-lg hover:shadow-xl'
                    : 'border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5',
                ].join(' ')}
              >
                {/* Tag + "Aanbevolen" badge */}
                <div className="flex items-center justify-between">
                  {t.tag ? (
                    <span className="inline-block rounded-full bg-teal-700 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-white">
                      {t.tag}
                    </span>
                  ) : (
                    <span />
                  )}
                  {t.highlight && (
                    <span className="text-xs font-medium text-teal-700 flex items-center gap-1">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-600" />
                      Meest gekozen
                    </span>
                  )}
                </div>

                {/* Title + description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {t.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {t.description}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-2.5 flex-1">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-[10px] font-bold">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Price + CTA */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                      {t.priceLabel}
                    </p>
                    <p className="text-3xl font-extrabold tracking-tight text-gray-900">
                      {t.price}
                    </p>
                  </div>
                  <button
                    className={[
                      'shrink-0 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-150',
                      t.highlight
                        ? 'bg-teal-700 text-white hover:bg-teal-800'
                        : 'border border-teal-700 text-teal-700 hover:bg-teal-50',
                    ].join(' ')}
                  >
                    Behandeling boeken →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Before/After Slider Section */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 flex flex-col gap-12 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Het Resultaat
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Zichtbaar Superieur</h2>
          <p className="max-w-sm text-sm/relaxed text-gray-500">
            Onze Surgical Detail verwijdert jaren van waskrassen, hologrammen en oxidatie.
            Sleep de balk om het verschil te zien tussen een verwaarloosde lak en onze
            spiegelgladde correctie.
          </p>
        </div>

        {/* Before/After Slider */}
        <div
          className="flex-1 relative overflow-hidden rounded-xl select-none cursor-col-resize slider-container"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
            {/* After Image (onderlaag) */}
            <img
              src="/assets/placeholders/Dokter_car_inspect.png"
              alt="Na behandeling"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Before Image (bovenlaag) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/assets/placeholders/Dokter_results.png"
                alt="Voor behandeling"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
              />
            </div>
            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
            {/* Labels */}
            <span className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
              Voor
            </span>
            <span className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
              Na
            </span>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-12 text-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Waarom DokterDetail?</h2>
            <p className="mt-2 text-sm text-gray-500">
              Wij benaderen car detailing niet als schoonmaak, maar als een restauratieproces
              met wetenschappelijke precisie.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-6 py-20 grid gap-16 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Informatie
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Veelgestelde Vragen</h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-800 transition-colors hover:text-teal-700"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 text-lg leading-none">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
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
              <label className="text-xs font-medium text-gray-500">
                Gewenste behandeling of vraag
              </label>
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
      <Footer />
    </div>
  );
}