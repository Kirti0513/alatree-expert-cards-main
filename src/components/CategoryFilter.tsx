
interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
            ${activeCategory === category.id
              ? 'bg-[#009688] text-white shadow-md focus:ring-[#009688]'
              : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-[#009688] border-2 border-slate-200 hover:border-[#009688] focus:ring-slate-300'
            }
          `}
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        >
          {category.name}
          <span className={`ml-2 text-sm ${
            activeCategory === category.id ? 'text-[#009688]/20' : 'text-slate-400'
          }`}>
            ({category.count})
          </span>
        </button>
      ))}
    </div>
  );
};
