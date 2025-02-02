import React, { useState } from "react";

const UserLogsTable = ({ logs = [], subordinateId }) => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("01");

  const logss = [
    { date: "2025-01-01", entries: 10, deletions: 2, updates: 5, logins: 3, logouts: 3 },
    { date: "2025-01-02", entries: 7, deletions: 1, updates: 2, logins: 2, logouts: 2 },
    { date: "2025-02-01", entries: 12, deletions: 3, updates: 7, logins: 4, logouts: 4 },
    { date: "2025-02-05", entries: 5, deletions: 0, updates: 3, logins: 1, logouts: 1 },
    { date: "2025-03-12", entries: 15, deletions: 4, updates: 6, logins: 5, logouts: 5 },
  ];

  // Filter logs based on the selected subordinate ID and selected year/month
  const filteredLogs = logss.filter(
    (log) =>
      log.subordinateId === subordinateId &&
      log.date.startsWith(`${selectedYear}-${selectedMonth}`)
  );

  return (
    <div className="overflow-x-auto">
      {/* Year and Month Selector */}
      <div className="flex mb-4">
        <select
          className="px-3 py-2 mr-4 border rounded-lg"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
        <select
          className="px-3 py-2 border rounded-lg"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="01">January</option>
          <option value="02">February</option>
          {/* Add more months as needed */}
        </select>
      </div>

      {/* Logs Table */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Entries</th>
            <th className="px-4 py-2">Deletions</th>
            <th className="px-4 py-2">Updates</th>
            <th className="px-4 py-2">Logins</th>
            <th className="px-4 py-2">Logouts</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-4 py-2 text-center text-gray-500">
                No logs available for this subordinate.
              </td>
            </tr>
          ) : (
            filteredLogs.map((log, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{log.date}</td>
                <td className="px-4 py-2">{log.entries}</td>
                <td className="px-4 py-2">{log.deletions}</td>
                <td className="px-4 py-2">{log.updates}</td>
                <td className="px-4 py-2">{log.logins}</td>
                <td className="px-4 py-2">{log.logouts}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserLogsTable;
