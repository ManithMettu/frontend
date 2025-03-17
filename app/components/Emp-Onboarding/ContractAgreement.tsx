import { useState } from "react";
import { Label } from "~/components/ui/label";
import SignatureCanvas from 'react-signature-canvas';

export default function ContractAgreement() {
  const [signature, setSignature] = useState<string | null>(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState('');
  let signaturePad: any = null;

  const clearSignature = () => {
    signaturePad?.clear();
    setSignature(null);
  };

  const saveSignature = () => {
    if (signaturePad && !signaturePad.isEmpty()) {
      setSignature(signaturePad.toDataURL());
    }
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">
        Contractual Agreement
      </h2>

      <div className="space-y-6">
        {/* Employment Agreement Terms */}
        <div className="space-y-4">
          <Label className="text-sm font-medium text-gray-700">
            Employment Agreement Terms
          </Label>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-medium mb-4">Standard Terms and Conditions</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p>1. The employee agrees to work according to the company's policies and procedures.</p>
              <p>2. Working hours shall be as per company standard or as agreed upon in writing.</p>
              <p>3. The probation period shall be 3 months from the date of joining.</p>
              <p>4. Notice period for resignation shall be as per company policy.</p>
              {/* Add more terms as needed */}
            </div>
          </div>
        </div>

        {/* Additional Terms for Contract Employees */}
        <div className="space-y-2">
          <Label htmlFor="contractTerms" className="text-sm font-medium text-gray-700">
            Additional Contract Terms (Optional)
          </Label>
          <textarea
            id="contractTerms"
            className="w-full p-3 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20 min-h-[100px]"
            placeholder="Enter any additional terms specific to this contract..."
          />
        </div>

        {/* Digital Signature Section */}
        <div className="space-y-4">
          <Label className="text-sm font-medium text-gray-700">
            Digital Signature
          </Label>
          <div className="border rounded-lg p-4 bg-white">
            <div className="border border-gray-300 rounded-md bg-white">
              <SignatureCanvas
                ref={(ref) => { signaturePad = ref }}
                canvasProps={{
                  className: "w-full h-40 cursor-crosshair"
                }}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={clearSignature}
                className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={saveSignature}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Save Signature
              </button>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <Label htmlFor="additionalNotes" className="text-sm font-medium text-gray-700">
            Additional Notes (Optional)
          </Label>
          <textarea
            id="additionalNotes"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value.slice(0, 100))}
            className="w-full p-3 border rounded-md border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Enter any additional notes (max 100 characters)"
            maxLength={100}
          />
          <p className="text-sm text-gray-500">
            {additionalNotes.length}/100 characters
          </p>
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-center space-x-2 py-4">
          <input
            type="checkbox"
            id="agreement"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <Label htmlFor="agreement" className="text-sm text-gray-700">
            I have read and agree to the terms and conditions
          </Label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6 border-t">
          <button
            type="submit"
            disabled={!isAgreed || !signature}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete Onboarding
          </button>
        </div>
      </div>
    </div>
  );
}
  