"use client";

import "./globals.css";
import React, { ReactNode, useState, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import { motion } from "framer-motion";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => setIsDesktop(window.innerWidth >= 768);
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-gray-50">
        <motion.div
          initial={{ x: -300 }}
          animate={{
            x: isSidebarOpen || isDesktop ? 0 : -300,
          }}
          transition={{ duration: 0.5 }}
          className="fixed z-40 h-full bg-gray-800 text-white w-64 md:w-72 shadow-lg"
        >
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </motion.div>

        {isSidebarOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
          />
        )}

        <main
          className={`flex-1 overflow-y-auto p-6 bg-white shadow-inner transition-all duration-300 ${
            isSidebarOpen && !isDesktop
              ? "opacity-50 pointer-events-none"
              : ""
          } md:ml-64`}
        >
          <button
            className="p-2 bg-gray-800 text-white fixed top-4 left-4 z-50 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </body>
    </html>
  );
}
