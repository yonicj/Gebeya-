import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInSeller, isSellerAuthenticated } from '../../utils/sellerHub';
import Button from '../../components/ui/Button';

export default function SellerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isSellerAuthenticated()) {
      navigate('/seller');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signInSeller(email, password);
      navigate('/seller');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Seller Login</h1>
          <p className="text-sm text-gray-500 mb-6">Already registered? Sign in with your seller account.</p>
          {error && <div className="mb-4 rounded-xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-700">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username or Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">6-digit Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" maxLength={6} />
            </div>
            <Button type="submit" variant="primary">Sign In</Button>
          </form>
          <div className="mt-6 text-sm text-gray-500 flex flex-col gap-2">
            <Link to="/seller/forgot" className="text-primary hover:underline">Forgot password?</Link>
            <span>
              New seller? <Link to="/seller/register" className="text-primary hover:underline">Register here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
