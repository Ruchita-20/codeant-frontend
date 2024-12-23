import React from "react";
import Logo from "../assets/logo.png";
import Issues from "../assets/issue.png";

export default function DashboardCard() {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white shadow-md rounded-lg relative">
      {/* Top Section */}
      <div className="flex text-center border-b pb-3">
        <img src={Logo} alt="CodeAnt" className="h-6 w-6 mr-1" />
        <h1 className="text-lg font-semibold text-gray-800">
          AI to Detect & Autofix Bad Code
        </h1>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <h2 className="text-xl font-bold">30+</h2>
          <p className="text-sm text-gray-600">Language Support</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">10K+</h2>
          <p className="text-sm text-gray-600">Developers</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">100K+</h2>
          <p className="text-sm text-gray-600">Hours Saved</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          position: 'absolute',
          right: -20,
          top: 120,
          width: '230px',
          zIndex: 10,
        }}
        className="bg-white shadow-md rounded-lg"
      >
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md" style={{ boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div>
            <img src={Issues} alt="CodeAnt" className="h-12 w-12  mr-2" />
            <h3 className="text-base font-bold">Issues Fixed</h3>
            <p className="text-xl font-bold">500K+</p>
          </div>
          <div className="text-right text-xs">
            <p className="text-blue-600 font-semibold">↑ 14%</p>
            <p>This week</p>
          </div>
        </div>
      </div>
    </div>
  );
}
