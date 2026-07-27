type ProgramFiltersProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const categories = [
  "All",
  "Personal Development",
  "Business",
  "Coaching",
];

export default function ProgramFilters({
  activeCategory,
  setActiveCategory,
}: ProgramFiltersProps) {
  return (
    <section className="px-6 sm:px-8 lg:px-12">

      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              rounded-full
              px-7
              py-3
              text-[15px]
              font-semibold
              transition-all
              duration-300
              ${
                activeCategory === category
                  ? "bg-[#124A66] text-white shadow-lg"
                  : "border border-transparent bg-[#F1F3F1] text-[#124A66] hover:border-[#124A66] hover:bg-white"
              }
            `}
          >
            {category}
          </button>
        ))}

      </div>

    </section>
  );
}