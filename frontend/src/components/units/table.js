import { useEffect, useState } from "react";

const ReusableTable = ({ 
  columns, 
  data, 
  moniteryData, 
  selectedYear, 
  onRowClick, 
  hover = true 
}) => {
  const [maxHeight, setMaxHeight] = useState("400px");
  const [currentYear, setCurrentYear] = useState(selectedYear);

  // Adjust table height dynamically based on window size
  useEffect(() => {
    const updateHeight = () => {
      const viewportHeight = window.innerHeight;
      const headerHeight = 100; // Adjust this if you have other UI elements above the table
      setMaxHeight(`${viewportHeight - headerHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Ensure data exists for the selected year & house
  const tableData = data?.[currentYear] || {};
  const financialData = moniteryData?.[currentYear] || {}; // Ensure the financial data is for the selected year

  // Year selection handler
  const handleYearChange = (event) => {
    setCurrentYear(event.target.value);
  };

  return (
    <div>
      {/* Year Selector (Dropdown) */}
      <div className="flex justify-end mb-4">
        <select 
          value={currentYear} 
          onChange={handleYearChange} 
          className="px-3 py-1 border rounded-md"
        >
          {Object.keys(data).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto" style={{ maxHeight }}>
        <table className="min-w-full border border-gray-300 shadow-md">
          {/* Table Header */}
          <thead className="sticky top-0">
            <tr className="bg-gray-200">
              <th className="p-3 border text-left font-semibold">House</th>
              {columns.map((col, index) => (
                <th key={index} className="p-3 border text-left font-semibold">
                  {col.label}
                </th>
              ))}
              {/* If financial data exists, add headers for exp, bal, and paid */}
              {moniteryData && (
                <>
                  <th className="p-3 border text-left font-semibold">Expenses</th>
                  <th className="p-3 border text-left font-semibold">Balance</th>
                  <th className="p-3 border text-left font-semibold">Paid</th>
                </>
              )}
              <th className="p-3 border text-left font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {Object.keys(tableData).map((house, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border ${hover ? "hover:bg-gray-100 cursor-pointer" : ""}`}
                onClick={(e) => {
                  if (e.target.closest(".action-buttons")) return;
                  if (onRowClick) onRowClick(house);
                }}
              >
                <td className="p-3 border">{house}</td>
                {/* Render house details */}
                {typeof tableData[house] === "object" ? (
                  Object.values(tableData[house]).map((value, index) => (
                    <td key={index} className="p-3 border">{value}</td>
                  ))
                ) : (
                  <td colSpan={columns.length} className="p-3 border text-center">
                    No data available
                  </td>
                )}
                {/* Append financial data if available */}
                {moniteryData && financialData[house] ? (
                  <>
                    <td className="p-3 border">{financialData[house].exp}</td>
                    <td className="p-3 border">{financialData[house].bal}</td>
                    <td className="p-3 border">{financialData[house].paid}</td>
                  </>
                ) : (
                  moniteryData && (
                    <>
                      <td className="p-3 border">-</td>
                      <td className="p-3 border">-</td>
                      <td className="p-3 border">-</td>
                    </>
                  )
                )}
                <td className="p-3 border action-buttons">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTable;
