import React from 'react';
import { Search, Download, Plus, ArrowUpDown } from 'lucide-react';

const customers = [
  { id: 1, name: 'Caroline Pandolfi', email: 'caroline1@gmail.com', phone: '6187873453', country: 'United States', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { id: 2, name: 'Liam Smith', email: 'liam2@gmail.com', phone: '2125551234', country: 'United States', status: 'Inactive', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { id: 3, name: 'Emma Johnson', email: 'emma3@gmail.com', phone: '3105555678', country: 'Canada', status: 'Active', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
  { id: 4, name: 'Noah Brown', email: 'noah4@gmail.com', phone: '4155559999', country: 'United Kingdom', status: 'Inactive', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' }
];

export default function CustomerList({ onAddNew }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      {/* Top Search & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search customer" 
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

      {/* Customer Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider bg-slate-50">
              <th className="py-3 px-4 font-semibold">
                <div className="flex items-center gap-1 cursor-pointer">
                  Customer Name <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="py-3 px-4 font-semibold">Email</th>
              <th className="py-3 px-4 font-semibold">Phone</th>
              <th className="py-3 px-4 font-semibold">Country</th>
              <th className="py-3 px-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50/80 transition">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img src={c.avatar} alt={c.name} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                    <div>
                      <p className="font-semibold text-slate-800">{c.name}</p>
                      <p className="text-xs text-slate-400">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-600">{c.email}</td>
                <td className="py-3 px-4 text-slate-600">{c.phone}</td>
                <td className="py-3 px-4 text-slate-600">{c.country}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    c.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'
                  }`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}