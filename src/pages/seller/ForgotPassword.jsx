import { useState } from 'react';
import { requestPasswordReset, verifyPasswordReset } from '../../utils/sellerHub';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function SellerForgotPassword() {
  const [step, setStep] = useState('request');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');

  const handleRequest = (e) => {
    e.preventDefault();
    try {
      const resetCode = requestPasswordReset(email);
      setRecoveryCode(resetCode);
      setMessage('A verification code has been sent to your email. Use it below to reset your password.');
      setError('');
      setStep('verify');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    try {
      verifyPasswordReset(email, code, newPassword);
      setMessage('Password updated successfully. You can now sign in.');
      setError('');
      setStep('completed');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Password Recovery</h1>
          <p className="text-sm text-gray-500 mb-6">Enter your registered seller email to receive a reset code.</p>
          {error && <div className="mb-4 rounded-xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-700">{error}</div>}
          {message && <div className="mb-4 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700">{message}</div>}
          {step === 'request' && (
            <form onSubmit={handleRequest} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" />
              </div>
              <Button type="submit" variant="primary">Send verification code</Button>
            </form>
          )}
          {step === 'verify' && (
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Verification Code</label>
                <input value={code} onChange={(e) => setCode(e.target.value)} type="text" required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" maxLength={6} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New 6-digit Password</label>
                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" required className="mt-1 w-full border border-[#E2E8F0] rounded-xl px-4 py-3" maxLength={6} />
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700">
                For demo purposes, your verification code is: <span className="font-semibold">{recoveryCode}</span>
              </div>
              <Button type="submit" variant="primary">Reset password</Button>
            </form>
          )}
          {step === 'completed' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-700">Your password is updated.</p>
              <Link to="/seller/login" className="text-primary hover:underline">Return to login</Link>
            </div>
          )}
          <div className="mt-6 text-sm text-gray-500">
            Remembered your password? <Link to="/seller/login" className="text-primary hover:underline">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
