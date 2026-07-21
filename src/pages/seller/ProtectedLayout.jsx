import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { getCurrentSeller, isSellerAuthenticated, signOutSeller } from '../../utils/sellerHub';
import { IconDashboard, IconBox, IconPlus, IconTag, IconStore, IconList, IconSettings } from '../../utils/icons';

const links = [
  { to: '/seller', label: 'Dashboard', icon: IconDashboard },
  { to: '/seller/products', label: 'Products', icon: IconBox },
  { to: '/seller/add-product', label: 'Add Product', icon: IconPlus },
  { to: '/seller/categories', label: 'Categories', icon: IconTag },
  { to: '/seller/profile', label: 'Store Profile', icon: IconStore },
  { to: '/seller/orders', label: 'Orders', icon: IconList },
  { to: '/seller/settings', label: 'Settings', icon: IconSettings },
];

function LinkItem({ to, label, Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive ? 'bg-white border border-[#E2E8F0] shadow-sm text-primary' : 'text-slate-700 hover:bg-slate-50'
        }`
      }
      end={to === '/seller'}
    >
      <Icon />
      <span>{label}</span>
    </NavLink>
  );
}

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const seller = getCurrentSeller();

  if (!isSellerAuthenticated()) {
    return <Navigate to="/seller/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          <main className="lg:col-span-5 flex-1">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm text-slate-500">Signed in as</p>
                  <h1 className="text-2xl font-semibold text-slate-900">{seller?.storeName || seller?.sellerName}</h1>
                  <p className="text-sm text-gray-500">{seller?.email}</p>
                </div>
                <button
                  onClick={() => {
                    signOutSeller();
                    navigate('/seller/login');
                  }}
                  className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  Sign Out
                </button>
              </div>
              <Outlet />
            </div>
          </main>

          <aside className="lg:w-72">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-3">Seller Hub</h4>
                <nav className="flex flex-col gap-2">
                  {links.map((l) => (
                    <LinkItem key={l.to} to={l.to} label={l.label} Icon={l.icon} />
                  ))}
                </nav>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm">
                <h5 className="font-semibold text-slate-800 mb-2">Seller Notes</h5>
                <p className="text-sm text-gray-500">Only your products and categories are editable from this dashboard.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
