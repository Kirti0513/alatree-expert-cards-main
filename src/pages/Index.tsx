import { useState } from "react";
import { ExpertCard } from "@/components/ExpertCard";
import { CategoryFilter } from "@/components/CategoryFilter";

// Import expert images from assets
import sarahImg from "@/assets/images/experts/sarah.png";
import michaelImg from "@/assets/images/experts/michael.png";
import emilyImg from "@/assets/images/experts/emily.png";
import davidImg from "@/assets/images/experts/david.png";
import lisaImg from "@/assets/images/experts/lisa.png";
import jamesImg from "@/assets/images/experts/james.png";
import alexandraImg from "@/assets/images/experts/alexandra.png";
import robertImg from "@/assets/images/experts/robert.png";

// Expert data with imported images
const experts = [
  {
    id: 1,
    name: "Sarah Chen",
    skill: "Digital Marketing",
    category: "marketing",
    image: sarahImg,
    rating: 4.9,
    price: 75,
    sessions: 127
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    skill: "Web Development",
    category: "technology",
    image: michaelImg,
    rating: 4.8,
    price: 90,
    sessions: 89
  },
  {
    id: 3,
    name: "Emily Johnson",
    skill: "UX/UI Design",
    category: "design",
    image: emilyImg,
    rating: 4.9,
    price: 85,
    sessions: 156
  },
  {
    id: 4,
    name: "David Kim",
    skill: "Business Strategy",
    category: "business",
    image: davidImg,
    rating: 4.7,
    price: 120,
    sessions: 203
  },
  {
    id: 5,
    name: "Lisa Wang",
    skill: "Data Science",
    category: "technology",
    image: lisaImg,
    rating: 4.8,
    price: 95,
    sessions: 134
  },
  {
    id: 6,
    name: "James Thompson",
    skill: "Content Marketing",
    category: "marketing",
    image: jamesImg,
    rating: 4.6,
    price: 65,
    sessions: 98
  },
  {
    id: 7,
    name: "Alexandra Foster",
    skill: "Graphic Design",
    category: "design",
    image: alexandraImg,
    rating: 4.9,
    price: 70,
    sessions: 145
  },
  {
    id: 8,
    name: "Robert Martinez",
    skill: "Financial Planning",
    category: "business",
    image: robertImg,
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
