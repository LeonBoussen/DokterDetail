import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          DokterDetail
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                [
                  'text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/afspraak-maken"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Afspraak maken
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-900 md:hidden"
          aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-gray-50 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-md px-2 py-3 text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-900',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/afspraak-maken"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex justify-center rounded-md bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Afspraak maken
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}