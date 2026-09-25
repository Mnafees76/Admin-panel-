import React from 'react';
import { ChevronDown, MoreHorizontal, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { growthData, popularStocks } from '../data/mockData';

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Total Growth Bar Chart */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs font-medium text-slate-400">Total Growth</p>
            <h3 className="text-2xl font-bold text-slate-800">$2,324.00</h3>
          </div>
          <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-1.5 text-sm text-slate-600 cursor-pointer">
            Today <ChevronDown size={16} />
          </div>
        </div>

        <div className="h-64 flex items-end justify-between gap-3 pt-6 px-2 border-b border-slate-100">
          {growthData.map((item, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full max-w-[18px] flex flex-col rounded-t overflow-hidden h-full justify-end">
                <div style={{ height: `${item.profit}%` }} className="bg-indigo-600"></div>
                <div style={{ height: `${item.loss}%` }} className="bg-sky-400"></div>
                <div style={{ height: `${item.investment}%` }} className="bg-indigo-200"></div>
              </div>
              <span className="text-[10px] text-slate-400 mt-2">{item.month}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-4 text-xs text-slate-500">
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-indigo-200"></span> Investment</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-sky-400"></span> Loss</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-indigo-600"></span> Profit</div>
        </div>
      </div>

      {/* Popular Stocks Sidebar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800 text-lg">Popular Stocks</h3>
            <button className="text-slate-400"><MoreHorizontal size={18} /></button>
          </div>

          <div className="bg-indigo-50/60 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-700">Bajaj Finery</p>
                <span className="text-xs text-emerald-600 font-medium">10% Profit</span>
              </div>
              <p className="font-bold text-slate-800">$1839.00</p>
            </div>
            <div className="mt-3 h-10">
              <svg className="w-full h-full" viewBox="0 0 100 30">
                <path d="M 0 20 Q 25 5 50 18 T 100 10" fill="none" stroke="#6366f1" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            {popularStocks.map((stock, i) => (
              <div key={i} className="flex justify-between items-center py-1">
                <div>
                  <p className="text-sm font-semibold text-slate-700">{stock.name}</p>
                  <p className={`text-xs ${stock.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>{stock.status}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-800">{stock.price}</span>
                  <span className={`p-1 rounded ${stock.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                    {stock.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;