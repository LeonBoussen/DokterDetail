import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-teal-700 text-white">
                <span className="text-lg font-bold">D</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Dokter<span className="text-teal-700">Detail</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Klinische precisie voor uw voertuig. Gespecialiseerd in hoogwaardige lakcorrecties en keramische coatings in de regio Beverwijk.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-700 transition-colors">
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-700 transition-colors">
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Navigatie</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-teal-700 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/behandelingen" className="text-sm text-gray-500 hover:text-teal-700 transition-colors">Behandelingen</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-500 hover:text-teal-700 transition-colors">Over Dokter Detail</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-500 hover:text-teal-700 transition-colors">Contact & Intake</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <PhoneCall className="h-4 w-4 text-teal-700" />
                +31 (0)6 12 34 56 78
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <MessageCircle className="h-4 w-4 text-teal-700" />
                WhatsApp Service
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="h-4 w-4 text-teal-700" />
                info@dokterdetail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin className="h-4 w-4 text-teal-700" />
                Regio Noord-Holland
              </li>
            </ul>
          </div>

          {/* Accreditation/Trust */}
          <div className="rounded-2xl bg-gray-50 p-6">
            <div className="flex items-center gap-2 text-teal-700">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-bold">Kwaliteit gegarandeerd</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              Elke behandeling wordt uitgevoerd met de hoogste medische precisie en de beste producten op de markt.
            </p>
            <Link 
              to="/afspraak" 
              className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-teal-700 hover:underline"
            >
              Plan een diagnose →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} Dokter Detail. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Privacybeleid</Link>
            <Link to="/voorwaarden" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;