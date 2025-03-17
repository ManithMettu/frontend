import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
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
import logo from './logo.png';

const Sidebar: React.FC<{ onMiniChange: (isMini: boolean) => void }> = ({ onMiniChange }) => {
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
    { to: "/customer", icon: <ShieldUser size={18} />, label: "Customer Book" },
    { to: "", icon: <ClipboardMinus size={18} />, label: "Reports" },
  ];

  // Update parent component when sidebar state changes
  const handleMiniToggle = () => {
    const newMiniState = !isMini;
    setIsMini(newMiniState);
    onMiniChange(newMiniState);
  };

  return (
    <motion.div
      initial={false}
      animate={{ 
        width: isMini ? 60 : 200,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      className="min-h-screen h-full bg-gray-900 text-white p-3 flex flex-col shadow-lg z-[+2] fixed"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <motion.div className="flex items-center gap-2">
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ width: isMini ? 25 : 35 }}
            animate={{ 
              width: isMini ? 25 : 35,
              transition: { 
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            className="rounded-md min-w-[25px]"
          />
          
          <AnimatePresence>
            {!isMini && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-start"
              >
                <span className="text-lg font-bold text-blue-400">
                  Payments<span className="text-blue-500">360</span>
                </span>
                <span className="text-xs font-semibold text-red-500 self-end">
                  By ForeFold AI
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMiniToggle}
          className="p-1 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors"
        >
          {isMini ? <CircleChevronRight size={18} /> : <CircleChevronLeft size={18} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {!isMini && (
          <motion.select
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full p-1 mb-4 bg-gray-800 text-white rounded-md border border-gray-700 text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Site 1</option>
            <option value="">Site 2</option>
            <option value="">Site 3</option>
          </motion.select>
        )}
      </AnimatePresence>

      <nav className="flex flex-col space-y-1">
        {menuItems
          .filter(({ label }) =>
            filter ? label.toLowerCase().includes(filter.toLowerCase()) : true
          )
          .map(({ to, icon, label }) => (
            <motion.div
              key={label}
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to={to}
                className={`flex items-center p-2 rounded-lg text-xs transition-all duration-300 ${
                  location.pathname === to ? "bg-blue-400" : "hover:bg-white/10"
                } ${isMini ? "justify-center" : "space-x-2"}`}
              >
                <motion.span
                  animate={{ scale: location.pathname === to ? 1.1 : 1 }}
                  className="text-white"
                >
                  {icon}
                </motion.span>
                <AnimatePresence>
                  {!isMini && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {isMini && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded shadow-md whitespace-nowrap z-50"
                >
                  {label}
                </motion.div>
              )}
            </motion.div>
          ))}
      </nav>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`mt-auto flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/10 relative group text-xs ${
          isMini ? "justify-center" : "space-x-2"
        }`}
      >
        <motion.span whileHover={{ rotate: 180 }} className="text-white">
          <LogOut size={18} />
        </motion.span>
        <AnimatePresence>
          {!isMini && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              Logout
            </motion.span>
          )}
        </AnimatePresence>
        {isMini && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded shadow-md whitespace-nowrap z-50"
          >
            Logout
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
