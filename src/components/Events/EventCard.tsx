import {
  Calendar,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

type EventCardProps = {
  month: string;
  day: string;
  badge?: string;
  title: string;
  description: string;
  time: string;
  location: string;
};

export default function EventCard({
  month,
  day,
  badge,
  title,
  description,
  time,
  location,
}: EventCardProps) {
  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div className="flex h-18 w-18 flex-col items-center justify-center rounded-2xl bg-[#F6F7F4]">

          <span className="text-sm font-bold uppercase text-[#124A66]">
            {month}
          </span>

          <span className="mt-1 text-4xl font-serif text-[#124A66]">
            {day}
          </span>

        </div>

        {badge && (
          <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-sm font-semibold text-blue-600">
            {badge}
          </span>
        )}

      </div>

      {/* Content */}

      <h3 className="mt-8 font-serif text-4xl leading-tight text-[#124A66]">
        {title}
      </h3>

      <p className="mt-5 text-lg leading-9 text-gray-500">
        {description}
      </p>

      <div className="my-8 border-t border-gray-200" />

      <div className="space-y-4">

        <div className="flex items-center gap-3 text-lg text-gray-700">

          <Clock3
            size={20}
            className="text-gray-500"
          />

          {time}

        </div>

        <div className="flex items-center gap-3 text-lg text-gray-700">

          <MapPin
            size={20}
            className="text-gray-500"
          />

          {location}

        </div>

      </div>

      <button className="mt-10 flex w-full items-center justify-center gap-3 rounded-full border border-[#124A66] py-4 text-lg font-semibold text-[#124A66] transition hover:bg-[#124A66] hover:text-white">

        Register

        <ArrowRight size={20} />

      </button>

    </div>
  );
}