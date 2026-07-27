import { ArrowRight, Star } from "lucide-react";

export default function EcosystemSection() {
  const features = [
    "Interactive Learning Management System",
    "Private Member Community",
    "Live Virtual & In-Person Events",
    "1-on-1 & Group Coaching",
  ];

  return (
    <section className="overflow-hidden bg-[#124A66] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* LEFT */}

        <div className="text-center lg:text-left">

         <h2 className="font-serif font-semibold leading-tight text-white text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[52px]">
  More Than a Course.
  <br />
  An Ecosystem.
</h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg lg:mx-0">
            True transformation doesn't happen in isolation. Our platform
            combines structured learning, accountability, expert coaching,
            and immersive experiences into one transformational journey.
          </p>

          {/* Features */}

          <div className="mt-10 space-y-5">

            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start justify-center gap-4 lg:justify-start"
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E46F21]/20">
                  <Star
                    size={14}
                    fill="#E46F21"
                    className="text-[#E46F21]"
                  />
                </div>

                <p className="text-left text-base text-white sm:text-lg">
                  {feature}
                </p>
              </div>
            ))}

          </div>

          {/* Button */}

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#124A66] transition hover:bg-[#E46F21] hover:text-white sm:px-8 sm:py-3.5 sm:text-base">
            Learn About Our Methodology
            <ArrowRight size={18} />
          </button>

        </div>

        {/* RIGHT */}

        <div className="relative mx-auto mt-10 flex h-80 w-[320px] items-center justify-center sm:h-105 sm:w-105 lg:mt-0 lg:h-130 lg:w-130">

          {/* Outer Ring */}

          <div className="absolute h-full w-full rounded-full border border-white/15"></div>

          {/* Middle Ring */}

          <div className="absolute h-[78%] w-[78%] rounded-full border border-[#E46F21]/25"></div>

          {/* Inner Ring */}

          <div className="absolute h-[58%] w-[58%] rounded-full border border-white/10"></div>

          {/* Glow */}

          <div className="absolute h-32 w-32 rounded-full bg-[#E46F21]/20 blur-3xl sm:h-44 sm:w-44"></div>

          {/* YOU */}

          <div className="z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#E46F21] shadow-2xl sm:h-32 sm:w-32">

            <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
              YOU
            </span>

          </div>

          {/* Top */}

          <div className="absolute top-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#124A66] shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Programs
          </div>

          {/* Right */}

          <div className="absolute right-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#124A66] shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Coaching
          </div>

          {/* Bottom */}

          <div className="absolute bottom-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#124A66] shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Events
          </div>

          {/* Left */}

          <div className="absolute left-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#124A66] shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Community
          </div>

        </div>

      </div>
    </section>
  );
}