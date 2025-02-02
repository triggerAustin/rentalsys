import React, { useState } from "react";
import ReusableButton from "./button";
import SubordinatesLogs from "./subordinatesLogs";

const SubordinatesTable = () => {
  const [selectedSubordinate, setSelectedSubordinate] = useState(null);

  const handleViewLogs = (subordinateId) => {
    setSelectedSubordinate(subordinateId);
  };

  const handleCloseLogs = () => {
    setSelectedSubordinate(null);
  };

  const logsData = {
    1: [
      {
        date: "2025-02-01",
        entries: 10,
        deletions: 2,
        changes: 3,
        updates: 5,
        loginTime: "08:00 AM",
        logoutTime: "05:00 PM",
      },
      {
        date: "2025-02-02",
        entries: 5,
        deletions: 1,
        changes: 2,
        updates: 3,
        loginTime: "08:10 AM",
        logoutTime: "05:15 PM",
      },
    ],
    2: [
      {
        date: "2025-02-01",
        entries: 12,
        deletions: 1,
        changes: 4,
        updates: 7,
        loginTime: "09:00 AM",
        logoutTime: "06:00 PM",
      },
    ],
  };

  
  const subordinates = [
    {
      id: "1",
      name: "John Doe",
      tel: "+1234567890",
      loginTime: "2025-02-01 08:00",
      logoutTime: "2025-02-01 17:00",
    },
    {
      id: "2",
      name: "Jane Smith",
      tel: "+0987654321",
      loginTime: "2025-02-01 09:00",
      logoutTime: "2025-02-01 18:00",
    },
    {
      id: "3",
      name: "Alice Johnson",
      tel: "+1122334455",
      loginTime: "2025-02-01 08:30",
      logoutTime: "2025-02-01 17:30",
    },
    {
      id: "4",
      name: "Bob Brown",
      tel: "+2233445566",
      loginTime: "2025-02-01 10:00",
      logoutTime: "2025-02-01 19:00",
    },
    {
      id: "5",
      name: "Eve White",
      tel: "+3344556677",
      loginTime: "2025-02-01 07:45",
      logoutTime: "2025-02-01 16:45",
    },
  ];

  if (selectedSubordinate) {
    const subordinateLogs = logsData[selectedSubordinate] || []; // Fetch logs for selected subordinate
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Logs for Subordinate</h2>
        <ReusableButton
          onClick={handleCloseLogs}
          className="p-2 bg-red-500 text-white rounded mb-4"
          text={"Close logs"}
        />
          
        <SubordinatesLogs logs={subordinateLogs} /> {/* Assuming LogsTable is the component */}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Subordinates List</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Login Time</th>
            <th className="px-4 py-2 text-left">Logout Time</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {subordinates.map((subordinate) => (
            <tr key={subordinate.id} className="border-b">
              <td className="px-4 py-2">{subordinate.name}</td>
              <td className="px-4 py-2">{subordinate.tel}</td>
              <td className="px-4 py-2">{subordinate.id}</td>
              <td className="px-4 py-2">{subordinate.loginTime}</td>
              <td className="px-4 py-2">{subordinate.logoutTime}</td>
              <td className="px-4 py-2">
                <ReusableButton
                  text="View Logs"
                  onClick={() => handleViewLogs(subordinate.id)}
                  size="md"
                />
                <ReusableButton
                  text="edit"
                  size="md"
                />
                <ReusableButton
                  text="delete"
                  size="md"
                  variant="danger"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubordinatesTable;
