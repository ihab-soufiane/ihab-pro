// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu")
const mobileNav = document.getElementById("mobile-nav")

if (mobileMenuBtn && mobileNav) {
  const navIcon = mobileMenuBtn.querySelector("i")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    // Toggle icon between bars and times
    if (mobileNav.classList.contains("active")) {
      navIcon.classList.remove("fa-bars")
      navIcon.classList.add("fa-times")
    } else {
      navIcon.classList.remove("fa-times")
      navIcon.classList.add("fa-bars")
    }
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".nav-link-mobile")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      navIcon.classList.remove("fa-times")
      navIcon.classList.add("fa-bars")
    })
  })
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]')
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href")

    // Only prevent default and scroll if it's a valid anchor link
    if (targetId && targetId !== "#" && targetId.length > 1) {
      e.preventDefault()

      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      // Remove active class from all links
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active")
      })

      // Add active class to current section link
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)
      if (activeLink) {
        activeLink.classList.add("active")
      }
    }
  })
})

// Navbar background opacity on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.9)"
    }
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
const animateElements = document.querySelectorAll(".project-card, .about-content > *, .section-header")
animateElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Button click handlers
document.addEventListener("DOMContentLoaded", () => {
  // CV download buttons
  const downloadButtons = document.querySelectorAll("#download-cv, #download-cv-footer")
  downloadButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      // Créer un lien temporaire pour télécharger le CV
      const link = document.createElement("a")
      link.href = "Ihab-Eddine-Soufiane-V-Resume-2025 (1).pdf" // Assurez-vous que le fichier CV existe
      link.download = "Ihab-Eddine-Soufiane-V-Resume-2025 (1).pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  })

  // Contact button
  const contactBtn = document.getElementById("contact-btn")
  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "mailto:ihab.soufiane@gmail.com?subject=Contact depuis le portfolio&body=Bonjour Iheb,"
    })
  }

  // Project demo links
  const projectLinks = document.querySelectorAll('.project-link[data-action="demo"]')
  projectLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Get project ID from the closest project card
      const projectCard = link.closest(".project-card")
      if (!projectCard) return

      const projectId = projectCard.getAttribute("data-project")

      // Redirect to project detail page
      window.location.href = `project-detail.html?project=${projectId}`
    })
  })
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroImage = document.querySelector(".hero-image")

  if (heroImage) {
    const speed = scrolled * 0.2
    heroImage.style.transform = `translateY(${speed}px)`
  }
})

// Skills animation on scroll
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBadges = entry.target.querySelectorAll(".skill-badge")
        skillBadges.forEach((badge, index) => {
          setTimeout(() => {
            badge.style.opacity = "1"
            badge.style.transform = "translateY(0) scale(1)"
          }, index * 100)
        })
      }
    })
  },
  { threshold: 0.5 },
)

const skillsSection = document.querySelector(".skills-grid")
if (skillsSection) {
  // Initially hide skill badges
  const skillBadges = skillsSection.querySelectorAll(".skill-badge")
  skillBadges.forEach((badge) => {
    badge.style.opacity = "0"
    badge.style.transform = "translateY(20px) scale(0.8)"
    badge.style.transition = "all 0.3s ease"
  })

  skillsObserver.observe(skillsSection)
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Error handling for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("error", function () {
      this.src = "/placeholder.svg?height=300&width=400"
      this.alt = "Image non disponible"
    })
  })
})
