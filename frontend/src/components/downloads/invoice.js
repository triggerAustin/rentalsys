import React from "react";

const PrintableInvoiceTable = () => {
    const data = [
        {
          invoiceId: "INV001",
          house: "House A",
          tenant: "Alice Johnson",
          amount: 1500,
          dueDate: "2025-02-05",
          status: "Paid",
        },
        {
          invoiceId: "INV002",
          house: "House B",
          tenant: "Bob Smith",
          amount: 1200,
          dueDate: "2025-02-10",
          status: "Unpaid",
        },
        {
          invoiceId: "INV003",
          house: "House C",
          tenant: "Charlie Lee",
          amount: 1800,
          dueDate: "2025-02-15",
          status: "Paid",
        },
      ];
      
  // Handle print functionality
  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write('<html><head><title>Invoice</title></head><body>');
    printWindow.document.write('<h2>Invoice</h2>');
    printWindow.document.write('<table border="1" cellpadding="5" cellspacing="0" style="width:100%;">');
    
    // Table headers
    printWindow.document.write(`
      <thead>
        <tr>
          <th>Invoice ID</th>
          <th>House</th>
          <th>Tenant</th>
          <th>Amount</th>
          <th>Due Date</th>
          <th>Status</th>
        </tr>
      </thead>
    `);

    // Table body (data rows)
    printWindow.document.write('<tbody>');
    data.forEach((row, index) => {
      printWindow.document.write(`
        <tr>
          <td>${row.invoiceId}</td>
          <td>${row.house}</td>
          <td>${row.tenant}</td>
          <td>${row.amount}</td>
          <td>${row.dueDate}</td>
          <td>${row.status}</td>
        </tr>
      `);
    });
    printWindow.document.write('</tbody></table>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-4">
      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-4"
      >
        Print Invoice
      </button>

      {/* Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left border-b font-semibold text-lg">Invoice ID</th>
            <th className="p-4 text-left border-b font-semibold text-lg">House</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Tenant</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Amount</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Due Date</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-4 border-b text-lg">{row.invoiceId}</td>
              <td className="p-4 border-b text-lg">{row.house}</td>
              <td className="p-4 border-b text-lg">{row.tenant}</td>
              <td className="p-4 border-b text-lg">${row.amount}</td>
              <td className="p-4 border-b text-lg">{row.dueDate}</td>
              <td className="p-4 border-b text-lg">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintableInvoiceTable;
