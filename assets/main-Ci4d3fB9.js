import{r,j as e,c as x}from"./App-BsJR3mvu.js";const g="/portfolio/assets/C-C__-DduMxWys.png",f="/portfolio/assets/java-ByVaUSVQ.png",N="/portfolio/assets/python-DfQnef4W.png",v="/portfolio/assets/bash-DucuNvZR.png",C="/portfolio/assets/php-Cg9vToGE.png",b="/portfolio/assets/mySQL-CbSmOUWI.png",k="/portfolio/assets/html-css-CSStRMfP.png";function S(){return e.jsxs("svg",{className:"theme-icon",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}function P(){return e.jsx("svg",{className:"theme-icon",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M21 13.2A9 9 0 1 1 10.8 3a7 7 0 1 0 10.2 10.2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}const m=[{id:1,title:"Création et administration d'un réseau professionnel",description:"Conception d'un réseau sécurise avec zones serveur, personnel et clients, et certains postes clients.",tags:"FTP, DHCP",skillIds:[2,3,6],links:[{label:"Rapport",url:"/Rapport_reseau.pdf"}],details:`RÉALISATION
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
`},{id:2,title:"Gestion de projet immobilier",description:"Projet tutoré sur plusieurs semaines visant à concevoir une application moderne dans le domaine immobilier.",tags:"SWOT, CQQCOQP, SMART",skillIds:[5,6],links:[{label:"Rapport",url:"/SAE_gestion_projet_S2.pdf"},{label:"Présentation finale",url:"/diapo_gestion_projet.pdf"}],details:`
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
- Conception du livrable final

`},{id:3,title:"UNILISTE – Application numerique d'appel",description:"Projet tutoré consistant a développer une application permettant aux enseignants de gerer l'appel de maniere numérique.",tags:"Vue.js, Rust, MongoDb",skillIds:[1,4,6],links:[{label:"Code",url:"https://github.com/2ulian/uniliste"}],details:`ARCHITECTURE
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
`}],d=[{id:1,title:"Developpement d'application",description:"Concevoir / coder / tester une application",details:`REALISER – Niveau 3
- Élaboration des spécifications
- Bonnes pratiques de programmation
- Developpement d'interfaces utilisateurs
Projet : UNILISTE`},{id:2,title:"Optimisation",description:"Mettre en oeuvre des algos, choisir structures de donnees",details:`OPTIMISER – Niveau 3
- Compréhension des enjeux de securisation  
- Anticipation des performances
Projet : Administration reseau professionnel`},{id:3,title:"Administration des systemes",description:"Installer, configurer un OS, securisation",details:`ADMINISTRER – Niveau 4
- Installation et configuration systeme  
- Configuration reseau d'entreprise  
- Utilisation environnement multiutilisateur
Projet : Administration réseau professionnel

ADMINISTRER un Reseaux en particulier – Niveau 2
- Securisation des services  
- Utilisation de services virtualisés
Projet : Administration réseau professionnel`},{id:4,title:"Gestion de donnees",description:"Modeliser, interroger, administrer une base de donnees",details:`GERER – Niveau 2
- Conception base de données  
- Requetes SQL
Projet : UNILISTE`},{id:5,title:"Conduite de projet",description:"Methode Agile, gestion de planning, communication",details:`CONDUIRE – Niveau 4
- Analyse des besoins client  
- Formalisation des exigences  
- Mise en place d'outils de gestion  
- Suivi et pilotage de projet
Projet : Gestion de projet immobilier`},{id:6,title:"Collaborer",description:"Travail d'equipe, Git, communication",details:`COLLABORER – Niveau 3
- Gestion des roles  
- Communication d'equipe  
- Developpement des competences interpersonnelles
- Travail efficace en equipe  
- Rendu professionnel de l'activite
Projets : Gestion de projet immobilier, Administration reseau professionnel`}];function R(){const[t,h]=r.useState(()=>{const s=localStorage.getItem("theme");return s==="light"||s==="dark"?s:"dark"}),[o,l]=r.useState(null),[n,a]=r.useState(null);r.useEffect(()=>{document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,localStorage.setItem("theme",t)},[t]);const p=()=>{l(null),a(null)},c=()=>{a(null)},u=s=>{const i=d.find(j=>j.id===s);i&&a(i)};return e.jsxs("div",{id:"top",children:[e.jsx("header",{className:"topbar",children:e.jsxs("nav",{className:"topbar-inner",children:[e.jsxs("div",{className:"nav-links",children:[e.jsx("a",{href:"#top",children:"Accueil"}),e.jsx("a",{href:"#competences",children:"Competences"}),e.jsx("a",{href:"#projets",children:"Projets"}),e.jsx("a",{href:"#parcours",children:"Parcours"}),e.jsx("a",{href:"#contact",children:"Contact"}),e.jsx("a",{href:"loisirs.html",children:"Loisirs"})]}),e.jsx("button",{type:"button",className:"theme-toggle",onClick:()=>h(t==="dark"?"light":"dark"),"aria-label":t==="dark"?"Passer au mode clair":"Passer au mode sombre",children:t==="dark"?e.jsx(S,{}):e.jsx(P,{})})]})}),e.jsxs("main",{children:[e.jsx("section",{className:"hero","aria-labelledby":"hero-title",children:e.jsxs("div",{className:"hero-content",children:[e.jsx("h1",{id:"hero-title",children:"Portfolio d'un developpeur junior."}),e.jsx("p",{children:"gestion de projets, Front-end, reseau"}),e.jsx("div",{className:"hero-actions",children:e.jsx("button",{className:"btn-primary",onClick:()=>l(m[2]),children:"Projet en cours"})})]})}),e.jsxs("section",{id:"competences",className:"row",children:[e.jsxs("div",{className:"row-header",children:[e.jsx("h2",{children:"Competences"}),e.jsx("span",{children:"socle principale"})]}),e.jsx("div",{className:"row-grid",children:d.map(s=>e.jsx("article",{className:"poster poster-click",onClick:()=>a(s),children:e.jsxs("div",{className:"poster-info",children:[e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.description})]})},s.id))})]}),e.jsxs("section",{id:"projets",className:"row",children:[e.jsxs("div",{className:"row-header",children:[e.jsx("h2",{children:"Projets"}),e.jsx("span",{children:"Mes projets complet"})]}),e.jsx("div",{className:"projects-timeline",children:m.map((s,i)=>e.jsxs("div",{className:`timeline-row ${i%2===0?"left":"right"}`,children:[e.jsx("div",{className:"timeline-col left",children:i%2===0&&e.jsx("article",{className:"poster poster-lg timeline-card",onClick:()=>l(s),children:e.jsxs("div",{className:"poster-info",children:[e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.description}),e.jsx("span",{children:s.tags})]})})}),e.jsx("div",{className:"timeline-center","aria-hidden":"true",children:e.jsx("span",{className:"timeline-dot"})}),e.jsx("div",{className:"timeline-col right",children:i%2===1&&e.jsx("article",{className:"poster poster-lg timeline-card",onClick:()=>l(s),children:e.jsxs("div",{className:"poster-info",children:[e.jsx("h3",{children:s.title}),e.jsx("p",{children:s.description}),e.jsx("span",{children:s.tags})]})})})]},s.id))})]}),e.jsxs("section",{id:"parcours",className:"row",children:[e.jsxs("div",{className:"row-header",children:[e.jsx("h2",{children:"Parcours"}),e.jsx("span",{children:"diplomes valides et en cours"})]}),e.jsxs("div",{className:"row-grid",children:[e.jsx("article",{className:"card",children:e.jsxs("div",{className:"poster-info",children:[e.jsx("h3",{children:"BAC General"}),e.jsx("p",{children:"Lycee Max Linder"}),e.jsx("span",{children:"2021 - 2024"})]})}),e.jsx("article",{className:"card",children:e.jsxs("div",{className:"poster-info",children:[e.jsx("h3",{children:"BUT Informatique"}),e.jsx("p",{children:"IUT du Limousin"}),e.jsx("span",{children:"2024 - 2027"})]})})]})]}),e.jsxs("section",{id:"contact",className:"row",children:[e.jsxs("div",{className:"row-header",children:[e.jsx("h2",{children:"Contact"}),e.jsx("span",{children:"Disponible pour toutes expériences"})]}),e.jsxs("div",{className:"contact-card",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Pour pouvoir échanger !!"}),e.jsx("p",{children:"Vous aurez une réponse le plus rapidement possible"})]}),e.jsxs("div",{className:"contact-actions",children:[e.jsx("a",{className:"btn-primary",href:"mailto:enzodegabriel@orange.fr",children:"enzodegabriel@orange.fr"}),e.jsx("a",{className:"btn-ghost",href:"https://edegabriel.github.com/",children:"GitHub"})]})]})]}),e.jsx("section",{id:"footer",className:"row",children:e.jsxs("div",{className:"footer-content",children:[e.jsx("a",{href:"loisirs.html#personnal_project",className:"footer-logo-link",title:"Découvrir mes projets perso",children:e.jsx("img",{src:g,alt:"Logo C/C++",className:"footer-logo"})}),e.jsx("a",{href:"loisirs.html#personnal_project",className:"footer-logo-link",title:"Découvrir mes projets perso",children:e.jsx("img",{src:f,alt:"Logo java",className:"footer-logo"})}),e.jsx("a",{href:"loisirs.html#personnal_project",className:"footer-logo-link",title:"Découvrir mes projets perso",children:e.jsx("img",{src:N,alt:"Logo python",className:"footer-logo"})}),e.jsx("a",{href:"loisirs.html#personnal_project",className:"footer-logo-link",title:"Découvrir mes projets perso",children:e.jsx("img",{src:v,alt:"Logo bash",className:"footer-logo"})}),e.jsx("a",{href:"loisirs.html#personnal_project",className:"footer-logo-link",title:"Découvrir mes projets perso",children:e.jsx("img",{src:C,alt:"Logo php",className:"footer-logo"})}),e.jsx("a",{href:"loisirs.html#personnal_project",className:"footer-logo-link",title:"Découvrir mes projets perso",children:e.jsx("img",{src:b,alt:"Logo mysql",className:"footer-logo"})}),e.jsx("a",{href:"loisirs.html#personnal_project",className:"footer-logo-link",title:"Découvrir mes projets perso",children:e.jsx("img",{src:k,alt:"Logo html/css",className:"footer-logo"})})]})})]}),o&&e.jsx("div",{className:"modal-overlay",onClick:p,children:e.jsxs("div",{className:"modal-content modal-project-layout",onClick:s=>s.stopPropagation(),children:[e.jsx("button",{className:"modal-close",onClick:p,children:"×"}),e.jsxs("aside",{className:"modal-project-aside",children:[e.jsx("h3",{children:"Competences utilisees"}),e.jsx("div",{className:"modal-skill-buttons",children:o.skillIds.map(s=>d.find(i=>i.id===s)).filter(Boolean).map(s=>e.jsx("button",{type:"button",className:"btn-ghost btn-skill",onClick:()=>u(s.id),children:s.title},s.id))})]}),e.jsxs("div",{className:"modal-project-main",children:[e.jsx("h2",{children:o.title}),e.jsx("p",{className:"modal-details",children:o.details}),o.links&&o.links.length>0&&e.jsx("div",{className:"modal-links",children:o.links.map((s,i)=>e.jsx("a",{href:s.url,className:"btn-ghost",target:"_blank",rel:"noopener noreferrer",children:s.label},i))})]})]})}),!o&&n&&e.jsx("div",{className:"modal-overlay",onClick:c,children:e.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[e.jsx("button",{className:"modal-close",onClick:c,children:"×"}),e.jsx("h2",{children:n.title}),e.jsx("p",{className:"modal-details",children:n.details})]})}),o&&n&&e.jsx("div",{className:"modal-overlay modal-overlay-secondary",onClick:c,children:e.jsxs("div",{className:"modal-content modal-skill-popup",onClick:s=>s.stopPropagation(),children:[e.jsx("button",{className:"modal-close",onClick:c,children:"×"}),e.jsx("h2",{children:n.title}),e.jsx("p",{className:"modal-details",children:n.details})]})})]})}x.createRoot(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(R,{})}));
