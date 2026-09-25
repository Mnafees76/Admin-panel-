import React from 'react';
import { Menu, Search, SlidersHorizontal, Radio, Languages, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition">
          <Menu size={20} />
        </button>

        <div className="relative flex items-center">
          <Search size={16} className="absolute left-3 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-9 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
          <SlidersHorizontal size={14} className="absolute right-3 text-slate-400 cursor-pointer hover:text-slate-600" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl">
          <Radio size={18} />
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl">
          <Languages size={18} />
        </button>
        <button className="p-2 text-amber-500 bg-amber-50 hover:bg-amber-100 rounded-xl relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-9 h-9 rounded-full bg-amber-500 border-2 border-white shadow flex items-center justify-center font-bold text-white text-sm">
            N
          </div>
          <button className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-xl">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}