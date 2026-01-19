"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                alert(`❌ Erreur : ${data.error || 'Une erreur est survenue'}`);
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert("❌ Erreur lors de l'envoi du message. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Adresse",
            content:
                "NKOLBISSON-MINKOAMEYOS (après la gendarmerie et l'hôpital IRAD), Yaoundé, Cameroun",
        },
        {
            icon: Phone,
            title: "Téléphone",
            content: "+237 650 78 63 86\n+237 697 25 11 95",
        },
        {
            icon: Mail,
            title: "Email",
            content: "info@hotelvaleureusemere.cm",
        },
    ];

    return (
        <section id="contact" className="py-16 sm:py-20 bg-muted">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-4 relative inline-block">
                        Contactez-Nous
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl font-light tracking-wide text-muted-foreground mt-8 max-w-2xl mx-auto px-4 leading-relaxed">
                        Nous sommes à votre écoute
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Contact Info & Map */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Contact Items */}
                        <div className="space-y-4 sm:space-y-6">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="border-none shadow-md hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <CardContent className="p-4 sm:p-6">
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
                                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-base sm:text-lg font-semibold text-secondary mb-1 sm:mb-2 tracking-tight">
                                                        {info.title}
                                                    </h4>
                                                    <p className="text-sm sm:text-base font-light text-muted-foreground whitespace-pre-line leading-relaxed">
                                                        {info.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Google Map */}
                        <Card className="border-none shadow-xl overflow-hidden">
                            <div className="relative h-64 sm:h-80 lg:h-96">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.490213058152!2d11.512682475007507!3d3.866899196113881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7b28e0b2d1%3A0x7c3e9c3659f4d1a!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sus!4v1717160000000!5m2!1sfr!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation de l'hôtel"
                                />
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form - Hauteur ajustée */}
                    <Card className="border-none shadow-xl h-fit">
                        <CardContent className="p-6 sm:p-8">
                            <div className="mb-6">
                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-secondary mb-2 leading-tight">
                                    Envoyez-nous un message
                                </h3>
                                <p className="text-sm sm:text-base font-light text-muted-foreground leading-relaxed">
                                    Remplissez le formulaire ci-dessous
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-secondary">
                                            Nom complet *
                                        </label>
                                        <Input
                                            type="text"
                                            placeholder="Votre nom"
                                            value={formData.name}
                                            onChange={(e) => handleChange("name", e.target.value)}
                                            required
                                            className="h-11 border-2 focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-secondary">
                                            Email *
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="votre@email.com"
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                            required
                                            className="h-11 border-2 focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">
                                        Sujet *
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Objet de votre message"
                                        value={formData.subject}
                                        onChange={(e) => handleChange("subject", e.target.value)}
                                        required
                                        className="h-11 border-2 focus:border-primary transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">
                                        Message *
                                    </label>
                                    <Textarea
                                        placeholder="Votre message..."
                                        value={formData.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                        required
                                        rows={5}
                                        className="resize-none border-2 focus:border-primary transition-colors"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-secondary font-semibold py-6 text-base rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Envoyer le message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
