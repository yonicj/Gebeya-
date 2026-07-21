import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  addProduct,
  getCategories,
  addCategory,
  updateProduct,
  getSellerProducts,
  getCurrentSeller,
} from '../../utils/sellerHub';
import Button from '../../components/ui/Button';

function readFilesAsDataURLs(files) {
  return Promise.all(
    Array.from(files).map(
      (f) =>
        new Promise((res) => {
          const reader = new FileReader();
          reader.onload = () => res(reader.result);
          reader.readAsDataURL(f);
        })
    )
  );
}

export default function SellerAddProduct() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editId = searchParams.get('id');

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [mainIndex, setMainIndex] = useState(0);
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [categoryLabel, setCategoryLabel] = useState('');
  const [tags, setTags] = useState([]);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState('Active');
  const [availableCats, setAvailableCats] = useState([]);
  const [newCatName, setNewCatName] = useState('');

  useEffect(() => {
    const seller = getCurrentSeller();
    setAvailableCats(getCategories(seller?.id));
    if (editId) {
      const p = getSellerProducts(seller?.id).find((x) => String(x.id) === String(editId));
      if (p) {
        setName(p.name || '');
        setDescription(p.description || '');
        setImages(p.images || []);
        setMainIndex(0);
        setPrice(p.price || '');
        setCategory(p.category || '');
        setCategoryLabel(p.categoryLabel || p.category || '');
        setTags(p.tags || []);
        setStock(p.stock ?? 0);
        setStatus(p.status || 'Draft');
      }
    }
  }, [editId]);

  const handleFiles = async (files) => {
    const data = await readFilesAsDataURLs(files);
    setImages((prev) => [...prev, ...data]);
  };

  const removeImage = (i) => {
    setImages(images.filter((_, idx) => idx !== i));
    if (mainIndex >= images.length - 1) setMainIndex(0);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert('Please enter product name');
    if (!price) return alert('Please enter a price');
    const seller = getCurrentSeller();
    const product = {
      name,
      description,
      images,
      image: images[mainIndex] || '',
      price: Number(price),
      currency: 'ETB',
      category: category || categoryLabel || (availableCats[0] && availableCats[0].id) || 'uncategorized',
      categoryLabel: categoryLabel || category || (availableCats[0] && availableCats[0].name) || 'Uncategorized',
      tags,
      stock: Number(stock),
      status,
      sellerId: seller?.id,
      shopName: seller?.storeName || seller?.sellerName || 'My Store',
    };

    if (editId) {
      updateProduct(Number(editId), product);
      alert('Product updated');
      navigate('/seller/products');
      return;
    }

    addProduct(product);
    alert('Product published');
    navigate('/seller/products');
  };

  const createCategory = () => {
    if (!newCatName.trim()) return;
    const c = addCategory({ name: newCatName, slug: newCatName.toLowerCase().replace(/\s+/g, '-'), description: '' });
    setAvailableCats((s) => [c, ...s]);
    setCategory(c.id);
    setCategoryLabel(c.name);
    setNewCatName('');
  };

  const addTag = (t) => {
    if (!t.trim()) return;
    setTags((s) => [...s, t.trim()]);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">{editId ? 'Edit Product' : 'Add Product'}</h2>
          <p className="text-sm text-gray-500">Create a new product for your store</p>
        </div>
        <div>
          <Button to="/seller/products" variant="outline">Back</Button>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Product Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={6} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Product Images</label>
              <div className="mt-2 border border-dashed border-[#E2E8F0] rounded-md p-4">
                <input type="file" multiple accept="image/*" onChange={(e) => handleFiles(e.target.files)} />
                <p className="text-sm text-gray-500 mt-2">Drag & drop images or browse files. You can upload multiple images.</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {images.map((src, i) => (
                    <div key={i} className="relative">
                      <img src={src} alt={`upload-${i}`} className={`w-full h-24 object-cover rounded-md border ${i === mainIndex ? 'ring-2 ring-primary' : ''}`} />
                      <div className="absolute top-1 right-1 flex gap-1">
                        <button type="button" onClick={() => setMainIndex(i)} className="bg-white/80 px-2 py-1 text-xs rounded">Main</button>
                        <button type="button" onClick={() => removeImage(i)} className="bg-rose-500 text-white px-2 py-1 text-xs rounded">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <div className="mt-2 flex items-center gap-2">
                <input id="tagInput" placeholder="Add tag and press Enter" onKeyDown={(e) => {
                  if (e.key === 'Enter') { e.preventDefault(); addTag(e.target.value); e.target.value = ''; }
                }} className="border border-[#E2E8F0] rounded-md px-3 py-2 text-sm" />
              </div>
              <div className="mt-2 flex gap-2 flex-wrap">
                {tags.map((t, idx) => (
                  <span key={idx} className="bg-slate-100 px-3 py-1 rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Price (ETB)</label>
              <input value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2">
                <option value="">Select category</option>
                {availableCats.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              <div className="mt-2 flex gap-2">
                <input placeholder="New category" value={newCatName} onChange={(e) => setNewCatName(e.target.value)} className="w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
                <button type="button" onClick={createCategory} className="px-3 py-2 rounded bg-primary text-white">Add</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
              <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2">
                <option>Active</option>
                <option>Draft</option>
                <option>Out of Stock</option>
              </select>
            </div>

            <div className="pt-2">
              <button type="submit" className="w-full rounded-md bg-primary text-white px-4 py-2">{editId ? 'Update Product' : 'Publish Product'}</button>
            </div>

          </aside>
        </div>
      </form>
    </div>
  );
}
