import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice } from '../../data/products';
import Button from '../ui/Button';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <Link to={`/products/${product.id}`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-primary shadow-sm">
          {product.categoryLabel}
        </span>
        <div className="absolute right-3 top-3 flex gap-2">
          <button className="rounded-full bg-white/90 px-2.5 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-white" aria-label="Save product">
            ♡
          </button>
          <button className="rounded-full bg-white/90 px-2.5 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-white" aria-label="Quick view">
            ⌕
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/products/${product.id}`}>
              <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-primary line-clamp-2">
                {product.name}
              </h3>
            </Link>
            <p className="mt-1 text-sm text-slate-500">{product.shopName}</p>
          </div>
          {product.verified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              ✓ Verified
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-2xl font-semibold text-primary">{formatPrice(product.price, product.currency)}</p>
          <div className="inline-flex items-center gap-1 text-sm text-slate-500">
            <span className="font-semibold text-amber-400">{product.rating ?? 4.8}</span>
            <span>★</span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3">{product.shortDescription}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
          <span className="rounded-full bg-slate-100 px-2.5 py-1">Same-day pickup</span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1">Secure checkout</span>
        </div>

        <div className="mt-6 grid gap-3">
          <Button to={`/products/${product.id}`} variant="primary" className="w-full text-sm">
            Buy Now
          </Button>
          <Button to="/contact" variant="secondary" className="w-full text-sm">
            Ask About Availability
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
