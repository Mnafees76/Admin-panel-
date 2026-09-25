import React from 'react';
import { mockProducts } from '../data/mockData';

const ProductsGrid = ({ onOpenModal }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 text-lg">Product Management</h3>
        <button 
          onClick={onOpenModal}
          className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
        >
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockProducts.map((prod) => (
          <div key={prod.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50">
            <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-semibold">
              {prod.category}
            </span>
            <h4 className="font-bold text-slate-800 mt-2">{prod.name}</h4>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-slate-900">{prod.price}</span>
              <span className="text-xs text-slate-400">{prod.stock} in stock</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;