import { Container } from "@/components/Container";
import {Footer}  from "@/components/Footer";

import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <Container className="flex-grow bg-slate-800">
        <main className="flex-grow">
          <Outlet />
        </main>
      </Container>

      <Footer />
    </div>
  );
};