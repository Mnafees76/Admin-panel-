import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './pages/Login'; // <-- Login page import kar liya
import CrmDashboard from './pages/CrmDashboard';
import CustomerList from './pages/CustomerList';
import UserList from './pages/UserList';
import OrderList from './pages/OrderList';
import OrderCreate from './pages/OrderCreate';
import OrderEmpty from './pages/OrderEmpty';
import AddProductModal from './components/AddProductModal'; // <-- Modal import kar liya
import ManageProducts from './components/ManageProducts';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // <-- Login check ki state
  const [activePage, setActivePage] = useState('crm');
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- Modal open/close ki state

  // Page load hote hi check karein ke user login hai ya nahi, aur dark mode hatayein
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Agar user login nahi hai toh sabse pehle Login page dikhayein
  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header Component */}
        <Header />

        {/* Top Action Bar jahan "Add Product" aur "Logout" ka Button hoga */}
        <div className="px-6 pt-4 flex justify-between items-center bg-white border-b pb-4">
          <h1 className="text-xl font-bold text-slate-800 capitalize">
            {activePage.replace('-', ' ')} Dashboard
          </h1>
          
          <div className="flex items-center gap-3">
            {/* Ye raha wo Button jo Modal kholega */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow-md transition-all flex items-center gap-2"
            >
              + Add Product
            </button>

            {/* Logout Button */}
            <button 
              onClick={() => {
                localStorage.removeItem('token');
                setIsAuthenticated(false);
              }}
              className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-xl text-sm font-semibold transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <main className="p-6 max-w-7xl w-full mx-auto">
          {activePage === 'crm' && <CrmDashboard />}
          {activePage === 'user-list' && <UserList onAddNew={() => setActivePage('order-create')} />}
          {activePage === 'customers' && <CustomerList onAddNew={() => setActivePage('order-create')} />}
          {activePage === 'order-list' && <OrderList onAddNew={() => setActivePage('order-create')} />}
          {activePage === 'order-create' && <OrderCreate />}
          {activePage === 'order-empty' && <OrderEmpty />}
          {activePage === 'products' && <ManageProducts />}
        </main>
      </div>

      {/* Add Product Modal (Updated with auto-refresh) */}
      <AddProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onProductAdded={() => {
          window.location.reload(); // Product add hone ke baad page foran refresh ho kar naya product dikha dega
        }} 
      />
    </div>
  );
}