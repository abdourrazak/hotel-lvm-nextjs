import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    // Numéro WhatsApp et message pré-rempli
    const whatsappNumber = "237697251195";
    const whatsappMessage = encodeURIComponent("Bonjour, je souhaite effectuer une réservation à l'Hôtel La Valeureuse Mère.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/imgfacadeNuiy.jpeg"
                    alt="Hôtel La Valeureuse Mère"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay très léger pour voir l'image complète */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 md:from-black/60 md:via-black/70 md:to-black/80" />
            </div>

            {/* Content - Centré et Minimaliste */}
            <div className="relative z-10 container mx-auto px-4 py-20 sm:py-24 md:py-32 text-center">
                <div className="max-w-5xl mx-auto space-y-5 sm:space-y-8 md:space-y-10 flex flex-col items-center justify-center">
                    {/* Main Title - Police Élégante */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
                        <span className="block mb-2 text-primary font-sans text-sm sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-[0.3em] uppercase">
                            Bienvenue à
                        </span>
                        <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
                            L'Hôtel La Valeureuse Mère
                        </span>
                    </h1>

                    {/* Subtitle - Police Raffinée */}
                    <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-light tracking-wide leading-relaxed px-4 max-w-3xl mx-auto">
                        Un havre de paix et d'élégance au cœur du Cameroun
                    </p>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-3 sm:gap-4 py-1 sm:py-2">
                        <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                        <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
                    </div>

                    {/* WhatsApp Contact Badge - CLIQUABLE */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] group"
                    >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="whitespace-nowrap font-medium">
                            Réserver via WhatsApp
                        </span>
                    </a>

                    {/* CTA Buttons - CÔTE À CÔTE - Minimalistes */}
                    <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 pt-3 sm:pt-6 px-2 sm:px-4 w-full max-w-2xl mx-auto">
                        {/* Bouton Réserver - Plus large */}
                        <Button
                            asChild
                            className="flex-[1.3] sm:flex-initial bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent text-secondary font-bold px-4 sm:px-8 md:px-10 py-2.5 sm:py-4 md:py-5 text-xs sm:text-base md:text-lg rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-primary/20"
                        >
                            <a href="#reservation" className="tracking-wide whitespace-nowrap">
                                Réserver
                            </a>
                        </Button>

                        {/* Bouton Découvrir */}
                        <Button
                            asChild
                            variant="outline"
                            className="flex-1 sm:flex-initial border-2 border-white/80 !text-white hover:!bg-white hover:!text-secondary font-semibold px-3 sm:px-8 md:px-10 py-2.5 sm:py-4 md:py-5 text-xs sm:text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm hover:shadow-2xl"
                        >
                            <a href="#about" className="text-white hover:text-secondary tracking-wide whitespace-nowrap">
                                Découvrir
                            </a>
                        </Button>
                    </div>

                    {/* Trust Badge */}
                    <div className="pt-4 sm:pt-6">
                        <p className="text-white/70 text-xs sm:text-sm font-light tracking-widest uppercase">
                            ✨ Excellence Camerounaise depuis 2020 ✨
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
