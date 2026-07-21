import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative pt-8 pb-8 md:pt-10 md:pb-10 bg-gradient-to-br from-sage-600 to-sage-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-xl"
        >
          <div className="mx-auto w-full bg-blue-600/95 border border-blue-700/60 rounded-xl px-5 py-4 shadow-lg">
            <motion.h1 className="font-display text-2xl md:text-4xl font-bold text-white">
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 }}
                className="mt-2 text-sm md:text-lg text-sky-100 max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
