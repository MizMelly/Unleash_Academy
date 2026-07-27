import { ArrowRight, BookOpen } from "lucide-react";

const programs = [
  {
    mode: "In-Person & Online",
    duration: "3 Days",
    title: "Life Essence",
    description:
      "A deep journey into self-discovery, purpose alignment and emotional mastery.",
  },
  {
    mode: "Online",
    duration: "6 Weeks",
    title: "Mind Mastery",
    description:
      "Master your mindset, overcome limiting beliefs and unlock peak performance.",
  },
  {
    mode: "Hybrid",
    duration: "8 Weeks",
    title: "Ignite Business",
    description:
      "Transform your entrepreneurial vision into a thriving business reality.",
  },
];

export default function ProgramsSection() {
  return (
    <section className="bg-white/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-2xl">

            <h2
              className="
                font-serif
                font-semibold
                leading-tight
                text-[#124A66]
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[52px]
              "
            >
              Transformational Programs
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              Curated journeys designed to elevate every dimension of your
              life and leadership.
            </p>

          </div>

          <button className="flex w-fit items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-[#124A66] transition hover:border-[#E46F21] hover:text-[#E46F21]">
            View All Programs
            <ArrowRight size={16} />
          </button>

        </div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {programs.map((program) => (
            <div
              key={program.title}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}

              <div className="flex h-48 items-center justify-center bg-[#EEF5F3] sm:h-56">

                <BookOpen
                  size={56}
                  className="text-[#124A66]/20"
                />

              </div>

              {/* Content */}

              <div className="flex h-full flex-col p-6">

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">

                  <BookOpen
                    size={14}
                    className="text-[#124A66]"
                  />

                  <span>{program.mode}</span>

                  <span>•</span>

                  <span>{program.duration}</span>

                </div>

                <h3
                  className="
                    mt-5
                    font-serif
                    font-semibold
                    text-[#124A66]
                    text-2xl
                    sm:text-3xl
                  "
                >
                  {program.title}
                </h3>

                <p className="mt-4 grow text-base leading-7 text-gray-500">
                  {program.description}
                </p>

                <button className="mt-6 w-full rounded-full bg-[#124A66] py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#E46F21]">
                  Explore Program
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}