import { Outlet } from "react-router";
import Sidebar from "~/components/Sidebar/Sidebar";

export default function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
} 