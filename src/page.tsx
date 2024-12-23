
import { LoginForm } from "@/components/login-form"
import DashboardCard from "./components/dashboard-card";
import Logo from "../src/assets/Subtract.png"

export default function LoginPage() {
  return (
    <div className="grid lg:grid-cols-2 bg-white-100">
      <div className="relative hidden lg:block">
        <DashboardCard /><br></br>
        <DashboardCard />
        
      </div>
      <div className="flex flex-col gap-2 p-2 bg-gray-100">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <img src={Logo} alt="CodeAnt"  style={{position:'absolute', left:0, bottom:0}} className=" hidden lg:block" />
    </div>
  );
}
