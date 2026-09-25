import React from 'react';
import { latestCustomers } from '../data/mockData';

const OrdersTable = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <h3 className="font-bold text-slate-800 text-lg mb-4">Latest Customers</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase">
              <th className="py-3 px-2">#</th>
              <th className="py-3 px-2">Country</th>
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Average</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm">
            {latestCustomers.map((cust) => (
              <tr key={cust.id} className="hover:bg-slate-50/50">
                <td className="py-3 px-2 font-medium text-slate-400">#{cust.id}</td>
                <td className="py-3 px-2 flex items-center gap-2">
                  <span>{cust.flag}</span>
                  <span className="text-slate-700 font-medium">{cust.country}</span>
                </td>
                <td className="py-3 px-2 font-semibold text-slate-800">{cust.name}</td>
                <td className="py-3 px-2 text-slate-600 font-medium">{cust.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;