"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowLeft,
    Users,
    Maximize,
    Tv,
    Wind,
    CheckCircle2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

export default function ChambreDeLuxePage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const roomImages = [
        "/luxe et executive/luxe&executive1.jpeg",
        "/luxe et executive/luxe&executive2.jpeg",
        "/luxe et executive/luxe&executive3.jpeg",
        "/luxe et executive/luxe&executive4.jpeg",
        "/luxe et executive/luxe&executive5.jpeg",
        "/luxe et executive/luxe&executive6.jpeg",
    ];

    const amenities = [
        { icon: Wind, label: "Climatisation", description: "Contrôle individuel" },
        { icon: Tv, label: "TV Écran Plat", description: "Chaînes internationales" },
    ];

    const features = [
        "Lit king size confortable",
        "Salle de bain moderne",
        "Balcon privé",
        "Bureau de travail spacieux",
        "Téléphone direct",
        "Service en chambre 24h/24",
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % roomImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header minimaliste et professionnel */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/#rooms">
                            <Button variant="ghost" className="text-secondary hover:bg-gray-100">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Retour
                            </Button>
                        </Link>
                        <div className="flex items-center gap-8">
                            <div>
                                <h1 className="text-xl md:text-xl font-bold text-secondary">Chambre DE LUXE</h1>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-primary">20,000 XAF</div>
                                <div className="text-xs text-muted-foreground">par nuit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Grande Image Principale - OPTIMISÉE */}
                <div className="mb-8">
                    <div className="relative h-[60vh] md:h-[70vh] bg-black rounded-3xl overflow-hidden shadow-2xl group">
                        <Image
                            src={roomImages[currentImageIndex]}
                            alt={`Chambre DE LUXE - Vue ${currentImageIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                            unoptimized
                            quality={95}
                        />

                        {/* Boutons Navigation */}
                        <button
                            onClick={prevImage}
                            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-xl"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-xl"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Compteur */}
                        <div className="absolute bottom-6 right-6 bg-black/70 text-white px-5 py-2 rounded-full text-base font-semibold backdrop-blur-sm">
                            {currentImageIndex + 1} / {roomImages.length}
                        </div>
                    </div>
                </div>

                {/* Grille de Miniatures - OPTIMISÉE */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                        <div className="w-2 h-8 bg-primary rounded-full"></div>
                        Galerie Photos
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {roomImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`relative aspect-video cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${currentImageIndex === idx
                                    ? 'ring-4 ring-primary scale-105 shadow-2xl'
                                    : 'opacity-70 hover:opacity-100 hover:scale-105 shadow-lg hover:shadow-xl'
                                    }`}
                                onClick={() => setCurrentImageIndex(idx)}
                            >
                                <Image
                                    src={img}
                                    alt={`Aperçu ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                    loading="eager"
                                />
                                {currentImageIndex === idx && (
                                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                        <div className="bg-primary text-secondary px-3 py-1 rounded-full text-xs font-bold">
                                            Actuelle
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contenu Principal */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Colonne Gauche - Description et Caractéristiques */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <Card className="shadow-xl border-0">
                            <CardContent className="p-8">
                                <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                                    Description
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    Découvrez notre <strong>Chambre DE LUXE</strong>, spacieuse et élégante avec un balcon privé offrant une vue imprenable.
                                    Parfaite pour un séjour confortable, elle dispose d'un grand lit king size, d'une salle de bain moderne avec baignoire,
                                    et d'un espace salon pour vous détendre.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Caractéristiques Principales */}
                        <Card className="shadow-xl border-0">
                            <CardContent className="p-8">
                                <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                                    Caractéristiques
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 bg-muted/50 rounded-xl p-4 hover:bg-muted transition-colors">
                                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-secondary font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Équipements */}
                        <Card className="shadow-xl border-0">
                            <CardContent className="p-8">
                                <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                                    Équipements
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {amenities.map((amenity, index) => {
                                        const Icon = amenity.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                <div className="bg-primary/20 p-3 rounded-xl">
                                                    <Icon className="w-8 h-8 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-secondary text-lg mb-1">{amenity.label}</h3>
                                                    <p className="text-muted-foreground text-sm">{amenity.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Colonne Droite - Infos et Réservation */}
                    <div className="space-y-6">
                        {/* Carte Infos Rapides */}
                        <Card className="shadow-xl border-0 sticky top-24">
                            <CardContent className="p-6 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-secondary mb-4">Informations</h3>

                                    <div className="space-y-4">
                                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 text-center">
                                            <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                                            <div className="text-sm text-muted-foreground mb-1">Capacité</div>
                                            <div className="text-xl font-bold text-secondary">2 personnes</div>
                                        </div>

                                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 text-center">
                                            <Maximize className="w-8 h-8 mx-auto mb-2 text-primary" />
                                            <div className="text-sm text-muted-foreground mb-1">Surface</div>
                                            <div className="text-xl font-bold text-secondary">30 m²</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-6">
                                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-6 text-center mb-6">
                                        <div className="text-sm text-muted-foreground mb-2">À partir de</div>
                                        <div className="text-4xl font-bold text-primary mb-1">20,000 XAF</div>
                                        <div className="text-sm text-muted-foreground">par nuit</div>
                                    </div>

                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-secondary font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                    >
                                        <Link href="/#reservation">
                                            Réserver cette chambre
                                        </Link>
                                    </Button>
                                    <p className="text-center text-xs text-muted-foreground mt-3">
                                        ✓ Confirmation immédiate<br />
                                        ✓ Meilleur prix garanti
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
