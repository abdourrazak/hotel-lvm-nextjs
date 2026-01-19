import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Pricing() {
    const pricingPlans = [
        {
            name: "Chambre STANDARD",
            price: "15,000 XAF",
            features: [
                "25 m² spacieux",
                "Lit double",
                "Salle de bain privée",
                "Wi-Fi gratuit",
            ],
        },
        {
            name: "Chambre DE LUXE",
            price: "20,000 XAF",
            features: [
                "28 m² spacieux",
                "Lit double",
                "Salle de bain privée",
                "Petit-déjeuner inclus",
                "Wi-Fi gratuit",
            ],
        },
        {
            name: "Chambre EXECUTIVE",
            price: "25,000 XAF",
            features: [
                "30 m² spacieux",
                "Lit double",
                "Salle de bain privée",
                "Petit-déjeuner inclus",
                "Wi-Fi gratuit",
            ],
        },
        {
            name: "MINI SUITE",
            price: "35,000 XAF",
            features: [
                "35 m² spacieux",
                "Lit double",
                "Salle de bain privée",
                "Petit-déjeuner inclus",
                "Wi-Fi gratuit",
            ],
        },
    ];

    return (
        <section id="pricing" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        Nos Tarifs
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
                        Des offres adaptées à tous les budgets
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingPlans.map((plan, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        >
                            <CardHeader className="bg-primary text-secondary text-center p-4 sm:p-6 flex-shrink-0">
                                <h3 className="text-lg sm:text-xl font-semibold tracking-tight min-h-[3rem] flex items-center justify-center">{plan.name}</h3>
                            </CardHeader>

                            <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6 flex flex-col flex-grow">
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-secondary">
                                        {plan.price}
                                    </div>
                                    <div className="text-sm font-light text-muted-foreground">/nuit</div>
                                </div>

                                <ul className="space-y-2 sm:space-y-3 flex-grow">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="text-xs sm:text-sm font-light text-muted-foreground border-b border-border pb-2 sm:pb-3 last:border-0 leading-relaxed"
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    className="w-full bg-primary hover:bg-accent text-secondary font-semibold mt-auto text-sm sm:text-base"
                                >
                                    <a href="#reservation">Réserver</a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
