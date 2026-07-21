import { howItWorks } from '../../data/products';
import { getStepIcon } from '../../utils/icons';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Four easy steps to find, request, and receive products from Batu's trusted sellers"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, index) => {
            const Icon = getStepIcon(item.icon);
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative rounded-[24px] border border-[#E2E8F0] bg-white p-6 text-center shadow-sm"
              >
                {index < howItWorks.length - 1 && (
                  <div className="absolute left-[62%] top-10 hidden h-px w-[70%] bg-slate-200 lg:block" />
                )}
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                  Step {item.step}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
