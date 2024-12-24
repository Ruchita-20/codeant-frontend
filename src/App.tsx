import './App.css'
import LoginPage from "@/page2";
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <div className="flex flex-col md:flex-row">
      <div className='lg:h-90 lg:pr-[calc(100%-80%)]'>
        <Navbar/>
      </div>
        <div className='bg-[#FAFAFA]  lg:border-l lg:pl-10'>
        <div className='p-0 bg-white border-0 lg:p-10 lg:border lg:rounded-lg'>
        <LoginPage />
        </div>
        </div>
      </div>
    </>
  )
}

export default App
