import { useEffect, useState } from 'react';
import { getStoreProfile, updateSellerProfile } from '../../utils/sellerHub';
import Button from '../../components/ui/Button';

export default function SellerProfile() {
  const [profile, setProfile] = useState({ name: '', logo: '', cover: '', description: '', phone: '', location: '', hours: '', social: {} });

  useEffect(() => {
    const p = getStoreProfile();
    if (p) setProfile(p);
  }, []);

  const save = () => {
    updateSellerProfile(profile);
    alert('Profile saved');
  };

  const handleFile = (e, field) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setProfile((s) => ({ ...s, [field]: reader.result }));
    reader.readAsDataURL(f);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Store Profile</h2>
          <p className="text-sm text-gray-500">Manage your store information</p>
        </div>
        <div>
          <Button variant="emerald" onClick={save}>Save</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Store Name</label>
            <input value={profile.name} onChange={(e) => setProfile((s) => ({ ...s, name: e.target.value }))} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Store Description</label>
            <textarea value={profile.description} onChange={(e) => setProfile((s) => ({ ...s, description: e.target.value }))} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2" rows={6} />
          </div>

        </div>

        <aside className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Store Logo</label>
            <input type="file" accept="image/*" onChange={(e) => handleFile(e, 'logo')} />
            {profile.logo && <img src={profile.logo} className="w-24 h-24 object-cover rounded-md mt-2" alt="logo" />}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Image</label>
            <input type="file" accept="image/*" onChange={(e) => handleFile(e, 'cover')} />
            {profile.cover && <img src={profile.cover} className="w-full h-24 object-cover rounded-md mt-2" alt="cover" />}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input value={profile.phone} onChange={(e) => setProfile((s) => ({ ...s, phone: e.target.value }))} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input value={profile.location} onChange={(e) => setProfile((s) => ({ ...s, location: e.target.value }))} className="mt-1 w-full border border-[#E2E8F0] rounded-md px-3 py-2" />
          </div>

        </aside>
      </div>
    </div>
  );
}
