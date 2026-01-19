# 🚀 Guide de Déploiement GitHub

## 📋 **Étapes à Suivre**

### **Étape 1 : Créer un Nouveau Repository sur GitHub**

1. **Allez sur GitHub** : https://github.com/new
2. **Remplissez les informations** :
   - **Repository name** : `hotel-lvm-nextjs` (ou le nom de votre choix)
   - **Description** : `Site web de l'Hôtel La Valeureuse Mère - Next.js 14`
   - **Visibility** : 
     - ✅ **Public** (si vous voulez que ce soit visible par tous)
     - ✅ **Private** (si vous voulez garder le code privé)
   - ⚠️ **NE COCHEZ PAS** :
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
3. **Cliquez sur** : `Create repository`

---

### **Étape 2 : Copier l'URL du Repository**

Après création, GitHub vous montrera une page avec des commandes.

**Copiez l'URL HTTPS** qui ressemble à :
```
https://github.com/abdourrazak/hotel-lvm-nextjs.git
```

---

### **Étape 3 : Préparer le Projet**

**Exécutez ces commandes dans le terminal** :

```bash
# 1. Ajouter tous les fichiers
git add .

# 2. Créer un commit
git commit -m "🎉 Initial commit - Hôtel La Valeureuse Mère"

# 3. Ajouter le remote GitHub (REMPLACEZ l'URL par la vôtre)
git remote add origin https://github.com/abdourrazak/hotel-lvm-nextjs.git

# 4. Vérifier que le remote est bien ajouté
git remote -v

# 5. Pousser le code sur GitHub
git push -u origin main
```

---

### **Étape 4 : Authentification GitHub**

Lors du `git push`, GitHub vous demandera de vous authentifier.

**Option 1 - Personal Access Token (Recommandé)** :

1. Allez sur : https://github.com/settings/tokens
2. Cliquez sur `Generate new token` → `Generate new token (classic)`
3. **Nom** : `Hotel LVM Project`
4. **Expiration** : `90 days` (ou plus)
5. **Cochez** :
   - ✅ `repo` (Full control of private repositories)
6. Cliquez sur `Generate token`
7. **COPIEZ LE TOKEN** (vous ne le reverrez plus !)
8. Lors du `git push`, utilisez :
   - **Username** : votre nom d'utilisateur GitHub
   - **Password** : collez le token (pas votre mot de passe !)

**Option 2 - GitHub CLI (Plus Simple)** :

```bash
# Installer GitHub CLI
brew install gh

# Se connecter
gh auth login

# Suivez les instructions
```

---

## 🎯 **Commandes Complètes**

Voici toutes les commandes à exécuter dans l'ordre :

```bash
# 1. Vérifier l'état
git status

# 2. Ajouter tous les fichiers
git add .

# 3. Commit
git commit -m "🎉 Initial commit - Hôtel La Valeureuse Mère

- ✅ Interface complète avec Hero, About, Rooms, Restaurant, Services
- ✅ Pages détaillées pour chaque type de chambre
- ✅ Formulaires de réservation et contact
- ✅ Optimisations d'images et de performance
- ✅ Design responsive et professionnel
- ✅ Typographie améliorée avec police Serif
"

# 4. Ajouter le remote (REMPLACEZ l'URL)
git remote add origin https://github.com/abdourrazak/VOTRE-REPO.git

# 5. Pousser sur GitHub
git push -u origin main
```

---

## 📝 **Créer un README.md**

Avant de pousser, créez un fichier `README.md` :

```markdown
# 🏨 Hôtel La Valeureuse Mère

Site web officiel de l'Hôtel La Valeureuse Mère à Yaoundé, Cameroun.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/UI**
- **Lucide React**

## 📦 Installation

\`\`\`bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
\`\`\`

## 🏗️ Build

\`\`\`bash
# Build pour production
npm run build

# Lancer en production
npm start
\`\`\`

## 📧 Contact

**Hôtel La Valeureuse Mère**
- 📍 NKOLBISSON-MINKOAMEYOS, Yaoundé, Cameroun
- 📞 +237 650 78 63 86
- 📞 +237 697 25 11 95
- 📧 info@hotelvaleureusemere.cm

## 📄 Licence

© 2025 Hôtel La Valeureuse Mère. Tous droits réservés.
\`\`\`

---

## 🔄 **Commandes Git Utiles**

### **Après le Premier Push**

```bash
# Voir l'historique
git log --oneline

# Voir les branches
git branch -a

# Voir le remote
git remote -v
```

### **Pour les Futurs Commits**

```bash
# 1. Voir les changements
git status

# 2. Ajouter les fichiers modifiés
git add .

# 3. Commit avec message
git commit -m "✨ Ajout de nouvelles fonctionnalités"

# 4. Pousser sur GitHub
git push
```

---

## 🌿 **Créer une Branche de Développement**

```bash
# Créer et basculer sur une nouvelle branche
git checkout -b develop

# Pousser la branche sur GitHub
git push -u origin develop

# Revenir sur main
git checkout main
```

---

## 🚨 **Problèmes Courants**

### **Erreur : "remote origin already exists"**

```bash
# Supprimer le remote existant
git remote remove origin

# Ajouter le nouveau
git remote add origin https://github.com/abdourrazak/VOTRE-REPO.git
```

### **Erreur : "failed to push some refs"**

```bash
# Récupérer les changements du remote
git pull origin main --rebase

# Pousser à nouveau
git push -u origin main
```

### **Erreur : "Authentication failed"**

- Utilisez un **Personal Access Token** au lieu du mot de passe
- Ou installez **GitHub CLI** : `brew install gh`

---

## 📊 **Vérifier le Push**

Après le push, allez sur :
```
https://github.com/abdourrazak/VOTRE-REPO
```

Vous devriez voir :
- ✅ Tous vos fichiers
- ✅ Le commit initial
- ✅ Le README.md affiché

---

## 🎉 **Félicitations !**

Votre projet est maintenant sur GitHub ! 🚀

**Prochaines étapes** :
1. ✅ Ajouter une description au repository
2. ✅ Ajouter des topics (nextjs, react, typescript, hotel, cameroon)
3. ✅ Configurer GitHub Pages (optionnel)
4. ✅ Ajouter des collaborateurs (optionnel)

---

**Date** : 19 Janvier 2026  
**Auteur** : Abd Razak
