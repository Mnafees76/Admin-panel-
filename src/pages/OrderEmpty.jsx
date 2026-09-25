import React from 'react';

export default function OrderEmpty() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
      {/* Shopping Bag Illustration Icon */}
      <div className="relative mb-6">
        <div className="w-36 h-40 bg-sky-100 rounded-2xl flex flex-col items-center justify-center border-2 border-sky-200 relative">
          <div className="w-16 h-8 border-2 border-sky-300 border-b-0 rounded-t-full absolute -top-8"></div>
          <div className="flex gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          </div>
          <div className="w-8 h-1 bg-sky-300 rounded-full"></div>
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-sky-200 rounded-full blur-sm opacity-60"></div>
      </div>

      <h2 className="text-xl font-bold text-slate-800 mb-2">
        No products selected!
      </h2>
      <p className="text-slate-400 text-sm max-w-sm">
        No products selected. Use the search bar to find and add items, then continue.
      </p>
    </div>
  );
}