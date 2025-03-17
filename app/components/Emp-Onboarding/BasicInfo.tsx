import { useState } from "react";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { RadioGroup } from "~/components/ui/radio-group";

export default function BasicInfo() {
  // Auto-generate Employee ID (you might want to handle this differently based on your requirements)
  const [employeeId] = useState(`EMP${Math.floor(Math.random() * 10000)}`);

  return (
    <div className="p-8 bg-white shadow-lg rounded-xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">Basic Information</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Employee ID */}
            <div className="space-y-2">
              <Label htmlFor="empId" className="text-sm font-medium text-gray-700">Employee ID</Label>
              <Input
                id="empId"
                value={employeeId}
                readOnly
                className="bg-gray-50 border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter first name"
                required
                className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                required
                className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Gender</Label>
              <div className="flex space-x-6 mt-1">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <Label htmlFor="male" className="ml-2">Male</Label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <Label htmlFor="female" className="ml-2">Female</Label>
                </div>
              </div>
            </div>

            {/* Disability */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Disability</Label>
              <div className="flex space-x-6 mt-1">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="yes"
                    name="disability"
                    value="yes"
                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <Label htmlFor="yes" className="ml-2">Yes</Label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="disability"
                    value="no"
                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <Label htmlFor="no" className="ml-2">No</Label>
                </div>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label htmlFor="dob" className="text-sm font-medium text-gray-700">Date of Birth</Label>
              <Input
                id="dob"
                type="date"
                required
                className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
              <div className="flex gap-2">
                <select
                  id="countryCode"
                  defaultValue="+91"
                  className="w-24 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="+91">+91 (IN)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (AU)</option>
                  {/* Add more country codes as needed */}
                </select>
                <Input
                  id="phone"
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="Enter 10-digit phone number"
                  required
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                required
                className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Address */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="addressLine1" className="text-sm font-medium text-gray-700">Address Line 1</Label>
                <Input
                  id="addressLine1"
                  placeholder="Enter street address"
                  required
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="addressLine2" className="text-sm font-medium text-gray-700">Address Line 2</Label>
                <Input
                  id="addressLine2"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
                  <Input
                    id="city"
                    required
                    className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-medium text-gray-700">State</Label>
                  <Input
                    id="state"
                    required
                    className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700">Country</Label>
                  <Input
                    id="country"
                    required
                    className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pincode</Label>
                  <Input
                    id="pincode"
                    type="text"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    placeholder="Enter 6-digit pincode"
                    required
                    className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
            </div>

            {/* Date of Joining */}
            <div className="space-y-2">
              <Label htmlFor="doj" className="text-sm font-medium text-gray-700">Date of Joining</Label>
              <Input
                id="doj"
                type="date"
                required
                className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6 border-t">
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
  