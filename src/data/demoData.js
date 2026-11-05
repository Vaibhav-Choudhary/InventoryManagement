
export const products = [
  {
    id: 'PRD-001',
    name: 'Premium Office Chair',
    category: 'Furniture',
    unit: 'pcs',
    stock: 128,
    minStock: 25
  },
  {
    id: 'PRD-002',
    name: 'Plywood Sheet 18mm',
    category: 'Raw Material',
    unit: 'sheets',
    stock: 12,
    minStock: 20
  },
  {
    id: 'PRD-003',
    name: 'Steel Storage Rack',
    category: 'Storage',
    unit: 'pcs',
    stock: 64,
    minStock: 15
  },
  {
    id: 'PRD-004',
    name: 'Ergonomic Desk',
    category: 'Furniture',
    unit: 'pcs',
    stock: 0,
    minStock: 10
  }
];

export const movements = [
  {
    id: 'MOV-001',
    product: 'Premium Office Chair',
    type: 'Stock In',
    quantity: '+24 pcs',
    reason: 'Production',
    date: 'Today'
  },
  {
    id: 'MOV-002',
    product: 'Plywood Sheet 18mm',
    type: 'Stock Out',
    quantity: '-8 sheets',
    reason: 'Production usage',
    date: 'Today'
  },
  {
    id: 'MOV-003',
    product: 'Steel Storage Rack',
    type: 'Stock In',
    quantity: '+12 pcs',
    reason: 'Purchase receipt',
    date: 'Yesterday'
  }
];
