import React from 'react';

export default function OrderCreate() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-4xl mx-auto font-sans">
      <div className="space-y-8">
        {/* Customer Details */}
        <div>
          <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            Customer Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">First Name *</label>
              <input 
                type="text" 
                placeholder="Enter first name" 
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">User Name *</label>
              <input 
                type="text" 
                placeholder="Enter user name" 
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Email *</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number *</label>
              <div className="flex gap-2">
                <select className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50">
                  <option>US</option>
                  <option>PK</option>
                  <option>IN</option>
                </select>
                <input 
                  type="text" 
                  placeholder="1231x xxxxx" 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            Address Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Address *</label>
              <input 
                type="text" 
                placeholder="Enter your address" 
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Pin Code *</label>
                <input 
                  type="text" 
                  placeholder="123456" 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">City *</label>
                <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                  <option value="">Select City</option>
                  <option>Karachi</option>
                  <option>New York</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Country *</label>
                <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                  <option value="">Select Country</option>
                  <option>Pakistan</option>
                  <option>United States</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div>
          <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            Payment
          </h3>
          <div>
            <select className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
              <option>Select Payment Method</option>
              <option>Credit / Debit Card</option>
              <option>UPI / Net Banking</option>
              <option>Cash on Delivery</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-slate-100">
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm transition">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}