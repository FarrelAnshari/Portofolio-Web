import React, { useState, useEffect, useCallback, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Mail, ExternalLink, Instagram, Sparkles, Layers, Cpu, Database } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const TikTokIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 45 45"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path
      d="M29.52 9.45c-1.44-.4-2.76-1.15-3.84-2.19-.17-.16-.33-.33-.49-.5-1.29-1.48-1.99-3.38-1.96-5.34h-5.88v22.29c0 4.08-2.2 6.24-4.94 6.24-.72.01-1.44-.14-2.1-.44-.66-.3-1.24-.74-1.71-1.29-.47-.55-.81-1.19-1.01-1.89-.19-.7-.23-1.43-.11-2.14.12-.71.39-1.39.8-1.99.41-.6.94-1.1 1.56-1.47.62-.37 1.32-.6 2.04-.67.72-.07 1.44.02 2.12.26V14.36c-.52-.12-1.06-.18-1.6-.17h-.02C8.36 14.23 4.88 17.06 4.07 20.88c-.81 1.98-1.02 4.15-.6 6.25.42 2.1 1.45 4.02 2.96 5.53 1.51 1.51 3.44 2.54 5.54 2.95 2.1.41 4.27.2 6.24-.62 1.97-.82 3.66-2.21 4.85-3.99 1.19-1.78 1.82-3.87 1.82-6.01V12.82c2.28 1.58 5 2.32 7.9 2.37V9.69c-.54-.02-1.08-.1-1.6-.24z"
    />
  </svg>
);

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(({ line1, line2 }) => (
  <div className="space-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          {line1}
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          {line2}
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[140px] sm:w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-3" aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

const TYPING_SPEED = 90;
const ERASING_SPEED = 45;
const PAUSE_DURATION = 2000;

const SPECIALIZATIONS = [
  {
    id: "rpl",
    label: "RPL / Software Development",
    icon: Layers,
    headline1: "Frontend",
    headline2: "Developer",
    words: ["Frontend Developer", "Web Application Builder", "UI/UX Implementer"],
    description: "Merancang dan mengembangkan website modern, responsif, interaktif, dan user-friendly dengan fokus pada pengalaman pengguna serta solusi digital.",
    skills: ["React", "Javascript", "Node.js", "Tailwind", "HTML", "CSS", "Bootstrap", "PHP"],
  },
  {
    id: "networking",
    label: "Computer Networking",
    icon: Cpu,
    headline1: "Network &",
    headline2: "Systems Enthusiast",
    words: ["Network Administrator", "Systems Specialist", "Linux Explorer"],
    description: "Mempelajari dan mengembangkan kemampuan dalam instalasi jaringan komputer, konfigurasi perangkat jaringan, routing, switching, virtualisasi, serta administrasi sistem Linux.",
    skills: ["Cisco Packet Tracer", "Networking", "TCP/IP", "Linux", "Oracle VM VirtualBox", "Network Configuration", "Troubleshooting"],
  },
  {
    id: "datascience",
    label: "Data Science",
    icon: Database,
    headline1: "Data Analyst &",
    headline2: "Data Science Enthusiast",
    words: ["Data Analyst", "Data Explorer", "Insights Finder"],
    description: "Mengeksplorasi data melalui proses pengumpulan, pengolahan, analisis, dan visualisasi untuk menghasilkan informasi serta insight yang bermanfaat dalam pengambilan keputusan.",
    skills: ["Python", "SQL", "Microsoft Excel", "Oracle Database", "Data Analysis", "Statistics", "Data Visualization"],
  },
];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/FarrelAnshari", label: "GitHub Profile" },
  { icon: Instagram, link: "https://www.instagram.com/rilzt.shark?cplk=eDNqYnc5N3ZkcnA=", label: "Instagram Profile" },
  { icon: TikTokIcon, link: "https://www.tiktok.com/@anshrel98?_r=1&_t=ZS-9B0wBQHoWdY", label: "TikTok Profile" },
];

const Home = () => {
  const [activeSpecId, setActiveSpecId] = useState("rpl");
  const activeSpec = SPECIALIZATIONS.find(s => s.id === activeSpecId) || SPECIALIZATIONS[0];

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Reset typing state when switching specialization
  useEffect(() => {
    setText("");
    setCharIndex(0);
    setWordIndex(0);
    setIsTyping(true);
  }, [activeSpecId]);

  const handleTyping = useCallback(() => {
    const words = activeSpec.words;
    const currentWord = words[wordIndex % words.length];

    if (isTyping) {
      if (charIndex < currentWord.length) {
        setText(prev => prev + currentWord[charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex, activeSpec]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <>
      <Helmet>
        <title>Farrel Maulana Anshari — Portfolio</title>
        <meta name="description" content="Website resmi dan portofolio Farrel Maulana Anshari. Mahasiswa Teknik Informatika yang berfokus pada Frontend Development, Data Science, dan Computer Networking." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://github.com/FarrelAnshari" />
        <meta property="og:title" content="Farrel Maulana Anshari — Portfolio" />
        <meta property="og:description" content="Website resmi dan portofolio Farrel Maulana Anshari - Frontend Development, Data Science, dan Computer Networking." />
        <meta property="og:url" content="https://github.com/FarrelAnshari" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Farrel Maulana Anshari",
            "jobTitle": "Computer Science Student",
            "url": "https://github.com/FarrelAnshari",
            "sameAs": [
              "https://github.com/FarrelAnshari",
              "https://www.instagram.com/rilzt.shark?cplk=eDNqYnc5N3ZkcnA=",
              "https://www.tiktok.com/@anshrel98?_r=1&_t=ZS-9B0wBQHoWdY"
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto min-h-screen pt-20 md:pt-0">
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen md:justify-between gap-6 sm:gap-12 lg:gap-16 py-10 lg:py-0">
              
              {/* Left Column */}
              <div 
                className="w-full lg:w-1/2 space-y-5 sm:space-y-6 text-left order-1 lg:order-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="space-y-4 sm:space-y-5">
                  <StatusBadge />

                  {/* Main Title */}
                  <MainTitle line1={activeSpec.headline1} line2={activeSpec.headline2} />

                  {/* PILIH BIDANG - Interactive Specialization Switcher */}
                  <div className="space-y-2 pt-1" data-aos="fade-up" data-aos-delay="700">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-purple-400/90 uppercase px-1">
                        PILIH BIDANG
                      </span>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/30 via-indigo-500/20 to-transparent"></div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      {SPECIALIZATIONS.map((spec) => {
                        const isActive = activeSpecId === spec.id;
                        const SpecIcon = spec.icon;
                        return (
                          <button
                            key={spec.id}
                            type="button"
                            onClick={() => setActiveSpecId(spec.id)}
                            className={`group relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${
                              isActive
                                ? "text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/60"
                                : "text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10"
                            }`}
                          >
                            {isActive && (
                              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-90 transition-opacity duration-300"></div>
                            )}
                            <SpecIcon className="w-3.5 h-3.5 relative z-10" />
                            <span className="relative z-10 whitespace-nowrap">{spec.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Typing Effect */}
                  <div className="h-7 sm:h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                    <span className="text-lg md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                      {text}
                    </span>
                    <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                  </div>

                  {/* Dynamic Description with smooth transition */}
                  <p 
                    key={activeSpec.id}
                    className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light transition-opacity duration-500 animate-fadeIn"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    {activeSpec.description}
                  </p>

                  {/* Dynamic Skill Badges */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-start" data-aos="fade-up" data-aos-delay="1000">
                    {activeSpec.skills.map((skill, index) => (
                      <TechStack key={`${activeSpec.id}-${index}`} tech={skill} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-row gap-3 w-full justify-start pt-2" data-aos="fade-up" data-aos-delay="1100">
                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-start pt-1" data-aos="fade-up" data-aos-delay="1200">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} {...social} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Animation Graphic */}
              <div 
                className="w-full py-0 lg:w-1/2 h-[260px] sm:h-[380px] lg:h-[550px] xl:h-[650px] relative flex items-center justify-center order-2 lg:order-2 mt-4 lg:mt-0"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <div className="relative w-full opacity-90">
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                  }`} />

                  <div className={`relative lg:left-8 z-10 w-full opacity-90 transform transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}>
                    <img
                      src="Animation1.gif"
                      alt="Developer Animation"
                      className={`w-full h-full object-contain transition-all duration-500 ${
                        isHovering 
                          ? "scale-[95%] sm:scale-[90%] md:scale-[90%] lg:scale-[90%] rotate-2" 
                          : "scale-[90%] sm:scale-[80%] md:scale-[80%] lg:scale-[80%]"
                      }`}
                    />
                  </div>

                  <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-50" : "opacity-20"
                  }`}>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);
