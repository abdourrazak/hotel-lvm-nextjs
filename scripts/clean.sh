#!/bin/bash

echo "🧹 Nettoyage et Optimisation du Projet..."
echo ""

# 1. Nettoyer .next (cache de build)
echo "1️⃣ Nettoyage du cache .next..."
rm -rf .next
echo "✅ Cache .next supprimé"
echo ""

# 2. Nettoyer node_modules/.cache
echo "2️⃣ Nettoyage du cache node_modules..."
rm -rf node_modules/.cache
echo "✅ Cache node_modules nettoyé"
echo ""

# 3. Afficher la taille actuelle
echo "📊 Taille actuelle du projet:"
du -sh .
echo ""

# 4. Afficher les dossiers les plus volumineux
echo "📁 Dossiers volumineux:"
du -sh node_modules .next public docs src 2>/dev/null | sort -hr
echo ""

echo "✅ Nettoyage terminé !"
echo ""
echo "💡 Prochaines étapes:"
echo "   1. Redémarrez le serveur: npm run dev"
echo "   2. Le cache sera régénéré (plus petit)"
echo ""
