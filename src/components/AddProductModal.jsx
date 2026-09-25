import React from 'react';
import { X } from 'lucide-react';

const AddProductModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">Add New Product</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Product Name</label>
            <input type="text" placeholder="Enter product name" className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Price</label>
            <input type="text" placeholder="$0.00" className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded-xl text-sm font-semibold text-slate-600">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold">Save Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;