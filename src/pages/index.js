import HrData from "@/components/dashboard/HrData";
import EmpSummary from "@/components/dashboard/EmpSummary";
import React from "react";
import EmpData from "@/components/dashboard/EmpData";
export default function Home() {
  return (
    <section className="w-full h-screen bg-[#141B2D]">
      {/* <div className="flex flex-col items-center pt-5">
        <h1 className="text-3xl font-bold text-white">DASHBOARD</h1>
        <p className="text-md text-yellow-400">Welcome to your Dashboard</p>
      </div> */}
      <div className="flex space-x-4">
        <HrData />
        <EmpSummary />
      </div>
      <EmpData />
      {/* <HrData /> */}
    </section>
  );
}
