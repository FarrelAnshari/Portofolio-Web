import React, { useEffect, memo } from "react";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Trophy,
  Star,
  BookOpen,
  Award,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const SEMESTER_RANKS = [
  { grade: "Kelas X", sem1: "Peringkat 3", sem2: "Peringkat 2", isTop1_1: false, isTop1_2: false },
  { grade: "Kelas XI", sem1: "Peringkat 1", sem2: "Peringkat 1", isTop1_1: true, isTop1_2: true },
  { grade: "Kelas XII", sem1: "Peringkat 1", sem2: "Peringkat 1", isTop1_1: true, isTop1_2: true },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section
      id="Education"
      className="md:px-[10%] px-[5%] w-full py-16 sm:py-20 bg-[#030014] overflow-hidden scroll-mt-20"
    >
      {/* Section Header */}
      <div
        className="text-center mb-12 sm:mb-14"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 border border-[#6366f1]/30 text-purple-300 mb-4">
          Latar Belakang Akademik
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mt-2 mb-3">
          Riwayat Pendidikan
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Perjalanan akademik dan pencapaian pendidikan yang membentuk kemampuan
          serta fondasi keilmuan saya.
        </p>
      </div>

      {/* Education Cards Grid - Equal Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* KARTU 1: UNIVERSITAS MUHAMMADIYAH MALANG */}
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className="group relative h-full flex flex-col"
        >
          <div className="relative h-full rounded-2xl border border-[#6366f1]/30 bg-gray-900/50 backdrop-blur-xl p-6 sm:p-7 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#6366f1]/20 overflow-hidden flex flex-col justify-between">
            {/* Background gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/15 to-[#a855f7]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              {/* Bagian Atas: Header & Informasi Utama */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:rotate-3">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-emerald-500/10 border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Sedang Menempuh
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Universitas Muhammadiyah Malang
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <BookOpen className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-purple-300">
                      Sarjana (S1) — Teknik Informatika
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-y-2 gap-x-4 pt-1 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span>Malang, Jawa Timur</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span>2024 – Sekarang</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Bagian Tengah: Kartu IPK Utama */}
              <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 via-[#6366f1]/10 to-[#a855f7]/10 border border-yellow-500/30 relative overflow-hidden group-hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-yellow-300/90 font-semibold flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    Pencapaian Akademik
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-yellow-500/20 text-yellow-300 border border-yellow-500/40">
                    Skala 4.00
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 tracking-tight drop-shadow-sm">
                    3.90
                  </span>
                  <span className="text-sm text-yellow-200/70 font-medium">
                    / 4.00 IPK
                  </span>
                </div>

                <p className="text-xs text-gray-300 mt-2.5 leading-relaxed font-light">
                  Menunjukkan konsistensi dan pemahaman mendalam dalam mata kuliah bidang rekayasa perangkat lunak, sistem, dan logika komputasi.
                </p>
              </div>

              {/* Bagian Bawah: Catatan Status Akademik */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg p-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Fokus saat ini pada pendalaman <strong className="text-white font-medium">Software Development</strong>, <strong className="text-white font-medium">Networking</strong>, dan <strong className="text-white font-medium">Data Science</strong>.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KARTU 2: SMA NEGERI 2 MARTAPURA */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="1000"
          className="group relative h-full flex flex-col"
        >
          <div className="relative h-full rounded-2xl border border-[#a855f7]/30 bg-gray-900/50 backdrop-blur-xl p-6 sm:p-7 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#a855f7]/20 overflow-hidden flex flex-col justify-between">
            {/* Background gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/15 to-[#6366f1]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a855f7] to-[#6366f1] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-5">
              {/* Bagian Atas: Header & Informasi Utama */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#6366f1] flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:rotate-3">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-blue-500/10 border-blue-500/30 text-blue-400">
                    Alumni
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    SMA Negeri 2 Martapura
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <BookOpen className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-purple-300">
                      Matematika dan Ilmu Pengetahuan Alam (MIPA)
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-y-2 gap-x-4 pt-1 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span>Kabupaten Banjar, Kalimantan Selatan</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span>2021 – 2024</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Bagian Tengah: Subbagian Rekam Jejak Akademik Enam Semester */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-purple-300 tracking-wider uppercase flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                    Rekam Jejak Akademik
                  </span>
                  <span className="text-[11px] font-medium text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    4x Peringkat 1 Berturut-turut
                  </span>
                </div>

                {/* Tabel Mini 6 Semester */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <div className="grid grid-cols-3 bg-white/5 py-1.5 px-3 text-[11px] font-semibold text-gray-300 border-b border-white/10">
                    <span>Tingkat</span>
                    <span className="text-center">Semester 1</span>
                    <span className="text-center">Semester 2</span>
                  </div>
                  <div className="divide-y divide-white/5 text-xs">
                    {SEMESTER_RANKS.map((item, idx) => (
                      <div key={idx} className="grid grid-cols-3 items-center py-2 px-3 text-gray-300">
                        <span className="font-medium text-gray-300 text-[11px] sm:text-xs">
                          {item.grade}
                        </span>
                        <div className="flex justify-center">
                          <span
                            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border transition-all ${
                              item.isTop1_1
                                ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                                : "bg-white/5 text-gray-300 border-white/10"
                            }`}
                          >
                            {item.isTop1_1 ? "🥇 " : ""}{item.sem1}
                          </span>
                        </div>
                        <div className="flex justify-center">
                          <span
                            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border transition-all ${
                              item.isTop1_2
                                ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                                : "bg-white/5 text-gray-300 border-white/10"
                            }`}
                          >
                            {item.isTop1_2 ? "🥇 " : ""}{item.sem2}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bagian Bawah: Prestasi Utama (Peringkat 3 Terbaik Satu Angkatan MIPA) */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-[#a855f7]/15 to-[#6366f1]/15 border border-amber-500/30 flex items-center gap-3.5 group-hover:border-amber-500/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-amber-400 drop-shadow-sm" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-amber-300/80 font-bold">
                    Pencapaian Akhir Kelulusan
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Peringkat ke-3 Terbaik dalam Satu Angkatan MIPA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(Education);
