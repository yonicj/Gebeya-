export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search products...',
  className = '',
  size = 'default',
  showButton = false,
  buttonText = 'Search',
  buttonClassName = '',
}) {
  const sizeClasses =
    size === 'large'
      ? 'py-4 pr-24 text-base'
      : 'py-3 pr-24 text-sm';

  return (
    <form onSubmit={onSubmit} className={`relative ${className}`}>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full ${sizeClasses} bg-white border border-[#E2E8F0] rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-slate-400 text-slate-700`}
      />
      {showButton && (
        <button
          type="submit"
          className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.22)] transition hover:bg-primary-dark ${buttonClassName}`}
        >
          {buttonText}
        </button>
      )}
    </form>
  );
}
