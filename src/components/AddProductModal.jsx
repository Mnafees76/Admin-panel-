import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddProductModal = ({ isOpen, onClose, onProductAdded }) => {
  // Input fields ke liye states
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Form submit hone par backend ko data bhejne ka function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          price: Number(price), // Price ko number me convert karna
          description, 
          image 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Product successfully added! 🎉');
        // Form fields clear karein
        setName('');
        setPrice('');
        setDescription('');
        setImage('');
        setLoading(false);
        
        // Yeh function list ko foran update kar dega bagair refresh ke
        if (onProductAdded) {
          onProductAdded();
        }

        onClose(); // Modal band kar dein
      } else {
        alert('Error: ' + data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Server error:', error);
      alert('Backend server se connect nahi ho saka! Check karein ke server chal raha hai.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">Add New Product</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Product Name</label>
            <input 
              type="text" 
              placeholder="Enter product name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Price</label>
            <input 
              type="number" 
              placeholder="0.00" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Description</label>
            <input 
              type="text" 
              placeholder="Product description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Image URL</label>
            <input 
              type="text" 
              placeholder="https://example.com/image.jpg" 
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none" 
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded-xl text-sm font-semibold text-slate-600">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold">
              {loading ? 'Saving...' : 'Save Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;