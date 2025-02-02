import React, { useState } from "react";

const PaymentLogs = () => {
  // Sample payment log data
  const initialPaymentLogs = [
    {
      id: 1,
      date: "2025-02-01",
      house: "House A",
      amountPaid: 5000,
      paymentMethod: "Bank Transfer",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-02-10",
      house: "House B",
      amountPaid: 4500,
      paymentMethod: "Credit Card",
      status: "Pending",
    },
    {
      id: 3,
      date: "2025-02-15",
      house: "House C",
      amountPaid: 6000,
      paymentMethod: "Cash",
      status: "Completed",
    },
  ];

  const [paymentLogs, setPaymentLogs] = useState(initialPaymentLogs);
  const [editingLog, setEditingLog] = useState(null);

  // Handle opening the edit modal
  const handleEdit = (log) => {
    setEditingLog({ ...log });
  };

  // Close the edit modal
  const handleClose = () => {
    setEditingLog(null);
  };

  // Handle form submission (updating the payment log)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingLog) {
      setPaymentLogs((prevLogs) =>
        prevLogs.map((log) =>
          log.id === editingLog.id ? editingLog : log
        )
      );
      setEditingLog(null); // Close the modal after submission
    }
  };

  return (
    <div className="max-w-full h-screen bg-white shadow-md rounded-lg overflow-auto">
      <h2 className="text-xl font-semibold text-center mb-4">Entry Logs</h2>

      {/* Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left border-b font-semibold text-lg">Date</th>
            <th className="p-4 text-left border-b font-semibold text-lg">House</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Amount Paid</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Payment Method</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Status</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paymentLogs.map((log, index) => (
            <tr key={log.id} className="hover:bg-gray-100">
              <td className="p-4 border-b text-lg">{log.date}</td>
              <td className="p-4 border-b text-lg">{log.house}</td>
              <td className="p-4 border-b text-lg">${log.amountPaid}</td>
              <td className="p-4 border-b text-lg">{log.paymentMethod}</td>
              <td className="p-4 border-b text-lg">{log.status}</td>
              <td className="p-4 border-b text-lg">
                <button
                  onClick={() => handleEdit(log)}
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
      {editingLog && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4">Edit Payment Log</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  value={editingLog.date}
                  onChange={(e) =>
                    setEditingLog({ ...editingLog, date: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">House</label>
                <input
                  type="text"
                  value={editingLog.house}
                  onChange={(e) =>
                    setEditingLog({ ...editingLog, house: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Amount Paid</label>
                <input
                  type="number"
                  value={editingLog.amountPaid}
                  onChange={(e) =>
                    setEditingLog({
                      ...editingLog,
                      amountPaid: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Payment Method</label>
                <input
                  type="text"
                  value={editingLog.paymentMethod}
                  onChange={(e) =>
                    setEditingLog({
                      ...editingLog,
                      paymentMethod: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Status</label>
                <input
                  type="text"
                  value={editingLog.status}
                  onChange={(e) =>
                    setEditingLog({ ...editingLog, status: e.target.value })
                  }
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

export default PaymentLogs;
