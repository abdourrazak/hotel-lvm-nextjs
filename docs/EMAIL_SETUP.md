# 📧 Guide de Configuration de l'Envoi d'Emails

## ✅ Ce qui a été fait

### 1. **Installation de Resend**
```bash
npm install resend
```

### 2. **Création des API Routes**
- ✅ `/api/reservation/route.ts` - Pour les réservations
- ✅ `/api/contact/route.ts` - Pour les messages de contact

### 3. **Mise à jour des Composants**
- ✅ `Reservation.tsx` - Formulaire connecté à l'API
- ✅ `Contact.tsx` - Formulaire connecté à l'API
- ✅ Ajout d'un état de chargement (loading)
- ✅ Gestion des erreurs

### 4. **Fichier de Configuration**
- ✅ `.env.local` créé avec les variables d'environnement

---

## 🚀 Configuration Requise

### Étape 1 : Créer un compte Resend

1. **Allez sur** [https://resend.com](https://resend.com)
2. **Créez un compte gratuit** (100 emails/jour gratuits)
3. **Vérifiez votre email**

### Étape 2 : Obtenir votre API Key

1. **Connectez-vous** à votre compte Resend
2. **Allez dans** "API Keys"
3. **Cliquez sur** "Create API Key"
4. **Donnez un nom** : "Hotel LVM Production"
5. **Copiez la clé** (elle commence par `re_...`)

### Étape 3 : Configurer les Variables d'Environnement

1. **Ouvrez** le fichier `.env.local` à la racine du projet
2. **Remplacez** `your_resend_api_key_here` par votre vraie clé API
3. **Modifiez** l'email si nécessaire

```env
# Resend API Key
RESEND_API_KEY=re_votre_vraie_cle_ici

# Email du propriétaire de l'hôtel
HOTEL_EMAIL=info@hotelvaleureusemere.cm
```

### Étape 4 : Redémarrer le Serveur

**Important** : Après avoir modifié `.env.local`, vous devez redémarrer le serveur :

```bash
# Arrêtez le serveur (Ctrl + C dans le terminal)
# Puis relancez-le
npm run dev
```

---

## 📨 Fonctionnement

### Formulaire de Réservation

Quand un client remplit le formulaire de réservation :

1. **Email au propriétaire** (vous)
   - ✉️ Sujet : "Nouvelle réservation - [Type]"
   - 📋 Contient toutes les informations du client
   - 🎨 Email HTML stylisé avec les couleurs de l'hôtel
   - ⚠️ Alerte pour action requise

2. **Email de confirmation au client**
   - ✉️ Sujet : "Confirmation de votre demande de réservation"
   - ✅ Confirmation que la demande a été reçue
   - 📝 Récapitulatif de la réservation
   - 📞 Coordonnées de l'hôtel

### Formulaire de Contact

Quand un client envoie un message :

1. **Email au propriétaire** (vous)
   - ✉️ Sujet : "Nouveau message de contact - [Sujet]"
   - 📋 Nom, email et message du client
   - 🔄 Possibilité de répondre directement (Reply-To)

2. **Email de confirmation au client**
   - ✉️ Sujet : "Message bien reçu"
   - ✅ Confirmation de réception
   - 📞 Coordonnées de l'hôtel

---

## 🎨 Design des Emails

Les emails sont stylisés avec :
- 🎨 **Couleurs de l'hôtel** : Jaune doré (#FFD700) et Noir (#000000)
- 📱 **Responsive** : S'adaptent aux mobiles
- ✨ **Professionnel** : Design moderne et élégant
- 📋 **Structuré** : Informations bien organisées

---

## 🧪 Comment Tester

### Test en Local (Mode Développement)

1. **Assurez-vous** que le serveur tourne : `npm run dev`
2. **Ouvrez** http://localhost:3000
3. **Scrollez** jusqu'au formulaire de réservation
4. **Remplissez** le formulaire avec vos vraies données
5. **Cliquez** sur "Réserver Maintenant"
6. **Vérifiez** :
   - Le bouton affiche "Envoi en cours..."
   - Une alerte de succès apparaît
   - Vous recevez l'email

### Vérifier les Emails

1. **Connectez-vous** à [https://resend.com](https://resend.com)
2. **Allez dans** "Emails"
3. **Vous verrez** tous les emails envoyés
4. **Cliquez** sur un email pour voir son contenu

---

## ⚠️ Limitations du Plan Gratuit Resend

- ✅ **100 emails/jour** gratuits
- ✅ **Domaine de test** : `onboarding@resend.dev`
- ⚠️ Pour utiliser votre propre domaine (ex: `noreply@hotelvaleureusemere.cm`), vous devez :
  - Vérifier votre domaine dans Resend
  - Ajouter des enregistrements DNS
  - Passer au plan payant si nécessaire

---

## 🔧 Personnalisation

### Changer l'Email d'Envoi

Dans les fichiers API (`/api/reservation/route.ts` et `/api/contact/route.ts`) :

```typescript
from: 'Hôtel La Valeureuse Mère <onboarding@resend.dev>',
// Changez en :
from: 'Hôtel La Valeureuse Mère <noreply@votredomaine.cm>',
```

**Note** : Vous devez d'abord vérifier votre domaine dans Resend.

### Changer le Destinataire

Modifiez dans `.env.local` :

```env
HOTEL_EMAIL=votre-email@exemple.com
```

### Personnaliser les Templates

Les templates HTML sont dans les fichiers API. Vous pouvez modifier :
- Les couleurs
- Le texte
- La structure
- Les styles CSS

---

## 🐛 Dépannage

### Erreur : "RESEND_API_KEY is not defined"

**Solution** :
1. Vérifiez que `.env.local` existe
2. Vérifiez que la clé API est correcte
3. Redémarrez le serveur (`Ctrl+C` puis `npm run dev`)

### Erreur : "Invalid API key"

**Solution** :
1. Vérifiez que vous avez copié la clé complète
2. Créez une nouvelle clé API sur Resend
3. Mettez à jour `.env.local`

### Les emails n'arrivent pas

**Vérifications** :
1. ✅ Vérifiez les **spams**
2. ✅ Vérifiez dans Resend → Emails si l'email a été envoyé
3. ✅ Vérifiez que l'email destinataire est correct
4. ✅ Attendez quelques minutes (peut prendre 1-2 min)

### Erreur 500 lors de l'envoi

**Vérifications** :
1. Ouvrez la console du navigateur (F12)
2. Regardez les erreurs dans le terminal du serveur
3. Vérifiez que tous les champs requis sont remplis

---

## 📊 Structure des Fichiers

```
hotel-lvm-nextjs/
├── .env.local                          # Variables d'environnement
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── reservation/
│   │       │   └── route.ts           # API réservation
│   │       └── contact/
│   │           └── route.ts           # API contact
│   └── components/
│       ├── Reservation.tsx            # Formulaire réservation
│       └── Contact.tsx                # Formulaire contact
```

---

## 🎯 Checklist de Configuration

- [ ] Compte Resend créé
- [ ] API Key obtenue
- [ ] `.env.local` configuré avec la vraie clé
- [ ] Email destinataire configuré
- [ ] Serveur redémarré après config
- [ ] Test du formulaire de réservation
- [ ] Test du formulaire de contact
- [ ] Emails reçus et vérifiés
- [ ] Design des emails validé

---

## 🚀 Prochaines Étapes (Optionnel)

### 1. Configurer votre Propre Domaine

Pour envoyer depuis `noreply@hotelvaleureusemere.cm` :

1. **Allez dans** Resend → Domains
2. **Ajoutez** votre domaine
3. **Configurez** les enregistrements DNS (SPF, DKIM, DMARC)
4. **Attendez** la vérification (peut prendre 24-48h)
5. **Mettez à jour** le `from` dans les API routes

### 2. Ajouter une Base de Données

Pour sauvegarder les réservations :

1. Utilisez **Supabase** ou **PostgreSQL**
2. Créez une table `reservations`
3. Sauvegardez les données avant d'envoyer l'email
4. Créez un dashboard admin pour voir les réservations

### 3. Améliorer les Notifications

- Notifications SMS avec Twilio
- Notifications WhatsApp
- Slack notifications pour l'équipe
- Dashboard temps réel

---

## 📞 Support

Si vous avez des questions :
- 📖 [Documentation Resend](https://resend.com/docs)
- 📖 [Documentation Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

## ✅ Résumé

Votre système d'envoi d'emails est maintenant **configuré et prêt** ! 

**Pour l'activer** :
1. Créez un compte Resend
2. Obtenez votre API Key
3. Mettez-la dans `.env.local`
4. Redémarrez le serveur
5. Testez les formulaires

**Les emails seront envoyés automatiquement** à chaque soumission de formulaire ! 🎉

---

**Date** : 13 Janvier 2026  
**Statut** : ✅ **SYSTÈME D'EMAILS CONFIGURÉ**
