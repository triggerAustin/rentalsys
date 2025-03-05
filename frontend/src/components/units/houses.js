import React, { useEffect, useState } from "react";

const House = ({ setHouseName, setShowRooms, setTitle2, setHouseId }) => {
  const [houses, setHouses] = useState([]);
  const columnsPerRow = 6;

  useEffect(() => {
    fetch("http://localhost:3001/houses")
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error("Error fetching houses:", error));
  }, []);

  function DisplayUnits(hseName, houseId) {
    let title2 = hseName + "> ";
    setHouseName(hseName);
    setShowRooms(true);
    setTitle2(title2);
    setHouseId(houseId)
    console.log("house id from housejs:", houseId)
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 shadow-md">
        <tbody>
          {houses
            .reduce((rows, house, index) => {
              if (index % columnsPerRow === 0) rows.push([]);
              rows[rows.length - 1].push(house);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <tr key={rowIndex} className="flex">
                {row.map((house, colIndex) => (
                  <td
                    key={colIndex}
                    data-house-id={house.house_id} // Store house ID
                    className="hover:cursor-pointer hover:bg-gray-300 p-3 text-center border flex-1"
                    onClick={() =>
                      DisplayUnits(house.house_name, house.house_id)
                    }
                  >
                    {house.house_name}
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

export default House;
