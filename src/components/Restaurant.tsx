import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Restaurant() {
    const horaires = [
        { label: "Petit-déjeuner:", time: "6h30 - 10h30" },
        { label: "Déjeuner:", time: "12h00 - 15h00" },
        { label: "Dîner:", time: "19h00 - 23h00" },
    ];

    const specialites = [
        "Ndolé aux crevettes",
        "Poulet DG",
        "Brochettes de bœuf mariné",
        "Poisson braisé à la camerounaise",
    ];

    const images = [
        "/images/imgBaretResto5.jpeg",
        "/images/imgBaretResto4.jpeg",
        "/images/imgBaretResto.jpeg",
        "/images/imgBar.jpeg",
    ];

    return (
        <section id="restaurant" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        Notre Restaurant
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
                        Une expérience culinaire exceptionnelle
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-secondary leading-tight">
                            Saveurs du Cameroun et du Monde
                        </h3>

                        <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
                            Notre chef primé, Jean-Baptiste Mbarga, crée une fusion unique entre les
                            traditions culinaires camerounaises et les techniques gastronomiques
                            internationales.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                            {/* Horaires */}
                            <div>
                                <h4 className="font-semibold text-xl text-secondary mb-4 tracking-tight">
                                    Horaires d&apos;ouverture
                                </h4>
                                <ul className="space-y-2">
                                    {horaires.map((horaire, index) => (
                                        <li key={index} className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                                            <strong className="font-medium text-secondary">{horaire.label}</strong>{" "}
                                            {horaire.time}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Spécialités */}
                            <div>
                                <h4 className="font-semibold text-xl text-secondary mb-4 tracking-tight">
                                    Spécialités
                                </h4>
                                <ul className="space-y-2">
                                    {specialites.map((specialite, index) => (
                                        <li key={index} className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                                            • {specialite}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:bg-accent text-secondary font-semibold"
                            >
                                <a href="#reservation">Réserver une table</a>
                            </Button>
                        </div>
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <Image
                                    src={image}
                                    alt={`Restaurant ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
