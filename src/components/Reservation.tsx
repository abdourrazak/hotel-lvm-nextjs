"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Reservation() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        reservationType: "",
        checkin: "",
        checkout: "",
        adults: "1",
        children: "0",
        specialRequests: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("✅ Réservation envoyée avec succès ! Nous vous contacterons bientôt.");
                // Réinitialiser le formulaire
                setFormData({
                    fullname: "",
                    email: "",
                    phone: "",
                    reservationType: "",
                    checkin: "",
                    checkout: "",
                    adults: "1",
                    children: "0",
                    specialRequests: "",
                });
            } else {
                alert(`❌ Erreur : ${data.error || 'Une erreur est survenue'}`);
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert("❌ Erreur lors de l'envoi de la réservation. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section id="reservation" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 relative inline-block">
                        Réservation en Ligne
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary" />
                    </h2>
                    <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Planifiez votre séjour en quelques clics
                    </p>
                </div>

                {/* Reservation Form */}
                <div className="max-w-4xl mx-auto">
                    <Card className="shadow-2xl border-none">
                        <CardContent className="p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Nom complet */}
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Nom complet"
                                            value={formData.fullname}
                                            onChange={(e) => handleChange("fullname", e.target.value)}
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    {/* Téléphone */}
                                    <div>
                                        <Input
                                            type="tel"
                                            placeholder="Téléphone"
                                            value={formData.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    {/* Type de réservation */}
                                    <div>
                                        <Select
                                            value={formData.reservationType}
                                            onValueChange={(value) =>
                                                handleChange("reservationType", value)
                                            }
                                            required
                                        >
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Type de réservation" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="room">Chambre</SelectItem>
                                                <SelectItem value="table">Table au restaurant</SelectItem>
                                                <SelectItem value="event">Événement</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Date d'arrivée */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-2">
                                            Date d&apos;arrivée
                                        </label>
                                        <Input
                                            type="date"
                                            value={formData.checkin}
                                            onChange={(e) => handleChange("checkin", e.target.value)}
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    {/* Date de départ */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-2">
                                            Date de départ
                                        </label>
                                        <Input
                                            type="date"
                                            value={formData.checkout}
                                            onChange={(e) => handleChange("checkout", e.target.value)}
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    {/* Nombre d'adultes */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-2">
                                            Nombre d&apos;adultes
                                        </label>
                                        <Select
                                            value={formData.adults}
                                            onValueChange={(value) => handleChange("adults", value)}
                                        >
                                            <SelectTrigger className="h-12">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                                <SelectItem value="4">4</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Nombre d'enfants */}
                                    <div>
                                        <label className="block text-sm font-medium text-secondary mb-2">
                                            Nombre d&apos;enfants
                                        </label>
                                        <Select
                                            value={formData.children}
                                            onValueChange={(value) => handleChange("children", value)}
                                        >
                                            <SelectTrigger className="h-12">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="0">0</SelectItem>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Demandes spéciales */}
                                <div>
                                    <label className="block text-sm font-medium text-secondary mb-2">
                                        Demandes spéciales
                                    </label>
                                    <Textarea
                                        placeholder="Demandes spéciales"
                                        rows={4}
                                        value={formData.specialRequests}
                                        onChange={(e) =>
                                            handleChange("specialRequests", e.target.value)
                                        }
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-4">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isLoading}
                                        className="w-full md:w-auto bg-primary hover:bg-accent text-secondary font-bold px-12 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            "Réserver Maintenant"
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
