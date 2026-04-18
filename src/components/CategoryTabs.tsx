interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategortyTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-3">
        เลือกตามหมวดหมู่
      </label>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium transition all ${selectedCategory === category ? "bg-orange-500 text-white shadow-md scale-105" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
