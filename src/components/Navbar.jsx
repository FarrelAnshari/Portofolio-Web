import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    
    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Portofolio", label: "Portofolio" },
        { href: "#Education", label: "Pendidikan" },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Check if user has scrolled near bottom of page
            const isNearBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 100;
            if (isNearBottom) {
                setActiveSection("Contact");
                return;
            }

            // Target scroll position with navbar offset
            const scrollPosition = window.scrollY + 140;

            for (let i = navItems.length - 1; i >= 0; i--) {
                const item = navItems[i];
                const section = document.querySelector(item.href);
                if (section) {
                    const sectionTop =
                        section.getBoundingClientRect().top + window.scrollY;
                    if (scrollPosition >= sectionTop) {
                        setActiveSection(item.href.replace("#", ""));
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const navbarOffset = 70;
            const elementPosition =
                section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setActiveSection(href.replace("#", ""));
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                isOpen
                    ? "bg-[#030014]"
                    : scrolled
                    ? "bg-[#030014]/70 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#Home"
                            onClick={(e) => scrollToSection(e, "#Home")}
                            className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent hover:opacity-90 transition-opacity"
                        >
                            Farrel
                        </a>
                    </div>
        
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-8 flex items-center md:space-x-6 lg:space-x-8">
                            {navItems.map((item) => {
                                const sectionId = item.href.substring(1);
                                const isActive = activeSection === sectionId;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className="group relative px-1 py-2 text-sm font-medium transition-colors"
                                    >
                                        <span
                                            className={`relative z-10 transition-all duration-300 ${
                                                isActive
                                                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                                                    : "text-[#e2d3fd] group-hover:text-white"
                                            }`}
                                        >
                                            {item.label}
                                        </span>
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 rounded-full ${
                                                isActive
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
        
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                            className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ${
                                isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                            }`}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        
            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <div className="px-5 py-6 space-y-2 bg-[#030014]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
                    {navItems.map((item, index) => {
                        const sectionId = item.href.substring(1);
                        const isActive = activeSection === sectionId;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ease ${
                                    isActive
                                        ? "bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 border border-[#6366f1]/40 text-white font-semibold"
                                        : "text-[#e2d3fd] hover:text-white hover:bg-white/5 border border-transparent"
                                }`}
                                style={{
                                    transitionDelay: `${index * 40}ms`,
                                    transform: isOpen ? "translateX(0)" : "translateX(20px)",
                                    opacity: isOpen ? 1 : 0,
                                }}
                            >
                                <span
                                    className={
                                        isActive
                                            ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                                            : ""
                                    }
                                >
                                    {item.label}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
