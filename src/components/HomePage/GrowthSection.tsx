import { Award, Compass, Target } from "lucide-react";

export default function GrowthSection() {
  const cards = [
    {
      icon: Target,
      title: "Evidence-Based Learning",
      description:
        "Curriculums grounded in neuroscience, psychology, and real-world high-performance data.",
    },
    {
      icon: Award,
      title: "World-Class Facilitators",
      description:
        "Learn from industry masters, clinical psychologists, and seasoned executives.",
    },
    {
      icon: Compass,
      title: "Lifelong Ecosystem",
      description:
        "Beyond a course, a private network of driven individuals holding you to your highest standard.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="font-serif font-semibold text-[#124A66]
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[52px]">
            The Architecture of Growth
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            We don't just share information we facilitate profound shifts
            in identity, capability, and performance.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E46F21] hover:shadow-xl sm:p-8"
              >
                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-[#124A66]/10">

                  <Icon
                    size={26}
                    className="text-[#E46F21]"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-6 font-serif font-semibold text-[#124A66]
                  text-2xl
                  sm:text-[28px]">
                  {card.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-base leading-7 text-gray-500">
                  {card.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}