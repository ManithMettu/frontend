import React, { useState } from "react";

const AddEmployee: React.FC = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    joiningDate: "",
    address: "",
    designation: "",
    idType: "",
    uidNumber: "",
    siteLocation: "",
    employmentType: "Permanent",
    paymentType: "Hourly",
    gender: "Male",
    shift: "General",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-800">Add Employee</h2>
      <p className="text-sm text-blue-500">Track payments and inventory efficiently.</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-4">
        {/* Left Column */}
        <div>
          <label className="block text-gray-700">Employee ID</label>
          <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">E-Mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">Date of Joining</label>
          <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">Designation</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>
        </div>

        {/* Right Column */}
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">ID Type (Ex - AADHAR, PAN)</label>
          <input type="text" name="idType" value={formData.idType} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">UID No (Ex - AADHAR, PAN)</label>
          <input type="text" name="uidNumber" value={formData.uidNumber} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>

          <label className="block text-gray-700 mt-2">Site Location</label>
          <input type="text" name="siteLocation" value={formData.siteLocation} onChange={handleChange} 
            className="w-full border rounded-md p-2"/>
        </div>

        {/* Additional Options */}
        <div className="col-span-2 mt-4">
          <label className="block text-gray-700">Employment Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="employmentType" value="Permanent" checked={formData.employmentType === "Permanent"} onChange={handleChange} className="mr-2"/>
              Permanent
            </label>
            <label className="flex items-center">
              <input type="radio" name="employmentType" value="Contract" checked={formData.employmentType === "Contract"} onChange={handleChange} className="mr-2"/>
              Contract
            </label>
          </div>

          <label className="block text-gray-700 mt-2">Payment Type</label>
          <div className="flex gap-4">
            {["Hourly", "Daily", "Weekly", "Monthly"].map((type) => (
              <label key={type} className="flex items-center">
                <input type="radio" name="paymentType" value={type} checked={formData.paymentType === type} onChange={handleChange} className="mr-2"/>
                {type}
              </label>
            ))}
          </div>

          <label className="block text-gray-700 mt-2">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} className="mr-2"/>
              Male
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} className="mr-2"/>
              Female
            </label>
          </div>

          <label className="block text-gray-700 mt-2">Shift</label>
          <select name="shift" value={formData.shift} onChange={handleChange} className="w-full border rounded-md p-2">
            {["General", "Morning", "Evening", "Night"].map((shift) => (
              <option key={shift} value={shift}>{shift}</option>
            ))}
          </select>

          {/* Buttons */}
          <div className="flex justify-end mt-4">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded-md mr-2">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
