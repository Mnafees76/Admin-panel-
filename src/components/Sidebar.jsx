import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart2, 
  Database, 
  LineChart, 
  Users, 
  UserCheck, 
  ShoppingCart, 
  MessageSquare, 
  Kanban,
  ChevronDown
} from 'lucide-react';

export default function Sidebar({ activePage, setActivePage }) {
  const [openUsers, setOpenUsers] = useState(true);

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 h-screen flex flex-col p-4 shrink-0 font-sans">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 px-3 py-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
          b
        </div>
        <span className="text-xl font-bold tracking-wider text-slate-800">BERRY</span>
      </div>

      <div className="overflow-y-auto space-y-6 pr-1 text-sm">
        {/* Dashboard Section */}
        <div>
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Dashboard
          </p>
          <div className="space-y-1">
            <button 
              onClick={() => setActivePage('crm')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition ${
                activePage === 'crm' ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard size={18} />
                <span>CRM</span>
              </div>
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition">
              <div className="flex items-center gap-3">
                <BarChart2 size={18} />
                <span>Statistics</span>
              </div>
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition">
              <div className="flex items-center gap-3">
                <Database size={18} />
                <span>Data</span>
              </div>
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition">
              <div className="flex items-center gap-3">
                <LineChart size={18} />
                <span>Chart</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Application Section */}
        <div>
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Application
          </p>
          <div className="space-y-1">
            {/* Users Group */}
            <div>
              <button 
                onClick={() => setOpenUsers(!openUsers)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition"
              >
                <div className="flex items-center gap-3">
                  <Users size={18} />
                  <span>Users</span>
                </div>
                <ChevronDown size={14} className={`text-slate-400 transition-transform ${openUsers ? 'rotate-180' : ''}`} />
              </button>

              {openUsers && (
                <div className="ml-7 pl-3 border-l-2 border-slate-200 space-y-1 my-1">
                  <button 
                    onClick={() => setActivePage('user-list')}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition ${
                      activePage === 'user-list' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    • List
                  </button>
                </div>
              )}
            </div>

            {/* Customer List Page */}
            <button 
              onClick={() => setActivePage('customers')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition ${
                activePage === 'customers' ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <UserCheck size={18} />
                <span>Customer</span>
              </div>
            </button>

            {/* Manage Products Page Button */}
            <button 
              onClick={() => setActivePage('products')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition ${
                activePage === 'products' ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingCart size={18} />
                <span>Manage Products</span>
              </div>
            </button>

            {/* Order Group */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-700 font-medium bg-slate-100/80">
                <div className="flex items-center gap-3">
                  <ShoppingCart size={18} className="text-indigo-600" />
                  <span>Order</span>
                </div>
                <ChevronDown size={14} className="text-slate-400" />
              </div>

              {/* Sub-menu items */}
              <div className="ml-7 pl-3 border-l-2 border-slate-200 space-y-1 my-1">
                <button 
                  onClick={() => setActivePage('order-list')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition ${
                    activePage === 'order-list' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  • List
                </button>
                <button 
                  onClick={() => setActivePage('order-create')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition ${
                    activePage === 'order-create' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  • Create
                </button>
                <button 
                  onClick={() => setActivePage('order-empty')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition ${
                    activePage === 'order-empty' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  • Details / Cart
                </button>
              </div>
            </div>

            {/* Other Apps */}
            <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition">
              <div className="flex items-center gap-3">
                <MessageSquare size={18} />
                <span>Chat</span>
              </div>
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition">
              <div className="flex items-center gap-3">
                <Kanban size={18} />
                <span>Kanban</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}