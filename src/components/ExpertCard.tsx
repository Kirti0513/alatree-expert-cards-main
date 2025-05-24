
import { Star } from "lucide-react";

interface Expert {
  id: number;
  name: string;
  skill: string;
  category: string;
  image: string;
  rating: number;
  price: number;
  sessions: number;
}

interface ExpertCardProps {
  expert: Expert;
}

export const ExpertCard = ({ expert }: ExpertCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      {/* Profile Image */}
      <div className="relative p-6 pb-4">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-[#009688]/10 group-hover:ring-[#009688]/20 transition-all duration-300">
          <img
            src={expert.image}
            alt={expert.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Expert Info */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-semibold text-slate-800 text-center mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
          {expert.name}
        </h3>
        
        <p className="text-[#009688] font-medium text-center mb-3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          {expert.skill}
        </p>

        {/* Rating & Sessions */}
        <div className="flex items-center justify-center gap-4 mb-4 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#FF9800] text-[#FF9800]" />
            <span className="font-medium">{expert.rating}</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
          <span>{expert.sessions} sessions</span>
        </div>

        {/* Price */}
        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Lato, sans-serif' }}>
            ${expert.price}
          </span>
          <span className="text-slate-500 text-sm">/hour</span>
        </div>

        {/* Book Now Button */}
        <button className="w-full bg-[#009688] hover:bg-[#00796b] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#009688] focus:ring-offset-2" 
                style={{ fontFamily: 'Open Sans, sans-serif' }}>
          Book Now
        </button>

        {/* Secondary Action */}
        <button className="w-full mt-2 border-2 border-[#FF9800] text-[#FF9800] hover:bg-[#FF9800] hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF9800] focus:ring-offset-2"
                style={{ fontFamily: 'Open Sans, sans-serif' }}>
          View Profile
        </button>
      </div>
    </div>
  );
};
