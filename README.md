<p align="center">
  <img src="https://c.pxhere.com/images/78/33/3759ad6d2bc35df53d1fcd68e149-1448275.jpg!d" alt="Éclairs au-dessus des nuages">
</p>

# Afficher la météo dans les transports en commun

### Projet pour la préparation à la journée de sélection pour le parcours de formation

### Formation Simplon [Concepteur Développeur d'Applications](https://www.simplon.co/developpement/concepteur-developpeur-dapplications)

## 📜 Scénario

Vous êtes développeur web pour le compte d’une agence web. Votre agence a signé un
contrat pour le développement d’interfaces météo à destination des usagers du réseau de
transport en commun de plusieurs villes de taille moyenne en France. Les écrans seront
intégrés aux écrans d’information dans les stations et dans les transports.
Les écrans doivent être programmés avec les technologies web, embarquées dans la webview
du système des écrans de la compagnie de transports en commun de la ville.
Exemples d’interfaces météo :
- https://github.com/PritamSarbajna/simple-weather-website
- https://github.com/abdellatif-laghjaj/weather-web-app

L’interface ne doit pas inclure de moteur de recherche pour la localisation de l’information
météo.
Mais, elle doit inclure un fichier de configuration (JSON par exemple) dans lequel l’information
de la ville concernée sera entrée par l’entreprise de transport, et utilisée par votre code pour
récupérer les bonnes données météo.

## 🎯 Travail demandé

- chercher et choisir une API ouverte pour la récupération des données météo,
- créer les différents fichiers nécessaires, c’est à dire :
    - un fichier HTML (index.html),
    - à minima un fichier CSS (style.css),
    - le fichier de configuration de la ville (conf.json)
    - et à minima un fichier Javascript (meteo.js),
- programmer la récupération des données météo depuis l’API. Déboguer en console
afin de valider votre procédure,
- intégrer l’interface d’affichage des données météo,
- intégrer la mise à jour des données météo une fois par heure.

## 👀 Clone

Pour réaliser ce travail, je suis parti de la base de code du repo cité en exemple :<br>
https://github.com/PritamSarbajna/simple-weather-website

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

Résultat : **OpenWeatherMap répond parfaitement aux exigences du projet** tout en étant simple, documenté et flexible. On regrettera cependant sa moindre qualité concernant les données transmises, particulièrement comparée à Météo France.

---

<p align="center">
  <a href="https://alex-math.github.io/weather-display/" target="_blank">
    🚀 Lancer l'application météo
  </a>
</p>
