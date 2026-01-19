# 🏨 Hôtel La Valeureuse Mère

Site web officiel de l'Hôtel La Valeureuse Mère à Yaoundé, Cameroun.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** avec Hero section élégante
- 🛏️ **Galerie de chambres** (Standard, Deluxe, Executive, Mini Suite)
- 📸 **Pages détaillées** pour chaque type de chambre avec galerie photos
- 🍽️ **Section Restaurant** avec menu et horaires
- 🎯 **Services** de l'hôtel
- 📅 **Système de réservation** en ligne
- 📧 **Formulaire de contact** avec API
- 📱 **Design responsive** (mobile, tablette, desktop)
- ⚡ **Performance optimisée** (images, cache, RAM)
- 🎨 **Typographie professionnelle** avec police Serif

## 🚀 Technologies

- **Framework** : Next.js 14 (App Router)
- **UI Library** : React 18
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Components** : Shadcn/UI
- **Icons** : Lucide React
- **Forms** : React Hook Form
- **Email** : Nodemailer

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/abdourrazak/hotel-lvm-nextjs.git

# Aller dans le dossier
cd hotel-lvm-nextjs

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build & Production

```bash
# Build pour production
npm run build

# Lancer en production
npm start

# Analyser le bundle
npm run build -- --analyze
```

## 📁 Structure du Projet

```
hotel-lvm-nextjs/
├── public/
│   ├── images/              # Images de l'hôtel
│   ├── luxe et executive/   # Photos chambres Deluxe/Executive
│   ├── mini suite/          # Photos Mini Suite
│   └── classic rooms/       # Photos chambres Standard
├── src/
│   ├── app/
│   │   ├── api/            # Routes API (contact, réservation)
│   │   ├── chambres/       # Pages détaillées des chambres
│   │   ├── globals.css     # Styles globaux
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Page d'accueil
│   ├── components/
│   │   ├── ui/             # Composants Shadcn/UI
│   │   ├── About.tsx       # Section À Propos
│   │   ├── Contact.tsx     # Section Contact
│   │   ├── FAQ.tsx         # Section FAQ
│   │   ├── Footer.tsx      # Footer
│   │   ├── Gallery.tsx     # Galerie photos
│   │   ├── Header.tsx      # Navigation
│   │   ├── Hero.tsx        # Section Hero
│   │   ├── Pricing.tsx     # Tarifs
│   │   ├── Reservation.tsx # Formulaire réservation
│   │   ├── Restaurant.tsx  # Section Restaurant
│   │   ├── Rooms.tsx       # Galerie chambres
│   │   ├── Services.tsx    # Services
│   │   └── Testimonials.tsx # Témoignages
│   └── lib/
│       └── utils.ts        # Utilitaires
├── docs/                   # Documentation
└── scripts/                # Scripts utilitaires
```

## 🎨 Design

- **Couleurs** : Noir (#000000) et Jaune Doré (#FFD700)
- **Typographie** : Police Serif pour les titres, Sans-serif pour le texte
- **Style** : Moderne, élégant, professionnel
- **Responsive** : Mobile-first design

## 📧 Configuration Email

Pour activer les formulaires de contact et réservation, créez un fichier `.env.local` :

```env
# Email Configuration
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app
EMAIL_TO=info@hotelvaleureusemere.cm
```

## 🔧 Optimisation

- ✅ Images optimisées (WebP, compression)
- ✅ Cache configuré (60s)
- ✅ Code minifié (SWC)
- ✅ Lazy loading des images
- ✅ Navigation instantanée
- ✅ Scrollbar masquée
- ✅ RAM optimisée (< 600MB)

## 📱 Contact

**Hôtel La Valeureuse Mère**

- 📍 NKOLBISSON-MINKOAMEYOS (après la gendarmerie et l'hôpital IRAD), Yaoundé, Cameroun
- 📞 +237 650 78 63 86
- 📞 +237 697 25 11 95
- 📧 info@hotelvaleureusemere.cm
- 💬 WhatsApp : [Réserver maintenant](https://wa.me/237650786386)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

© 2025 Hôtel La Valeureuse Mère. Tous droits réservés.

---

**Développé avec ❤️ pour l'excellence de l'hospitalité camerounaise**
