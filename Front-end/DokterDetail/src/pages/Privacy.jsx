import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Wie zijn wij?",
    content: `DokterDetail is een professionele autodetailing service gevestigd in de regio Noord-Holland. Wij verwerken persoonsgegevens uitsluitend in het kader van onze dienstverlening.

Contactgegevens:
Bedrijfsnaam: DokterDetail
E-mail: info@dokterdetail.com
Telefoon: +31 06 12 34 56 78
Werkgebied: Beverwijk en omgeving`,
  },
  {
    title: "2. Welke gegevens verzamelen wij?",
    content: `Wij verzamelen uitsluitend gegevens die u zelf aan ons verstrekt via ons contactformulier of afspraakaanvraag:

• Naam (voornaam en achternaam)
• E-mailadres
• Telefoonnummer
• Voertuiggegevens (merk, model, bouwjaar)
• Gewenste behandeling en locatievoorkeur
• Aanvullende toelichting die u zelf invult`,
  },
  {
    title: "3. Waarvoor gebruiken wij uw gegevens?",
    content: `Wij gebruiken uw persoonsgegevens voor de volgende doeleinden:

• Het verwerken en beantwoorden van uw afspraakaanvraag
• Het opstellen van een behandelvoorstel op maat
• Het plannen en bevestigen van afspraken
• Het opnemen van contact voor nadere afstemming

Wij gebruiken uw gegevens niet voor commerciële mailings of profilering, tenzij u daar expliciet toestemming voor geeft.`,
  },
  {
    title: "4. Grondslag voor verwerking",
    content: `Wij verwerken uw persoonsgegevens op basis van:

• Uitvoering van een overeenkomst: wanneer u een afspraak aanvraagt, verwerken wij uw gegevens om die aanvraag te kunnen behandelen.
• Gerechtvaardigd belang: voor het beantwoorden van vragen en het bieden van klantenservice.
• Toestemming: wanneer u zich aanmeldt voor eventuele nieuwsbrieven of updates.`,
  },
  {
    title: "5. Hoe lang bewaren wij uw gegevens?",
    content: `Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor zij zijn verzameld:

• Afspraakaanvragen: maximaal 12 maanden na de laatste interactie.
• Klantgegevens na behandeling: maximaal 2 jaar voor administratieve doeleinden.
• Na afloop van de bewaartermijn worden gegevens veilig verwijderd.`,
  },
  {
    title: "6. Delen wij uw gegevens?",
    content: `Wij verkopen uw gegevens nooit aan derden. Wij kunnen uw gegevens delen met:

• Verwerkers die ons ondersteunen bij de dienstverlening (bijv. e-mailproviders), onder strikte verwerkersovereenkomsten.
• Overheidsinstanties, uitsluitend indien wettelijk verplicht.

Alle partijen waarmee wij samenwerken zijn gebonden aan dezelfde privacynormen als wij.`,
  },
  {
    title: "7. Beveiliging",
    content: `Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen tegen ongeautoriseerde toegang, verlies of misbruik. Dit omvat onder meer het gebruik van beveiligde verbindingen (HTTPS) voor gegevensoverdracht.`,
  },
  {
    title: "8. Uw rechten",
    content: `Op grond van de AVG heeft u de volgende rechten:

• Inzagerecht: u kunt opvragen welke gegevens wij van u hebben.
• Correctierecht: u kunt onjuiste gegevens laten corrigeren.
• Verwijderingsrecht: u kunt verzoeken uw gegevens te laten verwijderen.
• Bezwaarrecht: u kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.
• Recht op gegevensoverdraagbaarheid: u kunt uw gegevens in een gangbaar formaat opvragen.

Voor het uitoefenen van uw rechten kunt u contact opnemen via info@dokterdetail.com. Wij reageren binnen 30 dagen.`,
  },
  {
    title: "9. Klachten",
    content: `Indien u een klacht heeft over de verwerking van uw persoonsgegevens, kunt u contact met ons opnemen. U heeft ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens via www.autoriteitpersoonsgegevens.nl.`,
  },
  {
    title: "10. Wijzigingen",
    content: `Wij behouden het recht dit privacybeleid te wijzigen. De meest actuele versie is altijd beschikbaar op deze pagina. Bij ingrijpende wijzigingen informeren wij u via e-mail indien wij uw contactgegevens hebben.

Laatste update: mei 2026`,
  },
];

export default function Privacybeleid() {
  return (
    <div className="flex flex-col bg-white text-gray-900">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-6 pb-16 pt-28 lg:px-8 lg:pt-36">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
              Juridisch
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Privacybeleid
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500">
              DokterDetail hecht veel waarde aan de bescherming van uw
              persoonsgegevens. In dit privacybeleid leggen wij uit welke
              gegevens wij verzamelen, waarom en hoe wij daarmee omgaan.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Van toepassing in overeenstemming met de Algemene Verordening
              Gegevensbescherming (AVG / GDPR).
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-lg font-bold text-gray-900">
                  {section.title}
                </h2>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-8">
            <Link
              to="/voorwaarden"
              className="text-sm font-medium text-teal-700 underline-offset-4 hover:underline"
            >
              Algemene Voorwaarden →
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-teal-700 underline-offset-4 hover:underline"
            >
              Contact opnemen →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}