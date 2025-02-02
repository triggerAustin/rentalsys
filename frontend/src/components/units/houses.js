import React from "react";



const Units = ({ 
  columns, 
  setHouseName,
  setShowRooms,
  setTitle2,
  hover = true 
}) => {

  const columnsPerRow = 6; // Set the 
  let houses = ['name name name', 'name2', 'name3', 'name4', 'name5', 'name', 'name2', 'name3', 'name4', 'name5','name', 'name2', 'name3', 'name4', 'name5','name', 'name2', 'name3', 'name4', 'name5','name', 'name2', 'name3', 'name4', 'name5']
  function DisplayUnits(hseName){
    let title2 = hseName + "> "
    setHouseName(hseName)
    setShowRooms(true)
    setTitle2(title2)
  }

  return (
<div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300 shadow-md">
    {/* Table Body */}
    <tbody className="overflow-y-auto block" style={{ maxHeight: "500px" }}> {/* Enables scrolling */}
      {houses.reduce((rows, house, index) => {
        if (index % columnsPerRow === 0) rows.push([]); // Create new row every `columnsPerRow`
        rows[rows.length - 1].push(house);
        return rows;
      }, []).map((row, rowIndex) => (
        <tr key={rowIndex} className="flex">
          {row.map((house, colIndex) => (
            <td 
              key={colIndex} 
              className="hover:cursor-pointer hover:bg-gray-300 p-3 text-center border flex-1"
              onClick={() => DisplayUnits(house)}
            >
              {house}
            </td>
          ))}
          {/* Fill remaining columns if row is not full */}
          {Array(columnsPerRow - row.length).fill("").map((_, i) => (
            <td key={`empty-${i}`} className="border flex-1"></td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
 
  );
};

export default Units;
