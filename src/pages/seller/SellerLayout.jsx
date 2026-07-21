import { Outlet, NavLink } from 'react-router-dom';
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

export default function SellerLayout() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-3">Seller Hub</h4>
                <nav className="flex flex-col gap-2">
                  {links.map((l) => (
                    <LinkItem key={l.to} to={l.to} label={l.label} Icon={l.icon} />
                  ))}
                </nav>
              </div>
            </div>
          </aside>
          <main className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
