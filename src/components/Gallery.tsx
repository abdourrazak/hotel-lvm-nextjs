import Image from "next/image";
import { ZoomIn } from "lucide-react";

export default function Gallery() {
    const images = [
        { src: "/images/imgfacadeNuiy.jpeg", alt: "Façade" },
        { src: "/images/imgEquipe.jpg", alt: "Équipe" },
        { src: "/images/imgEsp2.jpeg", alt: "Terrasse" },
        { src: "/images/imgBaretResto2.jpeg", alt: "Salle à manger" },
        { src: "/images/imgChbreLuxe2.jpeg", alt: "Suite" },
        { src: "/images/imgRecp.jpeg", alt: "Réception" },
    ];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        Galerie
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
                        Découvrez notre univers en images
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative h-64 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="w-12 h-12 text-primary" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
