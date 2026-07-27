import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MonitorPlay,
} from "lucide-react";

type ProgramCardProps = {
  category: string;
  title: string;
  description: string;
  duration: string;
  delivery: string;
  startDate: string;
};

export default function ProgramCard({
  category,
  title,
  description,
  duration,
  delivery,
  startDate,
}: ProgramCardProps) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-[28px]
        border
        border-gray-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#124A66]/20
        hover:shadow-xl
      "
    >
      {/* Category */}

      <span className="inline-flex w-fit rounded-full bg-[#124A66]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#124A66]">
        {category}
      </span>

      {/* Title */}

      <h3 className="mt-6 font-serif text-3xl font-semibold leading-tight text-[#124A66]">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-5 flex-1 text-base leading-8 text-gray-600">
        {description}
      </p>

      {/* Info */}

      <div className="mt-8 space-y-4 border-t border-gray-100 pt-6">

        <div className="flex items-center gap-3 text-gray-700">
          <Clock3
            size={18}
            className="text-[#E46F21]"
          />

          <span className="text-sm">
            {duration}
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <MonitorPlay
            size={18}
            className="text-[#E46F21]"
          />

          <span className="text-sm">
            {delivery}
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <CalendarDays
            size={18}
            className="text-[#E46F21]"
          />

          <span className="text-sm">
            Starts {startDate}
          </span>
        </div>

      </div>

      {/* Button */}

      <button className="mt-8 inline-flex items-center gap-3 self-start rounded-full bg-[#124A66] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#0E3D53]">
        View Details

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </button>

    </article>
  );
}