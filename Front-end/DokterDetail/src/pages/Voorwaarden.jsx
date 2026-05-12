import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Definities",
    content: `In deze algemene voorwaarden wordt verstaan onder:

• DokterDetail: de eenmanszaak / onderneming die professionele autodetailingdiensten aanbiedt in de regio Noord-Holland.
• Opdrachtgever: de natuurlijke of rechtspersoon die een opdracht verstrekt aan DokterDetail.
• Behandeling: de overeengekomen detailingservice, inclusief Regulier Detail, Premium Detail, Surgical Detail of aanvullende services.
• Overeenkomst: de afspraak of opdrachtbevestiging tussen DokterDetail en de opdrachtgever.`,
  },
  {
    title: "2. Toepasselijkheid",
    content: `2.1 Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen DokterDetail en de opdrachtgever.

2.2 Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien schriftelijk overeengekomen.

2.3 Door het plaatsen van een afspraakaanvraag of het aangaan van een overeenkomst verklaart de opdrachtgever kennis te hebben genomen van en in te stemmen met deze voorwaarden.`,
  },
  {
    title: "3. Offertes en overeenkomsten",
    content: `3.1 Alle offertes en prijsopgaven van DokterDetail zijn vrijblijvend en geldig gedurende 14 dagen, tenzij anders vermeld.

3.2 Een overeenkomst komt tot stand na schriftelijke of mondelinge bevestiging door DokterDetail.

3.3 DokterDetail behoudt het recht een aanvraag te weigeren zonder opgaaf van reden.

3.4 Prijzen kunnen afwijken van indicaties indien de werkelijke staat van het voertuig hier aanleiding toe geeft. Opdrachtgever wordt vooraf geïnformeerd.`,
  },
  {
    title: "4. Uitvoering van de opdracht",
    content: `4.1 DokterDetail voert de behandeling uit met de zorgvuldigheid die van een professionele detailer verwacht mag worden.

4.2 DokterDetail behandelt slechts één voertuig per keer, om volledige focus en kwaliteit te garanderen.

4.3 De opdrachtgever dient het voertuig in een staat aan te leveren die de uitvoering van de overeengekomen behandeling mogelijk maakt.

4.4 Indien tijdens de behandeling aanvullende schade, gebreken of bijzonderheden worden geconstateerd, wordt de opdrachtgever hierover direct geïnformeerd.`,
  },
  {
    title: "5. Pickup & Deliver service",
    content: `5.1 De Pickup & Deliver service wordt aangeboden binnen het servicegebied van DokterDetail (regio Noord-Holland).

5.2 De opdrachtgever dient het voertuig te voorzien van de benodigde bescheiden (kentekenbewijs, sleutels) en het voertuig rijklaar aan te bieden.

5.3 DokterDetail is niet aansprakelijk voor vertraging als gevolg van verkeer, weersomstandigheden of andere overmachtsituaties.

5.4 Het voertuig wordt gedekt door de verplichte WA-verzekering van DokterDetail tijdens transport. Eventuele schade dient binnen 24 uur na aflevering te worden gemeld.`,
  },
  {
    title: "6. Betaling",
    content: `6.1 Betaling dient te geschieden op de door DokterDetail aangegeven wijze, tenzij schriftelijk anders overeengekomen.

6.2 Facturen dienen te worden voldaan binnen 14 dagen na factuurdatum, tenzij anders afgesproken.

6.3 Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en is DokterDetail gerechtigd wettelijke rente en buitengerechtelijke incassokosten in rekening te brengen.

6.4 DokterDetail behoudt het recht de behandeling op te schorten of het voertuig niet te retourneren totdat openstaande bedragen zijn voldaan.`,
  },
  {
    title: "7. Annulering en wijziging",
    content: `7.1 Annulering door de opdrachtgever dient minimaal 48 uur voor de geplande afspraak te geschieden via e-mail of telefoon.

7.2 Bij annulering binnen 48 uur behoudt DokterDetail het recht een annuleringsvergoeding van 50% van het overeengekomen bedrag in rekening te brengen.

7.3 Bij annulering binnen 24 uur of no-show kan de volledige overeengekomen prijs in rekening worden gebracht.

7.4 DokterDetail behoudt het recht een afspraak te verzetten of annuleren bij overmacht, ziekte of uitzonderlijke omstandigheden. Opdrachtgever wordt zo spoedig mogelijk geïnformeerd en een nieuwe datum wordt in overleg gepland.`,
  },
  {
    title: "8. Aansprakelijkheid",
    content: `8.1 DokterDetail is aansprakelijk voor schade die het directe gevolg is van aantoonbare nalatigheid of onzorgvuldigheid tijdens de uitvoering van de behandeling.

8.2 DokterDetail is niet aansprakelijk voor:
• Pre-existente gebreken, schade of slijtage aan het voertuig.
• Indirecte schade of gevolgschade.
• Schade veroorzaakt door onvolledige of onjuiste informatie van de opdrachtgever.

8.3 De aansprakelijkheid van DokterDetail is te allen tijde beperkt tot het bedrag van de overeengekomen behandeling.

8.4 De opdrachtgever is verantwoordelijk voor het verwijderen van waardevolle persoonlijke eigendommen uit het voertuig vóór aanvang van de behandeling.`,
  },
  {
    title: "9. Klachten",
    content: `9.1 Klachten over de uitvoering van een behandeling dienen zo spoedig mogelijk, doch uiterlijk binnen 48 uur na oplevering, schriftelijk te worden gemeld via info@dokterdetail.com.

9.2 DokterDetail streeft ernaar klachten binnen 5 werkdagen te behandelen en, indien gegrond, een passende oplossing te bieden.

9.3 Het indienen van een klacht schort de betalingsverplichting van de opdrachtgever niet op.`,
  },
  {
    title: "10. Toepasselijk recht en geschillen",
    content: `10.1 Op alle overeenkomsten tussen DokterDetail en de opdrachtgever is Nederlands recht van toepassing.

10.2 Geschillen worden bij voorkeur in onderling overleg opgelost. Indien dit niet lukt, worden geschillen voorgelegd aan de bevoegde rechter in het arrondissement Noord-Holland.

10.3 DokterDetail behoudt het recht deze algemene voorwaarden te wijzigen. De meest recente versie is te vinden op onze website.

Laatste update: mei 2026`,
  },
];

export default function Voorwaarden() {
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
              Algemene Voorwaarden
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500">
              Deze algemene voorwaarden zijn van toepassing op alle diensten van
              DokterDetail. Lees ze zorgvuldig door voordat u een afspraak
              maakt.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Gedeponeerd conform Nederlands recht. Van toepassing op alle
              overeenkomsten met DokterDetail.
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
              to="/privacy"
              className="text-sm font-medium text-teal-700 underline-offset-4 hover:underline"
            >
              Privacybeleid →
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