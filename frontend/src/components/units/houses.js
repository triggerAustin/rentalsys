import React, { useEffect, useState } from "react";

const Units = ({ setHouseName, setShowRooms, setTitle2 }) => {
  const [houses, setHouses] = useState([]);
  const columnsPerRow = 6;

  useEffect(() => {
    fetch("http://localhost:3001/houses")
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error("Error fetching houses:", error));
  }, []);

  function DisplayUnits(hseName) {
    let title2 = hseName + "> ";
    setHouseName(hseName);
    setShowRooms(true);
    setTitle2(title2);
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 shadow-md">
        <tbody>
          {houses
            .reduce((rows, house, index) => {
              if (index % columnsPerRow === 0) rows.push([]);
              rows[rows.length - 1].push(house.house_name);
              return rows;
            }, [])
            .map((row, rowIndex) => (
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
                {Array(columnsPerRow - row.length)
                  .fill("")
                  .map((_, i) => (
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
