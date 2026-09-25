import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CrmDashboard from './pages/CrmDashboard';
import CustomerList from './pages/CustomerList';
import UserList from './pages/UserList';
import OrderList from './pages/OrderList';
import OrderCreate from './pages/OrderCreate';
import OrderEmpty from './pages/OrderEmpty';

export default function App() {
  const [activePage, setActivePage] = useState('crm');

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header Component */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="p-6 max-w-7xl w-full mx-auto">
          {activePage === 'crm' && <CrmDashboard />}
          {activePage === 'user-list' && <UserList onAddNew={() => setActivePage('order-create')} />}
          {activePage === 'customers' && <CustomerList onAddNew={() => setActivePage('order-create')} />}
          {activePage === 'order-list' && <OrderList onAddNew={() => setActivePage('order-create')} />}
          {activePage === 'order-create' && <OrderCreate />}
          {activePage === 'order-empty' && <OrderEmpty />}
        </main>
      </div>
    </div>
  );
}