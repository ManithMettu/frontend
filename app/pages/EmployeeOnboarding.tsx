import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Stepper from "~/components/Emp-Onboarding/Stepper";
import BasicInfo from "~/components/Emp-Onboarding/BasicInfo";
import EmploymentDetails from "~/components/Emp-Onboarding/EmploymentDetails";
import BankKYCDetails from "~/components/Emp-Onboarding/Bankkycdetails";
import ContractAgreement from "~/components/Emp-Onboarding/ContractAgreement";

const stepPaths = [
  "/Emp-onboarding/basic-info",
  "/Emp-onboarding/employment-details",
  "/Emp-onboarding/bank-kyc",
  "/Emp-onboarding/contract-agreement",
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const location = useLocation();

  // Update current step based on URL
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/add-employee":
        setCurrentStep(0);
        break;
      case "/add-employee/employment-details":
        setCurrentStep(1);
        break;
      case "/add-employee/bank-kyc":
        setCurrentStep(2);
        break;
      case "/add-employee/contract-agreement":
        setCurrentStep(3);
        break;
    }
  }, [location]);

  // Array of components to render based on the step
  const stepsComponents = [
    <BasicInfo />,
    <EmploymentDetails />,
    <BankKYCDetails />,
    <ContractAgreement />,
  ];

  // Handle navigation manually (updating state)
  const handleNavigation = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <Stepper currentStep={currentStep} onStepChange={handleNavigation} />
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}
