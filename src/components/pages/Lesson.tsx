import LessonSidebar from "../../components/lesson/LessonSidebar";
import VideoPlayer from "../../components/lesson/VideoPlayer";
import AudioCard from "../../components/lesson/AudioCard";
import LessonContent from "../../components/lesson/LessonContent";
import ReflectionCard from "../../components/lesson/ReflectionCard";
import LessonRating from "../../components/lesson/LessonRating";
import LessonFooter from "../../components/lesson/LessonFooter";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">

      <LessonSidebar />

      <main className="xl:ml-70">

        
          <VideoPlayer />

        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">


          <AudioCard />

          <LessonContent />

          <ReflectionCard />

          <LessonRating />

        </div>

 <LessonFooter />
 
      </main>

    </div>
  );
}