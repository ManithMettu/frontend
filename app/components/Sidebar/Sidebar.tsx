import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  IndianRupee,
  Axe,
  Handshake,
  PersonStanding,
  ShieldUser,
  ClipboardMinus,
  CircleChevronRight,
  CircleChevronLeft,
  LogOut,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isMini, setIsMini] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  const menuItems = [
    { to: "/", icon: <LayoutDashboard size={18} />, label: "Dashboard" },
    { to: "/staffbook", icon: <Users size={18} />, label: "Staff Book" },
    { to: "/attendance", icon: <CalendarCheck size={18} />, label: "Attendance" },
    { to: "/payments", icon: <IndianRupee size={18} />, label: "Employee Payments" },
    { to: "", icon: <Axe size={18} />, label: "Inventory Book" },
    { to: "", icon: <Handshake size={18} />, label: "Vendor Book" },
    { to: "", icon: <PersonStanding size={18} />, label: "Contractors Book" },
    { to: "", icon: <ShieldUser size={18} />, label: "Customer Book" },
    { to: "", icon: <ClipboardMinus size={18} />, label: "Reports" },
  ];

  return (
    <motion.div
      animate={{ width: isMini ? 60 : 200 }}
      className="h-screen bg-gray-900 text-white p-3 flex flex-col transition-all duration-300 shadow-lg z-[+2]"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        {/* Logo */}
        <motion.img
        
          src="./logo.png"
          alt="Logo"
          animate={{ width: isMini ? 25 : 35 }}
          className="rounded-md"
        />

        {/* Sidebar Title (Hidden in Mini Mode) */}
        {!isMini && (
          <motion.div className="flex flex-col items-start">
            <motion.h1 className="text-lg font-bold text-blue-400 transition-all">
              Payments<span className="text-blue-500">360</span>
            </motion.h1>
            <motion.h2 className="text-xs font-semibold text-red-500 self-end">
              By ForeFold AI
            </motion.h2>
          </motion.div>
        )}

        {/* Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMini(!isMini)}
          className="p-1 rounded-full bg-blue-400 hover:bg-blue-500 transition-all"
        >
          {isMini ? <CircleChevronRight size={18} /> : <CircleChevronLeft size={18} />}
        </motion.button>
      </div>

      {/* Filter Dropdown */}
      {!isMini && (
        <select
          className="w-full p-1 mb-4 bg-gray-800 text-white rounded-md border border-gray-700 text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="">Site 1</option>
          <option value="">Site 2</option>
          <option value="">Site 3</option>
        </select>
      )}

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-1">
        {menuItems
          .filter(({ label }) =>
            filter ? label.toLowerCase().includes(filter.toLowerCase()) : true
          )
          .map(({ to, icon, label }) => (
            <div key={label} className="relative group">
              <Link
                to={to}
                className={`flex items-center p-2 rounded-lg text-xs transition-all duration-300 ${
                  location.pathname === to ? "bg-blue-400" : "hover:bg-white/10"
                } ${isMini ? "justify-center" : "space-x-2"}`}
              >
                {/* Icon */}
                <span className="text-white">{icon}</span>
                {/* Label (Hidden in Mini Mode) */}
                {!isMini && <span>{label}</span>}
              </Link>

              {/* Tooltip (Only in Mini Mode) */}
              {isMini && (
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {label}
                </div>
              )}
            </div>
          ))}
      </nav>

      {/* Logout Button */}
      <div
        className={`mt-auto flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/10 relative group text-xs ${
          isMini ? "justify-center" : "space-x-2"
        }`}
      >
        <LogOut size={18} className="text-white" />
        {!isMini && <span>Logout</span>}
        {isMini && (
          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Logout
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Sidebar;
