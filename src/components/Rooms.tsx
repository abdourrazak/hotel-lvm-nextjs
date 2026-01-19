import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Maximize } from "lucide-react";

export default function Rooms() {
    const rooms = [
        {
            id: 1,
            name: "Chambre STANDARD",
            description: "Chambre confortable avec vue sur le jardin intérieur.",
            image: "/images/imgChbreStand.jpeg",
            capacity: "2 personnes",
            size: "25 m²",
            price: "15,000 XAF",
            link: "/chambres/standard",
        },
        {
            id: 2,
            name: "Chambre DE LUXE",
            description: "Chambre spacieuse avec balcon privé.",
            image: "/images/imgChbreLuxe6.jpeg",
            capacity: "2 personnes",
            size: "30 m²",
            price: "20,000 XAF",
            link: "/chambres/deluxe",
        },
        {
            id: 3,
            name: "Chambre EXECUTIVE",
            description: "Chambre supérieure avec coin salon.",
            image: "/images/imgChbreLuxe2.jpeg",
            capacity: "2 personnes",
            size: "35 m²",
            price: "25,000 XAF",
            link: "/chambres/executive",
        },
        {
            id: 4,
            name: "MINI SUITE",
            description: "Chambre de luxe avec vue panoramique sur la ville.",
            image: "/images/imgSuite.jpeg",
            capacity: "2 personnes",
            size: "40 m²",
            price: "35,000 XAF",
            link: "/chambres/suite",
        },
    ];

    return (
        <section id="rooms" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        Nos Chambres
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
                        Un hébergement exceptionnel pour votre confort
                    </p>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {rooms.map((room, index) => (
                        <Card
                            key={room.id}
                            className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full bg-white relative"
                        >
                            {/* Room Image - Clickable - OPTIMISÉ */}
                            <Link href={room.link} className="relative h-56 sm:h-64 overflow-hidden flex-shrink-0 block">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    priority={index < 2}
                                    loading={index < 2 ? "eager" : "lazy"}
                                    quality={90}
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <div className="bg-primary text-secondary px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm font-bold shadow-2xl flex items-center gap-2">
                                        <Maximize className="w-4 h-4" />
                                        Voir les détails
                                    </div>
                                </div>
                            </Link>

                            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow">
                                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-secondary min-h-[3rem] flex items-center">
                                    {room.name}
                                </h3>

                                <p className="text-sm font-light text-muted-foreground min-h-[2.5rem] line-clamp-2 leading-relaxed">
                                    {room.description}
                                </p>

                                {/* Features */}
                                <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground py-2">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Users className="w-4 h-4 flex-shrink-0" />
                                        <span className="font-light">{room.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <Maximize className="w-4 h-4 flex-shrink-0" />
                                        <span className="font-light">{room.size}</span>
                                    </div>
                                </div>

                                {/* Price and Button */}
                                <div className="flex items-center justify-between pt-2 mt-auto">
                                    <span className="text-xl sm:text-2xl font-bold text-primary">
                                        {room.price}
                                    </span>
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="outline"
                                        className="border-primary text-primary hover:bg-primary hover:text-secondary text-xs sm:text-sm font-semibold"
                                    >
                                        <a href="#reservation">Réserver</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
