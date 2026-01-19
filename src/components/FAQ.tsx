"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Quelles sont les heures d'arrivée et de départ ?",
            answer:
                "L'arrivée est possible à partir de 14h00 et le départ doit avoir lieu avant 12h00. Pour des arrivées précoces ou départs tardifs, veuillez nous contacter pour vérifier la disponibilité.",
        },
        {
            question: "Quels modes de paiement acceptez-vous ?",
            answer:
                "Nous acceptons les paiements par carte bancaire (Visa, Mastercard), Mobile Money (Orange Money, MTN Mobile Money) et espèces (XAF). Un acompte est requis pour confirmer votre réservation.",
        },
        {
            question: "L'hôtel est-il adapté aux enfants ?",
            answer:
                "Absolument ! Nous proposons des lits bébé supplémentaires (sur demande), une carte spéciale enfants au restaurant, et des activités adaptées. La piscine est surveillée mais nous recommandons la présence d'un adulte.",
        },
        {
            question: "Proposez-vous des services de transfert aéroport ?",
            answer:
                "Oui, nous proposons un service de navette aéroport payant. Veuillez nous fournir vos détails de vol au moins 48h à l'avance pour organiser votre transfert.",
        },
        {
            question: "Quelle est la politique d'annulation ?",
            answer:
                "Les annulations effectuées au moins 72h avant la date d'arrivée ne sont pas facturées. Pour les annulations de dernière minute, une nuitée peut être facturée. Consultez nos conditions générales pour plus de détails.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        Foire Aux Questions
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
                        Questions fréquemment posées par nos clients
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md border border-border overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors duration-200"
                            >
                                <h3 className="text-base md:text-lg font-semibold text-secondary pr-4 tracking-tight">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
