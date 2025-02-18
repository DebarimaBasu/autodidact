import { Outlet } from "react-router-dom"


const AuthLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
        <Outlet/>
      
    </div>
  )
}

export default AuthLayout
