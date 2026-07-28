import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Users,
  Trophy,
  Settings,
  LogOut,
} from "lucide-react";

import logo from "../../assets/logo.png"; 

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "My Programs",
    icon: BookOpen,
    path: "",
  },
  {
    name: "Schedule",
    icon: CalendarDays,
    path: "",
  },
  {
    name: "Community",
    icon: Users,
    path: "",
  },
  {
    name: "Achievements",
    icon: Trophy,
    path: "",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "",
  },
];

export default function Sidebar() {
const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to log out?"
    );

    if (!confirmed) return;

    localStorage.removeItem("kta_token");
    localStorage.removeItem("kta_user");

    navigate("/login", { replace: true });
  };

  return (
    <>
      {/* ================= Desktop Sidebar ================= */}

      <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-gray-200 bg-white lg:flex lg:flex-col">

        {/* Logo */}

        <div className="border-b border-gray-100 px-5 py-6 xl:px-8 xl:py-8">
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Unleash Academy"
              className="h-12 w-auto object-contain xl:h-14"
            />

            <div className="min-w-0">
              <h2 className="truncate font-serif text-xl font-semibold text-[#124A66] xl:text-2xl">
                Unleash
              </h2>

              <p className="text-[10px] uppercase tracking-[0.25em] text-[#E46F21] xl:text-xs">
                Academy
              </p>
            </div>

          </div>
        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-4 py-6 xl:px-5 xl:py-8">

          <div className="space-y-2">

            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 xl:px-5 xl:py-4 ${
                      isActive
                        ? "bg-[#124A66] text-white shadow-lg"
                        : "text-gray-600 hover:bg-[#124A66]/5 hover:text-[#124A66]"
                    }`
                  }
                >
                  <Icon size={20} />

                  <span className="text-sm font-medium xl:text-base">
                    {item.name}
                  </span>
                </NavLink>
              );
            })}

          </div>

        </nav>

        {/* Logout */}

        <div className="border-t border-gray-100 p-4 xl:p-5">

          <button
  onClick={handleLogout}
  className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-gray-600 transition hover:bg-red-50 hover:text-red-600 xl:px-5 xl:py-4"
>
            <LogOut size={20} />

            <span className="text-sm font-medium xl:text-base">
              Logout
            </span>

          </button>

        </div>

      </aside>

      {/* ================= Mobile Bottom Navigation ================= */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg lg:hidden">

        <div className="grid grid-cols-5">

          {menu.slice(0, 5).map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-3 transition ${
                    isActive
                      ? "text-[#124A66]"
                      : "text-gray-500"
                  }`
                }
              >
                <Icon size={20} />

                <span className="mt-1 text-[10px] font-medium">
                  {item.name}
                </span>

              </NavLink>
            );
          })}

        </div>

      </div>
    </>
  );
}