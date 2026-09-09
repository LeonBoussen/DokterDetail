# DokterDetail

> **Professionele auto-detailing met chirurgische precisie.**
> Een moderne, volledig responsive website voor een (potentieel) auto-detailingbedrijf.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

---

## Site Overview
[Bekijk de webssite](assets/site-overview.mp4)

---

## Over het project

**DokterDetail** is een concept-website voor een premium auto-detailingbedrijf. De site toont
het volledige behandelaanbod van reguliere reiniging tot lakcorrectie en keramische coating met heldere tarieven, een uitgebreide werkwijze en een consultatie en afspraakflow.

De frontend is gebouwd als single-page application met React en Vite, opgedeeld in herbruikbare
componenten en losse pagina's die via React Router zijn gekoppeld. Styling gebeurt volledig met
Tailwind CSS utility klassen en alle iconen zijn vector SVG's via lucide-react. De formulieren
zijn voorbereid op een koppeling met een toekomstige backend.

---

## Tech stack

| Laag | Technologie |
| --- | --- |
| Framework | [React 19](https://react.dev) |
| Buildtool | [Vite 8](https://vite.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Routing | [React Router 7](https://reactrouter.com) |
| Iconen | [lucide-react](https://lucide.dev) |

> De map `Back-end/` bevat vooralsnog een leeg `app.py` en is gereserveerd voor een
> toekomstige backend (bijv. Flask of FastAPI) voor de formulieren en afspraken.

---

## Lokaal draaien

**Vereisten:** [Node.js](https://nodejs.org) 20.19+ en npm.

```bash
# 1. Ga naar de frontend
cd Front-end/DokterDetail

# 2. Installeer dependencies
npm install

# 3. Start de development-server
npm run dev
```

Open daarna de URL die Vite in de terminal toont (standaard `http://localhost:5173`).

### Productiebuild

```bash
npm run build     # bouwt de site naar /dist
npm run preview   # preview van de productiebuild
```

---

## Projectstructuur

```
DokterDetail/
├── Back-end/
│   └── app.py                       # (placeholder) toekomstige backend
├── Front-end/
│   └── DokterDetail/
│       ├── public/
│       │   ├── favicon.svg
│       │   └── assets/placeholders/ # placeholder-afbeeldingen
│       ├── src/
│       │   ├── components/
│       │   │   ├── Navbar.jsx       # navigatie + mobiel menu
│       │   │   └── Footer.jsx       # footer met contact & links
│       │   ├── pages/
│       │   │   ├── Home.jsx         # landingspagina
│       │   │   ├── Portfolio.jsx    # behandelingen & resultaten
│       │   │   ├── Contact.jsx
│       │   │   ├── Afspraak.jsx     # afspraakflow
│       │   │   ├── About.jsx
│       │   │   ├── Privacy.jsx
│       │   │   └── Voorwaarden.jsx
│       │   ├── App.jsx              # routing
│       │   ├── main.jsx             # entry-point
│       │   └── index.css            # Tailwind import
│       ├── index.html
│       ├── package.json
│       └── vite.config.js
├── assets/
│   └── site-overview.mp4            # site overview video
├── LICENSE.md
└── README.md
```

---

## Roadmap / nog te doen

- Formulieren daadwerkelijk koppelen aan een backend of e-mailservice (nu: demo `alert`).
- `About`-pagina verder uitwerken.
- Echte projectfoto's en reviews toevoegen (nu: placeholders).

---

## Auteur

- **Leon Boussen** — [@leonboussen](https://github.com/leonboussen)

---

## License

Zie [LICENSE](./LICENSE.md) — Copyright (c) 2026 DokterDetail. Alle rechten voorbehouden.
