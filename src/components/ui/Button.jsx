import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-[0_18px_50px_rgba(37,99,235,0.18)]',
  secondary:
    'bg-white text-primary border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-primary transition-colors',
  outline: 'border-2 border-white text-white hover:bg-white/10',
  emerald:
    'bg-secondary text-white hover:bg-secondary-dark shadow-[0_18px_50px_rgba(16,185,129,0.18)]',
};

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  type = 'button',
  onClick,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2';

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
