
import { useState } from "react";
import { ExpertCard } from "@/components/ExpertCard";
import { CategoryFilter } from "@/components/CategoryFilter";

// Mock data for experts
const experts = [
  {
    id: 1,
    name: "Sarah Chen",
    skill: "Digital Marketing",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    price: 75,
    sessions: 127
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    skill: "Web Development",
    category: "technology",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    price: 90,
    sessions: 89
  },
  {
    id: 3,
    name: "Emily Johnson",
    skill: "UX/UI Design",
    category: "design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    price: 85,
    sessions: 156
  },
  {
    id: 4,
    name: "David Kim",
    skill: "Business Strategy",
    category: "business",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 4.7,
    price: 120,
    sessions: 203
  },
  {
    id: 5,
    name: "Lisa Wang",
    skill: "Data Science",
    category: "technology",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    price: 95,
    sessions: 134
  },
  {
    id: 6,
    name: "James Thompson",
    skill: "Content Marketing",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 4.6,
    price: 65,
    sessions: 98
  },
  {
    id: 7,
    name: "Alexandra Foster",
    skill: "Graphic Design",
    category: "design",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 4.9,
    price: 70,
    sessions: 145
  },
  {
    id: 8,
    name: "Robert Martinez",
    skill: "Financial Planning",
    category: "business",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    price: 110,
    sessions: 167
  }
];

const categories = [
  { id: "all", name: "All Experts", count: experts.length },
  { id: "technology", name: "Technology", count: experts.filter(e => e.category === "technology").length },
  { id: "design", name: "Design", count: experts.filter(e => e.category === "design").length },
  { id: "marketing", name: "Marketing", count: experts.filter(e => e.category === "marketing").length },
  { id: "business", name: "Business", count: experts.filter(e => e.category === "business").length }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredExperts = activeCategory === "all" 
    ? experts 
    : experts.filter(expert => expert.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="text-[#009688]">Talent</span><span className="text-[#FF9800]">Konnect</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Connect with industry experts for live sessions, courses, and professional growth opportunities
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Showing {filteredExperts.length} expert{filteredExperts.length !== 1 ? 's' : ''}
            {activeCategory !== "all" && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
          </p>
        </div>

        {/* Expert Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>

        {/* Empty State */}
        {filteredExperts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              No experts found in this category
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
