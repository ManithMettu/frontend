{/*_app.tsx*/}
import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "~/components/Sidebar/Sidebar";
import Footer from "~/components/footer/Footer";
import { motion } from "framer-motion";

export default function AppLayout() {
  const [isSidebarMini, setIsSidebarMini] = useState(false);

  return (
    <div className="flex">
      <Sidebar onMiniChange={setIsSidebarMini} />
      
      <motion.main 
        animate={{ 
          marginLeft: isSidebarMini ? "60px" : "200px",
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
        className="flex-grow min-h-screen"
      >
        <div className="p-6">
          <Outlet />
        </div>
      </motion.main>
    </div>
  );
} 