import React from "react";

const subordinatesLogs = ({ logs }) => {
  return (
    <div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Entries</th>
            <th className="px-4 py-2 text-left">Deletions</th>
            <th className="px-4 py-2 text-left">Changes</th>
            <th className="px-4 py-2 text-left">Updates</th>
            <th className="px-4 py-2 text-left">Login Time</th>
            <th className="px-4 py-2 text-left">Logout Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{log.date}</td>
              <td className="px-4 py-2">{log.entries}</td>
              <td className="px-4 py-2">{log.deletions}</td>
              <td className="px-4 py-2">{log.changes}</td>
              <td className="px-4 py-2">{log.updates}</td>
              <td className="px-4 py-2">{log.loginTime}</td>
              <td className="px-4 py-2">{log.logoutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default subordinatesLogs;
