import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  productNeeded: '',
  message: '',
};

function validateForm(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Full name is required';
  if (!values.phone.trim()) errors.phone = 'Phone number is required';
  else if (!/^[\d\s+\-()]{8,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number';
  }
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const product = searchParams.get('product');
    if (product) {
      setForm((prev) => ({
        ...prev,
        productNeeded: product,
        message: `I'm interested in ordering: ${product}`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validateForm(form);
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      message: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent ${
      touched[field] && errors[field]
        ? 'border-red-300 bg-red-50/50'
        : 'border-gray-200 bg-white hover:border-sage-200'
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 bg-sage-50 rounded-2xl border border-sage-100"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl mb-4">
          ✓
        </div>
        <h3 className="font-semibold text-gray-800 text-lg">Message Sent!</h3>
        <p className="mt-2 text-gray-500">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sage-600 font-medium hover:text-sage-700"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={form.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass('fullName')}
          placeholder="Your full name"
        />
        {touched.fullName && errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass('phone')}
            placeholder="+251 9XX XXX XXX"
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass('email')}
            placeholder="you@example.com"
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="productNeeded" className="block text-sm font-medium text-gray-700 mb-1.5">
          Product Needed
        </label>
        <input
          id="productNeeded"
          name="productNeeded"
          type="text"
          value={form.productNeeded}
          onChange={handleChange}
          className={inputClass('productNeeded')}
          placeholder="e.g. Chocolate Celebration Cake"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputClass('message')} resize-none`}
          placeholder="Tell us what you're looking for..."
        />
        {touched.message && errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full py-3.5 bg-sage-600 text-white font-medium rounded-xl hover:bg-sage-700 transition-colors shadow-md shadow-sage-600/20"
      >
        Send Message
      </motion.button>
    </form>
  );
}
