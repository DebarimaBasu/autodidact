import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./LogoContainer";
import { NavigationRoutes } from "./NavigationRoutes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./ProfileContainer";
import { ToggleContainer } from "./ToggleContainer ";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full bg-gray-600  duration-150 transition-all ease-in-out text-white")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-4">
            <NavigationRoutes />
          {/* if user logged in*/ }
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-100",
                    isActive && "text-neutral-100 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          <div className="ml-auto flex items-center gap-6">
            {/* profile section */}
            <ProfileContainer />
             <section></section>
            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;