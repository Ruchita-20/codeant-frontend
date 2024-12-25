import { LoginForm } from "@/components/login-form";
import DashboardCard from "./components/dashboard-card";
import Logo from "../src/assets/Subtract.png";
import React, { useState } from "react";

export default function LoginPage() {
  const [selectedMode, setSelectedMode] = useState<"saas" | "self-hosted">("saas");

  return (
    <div className="grid lg:grid-cols-2 gap-5 w-screen h-screen">

      <div className="relative hidden lg:block">
        {/* Conditionally render DashboardCards */}
        {selectedMode === "saas" ? (
       <div className="flex flex-col gap-10" style={{alignItems:'center',alignContent:'center',marginTop:'10%',marginBottom:'10%'}}>
         <div style={{marginBottom:'80px', width:'max-content'}}><DashboardCard /></div>
         <div style={{width:'max-content'}}><DashboardCard /></div>
       </div>
       
        ) : (
          <div className="mx-auto" style={{width:'max-content',marginTop:'30%'}}><DashboardCard /></div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-2 bg-gray-100">
      <div className="flex flex-1 items-center mx-auto justify-center w-full lg:w-[80%]">
          <div className="w-full">
            <LoginForm selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
          </div>
        </div>
      </div>
      <img
        src={Logo}
        alt="CodeAnt"
        style={{ position: "absolute", left: 0, bottom: 0 }}
        className="hidden lg:block"
      />
    </div>
  );
}
