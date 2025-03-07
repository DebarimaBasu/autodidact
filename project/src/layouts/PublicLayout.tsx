import {Footer} from "@/components/Footer";
import Header from "@/components/Header";
import AuthHandler from "@/handlers/AuthHandler";

import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="w-full flex flex-col h-screen">
      {/* handler to store the user data */}
      <AuthHandler/>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};