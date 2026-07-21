import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const sellers = [
  {
    name: 'Sweet Batu Bakery',
    badge: 'Baked goods',
    rating: 4.9,
    orders: '1.2k orders',
  },
  {
    name: 'Tech Hub Batu',
    badge: 'Electronics',
    rating: 4.8,
    orders: '980 orders',
  },
  {
    name: 'Batu Crafts Collective',
    badge: 'Handcrafts',
    rating: 4.9,
    orders: '860 orders',
  },
  {
    name: 'Batu Fashion House',
    badge: 'Fashion',
    rating: 4.7,
    orders: '740 orders',
  },
];

export default function VerifiedSellers() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Verified Sellers"
          subtitle="Buy from trusted Batu merchants with fast support, verified products, and a secure experience."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller, index) => (
            <motion.div
              key={seller.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[24px] border border-[#E2E8F0] bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Verified</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{seller.name}</h3>
                </div>
                <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
                  {seller.badge}
                </span>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 text-sm text-slate-600">
                <p className="rounded-full bg-slate-50 px-3 py-2">{seller.rating} ★</p>
                <p className="rounded-full bg-slate-50 px-3 py-2">{seller.orders}</p>
              </div>
              <div className="mt-6 rounded-3xl bg-primary/5 px-4 py-3 text-sm text-slate-700">
                Trusted seller in Batu with premium local support and verified delivery.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
