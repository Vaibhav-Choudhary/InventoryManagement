
import {
  Package,
  Boxes,
  CircleAlert,
  Activity
} from 'lucide-react';

import StatCard from '../components/StatCard';
import { products, movements } from '../data/demoData';

function Dashboard() {
  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
  );

  const lowStock = products.filter(
    product => product.stock <= product.minStock
  ).length;

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Here's what's happening with your inventory today.</p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Products"
          value={products.length}
          description="Products in inventory"
          icon={Package}
          color="purple"
        />

        <StatCard
          title="Total Stock Units"
          value={totalStock}
          description="Across all products"
          icon={Boxes}
          color="blue"
        />

        <StatCard
          title="Low / Out of Stock"
          value={lowStock}
          description="Products needing attention"
          icon={CircleAlert}
          color="orange"
        />

        <StatCard
          title="Stock Movements"
          value={movements.length}
          description="Demo recent movements"
          icon={Activity}
          color="green"
        />
      </div>

      <div className="content-grid">
        <section className="panel">
          <h3>Recent Stock Movements</h3>
          <p className="panel-description">Latest inventory activity</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Reason</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {movements.map(movement => (
                  <tr key={movement.id}>
                    <td>{movement.product}</td>
                    <td>{movement.type}</td>
                    <td>{movement.quantity}</td>
                    <td>{movement.reason}</td>
                    <td>{movement.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <h3>Inventory Status</h3>
          <p className="panel-description">Current product stock levels</p>

          {products.map(product => {
            let status = 'In Stock';

            if (product.stock === 0) {
              status = 'Out of Stock';
            } else if (product.stock <= product.minStock) {
              status = 'Low Stock';
            }

            return (
              <div className="inventory-row" key={product.id}>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.stock} {product.unit}</span>
                </div>

                <span className={`status-badge ${status.toLowerCase().replaceAll(' ', '-')}`}>
                  {status}
                </span>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
