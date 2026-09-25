import React from 'react';
import { CreditCard, Video, ShoppingBag, UserPlus, MoreHorizontal } from 'lucide-react';

export default function CrmDashboard() {
  return (
    <div className="space-y-6">
      {/* Top 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-sky-500 text-white p-5 rounded-2xl shadow-sm relative overflow-hidden flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">$203k</h3>
            <p className="text-xs text-sky-100 font-medium mt-1">Total Income</p>
          </div>
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <CreditCard size={24} />
          </div>
        </div>

        <div className="bg-rose-50 text-slate-800 p-5 rounded-2xl border border-rose-100 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">$120k</h3>
            <p className="text-xs text-slate-500 font-medium mt-1">Meeting attends</p>
          </div>
          <div className="p-3 bg-rose-100 text-rose-500 rounded-xl">
            <Video size={24} />
          </div>
        </div>

        <div className="bg-amber-50 text-slate-800 p-5 rounded-2xl border border-amber-100 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">$234k</h3>
            <p className="text-xs text-slate-500 font-medium mt-1">Sales improve</p>
          </div>
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
            <ShoppingBag size={24} />
          </div>
        </div>

        <div className="bg-emerald-50 text-slate-800 p-5 rounded-2xl border border-emerald-100 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">$234k</h3>
            <p className="text-xs text-slate-500 font-medium mt-1">New users</p>
          </div>
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
            <UserPlus size={24} />
          </div>
        </div>
      </div>

      {/* Middle Line Chart Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base font-semibold text-slate-700">Overall Performance</h2>
          <span className="text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-medium">Monthly</span>
        </div>
        
        {/* Custom SVG Line Chart */}
        <div className="h-64 w-full relative pt-4">
          <svg className="w-full h-48 overflow-visible" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="
                0,190 
                100,190 
                200,40 
                300,120 
                400,90 
                500,130 
                600,10 
                700,130 
                800,130 
                900,180 
                1000,140
              "
            />
          </svg>
          <div className="flex justify-between text-xs text-slate-400 mt-6 font-medium">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
          </div>
        </div>
      </div>

      {/* Bottom Section (Lead Source Pie Chart & Bar Chart) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-800">Lead Source</h3>
            <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={18} /></button>
          </div>
          
          <div className="flex items-center justify-center py-6">
            <div className="w-40 h-40 rounded-full border-8 border-sky-400 border-t-indigo-600 border-r-sky-200 transform -rotate-45 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center font-bold text-slate-600 text-sm">
                Sources
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
            <div className="flex justify-between"><span className="text-slate-500">Social Media</span> <span className="font-semibold">9</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Website</span> <span className="font-semibold">100+</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Phone Call</span> <span className="font-semibold">100+</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Mail</span> <span className="font-semibold">100+</span></div>
          </div>
        </div>

        {/* Bar Chart Card */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-800">Sales Performance</h3>
            <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={18} /></button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 text-center bg-slate-50 p-4 rounded-xl">
            <div>
              <p className="text-xl font-bold text-slate-800">200</p>
              <p className="text-xs text-slate-400">Conversion Rate</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-800">120</p>
              <p className="text-xs text-slate-400">Average Deal</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-800">234</p>
              <p className="text-xs text-slate-400">Sales Target</p>
            </div>
          </div>

          {/* Bar Chart Visual */}
          <div className="h-44 flex items-end justify-between gap-3 px-4 pt-4 border-b border-slate-100 pb-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
              const heights = ['h-24', 'h-32', 'h-20', 'h-20', 'h-36', 'h-28', 'h-24'];
              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <div className={`w-full bg-sky-400 rounded-t-md ${heights[idx]} relative`}>
                    <div className="absolute top-0 w-full h-1/3 bg-sky-500 rounded-t-md"></div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}