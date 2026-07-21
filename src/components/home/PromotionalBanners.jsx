import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function PromotionalBanners() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-brand"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)]" />
            <div className="relative z-10">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90">
                Limited-time savings
              </span>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight">Batu Gebeya Market Days</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-100/90">
                Enjoy curated promotions, verified product offers, and high-priority support from local Batu sellers. Shop now while the deals last.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/products" variant="outline" className="text-white border-white/30 hover:bg-white/15">
                  Shop the Deals
                </Button>
                <Button to="/contact" variant="emerald">
                  Start Your Order
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-6"
          >
            <div className="rounded-[28px] border border-[#E2E8F0] bg-slate-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Fresh seller spotlight</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Verified local vendors</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Find top-rated partners handpicked for reliability, quality, and responsive service in Batu.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-sm">
                  Trusted shops</span>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-sm">
                  Fast response</span>
              </div>
            </div>
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Premium shopping</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Secure orders & seamless support</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Our platform makes it easier for customers and sellers to connect, confirm orders, and manage purchases with a premium experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
