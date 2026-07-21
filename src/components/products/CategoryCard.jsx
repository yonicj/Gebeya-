import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        to={`/products?category=${category.slug}`}
        className="group block rounded-[24px] border border-[#E2E8F0] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            {category.productCount ?? 'Curated picks'}
          </div>
        </div>
        <div className="px-2 pb-2 pt-4">
          <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{category.description}</p>
          <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
            Explore collection
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
