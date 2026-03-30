import React, { useState } from 'react';
import { Search, Plus, Filter, MoreHorizontal, AlertTriangle, X } from 'lucide-react';

const inventoryData = [
  { id: 1, sku: 'SKU-001', name: 'Hyaluronic Acid Serum', category: 'Skincare', stock: 45, minStock: 20, price: '₱1,200', status: 'In Stock' },
  { id: 2, sku: 'SKU-002', name: 'Botox Vials (100U)', category: 'Injectables', stock: 8, minStock: 15, price: '₱15,000', status: 'Low Stock' },
  { id: 3, sku: 'SKU-003', name: 'Vitamin C Complex', category: 'Skincare', stock: 32, minStock: 10, price: '₱1,800', status: 'In Stock' },
  { id: 4, sku: 'SKU-004', name: 'Gold Leaf Mask Sheets', category: 'Consumables', stock: 150, minStock: 50, price: '₱350', status: 'In Stock' },
  { id: 5, sku: 'SKU-005', name: 'Dermal Fillers (1ml)', category: 'Injectables', stock: 2, minStock: 10, price: '₱12,500', status: 'Critical' },
  { id: 6, sku: 'SKU-006', name: 'Numbing Cream (500g)', category: 'Consumables', stock: 12, minStock: 5, price: '₱2,500', status: 'In Stock' },
  { id: 7, sku: 'SKU-007', name: 'Chemical Peel Acid 20%', category: 'Treatments', stock: 5, minStock: 10, price: '₱3,200', status: 'Low Stock' },
];

export function AdminInventory() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8 h-full flex flex-col relative">
      {/* Header Section */}
      <div className="flex items-end justify-between shrink-0">
        <div>
          <h1 className="font-serif text-3xl text-[#1C1C1C] mb-2">Inventory</h1>
          <p className="text-sm text-[#8C8A84]">
            Monitor product levels, consumables, and clinic supplies.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-[#E8E6E1] text-sm text-[#1C1C1C] bg-white hover:bg-[#F5F5F0] transition-colors rounded-none">
            Purchase Order
          </button>
          <button 
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-[#1C1C1C] text-[#C4A47C] text-sm hover:bg-[#2A2A2A] transition-colors rounded-none flex items-center gap-2"
          >
            <Plus size={16} />
            Add Product
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0">
        <div className="bg-white border border-[#E8E6E1] p-4 flex flex-col justify-between">
          <h4 className="text-xs font-medium text-[#8C8A84] uppercase tracking-wider">Total Products</h4>
          <span className="font-serif text-2xl text-[#1C1C1C] mt-2">1,204</span>
        </div>
        <div className="bg-white border border-[#E8E6E1] p-4 flex flex-col justify-between">
          <h4 className="text-xs font-medium text-[#8C8A84] uppercase tracking-wider">Low Stock Alerts</h4>
          <span className="font-serif text-2xl text-[#C4A47C] mt-2">12</span>
        </div>
        <div className="bg-white border border-[#E8E6E1] p-4 flex flex-col justify-between">
          <h4 className="text-xs font-medium text-[#8C8A84] uppercase tracking-wider">Critical Stock</h4>
          <span className="font-serif text-2xl text-red-600 mt-2">3</span>
        </div>
        <div className="bg-white border border-[#E8E6E1] p-4 flex flex-col justify-between">
          <h4 className="text-xs font-medium text-[#8C8A84] uppercase tracking-wider">Inventory Value</h4>
          <span className="font-serif text-2xl text-[#1C1C1C] mt-2">₱1.2M</span>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-[#E8E6E1] p-4 shrink-0">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8C8A84]" size={16} />
          <input 
            type="text" 
            placeholder="Search by SKU, product name, or category..." 
            className="w-full pl-10 pr-4 py-2 text-sm border border-[#E8E6E1] bg-[#FAFAF9] focus:outline-none focus:border-[#C4A47C] transition-colors rounded-none"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#E8E6E1] text-sm text-[#1C1C1C] bg-white hover:bg-[#F5F5F0] transition-colors rounded-none whitespace-nowrap">
            <Filter size={16} />
            Filter Category
          </button>
        </div>
      </div>

      {/* Inventory List */}
      <div className="bg-white border border-[#E8E6E1] flex-1 overflow-hidden flex flex-col">
        <div className="overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full text-sm text-left relative">
            <thead className="text-xs text-[#8C8A84] uppercase tracking-wider border-b border-[#E8E6E1] sticky top-0 bg-white z-10">
              <tr>
                <th className="px-6 py-4 font-medium">SKU</th>
                <th className="px-6 py-4 font-medium">Product Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Unit Price</th>
                <th className="px-6 py-4 font-medium">Stock Level</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E6E1]">
              {inventoryData.map((item) => (
                <tr key={item.id} className="hover:bg-[#FAFAF9] transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-[#8C8A84] font-mono">{item.sku}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1C1C1C]">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#8C8A84]">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1C1C1C]">{item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${item.stock <= item.minStock ? (item.stock <= 5 ? 'text-red-600' : 'text-[#C4A47C]') : 'text-[#1C1C1C]'}`}>
                        {item.stock}
                      </span>
                      <span className="text-xs text-[#8C8A84]">/ {item.minStock} min</span>
                    </div>
                    {/* Tiny visual progress bar for stock level */}
                    <div className="w-16 h-1 mt-1 bg-[#F5F5F0] overflow-hidden">
                      <div 
                        className={`h-full ${item.stock <= item.minStock ? (item.stock <= 5 ? 'bg-red-500' : 'bg-[#C4A47C]') : 'bg-[#1C1C1C]'}`}
                        style={{ width: `${Math.min(100, (item.stock / (item.minStock * 2)) * 100)}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 w-fit text-[11px] uppercase tracking-wider ${
                      item.status === 'In Stock' ? 'bg-[#F5F5F0] text-[#1C1C1C]' :
                      item.status === 'Low Stock' ? 'bg-[#FCF7ED] text-[#C4A47C]' :
                      'bg-red-50 text-red-600 border border-red-100'
                    }`}>
                      {item.status !== 'In Stock' && <AlertTriangle size={10} />}
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-[#8C8A84] hover:text-[#1C1C1C] transition-colors p-2">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-[#1C1C1C]/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg shadow-2xl overflow-hidden border border-[#E8E6E1]">
            <div className="flex items-center justify-between p-6 border-b border-[#E8E6E1] bg-[#FAFAF9]">
              <h2 className="font-serif text-xl text-[#1C1C1C]">Add New Product</h2>
              <button 
                onClick={() => setShowForm(false)}
                className="text-[#8C8A84] hover:text-[#1C1C1C] transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <form className="p-6 space-y-6" onSubmit={(e) => { e.preventDefault(); setShowForm(false); }}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Product Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">SKU</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors"
                      placeholder="e.g. SKU-123"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Category</label>
                    <select className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors text-[#1C1C1C]">
                      <option value="Skincare">Skincare</option>
                      <option value="Injectables">Injectables</option>
                      <option value="Consumables">Consumables</option>
                      <option value="Treatments">Treatments</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Unit Price (₱)</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Initial Stock</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors"
                      min="0"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Minimum Threshold</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors"
                      min="0"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-[#8C8A84] uppercase tracking-wider mb-2">Supplier Info / Notes</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-[#E8E6E1] focus:outline-none focus:border-[#C4A47C] bg-white text-sm transition-colors resize-none h-20"
                    placeholder="Vendor details or storage requirements..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E8E6E1]">
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-[#E8E6E1] text-[#1C1C1C] text-sm hover:bg-[#F5F5F0] transition-colors bg-white"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-[#1C1C1C] text-[#C4A47C] text-sm hover:bg-[#2A2A2A] transition-colors"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}