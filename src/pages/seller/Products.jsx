import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSellerProducts, deleteProduct, updateProduct, getCurrentSeller } from '../../utils/sellerHub';
import Button from '../../components/ui/Button';

export default function SellerProducts() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const seller = getCurrentSeller();
    setProducts(getSellerProducts(seller?.id));
  }, []);

  const handleDelete = (id) => {
    const seller = getCurrentSeller();
    if (!confirm('Delete this product?')) return;
    deleteProduct(id);
    setProducts(getSellerProducts(seller?.id));
  };

  const toggleStatus = (p) => {
    const seller = getCurrentSeller();
    const next = p.status === 'Active' ? 'Draft' : 'Active';
    updateProduct(p.id, { status: next });
    setProducts(getSellerProducts(seller?.id));
  };

  const filtered = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Products</h2>
          <p className="text-sm text-gray-500">Manage your products</p>
        </div>
        <div className="flex items-center gap-2">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" className="border border-[#E2E8F0] rounded-full px-4 py-2 text-sm" />
          <Link to="/seller/add-product"><Button variant="emerald">Add Product</Button></Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="py-2">Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <img src={p.images?.[0] || p.image} alt={p.name} className="w-12 h-12 object-cover rounded-md" />
                    <div>
                      <div className="font-medium text-slate-800">{p.name}</div>
                      <div className="text-sm text-gray-500">{p.shortDescription}</div>
                    </div>
                  </div>
                </td>
                <td>{p.categoryLabel || p.category}</td>
                <td>{p.price?.toLocaleString() || '-'} ETB</td>
                <td>{p.stock ?? '-'}</td>
                <td>{p.status || 'Draft'}</td>
                <td className="text-sm text-gray-500">{new Date(p.createdAt).toLocaleDateString()}</td>
                <td className="text-right">
                  <div className="inline-flex items-center gap-2">
                    <Link to={`/seller/add-product?id=${p.id}`} className="text-sm text-primary">Edit</Link>
                    <button onClick={() => toggleStatus(p)} className="text-sm text-slate-700">Toggle</button>
                    <button onClick={() => handleDelete(p.id)} className="text-sm text-rose-600">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">No products found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
