import {
  BookOpen,
  PenSquare,
  CalendarDays,
} from "lucide-react";

export default function DashboardContent() {
  return (
    <div className="grid gap-6 lg:gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
      {/* ================= LEFT COLUMN ================= */}

      <div>
        {/* Heading */}

        <div className="mb-6">
          <h2 className="font-serif text-3xl leading-tight text-[#124A66] sm:text-4xl lg:text-5xl">
            Your Activity
          </h2>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
          {/* Lessons */}

          <div className="rounded-3xl border border-[#E8ECE8] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#124A66]/10">
              <BookOpen size={18} className="text-[#124A66]" />
            </div>

            <h3 className="mt-4 font-serif text-3xl text-[#124A66] sm:text-4xl">
              12
            </h3>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-[13px]">
              Lessons
            </p>

            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-[13px]">
              Completed
            </p>
          </div>

          {/* Journal */}

          <div className="rounded-3xl border border-[#E8ECE8] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E46F21]/10">
              <PenSquare size={18} className="text-[#E46F21]" />
            </div>

            <h3 className="mt-4 font-serif text-3xl text-[#124A66] sm:text-4xl">
              4
            </h3>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-[13px]">
              Journal Entries
            </p>
          </div>
        </div>

        {/* Upcoming Card */}

        <div className="mt-5 rounded-3xl border border-[#EEF1EE] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-3">
            <CalendarDays size={22} className="text-[#124A66]" />

            <h3 className="font-serif text-xl text-[#124A66] sm:text-2xl">
              Upcoming Live Call
            </h3>
          </div>

          <p className="mt-5 text-lg font-medium text-[#124A66] sm:text-xl">
            Group Coaching: Alignment
          </p>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Tomorrow, 14:00 GMT
          </p>

          <button
            className="
              mt-6
              flex
              h-11
              w-full
              items-center
              justify-center
              rounded-xl
              border
              border-[#E5E7EB]
              bg-white
              text-sm
              font-semibold
              text-[#124A66]
              transition
              hover:border-[#124A66]
              hover:bg-[#124A66]
              hover:text-white
            "
          >
            Add to Calendar
          </button>
        </div>
      </div>

      {/* ================= RIGHT COLUMN ================= */}

      <div>
        {/* Header */}

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-3xl leading-tight text-[#124A66] sm:text-4xl lg:text-5xl">
            Community Highlights
          </h2>

          <button className="self-start text-sm font-semibold text-[#E3B336] transition hover:text-[#124A66] sm:self-auto sm:text-base">
            View All
          </button>
        </div>

        {/* Community Card */}

        <div className="overflow-hidden rounded-3xl border border-[#E8ECE8] bg-white shadow-sm">
          {/* Post 1 */}

          <div className="flex gap-4 p-5 sm:gap-5 sm:p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF3EF] font-semibold text-[#124A66]">
              D
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-[#124A66]">
                  David O.
                </h3>

                <span className="text-xs text-gray-400 sm:text-sm">
                  2h ago
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                Just finished Module 2. The exercise on identifying core
                limiting beliefs completely shifted my perspective on my
                business plateau.
              </p>
            </div>
          </div>

          <div className="border-t border-[#EEF1EE]" />

          {/* Post 2 */}

          <div className="flex gap-4 p-5 sm:gap-5 sm:p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF3EF] font-semibold text-[#124A66]">
              E
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-[#124A66]">
                  Elena R.
                </h3>

                <span className="text-xs text-gray-400 sm:text-sm">
                  5h ago
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                Today's coaching session reminded me that leadership starts
                with self-awareness before it ever influences others.
              </p>
            </div>
          </div>

          <div className="border-t border-[#EEF1EE]" />

          {/* Post 3 */}

          <div className="flex gap-4 p-5 sm:gap-5 sm:p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF3EF] font-semibold text-[#124A66]">
              M
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-[#124A66]">
                  Michael A.
                </h3>

                <span className="text-xs text-gray-400 sm:text-sm">
                  Yesterday
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                Looking forward to tomorrow's live coaching. Who else is
                joining the session?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}