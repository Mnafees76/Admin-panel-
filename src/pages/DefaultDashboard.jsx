import React, { useState } from 'react';
import StatCard from '../components/StatCard';
import ChartsSection from '../components/ChartsSection';
import OrdersTable from '../components/OrdersTable';
import ProductsGrid from '../components/ProductsGrid';
import AddProductModal from '../components/AddProductModal';

const DefaultDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <StatCard />
      <ChartsSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrdersTable />
        <ProductsGrid onOpenModal={() => setIsModalOpen(true)} />
      </div>
      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default DefaultDashboard;