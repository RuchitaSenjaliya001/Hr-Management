import HrData from "@/components/dashboard/HrData";
import EmpSummary from "@/components/dashboard/EmpSummary";
import React, { useContext } from "react";
import EmpData from "@/components/dashboard/EmpData";
import ModeContext from "@/context/modeContext";

export default function Home() {
  const { mode } = useContext(ModeContext);

  return (
    <section
      className={`w-full h-screen ${
        mode === "dark" ? "bg-[#141B2D]" : "bg-[#FCFCFC]"
      }`}
    >
      <div className="flex flex-col items-center pb-10">
        <h1
          className={`text-3xl font-bold ${
            mode === "dark" ? "text-white" : "text-[#141B2D]"
          }`}
        >
          DASHBOARD
        </h1>
        <p
          className={`text-md text-yellow-400 ${
            mode === "light" && "font-semibold"
          }`}
        >
          Welcome to your Dashboard
        </p>
      </div>
      <div className="grid grid-cols-6 grid-rows-1">
        <HrData mode={mode} />
        <EmpSummary mode={mode} />
      </div>
      <EmpData mode={mode} />
      {/* <HrData /> */}
    </section>
  );
}
