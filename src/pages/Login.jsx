import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Apne live backend ka login API URL yahan dalein
      const response = await fetch('https://backend-psi-ecru-75.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login Successful! 🎉');
        // Token ko localStorage me save kar lein taake user dobara refresh karne par logout na ho
        localStorage.setItem('token', data.token || 'dummy-token-logged-in');
        setLoading(false);
        onLoginSuccess(); // App.js ko batane ke liye ke login ho gaya hai
      } else {
        alert('Login Failed: ' + (data.message || 'Invalid credentials'));
        setLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Server se connect nahi ho saka!');
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-900 font-sans">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold">
            b
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-sm text-slate-500">Sign in to access your admin dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600">Email Address</label>
            <input 
              type="email" 
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold text-slate-600">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}