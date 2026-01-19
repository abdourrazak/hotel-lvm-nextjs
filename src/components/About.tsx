import Image from "next/image";
import { CheckCircle2, Snowflake, Wifi, Droplet, Zap, Coffee, UtensilsCrossed, Calendar, ShieldCheck, Tv } from "lucide-react";

export default function About() {
    const features = [
        "Chambres luxueuses avec vue panoramique",
        "Restaurant gastronomique proposant une fusion de saveurs locales et internationales",
        "Salles de réunion et espaces événementiels",
        "Service personnalisé 24h/24",
    ];

    const atouts = [
        {
            icon: Snowflake,
            title: "Chambres Climatisées",
            description: "Confort optimal avec climatisation individuelle dans toutes les chambres",
        },
        {
            icon: Wifi,
            title: "Wi-Fi Ultra Rapide",
            description: "Connexion haut débit gratuite dans tout l'établissement",
        },
        {
            icon: Droplet,
            title: "Eau Chaude et Froide",
            description: "Disponible 24h/24 dans toutes les salles de bain",
        },
        {
            icon: Zap,
            title: "Groupe Électrogène",
            description: "Alimentation électrique de secours permanente",
        },
        {
            icon: Coffee,
            title: "Bar Restaurant",
            description: "Savourez nos spécialités locales et internationales",
        },
        {
            icon: UtensilsCrossed,
            title: "Service Traiteur",
            description: "Organisation de vos événements avec notre service traiteur",
        },
        {
            icon: Calendar,
            title: "Espace Manifestations",
            description: "Grands espaces pour vos événements professionnels et privés",
        },
        {
            icon: ShieldCheck,
            title: "Parking Sécurisé",
            description: "Vos véhicules en sécurité avec notre service de surveillance",
        },
        {
            icon: Tv,
            title: "TV Satellite",
            description: "Abonnement Canal+ et Creolink dans toutes les chambres",
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        À Propos de Notre Hôtel
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
                        Découvrez l&apos;excellence de l&apos;hospitalité camerounaise
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image */}
                    <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src="/images/imgExterieur.jpeg"
                            alt="Hôtel La Valeureuse Mère"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-secondary leading-tight">
                            Une expérience d&apos;exception au Cameroun
                        </h3>

                        <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed text-justify">
                            Situé à NKOLBISSON-MINKOAMEYOS (après la gendarmerie et l&apos;hôpital IRAD), Yaoundé,
                            l&apos;Hôtel La Valeureuse Mère incarne l&apos;élégance africaine contemporaine et
                            l&apos;hospitalité légendaire du Cameroun.
                        </p>

                        <ul className="space-y-4 pt-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-base md:text-lg font-light text-muted-foreground leading-relaxed text-justify">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed text-justify pt-2">
                            Fondé en 2025, notre établissement porte le nom de la Valeureuse Mère en hommage
                            aux femmes camerounaises qui incarnent force et résilience. Notre mission est de
                            créer des souvenirs inoubliables pour chaque visiteur.
                        </p>
                    </div>
                </div>

                {/* Atouts Section */}
                <div className="bg-muted rounded-2xl p-8 md:p-12 shadow-lg">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-secondary mb-4 relative inline-block w-full">
                        Nos Atouts
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {atouts.map((atout, index) => {
                            const Icon = atout.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-primary"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-lg text-secondary mb-2 tracking-tight">
                                        {atout.title}
                                    </h4>
                                    <p className="text-sm font-light text-muted-foreground leading-relaxed">
                                        {atout.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
