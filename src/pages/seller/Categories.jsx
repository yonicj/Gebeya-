import { useEffect, useState } from 'react';
import { getCategories, addCategory, updateCategory, deleteCategory, getCurrentSeller } from '../../utils/sellerHub';

export default function SellerCategories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    const seller = getCurrentSeller();
    setCategories(getCategories(seller?.id));
  }, []);

  const create = () => {
    if (!name.trim()) return alert('Enter name');
    const c = addCategory({ name, slug: name.toLowerCase().replace(/\s+/g, '-'), description: desc });
    setCategories((s) => [c, ...s]);
    setName('');
    setDesc('');
  };

  const remove = (id) => {
    const seller = getCurrentSeller();
    if (!confirm('Delete category?')) return;
    deleteCategory(id);
    setCategories(getCategories(seller?.id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Categories</h2>
          <p className="text-sm text-gray-500">Manage product categories</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm">
          <h3 className="font-semibold mb-3">Create Category</h3>
          <div className="space-y-3">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Category name" className="w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" className="w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
            <button onClick={create} className="rounded-md bg-primary text-white px-4 py-2">Create</button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm">
          <h3 className="font-semibold mb-3">Existing Categories</h3>
          <div className="grid gap-3">
            {categories.map((c) => (
              <div key={c.id} className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <div className="font-medium text-slate-800">{c.name}</div>
                  <div className="text-sm text-gray-500">{c.description}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => remove(c.id)} className="text-rose-600 text-sm">Delete</button>
                </div>
              </div>
            ))}
            {categories.length === 0 && <p className="text-sm text-gray-500">No categories yet</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
