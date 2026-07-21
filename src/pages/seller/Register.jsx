import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerSeller } from '../../utils/sellerHub';
import Button from '../../components/ui/Button';

export default function SellerRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '', sellerName: '', storeName: '', phone: '', location: '', description: '' });
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      registerSeller(form);
      navigate('/seller/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Seller Registration</h1>
          <p className="text-sm text-gray-500 mb-6">Register as a seller to access the Seller Hub and publish products.</p>
          {error && <div className="mb-4 rounded-xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-700">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input value={form.username} onChange={handleChange('username')} required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
                <p className="text-xs text-gray-400 mt-1">Choose a unique username for signing in.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input value={form.email} onChange={handleChange('email')} type="email" required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">6-digit Password</label>
              <input value={form.password} onChange={handleChange('password')} type="password" required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" maxLength={6} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Seller Name</label>
                <input value={form.sellerName} onChange={handleChange('sellerName')} required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                <input value={form.storeName} onChange={handleChange('storeName')} required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input value={form.phone} onChange={handleChange('phone')} required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input value={form.location} onChange={handleChange('location')} required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Store Description</label>
              <textarea value={form.description} onChange={handleChange('description')} rows={4} className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
            </div>
            <Button type="submit" variant="primary">Create Seller Account</Button>
          </form>
          <div className="mt-6 text-sm text-gray-500">
            Already registered? <Link to="/seller/login" className="text-primary hover:underline">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
