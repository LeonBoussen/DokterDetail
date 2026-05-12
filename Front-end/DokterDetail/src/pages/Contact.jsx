import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  Car,
  ArrowRight,
  CheckCircle2,
  MessageCircle, // Toegevoegd voor WhatsApp
} from 'lucide-react';

const contactMethods = [
  {
    icon: PhoneCall,
    label: 'Telefoon',
    value: '+31 (0)6 12 34 56 78',
    detail: 'Voor directe afstemming over beschikbaarheid en planning.',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'info@dokterdetail.com',
    detail: 'Voor uitgebreide aanvragen en het meesturen van foto’s.',
  },
  {
    icon: MapPin,
    label: 'Werkgebied',
    value: 'Beverwijk & Regio',
    detail: 'Op locatie binnen het servicegebied of pickup & deliver.',
  },
  {
    icon: Clock3,
    label: 'Reactietijd',
    value: 'Binnen 24 uur',
    detail: 'Wij reageren doorgaans dezelfde dag op uw aanvraag.',
  },
];

const reasons = [
  'Persoonlijk behandeladvies op basis van uw voertuig.',
  'Inzicht in beschikbaarheid en pickup & deliver opties.',
  'Vrijblijvende prijsindicatie voor lakcorrectie en coatings.',
];

const serviceArea = [
  'Beverwijk',
  'Heemskerk',
  'Uitgeest',
  'Castricum',
  'Velsen-Noord',
  'Noord-Holland',
  'Omgeving op aanvraag',
];

const faqs = [
  {
    question: 'Hoe snel ontvangen wij een reactie op een aanvraag?',
    answer:
      'In de meeste gevallen reageren wij binnen 24 uur. Bij spoed of specifieke planning kunt u het beste direct telefonisch contact opnemen.',
  },
  {
    question: 'Is detailing op locatie altijd mogelijk?',
    answer:
      'Dat hangt af van de behandeling. Reguliere detailing kan vaak op locatie, terwijl intensieve lakcorrecties of coatings beter in onze gecontroleerde omgeving plaatsvinden via onze pickup service.',
  },
  {
    question: 'Welke informatie is handig om direct mee te sturen?',
    answer:
      'Vermeld bij voorkeur het merk, model, bouwjaar en de huidige staat van de lak. Foto’s van eventuele defecten helpen ons bij een nauwkeurige diagnose.',
  },
  {
    question: 'Kan ik ook eerst advies krijgen zonder direct te boeken?',
    answer:
      'Zeker. Onze intake is bedoeld om u te adviseren over de beste zorg voor uw auto, geheel vrijblijvend.',
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: '',
    voertuig: '',
    behandeling: '',
    aanvraag: '',
  });

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Aanvraag succesvol verzonden!');
  };

  return (
    <div className="flex flex-col bg-white text-gray-900">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                Contact & Intake
              </p>
              <h1 className="mt-4 text-4xl/tight font-bold tracking-tight text-gray-900 md:text-5xl/tight">
                Plan uw klinische <br />
                <span className="text-teal-700">diagnose in.</span>
              </h1>
              <p className="mt-6 max-w-md text-sm/relaxed text-gray-500">
                Bespreek uw voertuig en gewenste behandeling met ons team. 
                Wij garanderen een aanpak met chirurgische precisie.
              </p>
              
              {/* Snelcontact Knoppen */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+31612345678"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                >
                  <PhoneCall className="h-4 w-4 text-teal-700" />
                  Bel ons
                </a>
                <a
                  href="mailto:info@dokterdetail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
                >
                  <Mail className="h-4 w-4 text-teal-700" />
                  E-mail
                </a>
                <a
                  href="https://wa.me/31612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-teal-100 bg-teal-50 px-4 py-2.5 text-sm font-semibold text-teal-700 shadow-sm transition hover:bg-teal-100"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#formulier"
                  className="rounded bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  contact afspraak →
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 transition hover:shadow-md">
                    <Icon className="h-5 w-5 text-teal-700" />
                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-400">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">{item.value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="formulier" className="bg-gray-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Aanvraagformulier</h2>
                <p className="mt-4 text-sm text-gray-500">
                  Vul de details van uw voertuig in voor een vrijblijvende offerte en behandelplan.
                </p>

                <div className="mt-10 space-y-6">
                  {reasons.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      <p className="text-sm text-gray-700">{reason}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 rounded-2xl border border-teal-100 bg-teal-50/50 p-6">
                   <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-teal-700" />
                      <span className="text-sm font-bold text-teal-900">Dokter Detail Kwaliteitsgarantie</span>
                   </div>
                   <p className="mt-2 text-xs leading-relaxed text-teal-800/70">
                     Elke aanvraag wordt handmatig beoordeeld door onze specialisten om de hoogste standaard te waarborgen.
                   </p>
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
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold text-gray-900">Werkgebied & Service</h2>
                <p className="mt-4 text-sm text-gray-500">
                  Wij zijn actief in de regio Noord-Holland. Voor intensieve behandelingen maken wij gebruik van onze beveiligde <strong>Pickup & Deliver</strong> service.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {serviceArea.map((place) => (
                    <span key={place} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      <MapPin className="h-3 w-3 text-teal-700" />
                      {place}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Car className="h-10 w-10" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold text-gray-900">Veelgestelde Vragen</h2>
          <div className="mt-12 divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between text-left text-sm font-semibold text-gray-800 hover:text-teal-700"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}