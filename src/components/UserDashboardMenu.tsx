import { useAppSelector } from "@/redux/hooks";
import { CalendarDays, LayoutDashboard, UsersRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserDashboardMenu = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="user-dashboard py-6 lg:py-10   font-Outfit text-white">
        <div className="lg:max-w-7xl mx-auto  ">
          <h2 className="mb-5 text-4xl font-semibold font-Outfit text-white">
            Welcome Back, {user?.email}
          </h2>
          <p className="text-white text-lg font-Outfit">
            <span className="mr-3">Home</span>
            <span className="mr-3"> &gt;</span>
            <span>User Dashboard</span>
          </p>
        </div>
      </div>
      <div className="bg-[#f5f5f5] ">
        <div className="lg:max-w-7xl mx-auto">
          <div className="py-8">
            <nav className="flex gap-4  font-medium font-Outfit">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 bg-white text-center w-40 h-28 rounded-lg duration-300 transition-all hover:bg-gradient hover:text-white text-lg ${
                    isActive ? "bg-gradient text-white" : ""
                  }`
                }
              >
                <LayoutDashboard />
                Dashboard
              </NavLink>
              <NavLink
                to="bookings"
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 bg-white text-center w-40 h-28 rounded-lg duration-300 transition-all hover:bg-gradient hover:text-white text-lg ${
                    isActive ? "bg-gradient text-white" : ""
                  }`
                }
              >
                <CalendarDays />
                My Bookings
              </NavLink>
              <NavLink
                to="my-profile"
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 bg-white text-center w-40 h-28 rounded-lg duration-300 transition-all hover:bg-gradient hover:text-white text-lg ${
                    isActive ? "bg-gradient text-white" : ""
                  }`
                }
              >
                <UsersRound />
                My Profile
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardMenu;
