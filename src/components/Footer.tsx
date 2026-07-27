import { ArrowRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  const socialIcons = [
    {
      icon: FaLinkedinIn,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: "#",
      label: "YouTube",
    },
    {
      icon: FaFacebookF,
      href: "#",
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-[#124A66] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Left */}
          <div>
            <img
              src={logo}
              alt="Unleash Academy"
              className="h-16 w-auto rounded-lg  p-2"
            />

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/75 sm:text-base">
              A premium transformation ecosystem for leaders,
              entrepreneurs and professionals committed to becoming
              their greatest selves.
            </p>

            <div className="mt-8 flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#E46F21]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-2xl text-[#E46F21]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-white/75">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Upcoming Events
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Insights & Resources
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Member Login
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-serif text-2xl text-[#E46F21]">
              Programs
            </h3>

            <ul className="mt-6 space-y-4 text-white/75">
              <li>
                <a href="#" className="hover:text-white">
                  Life Essence
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Ignite Business
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Executive Coaching
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Corporate Training
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  View All Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-2xl text-[#E46F21]">
              Weekly Insight
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base">
              Join 15,000+ leaders receiving weekly insights on leadership,
              business and personal transformation.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#E46F21]"
              />

              <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E46F21] transition hover:scale-105 hover:bg-[#cf611d]">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">
          <p>© 2026 Unleash Academy. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}