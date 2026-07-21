import { Link } from 'react-router-dom';
import { contactInfo } from '../../data/products';
import { IconPhone, IconMail, IconInstagram, IconTikTok } from '../../utils/icons';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-semibold text-white shadow-brand">
                B
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Batu Gebeya</p>
                <p className="text-lg font-semibold text-white">Local Marketplace</p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Connecting customers with trusted local sellers across Batu town. Discover products, verify sellers, and shop with confidence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white">
                  <IconPhone className="h-4 w-4 flex-shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white">
                  <IconMail className="h-4 w-4 flex-shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-slate-400">{contactInfo.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Stay Updated</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Get local deals, new arrivals, and marketplace updates in your inbox.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0"
              />
              <button className="mt-3 w-full rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark">
                Subscribe
              </button>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition hover:bg-primary hover:text-white" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href={contactInfo.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition hover:bg-primary hover:text-white" aria-label="TikTok">
                <IconTikTok />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Batu Gebeya. All rights reserved.</p>
          <p className="text-xs text-slate-500">A premium marketplace for local businesses in Batu.</p>
        </div>
      </div>
    </footer>
  );
}
