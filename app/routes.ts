import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("routes/_app.tsx", [
    index("routes/home.tsx"),
    { path: "staffbook", file: "pages/Staffbook.tsx" },
    { path: "attendance", file: "pages/Attendance.tsx" },
    { path: "payments", file: "pages/Payments.tsx" },
    { 
      path: "add-employee", 
      file: "pages/EmployeeOnboarding.tsx",
      children: [
        { index: true, file: "components/Emp-Onboarding/BasicInfo.tsx" },
        { path: "employment-details", file: "components/Emp-Onboarding/EmploymentDetails.tsx" },
        { path: "bank-kyc", file: "components/Emp-Onboarding/Bankkycdetails.tsx" },
        { path: "contract-agreement", file: "components/Emp-Onboarding/ContractAgreement.tsx" }
      ]
    },
    { path: "customer", file: "pages/Customer.tsx" },
    { path: "add-customer", file: "pages/AddCustomer.tsx" },
  ]),
] satisfies RouteConfig;
