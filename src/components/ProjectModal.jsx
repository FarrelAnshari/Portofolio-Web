import React, { useEffect } from "react";
import { X, CheckCircle2, Wrench, Target, UserCheck, Layers } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900/95 via-[#0c0d21]/95 to-slate-900/95 border border-purple-500/30 text-white shadow-[0_0_50px_rgba(168,85,247,0.25)] p-5 sm:p-8 space-y-6 animate-scaleUp scrollbar-thin scrollbar-thumb-purple-600/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-b from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header & Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 relative z-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-2">
              {project.Category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              {project.Title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all duration-200 hover:scale-105 focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Project Screenshot */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
          <img
            src={project.Img}
            alt={project.Title}
            className="w-full h-auto max-h-[360px] object-contain bg-black/40 mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-sm sm:text-base leading-relaxed text-gray-300 relative z-10">
          
          {/* Deskripsi */}
          <div>
            <h3 className="text-xs uppercase font-semibold text-purple-400 tracking-wider mb-1.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-400" /> Ringkasan Project
            </h3>
            <p className="text-gray-300 leading-relaxed font-light">
              {project.modalDescription || project.Description}
            </p>
          </div>

          {/* Tujuan / Permasalahan */}
          {project.purpose && (
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xs uppercase font-semibold text-indigo-300 tracking-wider mb-1.5 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-indigo-400" /> Tujuan & Solusi
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {project.purpose}
              </p>
            </div>
          )}

          {/* Fitur Utama */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-semibold text-blue-400 tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Fitur Utama
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Teknologi & Tools */}
          <div>
            <h3 className="text-xs uppercase font-semibold text-purple-300 tracking-wider mb-2 flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-purple-400" /> Teknologi & Tools Digunakan
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project.tools || project.TechStack || []).map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Kontribusi */}
          {project.contribution && (
            <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
              <h3 className="text-xs uppercase font-semibold text-indigo-300 tracking-wider mb-1.5 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-indigo-400" /> Kontribusi & Pengerjaan
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white text-sm font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-purple-500/25 focus:outline-none"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

