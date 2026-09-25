import React from 'react';
import { Search, Download, Plus, ArrowUp } from 'lucide-react';

const orders = [
  { id: '#790955', customer: 'Joseph William', branch: 'USA', payment: 'Card', qty: 6, date: '13 Sept 2026' },
  { id: '#790956', customer: 'Emma Watson', branch: 'Canada', payment: 'Card', qty: 1, date: '12 Sept 2026' },
  { id: '#790957', customer: 'Rahul Sharma', branch: 'India', payment: 'UPI', qty: 2, date: '11 Sept 2026' }
];

export default function OrderList({ onAddNew }) {
  return (
    <div className="space-y-4">
      {/* Breadcrumb Header */}
      <div className="flex justify-between items-center text-xs text-slate-500">
        <h2 className="text-lg font-bold text-slate-800">List</h2>
        <div className="flex items-center gap-2">
          <span>🏠</span> / <span>Order</span> / <span className="text-slate-800 font-semibold">List</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3 top-3 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search order" 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
              <Download size={16} /> Download
            </button>
            <button 
              onClick={onAddNew}
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition shadow-sm"
            >
              <Plus size={16} /> Add New
            </button>
          </div>
        </div>

        {/* Order Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-xs font-semibold bg-slate-50">
                <th className="p-3 w-10"><input type="checkbox" className="rounded border-slate-300" /></th>
                <th className="p-3 cursor-pointer">
                  <div className="flex items-center gap-1">
                    ID <ArrowUp size={12} />
                  </div>
                </th>
                <th className="p-3">Customer Name</th>
                <th className="p-3">Branch</th>
                <th className="p-3">Payment Type</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Order Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-50/80 transition">
                  <td className="p-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="p-3 font-medium text-indigo-600">{o.id}</td>
                  <td className="p-3 font-semibold text-slate-800">{o.customer}</td>
                  <td className="p-3 text-slate-600">{o.branch}</td>
                  <td className="p-3 text-slate-600">{o.payment}</td>
                  <td className="p-3 text-slate-600">{o.qty}</td>
                  <td className="p-3 text-slate-600">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}