import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("routes/_app.tsx", [
    index("routes/home.tsx"),
    { path: "staffbook", file: "pages/Staffbook.tsx" },
    { path: "attendance", file: "pages/Attendance.tsx" },
    { path: "payments", file: "pages/Payments.tsx" },
    { path: "add-employee", file: "pages/EmployeeOnboarding.tsx" },
    { path: "customer", file: "pages/Customer.tsx" },
    { path: "add-customer", file: "pages/AddCustomer.tsx" },
  ]),
] satisfies RouteConfig;
