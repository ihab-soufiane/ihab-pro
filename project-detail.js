const projectsData = {
  "erp-system": {
    title: "Système Gestion du Devis&Facture",
    description:
      " développement d'une application web de gestion des devis et factures.",
    image: "images/efacture.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Angular",
      "TypeScript",
      "JsPDF",
      "Firebase",
      "Excel",
      "Google Cloud Platform (GCP)",
      "Agile",
      "Git",
      "Jira",
      "Slack",
      
    ],
    features: [
      "Gestion des Utilisateurs et des rôles",
      "Gestion des clients",
      "Gestion des sociétés",
      "Gestion des devis et factures",
      "Conversion automatique des devis en factures",
      "Envoi par email des documents au format PDF",
      "Recherche et filtrage avancés",
      "Déploiement de l'application sur Google Cloud Platform(GCP) .",
      "Import/export de données via fichiers Excel et PDF",
      "Mise en place d'un système d'authentification sécurisé via Google Identity Platform(GCP).",
      "Création d'interfaces responsives et multilingues (fr, en, ar)",
    ],
    challenges:
      "Les principaux défis étaient l'intégration de Fonctionalité de Google Cloud Platform(GCP), la personnalisation de modules pour creation de devis et factures, ainsi que l'exportation les devis & factures au format PDF et Excel.",
    demo: "",
    github: "https://github.com/ihabsoufiane/Efacture",
  },
  "blog-activiste": {
    title: " Agence du voyage",
    description:
      "Conception et développement d'un site web Agence du voyage.",
    image: "images/agence.png",
    technologies: ["NodeJS", "HTML", " CSS", "Bootstrap", "JavaScript", "MongoDB", "Express.js", "Angular", "TypeScript", "Scrum", "Git"],
    features: [
      "Mise en place des interfaces intuitives et responsives(FrontEnd)",
      "Développement la partie logique (BackEnd) via NodeJs",
      "Integration REST API pour la gestion des données",
      "Integration d'un model API pour type de visa",
      "Système de gestion des réservations en ligne",
      "Gestion des utilisateurs et authentification",
      "Gestion des destinations et offres de voyage",
      "Gestion des Hotels",
      "Gestion des Voitures",
    ],
    challenges:
      "Les principaux défis étaient la gestion efficace des données de voyage, l'implémentation d'un système de réservation en ligne, et la création d'une interface utilisateur attrayante et facile à naviguer.",
    github: "https://github.com/ihabsoufiane/Agence-de-voyage",
    demo: "",
  },
  "generateur-contrats": {
    title: "site web e-commerce ",
    description:
      "Conception et développement d'un site web e-commerce de vente des vetements.",
    image: "../images/eshop.png",
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "JavaScript", "jQuery", "Ajax"],
    features: [
      "Création d'interfaces responsives et attrayantes",
      "Gestion des produits et catégories",
      "Gestion des utilisateurs et authentification",
      "Gestion du panier et des commandes",
    ],
    challenges:
      "Les principaux défis étaient la gestion efficace des données de produits, gérer la gestion de panier et des commandes.",
    github: "https://github.com/ihabsoufiane",
    demo: "",
  },/*
  "plateforme-educative": {
    title: "Site Web pesonaliser ",
    description:
      "Plateforme Web Cros-platforme Pour une societer civil qui contien leur actualiter et les noveaux projejt de la socite .",
    image: "images/plat.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    features: [
      "Gestion complète des inscriptions et profils étudiants",
      "Planning des cours avec calendrier interactif",
      "Système de notes et évaluations détaillées",
      "Communication étudiants-professeurs intégrée",
      "Bibliothèque numérique avec recherche avancée",
      "Système de notifications et alertes",
    ],
    challenges:
      "L'implémentation du temps réel pour les interactions et la gestion efficace des médias volumineux (vidéos, documents).",
    github: "https://github.com/iheb/plateforme-educative",
    demo: "https://youtu.be/sqTWu6tffaw",
  },
  "suivi-depenses": {
    title: "Cine+",
    image: "images/capp1.png",
    description:
      "Cine+ est une application intuitive permettant aux utilisateurs de consulter les films disponibles à l'affiche, de réserver leurs places au cinéma et d'acheter des tickets en ligne. Elle offre une interface fluide pour choisir un film, consulter les horaires, sélectionner une salle et payer son ticket en quelques clics.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "SQLite",
      "Provider",
      "Google Charts",
      "Android",
      "iOS",
    ],
    features: [
      "Ajout, modification et suppression des dépenses",
      "Catégorisation des transactions (nourriture, transport, etc.)",
      "Affichage de graphiques et statistiques en temps réel",
      "Filtrage des dépenses par date, catégorie ou montant",
      "Stockage local et/ou cloud avec Firebase",
      "Interface utilisateur fluide et responsive",
      "Mode sombre et personnalisation du thème",
      "Notifications pour rappeler les dépenses régulières",
    ],
    challenges:
      "Le principal défi était de concevoir une interface intuitive tout en gérant la synchronisation des données entre le stockage local et Firebase. L'optimisation des performances sur différents appareils et l'implémentation de graphiques interactifs ont également représenté des défis techniques majeurs.",
    github: "https://github.com/iheb/suivi-depenses",
    demo: "https://www.youtube.com/watch?v=CM1CjScCTRg",
  },
  "student-platform": {
    title: "Plateforme Étudiante",
    description:
      "Plateforme complète pour la gestion des étudiants et cours universitaires avec fonctionnalités avancées de communication et de suivi académique.",
    image: "images/st.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap", "Redis"],
    features: [
      "Gestion complète des inscriptions et profils étudiants",
      "Planning des cours avec calendrier interactif",
      "Système de notes et évaluations détaillées",
      "Communication étudiants-professeurs intégrée",
      "Bibliothèque numérique avec recherche avancée",
      "Système de notifications et alertes",
    ],
    challenges:
      "L'architecture complexe pour gérer de multiples rôles utilisateurs (étudiants, professeurs, administration) avec des permissions granulaires.",
    github: "https://github.com/iheb/student-platform",
    demo: "https://youtu.be/OAbUfbyFb8Q",
  },
  "project-planner": {
    title: "Project Planner",
    description:
      "Outil avancé de planification et gestion de projets avec collaboration en équipe en temps réel et suivi détaillé des tâches.",
    image: "images/planner.png",
    technologies: ["Angular", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    features: [
      "Gestion de tâches avec interface Kanban intuitive",
      "Collaboration en temps réel entre équipes",
      "Diagrammes de Gantt pour planification temporelle",
      "Rapports de progression automatisés",
      "Intégrations avec outils tiers (Slack, GitHub)",
      "Gestion des ressources et allocation",
    ],
    challenges:
      "La synchronisation en temps réel des modifications et la gestion complexe des permissions pour différents niveaux d'accès.",
    github: "https://github.com/iheb/project-planner",
    demo: "https://youtu.be/CoTyAJBmWEs",
  },
  "Landing-Page": {
    title: "Landing Page - The Bridge",
    description:
      "Solution e-commerce complète sous forme de landing page, dédiée à la vente de cours en développement web et mobile. Le projet propose une interface moderne et performante avec une gestion avancée des produits, commandes, et paiements sécurisés.",
    image: "images/vente en ligne.jpg",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redis"],
    features: [
      "Catalogue de cours avec recherche et filtres avancés",
      "Panier intelligent et gestion fluide des commandes",
      "Paiements sécurisés avec multiple méthodes",
      "Gestion des stocks en temps réel",
      "Interface d'administration complète",
      "Système de recommandations personnalisées",
    ],
    challenges:
      "L'intégration sécurisée des paiements et l'optimisation des performances pour supporter un grand volume de transactions et garantir une expérience utilisateur fluide.",
    github: "https://github.com/iheb/vente-en-ligne",
    demo: "https://shop.ihebghrairi.com",
  },
  "ia-generateur": {
    title: "IA - Générateur de Contenu",
    description:
      "Générateur intelligent de publications pour réseaux sociaux alimenté par l'IA, optimisant la création de contenu marketing et l'engagement.",
    image: "images/ia systteme.jpg",
    technologies: ["OpenAI API", "Python", "Django", "MongoDB", "Docker"],
    features: [
      "Génération de contenu IA personnalisé par secteur",
      "Templates personnalisables pour différents réseaux",
      "Planification automatique de publications",
      "Analyse de performance et optimisation",
      "Intégration avec principaux réseaux sociaux",
      "Suggestions de hashtags et optimisation SEO",
    ],
    challenges:
      "L'optimisation des prompts IA pour générer du contenu pertinent et la gestion efficace des API externes avec limitation de taux.",
    github: "https://github.com/iheb/ia-generateur",
    demo: "https://youtu.be/yNfMEsrkXVk",
  },*/
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu")
const mobileNav = document.getElementById("mobile-nav")

if (mobileMenuBtn && mobileNav) {
  const navIcon = mobileMenuBtn.querySelector("i")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    if (mobileNav.classList.contains("active")) {
      navIcon.classList.remove("fa-bars")
      navIcon.classList.add("fa-times")
    } else {
      navIcon.classList.remove("fa-times")
      navIcon.classList.add("fa-bars")
    }
  })
}

// Get project ID from URL parameters
function getProjectIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get("project") || "erp-system"
}

// Load project data
function loadProjectData() {
  const projectId = getProjectIdFromURL()
  const project = projectsData[projectId]

  if (!project) {
    showError()
    return
  }

  // Update page title
  document.title = `${project.title} - Ihab Soufiane`

  // Update project information
  document.getElementById("project-title").textContent = project.title
  document.getElementById("project-description").textContent = project.description
  document.getElementById("project-image").src = project.image
  document.getElementById("project-image").alt = project.title

  // Update links
  const demoLink = document.getElementById("demo-link")
  const githubLink = document.getElementById("github-link")

  if (project.demo) {
    demoLink.href = project.demo
    demoLink.style.display = "inline-flex"
  } else {
    demoLink.style.display = "none"
  }

  if (project.github) {
    githubLink.href = "#"
    githubLink.style.display = "inline-flex"
    
    // Add event listener for GitHub link to show modal
    githubLink.addEventListener("click", function(e) {
      e.preventDefault()
      document.getElementById("permission-modal").style.display = "block"
    })
  } else {
    githubLink.style.display = "none"
  }

  // Update technologies
  const techContainer = document.getElementById("technologies-list")
  techContainer.innerHTML = ""
  project.technologies.forEach((tech) => {
    const badge = document.createElement("span")
    badge.className = "tech-badge-large"
    badge.textContent = tech
    techContainer.appendChild(badge)
  })

  // Update features
  const featuresList = document.getElementById("features-list")
  featuresList.innerHTML = ""
  project.features.forEach((feature) => {
    const li = document.createElement("li")
    li.textContent = feature
    featuresList.appendChild(li)
  })

  // Update challenges
  document.getElementById("challenges-text").textContent = project.challenges
}

// Show error message
function showError() {
  const container = document.querySelector(".container")
  container.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>Projet non trouvé</h2>
            <p>Le projet demandé n'existe pas ou a été supprimé.</p>
            <a href="index.html#projects" class="btn btn-primary">
                <i class="fas fa-arrow-left"></i>
                Retour aux projets
            </a>
        </div>
    `
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  loadProjectData()
  
  // Modal functionality
  const modal = document.getElementById("permission-modal")
  const closeModal = document.querySelector(".close-modal")
  const closeModalBtn = document.getElementById("close-modal-btn")
  const contactForCode = document.getElementById("contact-for-code")
  
  // Close modal when clicking on X
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
    })
  }
  
  // Close modal when clicking on Close button
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none"
    })
  }
  
  // Contact button in modal
  if (contactForCode) {
    contactForCode.addEventListener("click", () => {
      window.location.href = "mailto:ihebghrarii@gmail.com?subject=Demande d'accès au code source&body=Bonjour Iheb,%0A%0AJe souhaiterais obtenir l'accès au code source de votre projet."
      modal.style.display = "none"
    })
  }
  
  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.9)"
  }
})
