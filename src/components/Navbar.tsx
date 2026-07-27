import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Programs",
      path: "/programs",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Resources",
      path: "/resources",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];


  const isActive = (path: string) => {
    return location.pathname === path;
  };


  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1d5d7e] bg-[#124A66] shadow-lg">

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">


        {/* Logo */}

        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Unleash Academy"
            className="h-10 w-auto rounded-lg p-1 sm:h-12 lg:h-14"
          />
        </Link>



        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">

          {links.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              className={`relative pb-2 text-sm font-medium transition-all xl:text-base ${
                isActive(item.path)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >

              {item.name}


              <span
                className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#E46F21] transition-all duration-300 ${
                  isActive(item.path)
                    ? "w-7 opacity-100"
                    : "w-0 opacity-0"
                }`}
              />

            </Link>

          ))}

        </nav>



        {/* Right Buttons */}

        <div className="hidden items-center gap-5 lg:flex">

          <Link
            to="/login"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            Log In
          </Link>


          <Link
            to="/register"
            className="rounded-full bg-[#E46F21] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#cf611d]"
          >
            Start Your Journey
          </Link>

        </div>



        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>



      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-[#124A66] transition-all duration-300 lg:hidden ${
          open ? "max-h-125" : "max-h-0"
        }`}
      >

        <div className="space-y-2 px-6 py-6">


          {links.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 text-base font-medium transition ${
                isActive(item.path)
                  ? "bg-[#E46F21] text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>

          ))}



          <div className="my-4 border-t border-white/10" />


          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10"
          >
            Log In
          </Link>



          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="mt-3 block w-full rounded-full bg-[#E46F21] py-3 text-center font-semibold text-white hover:bg-[#cf611d]"
          >
            Start Your Journey
          </Link>


        </div>

      </div>

    </header>
  );
}