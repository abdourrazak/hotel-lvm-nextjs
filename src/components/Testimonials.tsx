import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Marie T.",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            rating: 5,
            comment:
                "Un séjour exceptionnel ! Les chambres sont spacieuses et propres, le personnel est attentionné, et le restaurant propose une cuisine délicieuse. Je recommande vivement cet hôtel pour un séjour à Yaoundé.",
        },
        {
            name: "Jean K.",
            avatar: "https://randomuser.me/api/portraits/men/54.jpg",
            rating: 5,
            comment:
                "Idéal pour les voyages d'affaires. Le centre d'affaires est bien équipé, la connexion Wi-Fi est rapide et stable. Le service en chambre est efficace. J'ai particulièrement apprécié le petit-déjeuner varié.",
        },
        {
            name: "Aïcha D.",
            avatar: "https://randomuser.me/api/portraits/women/67.jpg",
            rating: 4.5,
            comment:
                "Le spa est un véritable havre de paix. Les massages sont professionnels et relaxants. La piscine est bien entretenue. Seul petit bémol : le prix des boissons au bar est un peu élevé, mais la qualité est au rendez-vous.",
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        Avis Clients
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
                        Ce que nos clients disent de leur expérience
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <CardContent className="p-6 space-y-4">
                                {/* Header */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-primary">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-semibold text-lg text-secondary tracking-tight">
                                            {testimonial.name}
                                        </h5>
                                        <div className="flex items-center gap-1 mt-1">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <Star
                                                    key={starIndex}
                                                    className={`w-4 h-4 ${starIndex < Math.floor(testimonial.rating)
                                                        ? "fill-primary text-primary"
                                                        : starIndex < testimonial.rating
                                                            ? "fill-primary/50 text-primary"
                                                            : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Comment */}
                                <p className="text-sm md:text-base font-light text-muted-foreground italic leading-relaxed">
                                    &quot;{testimonial.comment}&quot;
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
