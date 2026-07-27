import { Search } from "lucide-react";

type ResourceFiltersProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  search: string;
  setSearch: (value: string) => void;
};

const categories = [
  "All",
  "Articles",
  "Videos",
  "Podcasts",
  "Downloads",
];

export default function ResourceFilters({
  activeCategory,
  setActiveCategory,
  search,
  setSearch,
}: ResourceFiltersProps) {
  return (
    <section className="px-6 pb-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Search */}

        <div className="mx-auto max-w-2xl">

          <div className="flex items-center rounded-full border border-gray-200 bg-white px-6 py-4 shadow-sm">

            <Search
              size={22}
              className="text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topics..."
              className="ml-4 w-full bg-transparent text-lg text-[#124A66] placeholder:text-gray-400 focus:outline-none"
            />

          </div>

        </div>

        {/* Categories */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-7 py-3 text-base font-semibold transition-all ${
                activeCategory === category
                  ? "bg-[#124A66] text-white shadow-md"
                  : "border border-gray-200 bg-white text-[#124A66] hover:border-[#124A66] hover:bg-[#124A66]/5"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}