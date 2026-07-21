import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { howItWorks } from '../data/products';
import { getStepIcon } from '../utils/icons';

const benefits = {
  customers: [
    'One place to discover products from many local shops',
    'No need to contact shop owners directly',
    'Convenient inquiry and delivery coordination',
    'Support for Batu\'s local economy',
  ],
  businesses: [
    'Increased visibility for local shops',
    'Reach more customers without extra marketing',
    'We handle customer communication and orders',
    'Partnership with a trusted local platform',
  ],
};

export default function About() {
  return (
    <>
      <PageHeader
        title="About Batu Gebeya"
        subtitle="Connecting Batu town with quality local products and reliable service"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-semibold text-gray-800">Our Story</h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-sage-400 to-emerald-500" />
              <p className="mt-6 text-gray-600 leading-relaxed">
                Batu Gebeya was born from a simple idea: make it easy for people in and around Batu town
                to discover and order products from local businesses. We noticed that many wonderful shops
                had great products but limited reach — and customers often didn&apos;t know where to find what they needed.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We built a platform that showcases products from trusted local shops. When you find something
                you like, you contact us — not the shop directly. We coordinate with vendors, source your items,
                and arrange delivery. It&apos;s local commerce, simplified.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12d2?w=800&q=80"
                alt="Local marketplace team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-sage-100"
            >
              <h3 className="font-display text-2xl font-semibold text-sage-700">Our Mission</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To empower local businesses in Batu by giving them a digital storefront, while providing
                customers a seamless way to discover, inquire about, and receive products from their community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-sm border border-sage-100"
            >
              <h3 className="font-display text-2xl font-semibold text-sage-700">Our Vision</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A thriving Batu where every local shop can reach every customer, and every resident can
                access the best their town has to offer — all through one trusted marketplace platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Our Service Works"
            subtitle="We act as your single point of contact for all local product orders"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => {
              const Icon = getStepIcon(item.icon);
              return (
                <div
                  key={item.step}
                  className="text-center p-6 rounded-2xl bg-sage-50 border border-sage-100"
                >
                  <div className="inline-flex w-14 h-14 items-center justify-center rounded-xl bg-sage-600 text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Benefits for Everyone" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">For Customers</h3>
              <ul className="space-y-3">
                {benefits.customers.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <span className="text-emerald-500 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">For Local Businesses</h3>
              <ul className="space-y-3">
                {benefits.businesses.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <span className="text-emerald-500 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button to="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
