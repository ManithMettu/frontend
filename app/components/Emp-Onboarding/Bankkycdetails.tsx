import { useState } from "react";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

export default function BankKYCDetails() {
  const [employmentType, setEmploymentType] = useState("permanent");
  
  const idTypes = ["Aadhaar", "PAN", "Voter ID"];

  return (
    <div className="p-8 bg-white shadow-lg rounded-xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">Bank & KYC Details</h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Bank Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-700">Bank Account Details</h3>
          
          {/* Account Number */}
          <div className="space-y-2">
            <Label htmlFor="accountNumber" className="text-sm font-medium text-gray-700">
              Account Number
            </Label>
            <Input
              id="accountNumber"
              type="number"
              placeholder="Enter bank account number"
              className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          {/* Bank Name */}
          <div className="space-y-2">
            <Label htmlFor="bankName" className="text-sm font-medium text-gray-700">
              Bank Name
            </Label>
            <Input
              id="bankName"
              type="text"
              placeholder="Enter bank name"
              className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          {/* Branch Name */}
          <div className="space-y-2">
            <Label htmlFor="branchName" className="text-sm font-medium text-gray-700">
              Branch Name
            </Label>
            <Input
              id="branchName"
              type="text"
              placeholder="Enter branch name"
              className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          {/* IFSC Code */}
          <div className="space-y-2">
            <Label htmlFor="ifscCode" className="text-sm font-medium text-gray-700">
              IFSC Code
            </Label>
            <Input
              id="ifscCode"
              type="text"
              placeholder="Enter IFSC code"
              className="border-gray-200 focus:ring-2 focus:ring-blue-500/20 uppercase"
              required
            />
          </div>
        </div>

        {/* Right Column - KYC Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-700">KYC & Legal Details</h3>
          
          {/* ID Type */}
          <div className="space-y-2">
            <Label htmlFor="idType" className="text-sm font-medium text-gray-700">
              ID Type
            </Label>
            <select
              id="idType"
              className="w-full p-2 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              required
            >
              <option value="">Select ID Type</option>
              {idTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* ID Number */}
          <div className="space-y-2">
            <Label htmlFor="idNumber" className="text-sm font-medium text-gray-700">
              ID Number
            </Label>
            <Input
              id="idNumber"
              type="text"
              placeholder="Enter ID number"
              className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              required
            />
          </div>

          {/* Permanent Employee Specific Fields */}
          {employmentType === "permanent" && (
            <>
              {/* ESI ID */}
              <div className="space-y-2">
                <Label htmlFor="esiId" className="text-sm font-medium text-gray-700">
                  ESI ID
                </Label>
                <Input
                  id="esiId"
                  type="text"
                  placeholder="Enter ESI ID"
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* PF Account Number */}
              <div className="space-y-2">
                <Label htmlFor="pfNumber" className="text-sm font-medium text-gray-700">
                  PF Account Number
                </Label>
                <Input
                  id="pfNumber"
                  type="text"
                  placeholder="Enter PF account number"
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* UAN */}
              <div className="space-y-2">
                <Label htmlFor="uan" className="text-sm font-medium text-gray-700">
                  UAN (for PF)
                </Label>
                <Input
                  id="uan"
                  type="text"
                  placeholder="Enter UAN"
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* PRAN ID */}
              <div className="space-y-2">
                <Label htmlFor="pranId" className="text-sm font-medium text-gray-700">
                  PRAN ID for NPS
                </Label>
                <Input
                  id="pranId"
                  type="text"
                  placeholder="Enter PRAN ID"
                  className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </>
          )}

          {/* Document Upload Section */}
          <div className="space-y-2">
            <Label htmlFor="documents" className="text-sm font-medium text-gray-700">
              Upload Documents
            </Label>
            <Input
              id="documents"
              type="file"
              multiple
              className="border-gray-200 focus:ring-2 focus:ring-blue-500/20"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload scanned copies of your ID proof and other documents (PDF, JPG, PNG)
            </p>
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
  