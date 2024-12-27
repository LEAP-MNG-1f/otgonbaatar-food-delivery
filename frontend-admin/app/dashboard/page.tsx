"use client";
import { useState, useEffect } from "react";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredient: string;
};

type User = {
  _id: string;
  name: string;
  email: string;
  phoneNumer?: string;
  role?: string;
};

type Order = {
  _id: string;
  userId: User;
  orderNumber: number;
  foodIds: Food[];
  totalPrice: number;
  process: "Progress" | "Delivered" | "Waiting" | "Active";
  createdDate: string;
  district: string;
  khoroo: string;
  apartment: string;
};

const Dashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("http://localhost:8000/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleProcessChange = (id: string, newProcess: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === id
          ? { ...order, process: newProcess as Order["process"] }
          : order
      )
    );
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </div>

      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[#18BA51] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Order #
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Buyer Info
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Payment
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Address
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Delivery
              </th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr
                key={order._id}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-4 text-sm text-gray-800">
                  {order.orderNumber}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <div>
                    <p className="font-medium">{order.userId.name}</p>
                    <p className="text-sm text-gray-500">
                      {order.userId.email}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {order.totalPrice}₮
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {order.district}, {order.khoroo}, {order.apartment}
                </td>
                <td className="px-6 py-4 text-sm">
                  <select
                    className="px-3 py-1 rounded text-xs font-semibold bg-gray-100 border outline-none"
                    value={order.process}
                    onChange={(e) =>
                      handleProcessChange(order._id, e.target.value)
                    }
                  >
                    <option value="Progress">Progress</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Waiting">Waiting</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center items-center py-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-1 px-3 py-1 rounded ${
                page === currentPage
                  ? "bg-[#18BA51] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
