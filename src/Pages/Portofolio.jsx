import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import ProjectModal from "../components/ProjectModal";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, Layers, Cpu, Database, Award as AwardIcon } from "lucide-react";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TECH_CATEGORIES = [
  { id: "all", label: "All Technologies", icon: Boxes },
  { id: "frontend", label: "Frontend Development", icon: Layers },
  { id: "datascience", label: "Data Science & Analysis", icon: Database },
  { id: "networking", label: "Networking & Systems", icon: Cpu },
];

const techStacks = [
  // Frontend / Software Development
  { icon: "html.svg", language: "HTML5", category: "frontend" },
  { icon: "css.svg", language: "CSS3", category: "frontend" },
  { icon: "javascript.svg", language: "JavaScript", category: "frontend" },
  { icon: "tailwind.svg", language: "Tailwind CSS", category: "frontend" },
  { icon: "reactjs.svg", language: "ReactJS", category: "frontend" },
  { icon: "vite.svg", language: "Vite", category: "frontend" },
  { icon: "nodejs.svg", language: "Node.js", category: "frontend" },
  { icon: "bootstrap.svg", language: "Bootstrap", category: "frontend" },
  { icon: "php.svg", language: "PHP", category: "frontend" },
  { icon: "MUI.svg", language: "Material UI", category: "frontend" },
  { icon: "firebase.svg", language: "Firebase", category: "frontend" },
  { icon: "vercel.svg", language: "Vercel", category: "frontend" },
  { icon: "SweetAlert.svg", language: "SweetAlert2", category: "frontend" },

  // Data Science & Data Analysis
  { icon: "python.svg", language: "Python", category: "datascience" },
  { icon: "excel.svg", language: "Microsoft Excel", category: "datascience" },
  { icon: "sql.svg", language: "SQL", category: "datascience" },
  { icon: "oracle.svg", language: "Oracle Database", category: "datascience" },

  // Computer Networking & Systems
  { icon: "cisco.svg", language: "Cisco Packet Tracer", category: "networking" },
  { icon: "virtualbox.svg", language: "Oracle VM VirtualBox", category: "networking" },
  { icon: "linux.svg", language: "Linux", category: "networking" },
];

export const FEATURED_PROJECTS = [
  {
    id: "multi-lan-network-topology",
    Title: "Multi-LAN Network Topology Simulation",
    Category: "Computer Networking",
    categoryKey: "networking",
    Img: "/cisco-topology.jpg",
    TechStack: ["Cisco Packet Tracer", "Router", "Switch", "IP Addressing", "Subnetting"],
    Description: "A network topology simulation project involving multiple LAN segments connected through a router and switches. The project focuses on network topology design, IP addressing, subnetting, and connectivity between different network segments.",
    modalDescription: "Simulasi perancangan jaringan komputer menggunakan Cisco Packet Tracer yang menghubungkan beberapa jaringan LAN melalui router dan switch. Project ini berfokus pada perancangan topologi, konfigurasi IP address, subnetting, serta pengujian konektivitas antarjaringan.",
    purpose: "Merancang arsitektur jaringan terpadu multi-departemen (Main Campus & Small Campus) dengan pemisahan segmentasi VLAN, routing antar gedung, serta manajemen IP yang efisien dan aman.",
    features: [
      "Network topology design (Building A, B, C, & Small Campus)",
      "IP addressing and subnetting per department",
      "VLAN segmentation (Admin, HR, Finance, Student, IT Lab)",
      "Router and multilayer switch configuration",
      "Network connectivity testing using ICMP ping and simulation mode"
    ],
    tools: ["Cisco Packet Tracer", "Router & Multilayer Switch", "TCP/IP", "VLAN & Subnetting"],
    contribution: "Merancang skema topologi jaringan, mengonfigurasi IP address dan subnet mask pada setiap perangkat, mengatur konfigurasi router dan switch, serta melakukan verifikasi konektivitas antar subnet.",
  },
  {
    id: "parkin-smart-campus-parking",
    Title: "PARKIN — Smart Campus Parking System",
    Category: "Software Development",
    categoryKey: "frontend",
    Img: "/parkin-system.png",
    TechStack: ["ReactJS", "Tailwind CSS", "Vite", "JavaScript"],
    Description: "A smart campus parking application designed to simplify parking management through an interactive dashboard, parking availability monitoring, QR ticket scanning, vehicle filtering, and parking prediction features.",
    modalDescription: "Aplikasi Smart Campus Parking yang dirancang untuk membantu pengelolaan area parkir kampus. Aplikasi ini menyediakan dashboard interaktif untuk memantau ketersediaan slot parkir, pengelolaan kendaraan, pemindaian QR tiket, dan fitur prediksi kapasitas parkir.",
    purpose: "Membantu pengelolaan area parkir kampus secara efisien dengan visualisasi ketersediaan kapasitas real-time, pencatatan kendaraan instan berbasis QR code, dan analisis prediksi kepadatan.",
    features: [
      "Parking availability monitoring (slot terisi & slot tersedia)",
      "QR ticket scanning untuk kemudahan check-in dan check-out",
      "Vehicle filtering (Semua, Motor, Mobil) dan penandaan lokasi parkir",
      "Interactive modern dashboard dengan status kampus dan area aktif",
      "Parking prediction untuk estimasi okupansi parkir",
      "User role interface (Mahasiswa & Admin)"
    ],
    tools: ["ReactJS", "Tailwind CSS", "Vite", "JavaScript", "HTML5 & CSS3"],
    contribution: "Mengembangkan antarmuka pengguna dashboard interaktif yang responsif, mengimplementasikan komponen visualisasi kapasitas parkir, logika filter kategori kendaraan, serta integrasi tombol pemindaian tiket QR.",
  },
  {
    id: "oracle-apex-database-system",
    Title: "Customer & Rental Database Management System",
    Category: "Database Management",
    categoryKey: "datascience",
    Img: "/oracle-apex.jpg",
    TechStack: ["Oracle APEX", "SQL", "Oracle Database"],
    Description: "A database management project developed using Oracle APEX and SQL. The project focuses on managing customer information, rental transactions, and payment-related data through SQL queries and relational database operations.",
    modalDescription: "Project pengelolaan basis data menggunakan Oracle APEX dan SQL untuk mengatur informasi pelanggan, transaksi penyewaan, serta pembayaran. Project ini berfokus pada penggunaan query SQL dan pengelolaan data dalam basis data relasional.",
    purpose: "Membangun sistem basis data relasional yang andal untuk mengelola data operasional persewaan, menjamin konsistensi dan integritas data antara pelanggan, transaksi sewa, serta histori pembayaran.",
    features: [
      "Customer data management (NO_KTP, Nama, Telepon, Alamat, Email)",
      "Rental transaction management (ID Sewa, Tanggal Sewa, Biaya, Periode)",
      "Payment tracking & verification",
      "Relational SQL queries (SELECT, INSERT, DDL, DML, Filter)",
      "Database table operations via Oracle APEX SQL Workshop"
    ],
    tools: ["Oracle Application Express (APEX)", "SQL Workshop", "Oracle Database", "Relational SQL"],
    contribution: "Merancang skema relasional tabel customer, penyewaan, dan pembayaran, menulis script SQL DDL dan DML, serta mengeksekusi query transaksi dan verifikasi hasil data di Oracle APEX SQL Workshop.",
  }
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [techCategory, setTechCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredTechStacks = useMemo(() => {
    if (techCategory === "all") return techStacks;
    return techStacks.filter(item => item.category === techCategory);
  }, [techCategory]);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* Main Tabs AppBar */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* Projects Tab - 3 Featured Projects in 1 row on Desktop */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {FEATURED_PROJECTS.map((project, index) => (
                  <div
                    key={project.id}
                    data-aos={index === 0 ? "fade-up-right" : index === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration="1000"
                    className="h-full flex"
                  >
                    <CardProject
                      project={project}
                      onViewDetails={() => handleOpenDetails(project)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          {/* Certificates Tab - Clean display without unverified data */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex flex-col justify-center items-center overflow-hidden py-8">
              <div className="max-w-xl w-full p-8 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-white/10 text-center space-y-4 shadow-2xl">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-[#6366f1]/20 to-[#a855f7]/20 border border-purple-500/30 flex items-center justify-center">
                  <AwardIcon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  7 Verified Learning Achievements
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Telah menyelesaikan 7 kursus dan pencapaian pembelajaran akademik di bidang Software Development, Jaringan Komputer, dan Analisis Data.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-purple-300">
                    Dokumentasi sertifikat resmi tersedia berdasarkan permintaan
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Tech Stack Tab with Category Navigation */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex flex-col justify-center items-center overflow-hidden pb-[5%]">
              
              {/* Category Filter Pills for Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 w-full">
                {TECH_CATEGORIES.map((cat) => {
                  const isActive = techCategory === cat.id;
                  const CatIcon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setTechCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 focus:outline-none ${
                        isActive
                          ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-400/50"
                          : "bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-purple-500/30 hover:bg-white/10"
                      }`}
                    >
                      <CatIcon className="w-3.5 h-3.5" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Grid of Tech Stack Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5 w-full">
                {filteredTechStacks.map((stack, index) => (
                  <div
                    key={`${techCategory}-${stack.language}`}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
