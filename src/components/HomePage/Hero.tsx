import { ArrowRight, Globe, Star, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#124A66] via-[#165775] to-[#F8FAFC]">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#E46F21]/20 blur-[120px]" />

      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-6 lg:px-8 lg:pt-36">

        {/* Heading */}

        <h1 className="max-w-4xl font-serif font-semibold leading-tight text-white
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl">

          Unleash Your
          <br />

          <span className="font-normal italic text-[#E46F21]">
            Greatest
          </span>{" "}
          Self

        </h1>

        {/* Subtitle */}

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg md:text-xl">
          A world-class transformation ecosystem designed to help
          leaders, entrepreneurs and professionals unlock their
          fullest potential and create lasting impact.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row">

          <button className="flex items-center justify-center gap-2 rounded-full bg-[#E46F21] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#cf621f] hover:-translate-y-1">
            Start Your Journey
            <ArrowRight size={18} />
          </button>

          <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#124A66]">
            Explore Programs
          </button>

        </div>

        {/* Statistics */}

        <div className="mt-16 w-full max-w-6xl rounded-3xl bg-white p-6 shadow-xl sm:p-8">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* Alumni */}

            <div className="flex items-center gap-4 border-b border-gray-200 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">

              <div className="rounded-full bg-[#124A66]/10 p-3">
                <Users size={22} className="text-[#E46F21]" />
              </div>

              <div className="text-left">

                <h3 className="text-2xl font-bold text-[#124A66]">
                  15,000+
                </h3>

                <p className="text-sm text-gray-500">
                  Alumni Worldwide
                </p>

              </div>

            </div>

            {/* Countries */}

            <div className="flex items-center gap-4 border-b border-gray-200 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">

              <div className="rounded-full bg-[#124A66]/10 p-3">
                <Globe size={22} className="text-[#E46F21]" />
              </div>

              <div className="text-left">

                <h3 className="text-2xl font-bold text-[#124A66]">
                  12+
                </h3>

                <p className="text-sm text-gray-500">
                  Countries Reached
                </p>

              </div>

            </div>

            {/* Success */}

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-[#124A66]/10 p-3">
                <Star size={22} className="text-[#E46F21]" />
              </div>

              <div className="text-left">

                <h3 className="text-2xl font-bold text-[#124A66]">
                  98%
                </h3>

                <p className="text-sm text-gray-500">
                  Transformation Rate
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-white" />

    </section>
  );
}