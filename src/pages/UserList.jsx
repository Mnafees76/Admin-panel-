import React from 'react';
import { Search, Download, Plus, MoreHorizontal, ArrowUpDown } from 'lucide-react';

const users = [
  { id: 1, name: 'Eleni Rondos', email: 'eleni.rondos@gmail.com', role: 'Admin', country: 'United States', status: 'Active', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
  { id: 2, name: 'John Doe', email: 'john.doe@example.com', role: 'Staff', country: 'Canada', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { id: 3, name: 'Sarah Connor', email: 'sarah.c@gmail.com', role: 'Manager', country: 'United Kingdom', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { id: 4, name: 'Michael Smith', email: 'michael.smith@yahoo.com', role: 'Customer', country: 'Australia', status: 'Rejected', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
  { id: 5, name: 'Ayesha Khan', email: 'ayesha.k@gmail.com', role: 'Developer', country: 'Pakistan', status: 'Active', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
];

export default function UserList({ onAddNew }) {
  return (
    <div className="space-y-4 font-sans">
      {/* Breadcrumb Header */}
      <div className="flex justify-between items-center text-xs text-slate-500">
        <h2 className="text-lg font-bold text-slate-800">User List</h2>
        <div className="flex items-center gap-2">
          <span>🏠</span> / <span>Users</span> / <span className="text-slate-800 font-semibold">List</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3 top-3 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search user..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
              <Download size={16} /> Download
            </button>
            <button 
              onClick={onAddNew}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition shadow-sm"
            >
              <Plus size={16} /> Add User
            </button>
          </div>
        </div>

        {/* User Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider bg-slate-50">
                <th className="p-3 w-10"><input type="checkbox" className="rounded border-slate-300" /></th>
                <th className="py-3 px-4 font-semibold">
                  <div className="flex items-center gap-1 cursor-pointer">
                    User <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="py-3 px-4 font-semibold">Role</th>
                <th className="py-3 px-4 font-semibold">Country</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/80 transition">
                  <td className="p-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img src={u.avatar} alt={u.name} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                      <div>
                        <p className="font-semibold text-slate-800">{u.name}</p>
                        <p className="text-xs text-slate-400">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-medium">{u.role}</td>
                  <td className="py-3 px-4 text-slate-600">{u.country}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      u.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                      u.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-500'
                    }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}