import { useEffect, useState } from 'react';
import { getSellerProducts, getCategories, getStoreProfile } from '../../utils/sellerHub';
import Button from '../../components/ui/Button';

export default function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [store, setStore] = useState(null);

  useEffect(() => {
    const seller = getCurrentSeller();
    setProducts(getSellerProducts(seller?.id));
    setCategories(getCategories(seller?.id));
    setStore(getStoreProfile());
  }, []);

  const recentOrders = [];
  const recentProducts = products.slice(0, 5);

  const totalSales = 0;

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Dashboard</h2>
          <p className="text-sm text-gray-500">Overview of your store activity</p>
        </div>
        <div>
          <Button to="/seller/add-product" variant="emerald">Add Product</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="text-2xl font-semibold text-slate-800">{products.length}</p>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
          <p className="text-sm text-gray-500">Total Categories</p>
          <p className="text-2xl font-semibold text-slate-800">{categories.length}</p>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-semibold text-slate-800">0</p>
        </div>
        <div className="p-4 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
          <p className="text-sm text-gray-500">Total Sales</p>
          <p className="text-2xl font-semibold text-slate-800">{totalSales} ETB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-3">Recently Added Products</h3>
          <ul className="space-y-3">
            {recentProducts.length ? (
              recentProducts.map((p) => (
                <li key={p.id} className="flex items-center gap-3">
                  <img src={p.images?.[0] || p.image} alt={p.name} className="w-12 h-12 rounded-md object-cover" />
                  <div>
                    <div className="font-medium text-slate-800">{p.name}</div>
                    <div className="text-sm text-gray-500">{p.categoryLabel || p.category}</div>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500">No recent products</p>
            )}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-3">Recent Orders</h3>
          {recentOrders.length ? (
            <ul className="space-y-3">
              {recentOrders.map((o) => (
                <li key={o.id}>{o.id}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No recent orders</p>
          )}
        </div>
      </div>
    </div>
  );
}
