import { useEffect, useState } from "react";
import { Play, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CircularProgress from "./CircularProgress";
import { enrollments } from "../../services/api";

interface CurrentCourse {
  courseId: number;
  courseTitle: string;
  moduleTitle: string;
  progress: number;
}

export default function ProgressCard() {
  const navigate = useNavigate();

  const [course, setCourse] = useState<CurrentCourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const data = await enrollments.getMyCourses();

        // Change this depending on your API response
        if (Array.isArray(data) && data.length > 0) {
          setCourse({
  courseId: data[0].id,
  courseTitle: data[0].courseTitle ?? "Untitled Course",
  moduleTitle: "Continue Learning",
  progress: data[0].progressPercentage ?? 0,
});
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (loading) {
    return (
      <section className="rounded-[28px] bg-[#124A66] p-8 text-white">
        Loading...
      </section>
    );
  }

  if (!course) {
    return (
      <section className="rounded-[28px] bg-[#124A66] p-8 text-white">
        No enrolled course found.
      </section>
    );
  }

  return (
    <section className="rounded-[28px] bg-[#124A66] px-6 py-8 shadow-2xl sm:px-8 lg:px-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

        <div className="flex justify-center lg:w-42.5 lg:shrink-0">
          <CircularProgress
            percentage={course.progress}
            size={130}
            strokeWidth={10}
          />
        </div>

        <div className="flex-1">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E3B336]">
            UP NEXT
          </p>

          <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">
            {course.courseTitle}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-lg text-white/80">
            <Clock3
              size={18}
              className="text-[#E3B336]"
            />

            <span>{course.moduleTitle}</span>
          </div>

          <button
            onClick={() =>
              navigate(`/lesson/${course.courseId}`)
            }
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 font-semibold text-[#124A66] transition hover:scale-105"
          >
            <Play
              size={18}
              fill="currentColor"
            />
            Resume Lesson
          </button>

        </div>
      </div>
    </section>
  );
}