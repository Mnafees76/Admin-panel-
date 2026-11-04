import React, { useState, useEffect } from 'react';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Edit state
  const [editingProduct, setEditingProduct] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  // 1. Saare products fetch karna
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 2. Product Delete karna
  const handleDelete = async (id) => {
    if (window.confirm('Kya aap waqai is product ko delete karna chahte hain?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          fetchProducts(); // List refresh ho jayegi
        } else {
          alert('Error: ' + data.message);
        }
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  // 3. Edit Button dabane par modal/form kholna aur data set karna
  const handleEditClick = (product) => {
    setEditingProduct(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
  };

  // 4. Update Product Submit karna
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/products/${editingProduct}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price: Number(price), description, image }),
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setEditingProduct(null); // Edit mode khatam
        fetchProducts(); // List refresh
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  if (loading) {
    return <div className="p-6 text-center text-slate-500">Loading products...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Manage Products (Edit & Delete)</h2>

      {/* Agar Edit mode on ho toh ye form nazar aayega */}
      {editingProduct && (
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-md border">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Edit Product</h3>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Product Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="px-3 py-2 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500" 
                required 
              />
              <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                className="px-3 py-2 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500" 
                required 
              />
            </div>
            <input 
              type="text" 
              placeholder="Description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="w-full px-3 py-2 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500" 
            />
            <input 
              type="text" 
              placeholder="Image URL" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              className="w-full px-3 py-2 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500" 
            />
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700">Update Product</button>
              <button type="button" onClick={() => setEditingProduct(null)} className="px-4 py-2 border rounded-xl text-sm font-semibold text-slate-600">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-slate-600 text-sm">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-400">Koi product mojood nahi hai.</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id} className="border-b hover:bg-slate-50">
                  <td className="p-4">
                    <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                  </td>
                  <td className="p-4 font-semibold text-slate-800">{product.name}</td>
                  <td className="p-4 text-indigo-600 font-bold">Rs. {product.price}</td>
                  <td className="p-4 text-center space-x-2">
                    <button 
                      onClick={() => handleEditClick(product)} 
                      className="px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-semibold hover:bg-amber-600"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(product._id)} 
                      className="px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-semibold hover:bg-rose-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;