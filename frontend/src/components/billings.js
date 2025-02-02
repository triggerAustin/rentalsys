import React, { useState } from "react";

const Billings = () => {
  // Define the initial billing data
  const initialBillingData = [
    {
      house: "House A",
      landlord: "John Doe",
      totalRent: 5000,
      totalExpenses: 1200,
      balance: 3800,
    },
    {
      house: "House B",
      landlord: "Jane Smith",
      totalRent: 4500,
      totalExpenses: 1000,
      balance: 3500,
    },
    {
      house: "House C",
      landlord: "Mark Lee",
      totalRent: 6000,
      totalExpenses: 1500,
      balance: 4500,
    },
  ];

  // State to manage billing data and edit modal state
  const [billingData, setBillingData] = useState(initialBillingData);
  const [editingBill, setEditingBill] = useState(null);

  // Open the edit modal and pre-fill the form with the current billing data
  const handleEdit = (bill) => {
    setEditingBill({ ...bill });
  };

  // Close the modal without saving
  const handleClose = () => {
    setEditingBill(null);
  };

  // Handle form submission (updating the billing details)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingBill) {
      setBillingData((prevData) =>
        prevData.map((bill) =>
          bill.house === editingBill.house ? editingBill : bill
        )
      );
      setEditingBill(null); // Close the modal after submission
    }
  };

  return (
    <div className="max-w-full h-screen bg-white shadow-md rounded-lg overflow-auto">
      <h2 className="text-xl font-semibold text-center mb-4">Billing Information</h2>

      {/* Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left border-b font-semibold text-lg">House</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Landlord</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Total Rent</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Total Expenses</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Balance</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Actions</th>
          </tr>
        </thead>

        <tbody>
          {billingData.map((bill, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-4 border-b text-lg">{bill.house}</td>
              <td className="p-4 border-b text-lg">{bill.landlord}</td>
              <td className="p-4 border-b text-lg">${bill.totalRent}</td>
              <td className="p-4 border-b text-lg">${bill.totalExpenses}</td>
              <td className="p-4 border-b text-lg">${bill.balance}</td>
              <td className="p-4 border-b text-lg">
                <button
                  onClick={() => handleEdit(bill)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editingBill && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4">Edit Billing</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">House</label>
                <input
                  type="text"
                  value={editingBill.house}
                  onChange={(e) => setEditingBill({ ...editingBill, house: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Landlord</label>
                <input
                  type="text"
                  value={editingBill.landlord}
                  onChange={(e) => setEditingBill({ ...editingBill, landlord: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Total Rent</label>
                <input
                  type="number"
                  value={editingBill.totalRent}
                  onChange={(e) => setEditingBill({ ...editingBill, totalRent: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Total Expenses</label>
                <input
                  type="number"
                  value={editingBill.totalExpenses}
                  onChange={(e) => setEditingBill({ ...editingBill, totalExpenses: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Balance</label>
                <input
                  type="number"
                  value={editingBill.balance}
                  onChange={(e) => setEditingBill({ ...editingBill, balance: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billings;
