# 🚀 CONFIGURATION RAPIDE - Envoi d'Emails

## ⚡ 3 Étapes pour Activer l'Envoi d'Emails

### 1️⃣ Créer un Compte Resend (2 minutes)

1. Allez sur **https://resend.com**
2. Cliquez sur **"Sign Up"**
3. Créez votre compte (gratuit)
4. Vérifiez votre email

### 2️⃣ Obtenir votre Clé API (1 minute)

1. Connectez-vous à Resend
2. Allez dans **"API Keys"**
3. Cliquez sur **"Create API Key"**
4. Nommez-la : **"Hotel LVM"**
5. **COPIEZ** la clé (commence par `re_...`)

### 3️⃣ Configurer le Projet (1 minute)

1. **Ouvrez** le fichier `.env.local` (à la racine du projet)
2. **Collez** votre clé API :

```env
RESEND_API_KEY=re_votre_cle_copiee_ici
HOTEL_EMAIL=info@hotelvaleureusemere.cm
```

3. **Sauvegardez** le fichier
4. **Redémarrez** le serveur :
   ```bash
   # Dans le terminal, appuyez sur Ctrl+C
   # Puis relancez :
   npm run dev
   ```

---

## ✅ C'est Tout !

Votre système d'envoi d'emails est maintenant **ACTIF** ! 🎉

### 🧪 Pour Tester

1. Ouvrez **http://localhost:3000**
2. Scrollez jusqu'au **formulaire de réservation**
3. Remplissez-le avec vos vraies données
4. Cliquez sur **"Réserver Maintenant"**
5. Vérifiez votre boîte email ! 📧

---

## 📧 Ce qui se Passe

Quand un client remplit un formulaire :

1. **Vous recevez un email** avec toutes les infos
2. **Le client reçoit une confirmation**
3. **Tout est automatique** ! ✨

---

## 🎨 Emails Stylisés

Les emails sont **magnifiques** avec :
- ✅ Couleurs de l'hôtel (jaune doré + noir)
- ✅ Design professionnel
- ✅ Responsive (mobile-friendly)
- ✅ Toutes les informations bien organisées

---

## 📊 Plan Gratuit Resend

- ✅ **100 emails/jour** GRATUITS
- ✅ Parfait pour commencer
- ✅ Pas de carte de crédit requise

---

## ❓ Besoin d'Aide ?

Consultez le guide complet : **`EMAIL_SETUP.md`**

---

**C'est aussi simple que ça !** 🚀
