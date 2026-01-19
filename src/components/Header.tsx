"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#hero", label: "Accueil" },
        { href: "#about", label: "L'Hôtel" },
        { href: "#rooms", label: "Chambres" },
        { href: "#restaurant", label: "Restaurant" },
        { href: "#services", label: "Services" },
        { href: "#gallery", label: "Galerie" },
        { href: "#pricing", label: "Tarifs" },
        { href: "#reservation", label: "Réservation" },
        { href: "#contact", label: "Contact" },
    ];

    // Navigation instantanée sans défilement
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll instantané vers la section
            targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-secondary transition-all duration-300 ${scrolled ? "py-2 shadow-lg" : "py-3 sm:py-4 shadow-md"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo avec Image */}
                    <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
                        {/* Logo Image */}
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary shadow-lg group-hover:border-accent transition-colors duration-300">
                            <Image
                                src="/images/logo.jpeg"
                                alt="Logo Hôtel La Valeureuse Mère"
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>

                        {/* Texte du Logo */}
                        <div className="flex flex-col justify-center">
                            <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary font-raleway leading-tight">
                                HÔTEL
                            </div>
                            <div className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-normal text-white tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] leading-tight">
                                LA VALEUREUSE MÈRE
                            </div>
                        </div>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="relative text-white font-medium text-sm xl:text-base hover:text-primary transition-colors duration-300 group cursor-pointer"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white p-2 hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 animate-in slide-in-from-top duration-300">
                        <ul className="flex flex-col space-y-2 pt-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="block py-2 px-4 text-white hover:text-primary hover:bg-white/5 rounded-lg transition-colors duration-200 cursor-pointer"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}
