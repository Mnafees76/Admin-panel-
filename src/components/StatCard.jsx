import React from 'react';
import { ArrowUpRight, MoreHorizontal, LayoutDashboard, FileText, BarChart2 } from 'lucide-react';

const StatCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/40 flex items-center justify-center">
            <LayoutDashboard size={20} />
          </div>
          <button className="text-indigo-200 hover:text-white"><MoreHorizontal size={20} /></button>
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">$500.00</h2>
            <span className="p-1 rounded-full bg-indigo-500/50"><ArrowUpRight size={14} /></span>
          </div>
          <p className="text-indigo-200 text-sm mt-1 font-medium">Total Earning</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-xl bg-cyan-400/40 flex items-center justify-center">
            <FileText size={20} />
          </div>
          <div className="bg-white/20 rounded-lg p-1 flex gap-1 text-xs">
            <button className="px-2 py-0.5 rounded bg-white text-blue-600 font-semibold">Month</button>
            <button className="px-2 py-0.5 rounded text-white">Year</button>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold">$961</h2>
              <span className="p-1 rounded-full bg-cyan-400/50"><ArrowUpRight size={14} /></span>
            </div>
            <p className="text-cyan-100 text-sm mt-1 font-medium">Total Order</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-sky-400 to-cyan-500 text-white rounded-2xl p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <BarChart2 size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold">$203k</h3>
            <p className="text-cyan-100 text-xs font-medium">Total Income</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-5 shadow-sm border border-amber-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <BarChart2 size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">$203k</h3>
            <p className="text-slate-400 text-xs font-medium">Total Income</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;