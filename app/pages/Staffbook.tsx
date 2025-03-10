import { useState } from "react";
import { Search, Plus, Download, Edit2 } from "lucide-react";
import { useNavigate } from "react-router";
import * as XLSX from "xlsx";

// Define the type for Employee data
interface Employee {
  "Emp ID": string;
  "Employee Name": string;
  "Designation": string;
  "Site": string;
  "Shift": string;
  "Phone": string;
}

const StaffBook = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          console.log("Reading file...");
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: "array" });
          console.log("Workbook:", workbook);

          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json<Employee>(sheet);
          console.log("Parsed Data:", parsedData);

          setEmployees(parsedData);
        } catch (error) {
          console.error("Error parsing file:", error);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-extrabold text-gray-800">Employee Directory</h1>
        <div className="flex items-center space-x-3">
          {/* Add Employee Button */}
          <button
            onClick={() => navigate("/add-employee")}
            className="flex items-center bg-blue-600 text-white px-4 py-1 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            <Plus size={16} className="mr-2" /> Add Employee
          </button>
          {/* Import Button */}
          <label className="flex items-center bg-green-600 text-white px-4 py-1 rounded-lg shadow-md hover:bg-green-500 transition duration-300 cursor-pointer">
            <Download size={16} className="mr-2" /> Import
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="hidden" />
          </label>
          {/* Search Bar */}
          <div className="bg-white px-3 py-1 rounded-lg flex items-center space-x-2 shadow-md border border-gray-300">
            <Search className="text-gray-600" size={16} />
            <input
              type="text"
              placeholder="Search employees..."
              className="bg-transparent focus:outline-none placeholder-gray-600 w-48"
            />
          </div>
        </div>
      </div>

      {/* Employee Table */}
      <div className="overflow-auto max-h-80 shadow-xl rounded-lg border border-gray-300 bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white sticky top-0">
            <tr>
              <th className="p-2 text-left">Emp ID</th>
              <th className="p-2 text-left">Employee Name</th>
              <th className="p-2 text-left">Designation</th>
              <th className="p-2 text-left">Site</th>
              <th className="p-2 text-left">Shift</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-center">Update</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition duration-200"
              >
                <td className="p-2 border-b">{employee["Emp ID"]}</td>
                <td className="p-2 border-b font-semibold text-gray-800">{employee["Employee Name"]}</td>
                <td className="p-2 border-b">{employee["Designation"]}</td>
                <td className="p-2 border-b text-center">{employee["Site"]}</td>
                <td className="p-2 border-b">{employee["Shift"]}</td>
                <td className="p-2 border-b">{employee["Phone"]}</td>
                <td className="p-2 border-b text-center">
                  <button className="text-blue-600 hover:text-blue-800 transition">
                    <Edit2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffBook;
