import React from "react";

const PrintableReportsTable = () => {
    const data = [
        {
          reportId: "R001",
          house: "House A",
          landlord: "John Doe",
          totalRent: 5000,
          totalExpenses: 1200,
          balance: 3800,
          date: "2025-02-01",
        },
        {
          reportId: "R002",
          house: "House B",
          landlord: "Jane Smith",
          totalRent: 4500,
          totalExpenses: 1000,
          balance: 3500,
          date: "2025-02-01",
        },
        {
          reportId: "R003",
          house: "House C",
          landlord: "Mark Lee",
          totalRent: 6000,
          totalExpenses: 1500,
          balance: 4500,
          date: "2025-02-01",
        },
      ];
      
  // Handle print functionality
  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=800,width=1000');
    printWindow.document.write('<html><head><title>Report</title></head><body>');
    printWindow.document.write('<h2>Reports Table</h2>');
    printWindow.document.write('<table border="1" cellpadding="5" cellspacing="0" style="width:100%;">');
    
    // Table headers
    printWindow.document.write(`
      <thead>
        <tr>
          <th>Report ID</th>
          <th>House</th>
          <th>Landlord</th>
          <th>Total Rent</th>
          <th>Total Expenses</th>
          <th>Balance</th>
          <th>Date</th>
        </tr>
      </thead>
    `);

    // Table body (data rows)
    printWindow.document.write('<tbody>');
    data.forEach((row, index) => {
      printWindow.document.write(`
        <tr>
          <td>${row.reportId}</td>
          <td>${row.house}</td>
          <td>${row.landlord}</td>
          <td>${row.totalRent}</td>
          <td>${row.totalExpenses}</td>
          <td>${row.balance}</td>
          <td>${row.date}</td>
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
        Print Report
      </button>

      {/* Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left border-b font-semibold text-lg">Report ID</th>
            <th className="p-4 text-left border-b font-semibold text-lg">House</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Landlord</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Total Rent</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Total Expenses</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Balance</th>
            <th className="p-4 text-left border-b font-semibold text-lg">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-4 border-b text-lg">{row.reportId}</td>
              <td className="p-4 border-b text-lg">{row.house}</td>
              <td className="p-4 border-b text-lg">{row.landlord}</td>
              <td className="p-4 border-b text-lg">${row.totalRent}</td>
              <td className="p-4 border-b text-lg">${row.totalExpenses}</td>
              <td className="p-4 border-b text-lg">${row.balance}</td>
              <td className="p-4 border-b text-lg">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintableReportsTable;
