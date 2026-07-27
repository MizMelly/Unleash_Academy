import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#124A66] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-[#E46F21]/20 blur-3xl sm:h-80 sm:w-80" />

      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

        <div className="text-center">

          {/* Heading */}

          <h2
            className="
              font-serif
              font-semibold
              leading-tight
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Ready to Step Up?
          </h2>

          {/* Paragraph */}

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-sm
              leading-7
              text-white/75
              sm:text-base
              md:text-lg
              lg:text-xl
            "
          >
            Join a global community of leaders committed to excellence,
            impact, and continuous growth.
          </p>

          {/* Button */}

          <div className="mt-8 sm:mt-10">

            <button
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#E46F21]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#cf611d]
                hover:shadow-2xl
                sm:w-auto
                sm:px-8
                sm:py-3.5
                sm:text-base
                lg:px-10
                lg:py-4
                lg:text-lg
              "
            >
              Start Your Journey
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}