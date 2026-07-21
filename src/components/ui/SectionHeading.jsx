import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`font-display text-3xl md:text-4xl font-semibold tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-slate-200' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
}
