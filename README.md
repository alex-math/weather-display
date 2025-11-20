# transport-weather-screen


## 🌤️ Comparatif des principales APIs météo

| Critère                     | OpenWeatherMap                                | WeatherAPI.com                              | MeteoConcept / Météo France                 |
|-----------------------------|-----------------------------------------------|----------------------------------------------|---------------------------------------------|
| **Gratuité**                | ✔️ Oui (plan gratuit suffisant)                | ✔️ Oui (mais limites plus strictes)           | ✔️ Oui                                      |
| **Accès aux données**       | Très simple (URL directe avec `appid`)        | Simple mais nécessite plus de paramètres     | Plus complexe, nécessite un compte FR       |
| **Qualité des données**     | Bonne, largement utilisée                     | Très bonne                                   | Excellente pour la France                   |
| **Couverture géographique** | Monde entier                                  | Monde entier                                 | France uniquement (selon API choisie)       |
| **Format des JSON**         | Clair, standard, facile à exploiter           | Très propre mais plus verbeux                | Plus technique, moins didactique            |
| **Documentation**           | Très complète, idéale pour débutant           | Très complète également                      | Plus orientée usages pro / institutionnels  |
| **Icônes météo fournies**   | ✔️ Oui, intégration directe via URL           | ✔️ Oui                                        | ❌ Nécessite vos propres assets              |
| **Limitations**             | 1 000 requêtes/jour en gratuit                | 1 000 requêtes/jour (mais plus de restrictions) | Limitée hors France                         |

## 🎯 Pourquoi j’ai choisi OpenWeatherMap

Voici les raisons principales :

- **API très simple à utiliser** → parfait pour un projet pédagogique ou une formation.  
- **Une clé unique** permet de tout faire : météo actuelle, prévisions, icônes officielles.  
- **Réponses JSON faciles à traiter**, idéales pour comprendre les bases des appels API.  
- **Plan gratuit largement suffisant** pour un écran de transport (1 requête / heure).  
- **Très utilisé par les développeurs débutants** → beaucoup d'exemples, de ressources et de tutoriels.  
- **Compatible avec une configuration via `conf.json`**, comme demandé dans le sujet, sans moteurs de recherche météo.  

Résultat : **OpenWeatherMap répond parfaitement aux exigences du projet** tout en étant simple, documenté et flexible.