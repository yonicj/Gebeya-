import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu, IconClose, IconCart, IconUser } from '../../utils/icons';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = search.trim();
    navigate(query ? `/products?search=${encodeURIComponent(query)}` : '/products');
  };

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive
        ? 'bg-primary/10 text-primary'
        : 'text-slate-600 hover:text-primary hover:bg-slate-100'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-brand text-white">
              <span className="font-semibold text-lg">B</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Batu Gebeya</p>
              <p className="text-base font-semibold text-slate-900">Local Marketplace</p>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-3 flex-1">
            <form onSubmit={handleSearch} className="relative w-full max-w-xl">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                type="search"
                placeholder="Search products, sellers, categories"
                className="w-full rounded-full border border-[#E2E8F0] bg-white py-3 px-4 text-sm text-slate-700 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </form>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/products"
              className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-brand hover:bg-primary-dark transition"
            >
              Shop Now
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white p-2 text-slate-600 hover:border-primary hover:text-primary transition" aria-label="Cart">
              <IconCart />
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-[#E2E8F0] bg-white p-2 text-slate-600 hover:border-primary hover:text-primary transition" aria-label="Profile">
              <IconUser />
            </button>
            <Link
              to="/seller"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-[0_16px_40px_rgba(37,99,235,0.18)] hover:bg-primary-dark transition"
            >
              Seller Hub
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-white shadow-sm text-slate-600 hover:text-primary transition"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E2E8F0] shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              <form onSubmit={handleSearch} className="relative">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  type="search"
                  placeholder="Search products, sellers, categories"
                  className="w-full rounded-full border border-[#E2E8F0] bg-slate-50 py-3 px-4 text-sm text-slate-700 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
              </form>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm font-medium ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="grid gap-3">
                <Link
                  to="/products"
                  className="inline-flex justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-white hover:bg-primary-dark transition"
                >
                  Shop Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex justify-center rounded-2xl border border-[#E2E8F0] px-4 py-3 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
