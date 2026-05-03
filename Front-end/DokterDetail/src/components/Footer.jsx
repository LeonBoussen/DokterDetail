// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/dokters', label: 'Dokters' },
  { to: '/afspraken', label: 'Afspraken' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <H1>Hallo World</H1>
    </footer>
  );
}