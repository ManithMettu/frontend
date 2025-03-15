import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const steps = ["Basic Info", "Employment Details", "Contract/Permanent Details", "Bank & KYC", "Finalization"];

export default function EmployeeOnboarding() {
  const [step, setStep] = useState(0);
  const progress = (step / (steps.length - 1)) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-lg font-semibold mb-4">Employee Onboarding Form</h1>
      <div className="flex items-center justify-between mb-6">
        {steps.map((label, index) => (
          <div key={index} className="flex flex-col items-center flex-1 relative">
            <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${index <= step ? "bg-blue-600" : "bg-gray-300"}`}>✓</div>
            {index < steps.length - 1 && (
              <div className={`h-1 w-full absolute top-1/2 transform -translate-y-1/2 ${index < step ? "bg-blue-600" : "bg-gray-300"}`}></div>
            )}
          </div>
        ))}
      </div>
      <Tabs value={String(step)} className="mt-6">
        <TabsList className="flex justify-between">
          {steps.map((label, index) => (
            <TabsTrigger
              key={index}
              value={String(index)}
              className={`px-4 py-2 text-sm rounded-md ${step === index ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <Card className="mt-4">
          <CardContent className="p-4 grid grid-cols-2 gap-4">
            {step === 0 && (
              <>
                <div>
                  <Label htmlFor="employee-id">Employee ID</Label>
                  <Input id="employee-id" placeholder="Auto-generated" disabled />
                </div>
                <div>
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select Gender" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="disability">Disability</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Yes or No" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="text" placeholder="Enter phone number" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div>
                  <Label htmlFor="joining-date">Date of Joining</Label>
                  <Input id="joining-date" type="date" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Street Address" className="mb-2" />
                  <div className="grid grid-cols-4 gap-2">
                    <Input id="city" placeholder="City" />
                    <Input id="state" placeholder="State" />
                    <Input id="country" placeholder="Country" />
                    <Input id="pincode" placeholder="Pincode" />
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
        <div className="flex justify-between mt-4">
          <Button onClick={() => setStep(step - 1)} disabled={step === 0}>Back</Button>
          <Button onClick={() => setStep(step + 1)} disabled={step === steps.length - 1}>Next</Button>
        </div>
      </Tabs>
    </div>
  );
}

