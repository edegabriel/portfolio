import { useEffect, useState } from 'react'
import cCppLogo from './assets/C-C++.png'
import javaLogo from './assets/java.png'
import pythonLogo from './assets/python.png'
import bashLogo from './assets/bash.png'
import phpLogo from './assets/php.png'
import mySqlLogo from './assets/mySQL.png'
import htmlcssLogo from './assets/html-css.png'
import React from 'react'
import './App.css'

const PROJECTS = [
  {
    id: 1,
    title: "Création et administration d'un réseau professionnel",
    description: "Conception d'un réseau sécurise avec zones serveur, personnel et clients, et certains postes clients.",
    tags: 'FTP, DHCP',
    links: [
      { label: 'Rapport', url: '/Rapport_reseau.pdf' }
    ],
    details: `RÉALISATION
- Conception de l'architecture reseau  
- Decoupage logique des zones  
- Mise en place DHCP 
- Securisation des communications  
- Configuration sur machine virtuelle

MON ROLE
- Conception de l'architecture  
- Choix et justification de l'adressage IP  
- Prises des decisions techniques
- Pilotage des choix critiques  
- Redaction du rapport détaillé
`
  },
  {
    id: 2,
    title: 'Gestion de projet immobilier',
    description: 'Projet tutoré sur plusieurs semaines visant à concevoir une application moderne dans le domaine immobilier.',
    tags: 'SWOT, CQQCOQP, SMART',
    links: [
      { label: 'Rapport', url: '/SAE_gestion_projet_S2.pdf' },
      {label: 'Présentation finale', url: '/diapo_gestion_projet.pdf' }
    ],
    details: `
    RÉALISATION
- Analyse des besoins client  
- Formalisation des exigences  
- Mise en place d'outils de gestion  
- Suivi et pilotage de projet
- Lancement de la conception d'une application de gestion immobiliere

    MON ROLE
- Pilote de l'equipe
- Definition des objectifs SMART
- Organisation et supervision des réunions
- Rédaction des comptes rendus
- Élaboration du plan de communication
- Arbitrage des décisions strategiques
- Conception du livrable final\n
`
  },
  {
    id: 3,
    title: "UNILISTE – Application numerique d'appel",
    description: "Projet tutoré consistant a développer une application permettant aux enseignants de gerer l'appel de maniere numérique.",
    tags: 'Vue.js, Rust, MongoDb',
    links: [
      { label: 'Code', url: 'https://github.com/2ulian/uniliste' },
      { label: 'Documentation', url: '' }
    ],
    details: `ARCHITECTURE
- Conception de la base de donnees  
- Developpement back-end  
- Developpement front-end  
- Organisation complete du projet

MON ROLE
Responsable du front-end pour l'interface secretariat :  
- Developpement de l'interfaces specifiques  
- Gestion des fonctionnalites avancees (import annuel des etudiants, du personnels et des matières )  
- Tests d'ergonomie  
- Intégration des fonctionnalités du cahier des charges
`
  }
]

const LOISIRS = [
  {
    id: 1,
    title: 'Musique',
    description: 'Guitare, piano, composition',
    image: '🎸',
    details: `PASSIONS MUSICALES
- Guitare depuis 5 ans
- Piano en apprentissage
- Composition de morceaux originaux
- Écoute éclectique : rock, jazz, électronique`
  },
  {
    id: 2,
    title: 'Sport',
    description: 'Musculation, running, outdoor',
    image: '💪',
    details: `ACTIVITÉS SPORTIVES
- Musculation régulière
- Running en extérieur
- Randonnées en montagne
- Objectif : santé et dépassement de soi`
  },
  {
    id: 3,
    title: 'Jeux vidéo',
    description: 'RPG, stratégie, multijoueur',
    image: '🎮',
    details: `UNIVERS GAMING
- Jeux de rôle immersifs
- Jeux de stratégie
- Sessions multijoueur avec amis
- Intérêt pour le game design`
  },
  {
    id: 4,
    title: 'Voyages',
    description: 'Découverte culturelle, road trips',
    image: '✈️',
    details: `EXPÉRIENCES VOYAGE
- Découverte de nouvelles cultures
- Road trips en van
- Visites de villes historiques
- Photos de voyage`
  },
  {
    id: 5,
    title: 'Lecture',
    description: 'SF, développement personnel, tech',
    image: '📚',
    details: `LECTURES
- Science-fiction : Asimov, Philip K. Dick
- Ouvrages techniques informatique
- Développement personnel
- Biographies de pionniers tech`
  },
  {
    id: 6,
    title: 'Cinéma',
    description: 'Films cultes, réalisateurs auteurs',
    image: '🎬',
    details: `PASSION CINÉMA
- Films cultes du cinéma
- Réalisateurs : Nolan, Tarantino, Villeneuve
- Science-fiction et thrillers
- Soirées cinéma entre amis`
  }
]

const COMPETENCES = [
  {
    id: 1,
    title: "Developpement d'application",
    description: 'Concevoir / coder / tester une application',
    details: `REALISER – Niveau 3
- Élaboration des spécifications
- Bonnes pratiques de programmation
- Developpement d'interfaces utilisateurs
Projet : UNILISTE`
  },
  {
    id: 2,
    title: 'Optimisation',
    description: 'Mettre en oeuvre des algos, choisir structures de donnees',
    details: `OPTIMISER – Niveau 3
- Compréhension des enjeux de securisation  
- Anticipation des performances
Projet : Administration reseau professionnel`
  },
  {
    id: 3,
    title: 'Administration des systemes',
    description: 'Installer, configurer un OS, securisation',
    details: `ADMINISTRER – Niveau 4
- Installation et configuration systeme  
- Configuration reseau d'entreprise  
- Utilisation environnement multiutilisateur
Projet : Administration réseau professionnel

ADMINISTRER un Reseaux en particulier – Niveau 2
- Securisation des services  
- Utilisation de services virtualisés
Projet : Administration réseau professionnel`
  },
  {
    id: 4,
    title: 'Gestion de donnees',
    description: 'Modeliser, interroger, administrer une base de donnees',
    details: `GERER – Niveau 2
- Conception base de données  
- Requetes SQL
Projet : UNILISTE`
  },
  {
    id: 5,
    title: 'Conduite de projet',
    description: 'Methode Agile, gestion de planning, communication',
    details: `CONDUIRE – Niveau 4
- Analyse des besoins client  
- Formalisation des exigences  
- Mise en place d'outils de gestion  
- Suivi et pilotage de projet
Projet : Gestion de projet immobilier`
  },
  {
    id: 6,
    title: 'Collaborer',
    description: "Travail d'equipe, Git, communication",
    details: `COLLABORER – Niveau 3
- Gestion des roles  
- Communication d'equipe  
- Developpement des competences interpersonnelles
- Travail efficace en equipe  
- Rendu professionnel de l'activite
Projets : Gestion de projet immobilier, Administration reseau professionnel`
  }
]

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored === 'light' || stored === 'dark' ? stored : 'dark'
  })
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedSkill, setSelectedSkill] = useState(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const closeModal = () => {
    setSelectedProject(null)
    setSelectedSkill(null)
  }
  const selectedItem = selectedProject || selectedSkill

  return (
    <div id="top">
      <header className="topbar">
        <nav className="topbar-inner">
          <div className="nav-links">
            <a href="#top">Accueil</a>
            <a href="#competences">Competences</a>
            <a href="#projets">Projets</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
            <a href="loisirs.html">Loisirs</a>
          </div>
          <button type="button" className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">
              Portfolio d'un developpeur junior.
            </h1>
            <p>
              gestion de projets, Front-end, reseau
            </p>
            <div className="hero-actions">
              {/*renvoie direct au projet en cours*/}
              <button className="btn-primary" onClick={() => setSelectedProject(PROJECTS[2])}>Projet en cours</button>
            </div>
          </div>
        </section>

        <section id="competences" className="row">
          <div className="row-header">
            <h2>Competences</h2>
            <span>socle principale</span>
          </div>
          <div className="row-grid">
            {/*renvoie pour chaques competences sa description quand on clique dessus*/}
            {COMPETENCES.map(skill => (
              <article key={skill.id} className="poster poster-click" onClick={() => setSelectedSkill(skill)}>
                <div className="poster-info">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projets" className="row">
          <div className="row-header">
            <h2>Projets</h2>
            <span>Mes projets complet</span>
          </div>
          <div className="projects-timeline">
            {/*affiche chaques projets*/}
            {PROJECTS.map((project, index) => (
              <div key={project.id} className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-col left">
                  {/*met un projet sur deux de chaques cote de la timeline*/}
                  {index % 2 === 0 && (
                    <article className="poster poster-lg timeline-card" onClick={() => setSelectedProject(project)}>
                      <div className="poster-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <span>{project.tags}</span>
                      </div>
                    </article>
                  )}
                </div>
                <div className="timeline-center" aria-hidden="true">
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-col right">
                  {index % 2 === 1 && (
                    <article className="poster poster-lg timeline-card" onClick={() => setSelectedProject(project)}>
                      <div className="poster-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <span>{project.tags}</span>
                      </div>
                    </article>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="parcours" className="row">
          <div className="row-header">
            <h2>Parcours</h2>
            <span>diplomes valides et en cours</span>
          </div>
          <div className="row-grid">
            <article className="card">
              <div className="poster-info">
                <h3>BAC General</h3>
                <p>Lycee Max Linder</p>
                <span>2021 - 2024</span>
              </div>
            </article>
            <article className="card">
              <div className="poster-info">
                <h3>BUT Informatique</h3>
                <p>IUT du Limousin</p>
                <span>2024 - 2027</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="row">
          <div className="row-header">
            <h2>Contact</h2>
            <span>Disponible pour toutes expériences</span>
          </div>
          <div className="contact-card">
            <div>
              <h3>Pour pouvoir échanger !!</h3>
              <p>Vous aurez une réponse le plus rapidement possible</p>
            </div>
            <div className="contact-actions">
              <a className="btn-primary" href="mailto:enzodegabriel@orange.fr">enzodegabriel@orange.fr</a>
              <a className="btn-ghost" href="https://edegabriel.github.com/">GitHub</a>
            </div>
          </div>
        </section>

        <section id="footer" className="row">
          <div className="footer-content">
            <a href="loisirs.html#personnal_project" className="footer-logo-link" title="Découvrir mes projets perso">
              <img src={cCppLogo} alt="Logo C/C++" className="footer-logo" />
            </a>
            <a href="loisirs.html#personnal_project" className="footer-logo-link" title="Découvrir mes projets perso">
              <img src={javaLogo} alt="Logo java" className="footer-logo" />
            </a>
            <a href="loisirs.html#personnal_project" className="footer-logo-link" title="Découvrir mes projets perso">
              <img src={pythonLogo} alt="Logo python" className="footer-logo" />
            </a>
            <a href="loisirs.html#personnal_project" className="footer-logo-link" title="Découvrir mes projets perso">
              <img src={bashLogo} alt="Logo bash" className="footer-logo" />
            </a>
            <a href="loisirs.html#personnal_project" className="footer-logo-link" title="Découvrir mes projets perso">
              <img src={phpLogo} alt="Logo php" className="footer-logo" />
            </a>
            <a href="loisirs.html#personnal_project" className="footer-logo-link" title="Découvrir mes projets perso">
              <img src={mySqlLogo} alt="Logo mysql" className="footer-logo" />
            </a>
            <a href="loisirs.html#personnal_project" className="footer-logo-link" title="Découvrir mes projets perso">
              <img src={htmlcssLogo} alt="Logo html/css" className="footer-logo" />
            </a>
          </div>
        </section>
      </main>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2>{selectedItem.title}</h2>
            <p className="modal-details">{selectedItem.details}</p>
            {selectedItem.links && selectedItem.links.length > 0 && (
              <div className="modal-links">
                {selectedItem.links.map((link, index) => (
                  <a key={index} href={link.url} className="btn-ghost" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
