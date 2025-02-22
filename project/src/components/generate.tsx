import { Outlet } from "react-router-dom";

export const Generate = () => {
  return (
    <div className="flex-col   w-full">
      <Outlet />
    </div>
  );
};