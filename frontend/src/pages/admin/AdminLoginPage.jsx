import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Lock, Mail, AlertCircle, Loader2, KeyRound } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { BUSINESS_INFO } from '../../config/business';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login, isFirebaseConfigured } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError(null);
    setLoading(true);

    try {
      await login(email.trim(), password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Invalid administrator credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemoAdmin = () => {
    setEmail('admin@aurasalon.com');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-parlour-burgundy-deep via-parlour-burgundy to-parlour-rose-dark flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative ambient glowing circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-parlour-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-parlour-rose/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        
        {/* Salon Branding Crest */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-parlour-gold to-parlour-rose mx-auto flex items-center justify-center text-parlour-burgundy shadow-glow-gold mb-3">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-white tracking-wide">
            ADMIN LOGIN
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-parlour-gold-light mt-1">
            Beauty Parlour Management
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 space-y-6">
          
          {error && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
                Admin Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@aurasalon.com"
                  className="w-full px-4 py-3 pl-11 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 text-sm focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-parlour-charcoal"
                />
                <Mail className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pl-11 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 text-sm focus:outline-none focus:ring-2 focus:ring-parlour-rose/40 text-parlour-charcoal"
                />
                <Lock className="w-4 h-4 text-parlour-rose-muted absolute left-4 top-3.5" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-parlour-gold-light" />
                  <span>Login to Dashboard</span>
                </>
              )}
            </button>
          </form>

          {/* Demo Admin Quick Helper */}
          <div className="pt-4 border-t border-parlour-rose/15 text-center space-y-2">
            <button
              type="button"
              onClick={handleFillDemoAdmin}
              className="text-xs text-parlour-rose-dark hover:text-parlour-burgundy font-semibold inline-flex items-center gap-1.5 bg-parlour-blush px-3.5 py-1.5 rounded-full border border-parlour-rose/20 transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5 text-parlour-gold" />
              Fill Demo Admin Credentials
            </button>
            <p className="text-[11px] text-parlour-muted font-light">
              Default demo: <code>admin@aurasalon.com</code> / <code>admin123</code>
            </p>
          </div>

        </div>

        {/* Discreet Back to Public Website */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-xs text-parlour-blush-soft/70 hover:text-white transition-colors"
          >
            ← Return to Public Website
          </a>
        </div>

      </div>
    </div>
  );
}
