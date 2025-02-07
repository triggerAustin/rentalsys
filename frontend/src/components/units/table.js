import { useEffect, useState } from "react";

const ReusableTable = ({ 
  columns, 
  data, 
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
              {columns.map((col, index) => (
                <th key={index} className="p-3 border text-left font-semibold">
                  {col.label}
                </th>
              ))}
              <th className="p-3 border">Actions</th> {/* Column for Edit/Delete buttons */}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {Object.keys(tableData).map((house, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={`border ${hover ? "hover:bg-gray-100 cursor-pointer" : ""}`}
                onClick={(e) => {
                  // Ensure the onRowClick doesn't fire when clicking the button column
                  if (e.target.closest(".action-buttons")) return;
                  if (onRowClick) onRowClick(house);
                }}
              >
                <td className="p-3 border">{house}</td>
                <td className="p-3 border">{tableData[house].landlord}</td>
                <td className="p-3 border">{tableData[house].vacant}</td>
                <td className="p-3 border">{tableData[house].occupied}</td>
                <td className="p-3 border">{tableData[house].totalRooms}</td>
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
