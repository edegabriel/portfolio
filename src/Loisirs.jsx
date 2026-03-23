import { useEffect, useState } from 'react'
import './App.css'

const SPORT_SECTIONS = [
  {
    id: 1,
    title: 'Musculation',
    description: 'Entraînement et depassement de soi',
    details: `je fais depuis plus de 3 ans de la musculation en salle, avec un programme de 3 a 4 seance par semaine, avec toujours pour objectif de gagner en force car la force c'est pour moi la liberte de mouvement.
    mais aussi en plus de la force, j'aime aussi le travail de l'esthetique et de la posture, pour moi c'est important car c'est ce qui me permet d'etre en bonne sante et de me sentir bien dans mon corps.
`
  },
  {
    id: 2,
    title: 'Handball',
    description: 'Jeu en equipe et competition ',
    details: `je joue au hand depuis mes 10 ans, depuis le debut j'evolue dans le meme club, en passant par tous les postes pour finir en temps qu'arriere pour ma vitesse et ma vision vers le but. 
    je suis sur un rythme de 2 entrainement et un match par semaine et j'ai pu acceder au niveau de honneur excellence region sur la region bordelaise, connue pour une grande aggressivite et un niveau de jeu eleve. 
`
  }
]

const PROJECTS_PERSO = [
  {
    id: 1,
    title: 'Jeu de la vie',
    description: 'Simulation de la vie et de l\'evolution',
    details: `j'ai realisé un projet de jeu de la vie en C, c'est un projet qui m'a permis de decouvrir les bases de la programmation, ainsi que les algorithmes de base pour simuler la vie et l'evolution. j'ai choisi de le faire en C car c'est un langage de bas niveau qui permet de comprendre les concepts de la programmation, et qui est aussi tres performant pour ce genre de projet.`
  }
]

const LINUX_SECTIONS = [
  {
    id: 1,
    title: 'Création',
    description: 'archInstall ou manuelle',
    details: `J'ai commencé sur les conseils d'amis par Arch Linux directement, mais la version simple avec le archInstall qui partitionne, telecharge les package et boot/monte automatiquement sans erreurs possibles
    Mais par curiosité et envie d'apprendre je me suis mits dans la quete de l'installation manuelle, avec des essais et des erreurs j'ai reussit a installer arch dans une machine virtuelle `
  },
  {
    id: 2,
    title: 'Personalisation',
    description: 'Mes choix',
    details: `j'etait partie d'un rice deja existant pour ne pas trop etre dépaysé, mais au fur et a mesure de mon experience sur linux je me le suis approprier `
  },
]

function Loisirs() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored === 'light' || stored === 'dark' ? stored : 'dark'
  })
  const [selectedLoisir, setSelectedLoisir] = useState(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  const closeModal = () => {
    setSelectedLoisir(null)
  }

  return (
    <div id="top">
      <header className="topbar">
        <nav className="topbar-inner">
          <div className="nav-links">
            <a href="#top">Accueil</a>
            <a href="#sport">Sport</a>
            <a href="#personnal_project">Projets perso</a>
            <a href="#linux">Linux</a>
            <a href="index.html">Professionel</a>
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
              Mes Loisirs & Passions.
            </h1>
            <p>
              Découvrez ce qui m'anime en dehors du monde professionnel. 
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="index.html">Retour au portfolio professionnel</a>
            </div>
          </div>
        </section>

        <section id="sport" className="row">
          <div className="row-header">
            <h2>Sport</h2>
            <span>activités physiques</span>
          </div>
          <div className="row-grid">
            {SPORT_SECTIONS.map(loisir => (
              <article key={loisir.id} className="poster poster-click" onClick={() => setSelectedLoisir(loisir)}>
                <div className="poster-info">
                  <h3>{loisir.title}</h3>
                  <p>{loisir.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="personnal_project" className="row">
          <div className="row-header">
            <h2>Projets perso</h2>
            <span>fait sur mon temps libre</span>
          </div>
          <div className="row-grid">
            {PROJECTS_PERSO.map(loisir => (
              <article key={loisir.id} className="poster poster-click" onClick={() => setSelectedLoisir(loisir)}>
                <div className="poster-info">
                  <h3>{loisir.title}</h3>
                  <p>{loisir.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="linux" className="row">
          <div className="row-header">
            <h2>Linux</h2>
            <span>système et open source</span>
          </div>
          <div className="row-grid">
            {LINUX_SECTIONS.map(loisir => (
              <article key={loisir.id} className="poster poster-click" onClick={() => setSelectedLoisir(loisir)}>
                <div className="poster-info">
                  <h3>{loisir.title}</h3>
                  <p>{loisir.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="footer" className="row">
        </section>
      </main>

      {selectedLoisir && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2>{selectedLoisir.title}</h2>
            <p className="modal-details">{selectedLoisir.details}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loisirs
