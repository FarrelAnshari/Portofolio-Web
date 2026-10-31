import React from "react";
import { ArrowRight, Eye } from "lucide-react";

const CardProject = ({ project, onViewDetails }) => {
  const { Img, Title, Description, Category, TechStack } = project;

  return (
    <div className="group relative w-full h-full flex flex-col">
      <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:border-purple-500/50 hover:-translate-y-1">
        {/* Glow backdrop on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

        <div className="relative p-5 z-10 flex flex-col flex-grow justify-between">
          <div>
            {/* Thumbnail Image */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <img
                src={Img}
                alt={Title}
                className="w-full h-48 sm:h-52 object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {Category && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-purple-300 border border-purple-500/30">
                  {Category}
                </div>
              )}
            </div>

            {/* Title & Description */}
            <div className="mt-4 space-y-2">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-100 via-purple-100 to-white bg-clip-text text-transparent group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                {Title}
              </h3>

              <p className="text-gray-300/80 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                {Description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            {TechStack && TechStack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {TechStack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300 group-hover:border-purple-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {TechStack.length > 4 && (
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-gray-400">
                    +{TechStack.length - 4}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Action Button: View Details */}
          <div className="pt-5 mt-auto border-t border-white/5 flex items-center justify-between">
            <button
              type="button"
              onClick={onViewDetails}
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 hover:from-[#6366f1] hover:to-[#a855f7] border border-purple-500/30 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-purple-500/25 focus:outline-none"
            >
              <Eye className="w-4 h-4 text-purple-300 group-hover:text-white" />
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 text-purple-300 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
