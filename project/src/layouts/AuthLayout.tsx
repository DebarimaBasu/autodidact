import { Outlet } from "react-router-dom"


const AuthLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center background-color: bg-gray-900">
      <img
      src="/assets/img/bg.png"
      className="absolute w-full h-full object-cover opacity-20"
      alt="picture" />
        <Outlet/>
      
    </div>
  )
}

export default AuthLayout
