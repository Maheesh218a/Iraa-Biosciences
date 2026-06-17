import React from 'react';
import { motion } from 'framer-motion';
import { Bell, User, HelpCircle, Menu, Settings, PieChart, FileText, Search, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

const DashboardMockup = () => {
  return (
    <div className="w-full h-full bg-[#fcfcfc] flex flex-col text-sans relative overflow-hidden text-left">
      {/* Top Navbar */}
      <div className="h-12 border-b border-gray-200 bg-white flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <Menu className="w-4 h-4 text-gray-500" />
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
            <span className="text-[13px] font-semibold text-[#364f6b]">Iraa <span className="font-light">Biosciences</span></span>
            <span className="text-[9px] bg-blue-100 text-blue-600 px-1 py-0.5 rounded ml-1 font-medium tracking-wide">BETA</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <div className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
            <HelpCircle className="w-3.5 h-3.5" /> Help Center
          </div>
          <Bell className="w-4 h-4" />
          <User className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Mini */}
        <div className="w-12 border-r border-gray-200 bg-white flex flex-col items-center py-4 gap-6 shrink-0">
          <PieChart className="w-4 h-4 text-blue-600" />
          <FileText className="w-4 h-4 text-gray-400" />
          <Settings className="w-4 h-4 text-gray-400" />
          <Search className="w-4 h-4 text-gray-400" />
          <div className="mt-auto">
            <User className="w-4 h-4 text-gray-400 mb-4" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-5 overflow-hidden flex flex-col bg-[#fcfcfc]">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-[18px] text-blue-600 font-medium mb-1">A Fresh Start Awaits, Dr. Dhiroo</h2>
              <p className="text-[11px] text-gray-400">You have 1 items requiring your attention today!</p>
            </div>
            <div className="text-right">
              <p className="text-[12px] font-medium text-gray-600">June 11, 2026</p>
              <p className="text-[10px] text-green-500 flex items-center justify-end gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3" /> System Status: All Systems Operational
              </p>
            </div>
          </div>

          {/* KPI Cards Row */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { title: "Active Enquiries", count: "1", sub: "Total", action: "0 awaiting response", bg: "bg-blue-50/50" },
              { title: "Support Tickets", count: "1", sub: "Opened", action: "0 open tickets", bg: "bg-white" },
              { title: "Pending Tasks", count: "0", sub: "Priority", action: "0 completed", bg: "bg-white" },
              { title: "Documents", count: "0", sub: "Uploaded", action: "Purchase orders", bg: "bg-white" }
            ].map((card, i) => (
              <div key={i} className={`border border-gray-100 rounded p-3 shadow-sm ${card.bg}`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[11px] text-gray-500 font-medium">{card.title}</span>
                  <span className="text-[9px] bg-blue-100 text-blue-600 px-1 rounded">Total {card.count}</span>
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-[18px] font-semibold text-gray-700 leading-none">{card.count}</span>
                  <span className="text-[9px] text-gray-400 mb-0.5">{card.sub}</span>
                </div>
                <p className="text-[10px] text-gray-400">{card.action}</p>
              </div>
            ))}
          </div>

          {/* Bottom Area Split */}
          <div className="grid grid-cols-[2fr_1fr] gap-4 flex-1">
            {/* Recent Activity List */}
            <div className="bg-white border border-gray-100 rounded shadow-sm p-4 flex flex-col">
              <h3 className="text-[12px] font-medium text-gray-700 mb-3">Recent Activity</h3>
              <div className="flex gap-2 mb-4">
                {['All', 'Enquiries', 'Tickets', 'Documents'].map((tab, i) => (
                  <span key={i} className={`text-[10px] px-2 py-1 rounded border ${i === 0 ? 'bg-blue-50 border-blue-200 text-blue-600' : 'border-gray-200 text-gray-500'}`}>
                    {tab}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { id: "ENQ-2", title: "WHEATON® CELLine flasks for adherent cell culture", status: "Payment Pending", color: "bg-yellow-100 text-yellow-600" },
                  { id: "TKT-1", title: "I need a Cotton Gauze", status: "CLOSED", color: "bg-red-100 text-red-600" },
                  { id: "DOC-2", title: "WHEATON® CELLine flasks for adherent cell culture", status: "Available", color: "bg-green-100 text-green-600" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start border border-gray-50 p-2.5 rounded hover:bg-gray-50 cursor-pointer">
                    <div>
                      <p className="text-[11px] font-medium text-blue-600 mb-1">{item.id} | <span className="text-gray-600">{item.title}</span></p>
                      <div className="flex items-center gap-2 text-[9px] text-gray-400">
                        <Clock className="w-3 h-3" /> Created: 22/05/2026 <span className="text-blue-500 flex items-center">View <ChevronRight className="w-2 h-2" /></span>
                      </div>
                    </div>
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase ${item.color}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Status Overview */}
            <div className="bg-white border border-gray-100 rounded shadow-sm p-4 flex flex-col items-center justify-center relative">
              <h3 className="text-[12px] font-medium text-gray-700 absolute top-4 left-4">Order Status Overview</h3>
              <div className="w-24 h-24 rounded-full border-4 border-gray-100 border-t-blue-500 border-r-blue-500 flex flex-col items-center justify-center">
                <span className="text-[10px] text-gray-400">Total Orders</span>
                <span className="text-[20px] font-bold text-gray-700">1</span>
                <span className="text-[9px] text-gray-400">All Status</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <section className="w-full bg-[#364f6b] py-20 lg:py-28 font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-0 lg:px-12 relative">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 lg:px-0 mb-10"
        >
          <h2 className="text-[32px] md:text-[38px] text-white font-light">
            Built to Outperform Traditional Research Workflows.
          </h2>
        </motion.div>

        {/* Header Controls Area */}
        <div className="flex justify-between items-center mb-16 relative w-full">
          {/* White Box extending left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white py-6 pl-6 lg:pl-12 pr-10 lg:pr-20 rounded-r shadow-lg relative z-20"
          >
            <h3 className="text-[#364f6b] text-[24px] font-light mb-1">
              Personalized Dashboards
            </h3>
            <p className="text-gray-500 text-[12px] font-light tracking-wide">
              Tailored to the needs of every individual and organization!
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-4 pr-6 lg:pr-0">
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-8 items-center px-6 lg:px-0 relative">
          
          {/* Left Vertical Tabs */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-4 relative z-20 items-center lg:items-end justify-center"
          >
            <button className="bg-white text-[#364f6b] text-[14px] font-medium py-2 px-8 rounded-[3px] shadow hover:bg-gray-50 transition-colors w-[140px]">
              Associate
            </button>
            <button className="bg-[#4a77a8] text-white text-[22px] font-light py-4 px-8 rounded-[4px] shadow-xl w-[180px] lg:-mr-8 relative z-10 transform lg:-translate-x-4">
              Customer
            </button>
            <button className="bg-white text-[#364f6b] text-[14px] font-medium py-2 px-8 rounded-[3px] shadow hover:bg-gray-50 transition-colors w-[140px]">
              Enterprise
            </button>
            <button className="bg-white text-[#364f6b] text-[14px] font-medium py-2 px-8 rounded-[3px] shadow hover:bg-gray-50 transition-colors w-[140px]">
              Partner
            </button>
            <button className="bg-white text-[#364f6b] text-[14px] font-medium py-2 px-8 rounded-[3px] shadow hover:bg-gray-50 transition-colors w-[100px]">
              IRC
            </button>
          </motion.div>

          {/* Right Dashboard Mockups (Cascade Effect) */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end pr-0 lg:pr-8">
            
            {/* Layer 3 (Back) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 0.2, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-[15%] right-[12%] w-[85%] lg:w-[80%] h-[75%] bg-[#2a3f5a] rounded-lg shadow-2xl transform -translate-x-12 translate-y-6 scale-90 border border-white/5"
            ></motion.div>
            
            {/* Layer 2 (Middle) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 0.5, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute top-[8%] right-[6%] w-[90%] lg:w-[85%] h-[80%] bg-[#405c7c] rounded-lg shadow-2xl transform -translate-x-6 translate-y-3 scale-95 border border-white/10"
            ></motion.div>
            
            {/* Layer 1 (Front - Main Dashboard UI) */}
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-[95%] lg:w-[90%] h-[85%] bg-white rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col z-10 border border-blue-400/30"
            >
               <DashboardMockup />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
