import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
    const quickLinks = [
        { href: "#hero", label: "Accueil" },
        { href: "#about", label: "L'Hôtel" },
        { href: "#rooms", label: "Chambres" },
        { href: "#restaurant", label: "Restaurant" },
        { href: "#contact", label: "Contact" },
    ];

    const services = [
        { href: "#services", label: "Hébergement" },
        { href: "#restaurant", label: "Restauration" },
        { href: "#services", label: "Spa & Bien-être" },
        { href: "#services", label: "Événements" },
        { href: "#services", label: "Transferts" },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ];

    return (
        <footer className="bg-secondary text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* Logo Image */}
                            <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary shadow-lg group-hover:border-accent transition-colors duration-300">
                                <Image
                                    src="/images/logo.jpeg"
                                    alt="Logo Hôtel La Valeureuse Mère"
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>
                            {/* Logo Text */}
                            <div>
                                <div className="text-xl font-bold text-primary">HÔTEL</div>
                                <div className="text-xs font-normal text-white tracking-[0.2em]">
                                    LA VALEUREUSE MÈRE
                                </div>
                            </div>
                        </Link>
                        <p className="text-white/80 text-sm">
                            Un établissement d&apos;exception offrant un service personnalisé dans un
                            cadre luxueux au cœur du Cameroun.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-primary font-bold text-lg mb-4">
                            Liens Rapides
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white/80 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-primary font-bold text-lg mb-4">
                            Nos Services
                        </h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-white/80 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-primary font-bold text-lg mb-4">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-white/80 text-sm">
                                    NKOLBISSON-MINKOAMEYOS (après la gendarmerie et l&apos;hôpital IRAD),
                                    Yaoundé, Cameroun
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-white/80 text-sm">
                                    +237 650 78 63 86<br />+237 697 25 11 95
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-white/80 text-sm">
                                    info@hotelvaleureusemere.cm
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
                        <div className="text-center md:text-left">
                            © 2026 <strong>IMANI-TECH SOLUTIONS SARL</strong>. Tous droits
                            réservés.
                        </div>
                        <div className="flex items-center gap-2">
                            Conçu avec <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
                            pour l&apos;excellence camerounaise
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
