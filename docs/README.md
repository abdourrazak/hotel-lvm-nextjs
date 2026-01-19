# Hôtel La Valeureuse Mère - Site Web Next.js

Application web moderne pour l'Hôtel La Valeureuse Mère au Cameroun, convertie depuis PHP vers Next.js avec Tailwind CSS, Shadcn/UI et Lucide React.

## 🎨 Technologies Utilisées

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4
- **Composants UI**: Shadcn/UI
- **Icônes**: Lucide React
- **Polices**: Raleway & Roboto (Google Fonts)

## 🎨 Design

Le design conserve fidèlement le style original de l'application PHP :
- **Couleur primaire**: Jaune doré (#FFD700)
- **Couleur secondaire**: Noir (#000000)
- **Polices**: Raleway (principale) et Roboto (secondaire)

## 📋 Sections du Site

1. **Hero** - Section d'accueil avec image de fond
2. **À Propos** - Présentation de l'hôtel avec atouts
3. **Chambres** - Galerie des chambres disponibles
4. **Restaurant** - Présentation du restaurant et spécialités
5. **Services** - Liste des services offerts
6. **Galerie** - Photos de l'hôtel
7. **Tarifs** - Grille tarifaire des chambres
8. **Réservation** - Formulaire de réservation en ligne
9. **Témoignages** - Avis clients
10. **FAQ** - Questions fréquentes
11. **Contact** - Formulaire de contact et carte

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build pour Production

```bash
# Créer le build de production
npm run build

# Lancer le serveur de production
npm start
```

## 📁 Structure du Projet

```
hotel-lvm-nextjs/
├── public/
│   └── images/          # Images de l'hôtel
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout principal
│   │   ├── page.tsx     # Page d'accueil
│   │   └── globals.css  # Styles globaux
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Rooms.tsx
│   │   ├── Restaurant.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Pricing.tsx
│   │   ├── Reservation.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/          # Composants Shadcn/UI
│   └── lib/
│       └── utils.ts     # Utilitaires
└── package.json
```

## 🎯 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation sticky avec effet de scroll
- ✅ Animations et transitions fluides
- ✅ Formulaire de réservation interactif
- ✅ Formulaire de contact
- ✅ FAQ avec accordéon
- ✅ Galerie d'images avec effet hover
- ✅ Cartes de chambres et tarifs
- ✅ Témoignages clients
- ✅ Intégration Google Maps
- ✅ Scroll fluide entre les sections
- ✅ Scrollbar personnalisée

## 📝 Notes

- Les images sont stockées dans le dossier `public/images/`
- Le formulaire de réservation affiche une alerte (à connecter à un backend)
- Le formulaire de contact affiche une alerte (à connecter à un backend)
- La carte Google Maps pointe vers Yaoundé (coordonnées à ajuster si nécessaire)

## 🔧 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `src/app/globals.css` :
- `--primary`: Jaune doré
- `--secondary`: Noir
- `--accent`: Jaune accent

### Ajouter des composants Shadcn/UI

```bash
npx shadcn@latest add [component-name]
```

## 📞 Contact

**Hôtel La Valeureuse Mère**
- 📍 NKOLBISSON-MINKOAMEYOS, Yaoundé, Cameroun
- 📱 +237 650 78 63 86 / +237 697 25 11 95
- 📧 info@hotelvaleureusemere.cm

---

© 2026 IMANI-TECH SOLUTIONS SARL. Tous droits réservés.
