import React from 'react';

const AnalyticsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs text-slate-400 font-semibold">TOTAL SESSIONS</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">10,820</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs text-slate-400 font-semibold">PAGE VIEWS</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">45,210</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs text-slate-400 font-semibold">BOUNCE RATE</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">24.5%</h2>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;