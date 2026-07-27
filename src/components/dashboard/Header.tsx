import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { auth } from "../../services/api";

interface User {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  name?: string;
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = (await auth.getProfile()) as User;
        setUser(data);
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    };

    loadProfile();
  }, []);

  const greeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const displayName =
    user?.firstName ||
    user?.fullName ||
    user?.name ||
    "Student";

  return (
    <header className="mb-8 flex items-start justify-between">
      <div>
        <h1 className="font-serif text-[32px] font-semibold leading-tight text-[#124A66] sm:text-[42px]">
          {greeting()}, {displayName}
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          "Excellence is not an act, but a habit."
        </p>
      </div>

      <button className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F7F4] transition hover:shadow-md">
        <Bell
          size={22}
          className="text-[#124A66]"
        />

        <span className="absolute right-3 top-3 h-3 w-3 rounded-full border-2 border-white bg-red-500" />
      </button>
    </header>
  );
}