import { Wifi, Car, Briefcase, UtensilsCrossed, Zap, Calendar, Tv } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: Wifi,
            title: "Wi-Fi Haut Débit",
            description: "Accès Internet gratuit dans tout l'hôtel pour rester connecté.",
        },
        {
            icon: Car,
            title: "Parking Sécurisé",
            description: "Parking surveillé 24h/24 pour votre véhicule.",
        },
        {
            icon: Briefcase,
            title: "Centre d'Affaires",
            description: "Équipements modernes pour vos réunions professionnelles.",
        },
        {
            icon: UtensilsCrossed,
            title: "Room Service",
            description: "Service en chambre 24h/24 pour votre confort.",
        },
        {
            icon: Zap,
            title: "Groupe Électrogène",
            description: "Alimentation de secours permanente pour votre confort.",
        },
        {
            icon: Calendar,
            title: "Espaces Événementiels",
            description: "Locations de salles pour vos réunions et célébrations.",
        },
        {
            icon: Tv,
            title: "TV Satellite",
            description: "Chaînes Canal+ et Creolink dans toutes les chambres.",
        },
    ];

    return (
        <section id="services" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        Nos Services
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
                        Tout ce dont vous avez besoin pour un séjour parfait
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>
                                <h4 className="font-semibold text-xl text-secondary mb-3 tracking-tight">
                                    {service.title}
                                </h4>
                                <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
