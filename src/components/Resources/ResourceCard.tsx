import {
  ArrowRight,
  FileText,
  PlayCircle,
  Headphones,
  Download,
} from "lucide-react";

type ResourceCardProps = {
  category: string;
  title: string;
  description: string;
  readTime: string;
};

export default function ResourceCard({
  category,
  title,
  description,
  readTime,
}: ResourceCardProps) {
  const getIcon = () => {
    switch (category) {
      case "Article":
        return <FileText size={22} className="text-[#124A66]" />;

      case "Video":
        return <PlayCircle size={22} className="text-[#124A66]" />;

      case "Podcast":
        return <Headphones size={22} className="text-[#124A66]" />;

      case "Download":
        return <Download size={22} className="text-[#124A66]" />;

      default:
        return <FileText size={22} className="text-[#124A66]" />;
    }
  };

  return (
    <article
      className="
        group
        rounded-[28px]
        border
        border-gray-200
        bg-white
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Top */}

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#124A66]/10">
          {getIcon()}
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
          {category}
        </span>

      </div>

      {/* Title */}

      <h3 className="mt-8 font-serif text-[34px] leading-tight text-[#124A66] transition group-hover:text-[#E46F21]">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-5 text-lg leading-8 text-gray-500">
        {description}
      </p>

      {/* Footer */}

      <div className="mt-8 border-t border-gray-200 pt-6">

        <div className="flex items-center justify-between">

          <span className="font-semibold text-[#124A66]">
            {readTime}
          </span>

          <ArrowRight
            size={20}
            className="text-[#124A66] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#E46F21]"
          />

        </div>

      </div>

    </article>
  );
}