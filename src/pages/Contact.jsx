import { motion } from 'framer-motion';
import { contactInfo } from '../data/products';
import { IconPhone, IconMail, IconInstagram, IconTikTok } from '../utils/icons';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a product in mind? Reach out and we'll help you get it from Batu."
      />

      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold text-gray-800">Get in Touch</h2>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  Contact Batu Gebeya for product inquiries, orders, or general questions.
                  We respond quickly and handle everything from sourcing to delivery.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-sage-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                    <IconPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-800">{contactInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-sage-200 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                    <IconMail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">{contactInfo.email}</p>
                  </div>
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Follow us on social media</p>
                <div className="flex gap-3">
                  <a
                    href={contactInfo.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-100 hover:border-sage-200 hover:shadow-md transition-all text-gray-700"
                  >
                    <IconTikTok className="w-5 h-5" />
                    TikTok
                  </a>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-100 hover:border-sage-200 hover:shadow-md transition-all text-gray-700"
                  >
                    <IconInstagram className="w-5 h-5" />
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-gray-800 text-lg mb-6">Send us a message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
