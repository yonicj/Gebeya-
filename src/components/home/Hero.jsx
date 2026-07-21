import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBar from '../ui/SearchBar';
import Button from '../ui/Button';

const stats = [
  { value: '4.9/5', label: 'Average trust score from local buyers' },
  { value: '120+', label: 'Verified seller partners' },
  { value: '24h', label: 'Fast local support and order updates' },
];

export default function Hero() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = search.trim();
    navigate(query ? `/products?search=${encodeURIComponent(query)}` : '/products');
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1920&q=80"
          alt="Batu marketplace scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.9)_0%,rgba(37,99,235,0.78)_55%,rgba(7,89,133,0.72)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm tracking-wide">
            Trusted local sellers · Verified services · Premium marketplace
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Discover Batu's best local products in one trusted marketplace.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200/95 leading-relaxed">
            From cakes and crafts to electronics and fashion, Batu Gebeya brings the town's finest shops together in a simple, dependable shopping experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-slate-100 backdrop-blur-sm">
              Local delivery support
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-slate-100 backdrop-blur-sm">
              Verified seller network
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-slate-100 backdrop-blur-sm">
              Curated for everyday convenience
            </span>
          </div>

          <div className="mt-10 rounded-[28px] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-slate-950/20 backdrop-blur-md sm:p-4">
            <div className="grid gap-3 lg:grid-cols-1">
              <div className="flex flex-wrap gap-3">
                <Button to="/products" variant="emerald" className="min-w-[150px]">
                  Browse Products
                </Button>
                <Button to="/about" variant="outline" className="min-w-[150px] text-white border-white/20 hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-100">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
