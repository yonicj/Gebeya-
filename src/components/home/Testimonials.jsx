import { testimonials } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-sage-700 to-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Real experiences from people who shop through Batu Gebeya"
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sage-50 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                />
                <div>
                  <cite className="not-italic font-semibold text-white">{item.name}</cite>
                  <p className="text-sage-200 text-sm">{item.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
