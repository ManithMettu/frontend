import { useState } from "react";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { RadioGroup } from "~/components/ui/radio-group";
import { Select } from "~/components/ui/select";

export default function EmploymentDetails() {
  const [employmentType, setEmploymentType] = useState("permanent");

  // Sample data for dropdowns - Replace with your actual data
  const designations = ["Software Engineer", "Project Manager", "Team Lead", "Designer"];
  const businessUnits = ["IT Services", "Product Development", "Operations"];
  const divisions = ["North", "South", "East", "West"];
  const departments = ["Engineering", "Design", "Marketing", "Sales"];
  const managers = ["John Doe", "Jane Smith", "Mike Johnson"];
  const shifts = ["Morning", "General", "Evening", "Full Night"];

  return (
    <div className="p-8 bg-white shadow-lg rounded-xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">Employment Details</h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Employment Type */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Employment Type</Label>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="permanent"
                  name="employmentType"
                  value="permanent"
                  checked={employmentType === "permanent"}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <Label htmlFor="permanent" className="ml-2">Permanent</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="contract"
                  name="employmentType"
                  value="contract"
                  checked={employmentType === "contract"}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <Label htmlFor="contract" className="ml-2">Contract</Label>
              </div>
            </div>
          </div>

          {/* Contract-specific fields */}
          {employmentType === "contract" && (
            <>
              {/* Payment Term */}
              <div className="space-y-2">
                <Label htmlFor="paymentTerm" className="text-sm font-medium text-gray-700">Payment Term</Label>
                <select
                  id="paymentTerm"
                  className="w-full p-2 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              {/* Payment Rate */}
              <div className="space-y-2">
                <Label htmlFor="paymentRate" className="text-sm font-medium text-gray-700">Payment Rate</Label>
                <Input
                  id="paymentRate"
                  type="number"
                  placeholder="Enter payment rate"
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </>
          )}

          {/* Permanent-specific fields */}
          {employmentType === "permanent" && (
            <div className="space-y-2">
              <Label htmlFor="monthlySalary" className="text-sm font-medium text-gray-700">Monthly Salary</Label>
              <Input
                id="monthlySalary"
                type="number"
                placeholder="Enter monthly salary"
                className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          )}

          {/* Designation */}
          <div className="space-y-2">
            <Label htmlFor="designation" className="text-sm font-medium text-gray-700">Designation</Label>
            <select
              id="designation"
              className="w-full p-2 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select Designation</option>
              {designations.map((designation) => (
                <option key={designation} value={designation}>{designation}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Business Unit */}
          <div className="space-y-2">
            <Label htmlFor="businessUnit" className="text-sm font-medium text-gray-700">Business Unit</Label>
            <select
              id="businessUnit"
              className="w-full p-2 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select Business Unit</option>
              {businessUnits.map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>

          {/* Division */}
          <div className="space-y-2">
            <Label htmlFor="division" className="text-sm font-medium text-gray-700">Division</Label>
            <select
              id="division"
              className="w-full p-2 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select Division</option>
              {divisions.map((division) => (
                <option key={division} value={division}>{division}</option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div className="space-y-2">
            <Label htmlFor="department" className="text-sm font-medium text-gray-700">Department</Label>
            <select
              id="department"
              className="w-full p-2 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select Department</option>
              {departments.map((department) => (
                <option key={department} value={department}>{department}</option>
              ))}
            </select>
          </div>

          {/* Reporting Manager */}
          <div className="space-y-2">
            <Label htmlFor="manager" className="text-sm font-medium text-gray-700">Reporting Manager</Label>
            <select
              id="manager"
              className="w-full p-2 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select Reporting Manager</option>
              {managers.map((manager) => (
                <option key={manager} value={manager}>{manager}</option>
              ))}
            </select>
          </div>

          {/* Shift */}
          <div className="space-y-2">
            <Label htmlFor="shift" className="text-sm font-medium text-gray-700">Shift</Label>
            <select
              id="shift"
              className="w-full p-2 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select Shift</option>
              {shifts.map((shift) => (
                <option key={shift} value={shift}>{shift}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex justify-end pt-6 border-t">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 transition-colors duration-200 font-medium"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}
  