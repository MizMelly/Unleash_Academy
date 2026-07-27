import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Life Essence program fundamentally shifted how I operate. I am no longer reacting to my business—I am leading it from a place of deep alignment.",
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    initials: "S",
  },
  {
    quote:
      "I joined Ignite Business expecting strategies, but experienced a complete mindset shift. One of the best investments I've made in myself.",
    name: "David Okafor",
    role: "Founder, Nexus Health",
    initials: "D",
  },
  {
    quote:
      "The coaching helped me overcome years of self-doubt. Today I confidently walk into opportunities I once believed were beyond me.",
    name: "Elena Rostova",
    role: "Creative Director",
    initials: "E",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

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
            Stories of Transformation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
            Hear from leaders who have walked the path and unleashed their
            full potential.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#E46F21]
                hover:shadow-xl
              "
            >
              {/* Stars */}

              <div className="mb-5 flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="#E46F21"
                    className="text-[#E46F21]"
                  />
                ))}

              </div>

              {/* Quote */}

              <p
                className="
                  font-serif
                  italic
                  leading-8
                  text-[#124A66]
                  text-base
                  sm:text-lg
                "
              >
                "{item.quote}"
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#124A66] text-lg font-semibold text-white sm:h-14 sm:w-14 sm:text-xl">
                  {item.initials}
                </div>

                <div>

                  <h4 className="text-base font-semibold text-[#124A66] sm:text-lg">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}