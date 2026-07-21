import { whyChooseUs } from '../../data/products';
import { getFeatureIcon } from '../../utils/icons';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Batu Gebeya"
          subtitle="We connect local shoppers with trusted businesses in a simpler, more dependable way"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = getFeatureIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-[24px] border border-[#E2E8F0] bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
