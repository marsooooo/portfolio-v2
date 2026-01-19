export type Language = "en" | "fr"

export type Project = {
  id: string
  titleKey: string
  descKey: string
  image?: string
  technologies: string[]
  details: {
    titleKey: string
    durationKey?: string
    durationLabelKey?: string
    descriptionKeys?: string[]
    link?: {
      url: string
      textKey?: string
      labelKey?: string
    }
  }
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    title: "Tison Marceau Portfolio",
    welcome: "Welcome to my portfolio !",
    discover:
      "Discover all my latest projects as well as some informations about me and my hobbies.",
    about_me_header: "About Me",
    about_text:
      "My name is Marceau, I'm a currently studying a Bachelor’s Degree in Software Development and currently looking for an apprenticeship for 2026.",
    about_text2:
      "I thrive on building functional systems that not only look great but also provide real value to users. With every project, I aim to blend aesthetics and usability seamlessly.",
    about_text3:
      "I’ve been studying different tools to become a great asset for my teams and work efficiently on my own.",
    projects_header: "My projects",
    contact_header: "Let's get in touch",
    first_name: "First Name",
    last_name: "Last Name",
    email: "Mail",
    message: "Message",
    send: "Send",
    github: "My Github",
    linkedin: "My Linkedin",
    webdev: "Web Developer",
    design: "Design Enthusiast",
    about_me: "About me",
    my_projects: "My Projects",
    contact: "Contact",
    outfitters_title: "Outfitters",
    outfitters_description: "Social Media for Fashion",
    outfitters_project_title: "Outfitters",
    outfitters_project_desc_1:
      "A comprehensive social media platform dedicated to fashion enthusiasts, allowing users to catalog their wardrobe and create unique outfits.",
    outfitters_project_desc_2:
      "The platform fosters a community where users can share their creations, receive feedback through reviews, and interact with other fashion lovers.",
    outfitters_project_desc_3:
      "Brands can leverage the platform to advertise new collections and exclusive drops directly to a targeted audience of fashion-conscious users.",
    outfitters_project_desc_4:
      "Built with a robust tech stack including React Native for mobile ensuring a seamless experience across devices.",
    outfitters_duration: "Ongoing",
    outfitters_duration_label: "Status :",
    peaxy_title: "Peaxy.fr",
    peaxy_description: "Streamer Website",
    peaxy_project_title: "Peaxy.fr",
    peaxy_project_desc_1:
      "A custom-built website for Twitch Streamer Peaxy, designed to centralize her content and engage her community with interactive features.",
    peaxy_project_desc_2:
      "The site showcases her stream and includes a Marble-On-Stream leaderboard to track community participation and rankings.",
    peaxy_project_desc_3:
      "Integrated with various APIs to display the latest YouTube content, monthly drawn emotes, and her current League of Legends rank.",
    peaxy_project_desc_4:
      "Features a monthly podium system to recognize and celebrate top supporters, including best donators, cheerers, and subgifters.",
    peaxy_duration: "Ongoing",
    peaxy_duration_label: "Status :",
    ccdm_project_image_alt: "Project Image",
    ccdm_project_title: "Cat coins du monde",
    ccdm_project_desc_1: "Developed a game during the MyDigitalSchool 2025 Gamejam",
    ccdm_project_desc_2:
      "This game made with my classmates won the awards for the jury's favorite and student's favorite",
    ccdm_project_desc_3: "I was in charge of a part of the game design as well as the full integration of the game",
    ccdm_project_desc_4:
      "We had to use Godot 3 for this project, it was a challenge because I never used this language before but in the end we ended up creating something we could all be proud of",
    ccdm_project_duration_label: "Duration :",
    ccdm_project_duration: "1 week",
    ccdm_project_link_text: "Cat Coins Du Monde",
    pwg_internship_title: "Piwigo Internship",
    pwg_internship_duration: "6 months",
    pwg_internship_intro: "Remote full-stack development internship focused on enhancing the Piwigo platform.",
    pwg_internship_description:
      "Piwigo is an open-source photo management software designed for organizing, sharing, and hosting image galleries. It is ideal for individuals, photographers, and organizations, offering features like batch processing, user management, tagging, and plugin support. Piwigo can be self-hosted or used via Piwigo.com for cloud hosting. Its flexibility, customization options, and strong community support make it a popular choice for managing large photo libraries.",
    pwg_internship_duration_label: "Duration",
    riot_project_title: "Riot Api (Huge Esports)",
    riot_project_description:
      "This project is my subject of internship at HUGE Esport, this association born in 2023 manages two esports rosters, a League of Legends team playing in french 3rd division considered one of the best in its category, and a VALORANT team playing in the inclusive european league.",
    riot_project_solution:
      "Since these rosters need a competent coaching staff I offered them a solution that would help them monitor their players' stats inside the game.",
    riot_project_creation:
      "I created an app made mostly out of React for the UI and Node.js, Express, MySQL, and the Riot Games API on the Server Side.",
    riot_project_duration_label: "Duration",
    riot_project_access_link: "Access the app",
    pwg_title: "Piwigo Internship",
    pwg_description: "PHP",
    riot_title: "Riot Games API app (Huge Esports)",
    riot_description: "React & Node.JS",
    gamejam_title: "Cat coins du monde",
    gamejam_description: "Godot 3",
    gamejam_access_link: "Cat coins du monde on Itch.io",
    motion_title: "Motion Design",
    motion_description: "After Effects",
    projetspe_project_title: "Specialization Project",
    projetspe_project_desc_1: "Developed a restaurant website during my 2nd year at MyDigitalSchool",
    projetspe_project_desc_2:
      "This fictional website allows the administrator to modify the menu, manage reservations, and set off days",
    projetspe_project_desc_3:
      "I was responsible for the client-side interface and functionalities, as well as coordinating between frontend and backend development",
    projetspe_project_duration_label: "Duration:",
    projetspe_project_image_alt: "Project Image",
    projetspe_title: "Specialization Project",
    projetspe_description: "PHP & JS",
  },
  fr: {
    title: "Marceau Tison",
    welcome: "Bienvenue sur mon portfolio !",
    discover:
      "Découvrez tous mes derniers projets ainsi que des informations sur moi et mes hobbies.",
    about_me_header: "À propos de moi",
    about_text:
      "Je m'appelle Marceau, j'étudie en Bachelor conception & développement d'applications et je suis actuellement à la recherche d'un apprentissage pour 2026.",
    about_text2:
      "J'aime créer des systèmes fonctionnels qui non seulement sont beaux, mais aussi apportent une véritable valeur aux utilisateurs. À chaque projet, je cherche à allier esthétique et utilité.",
    about_text3:
      "J'étudie différents outils pour devenir un atout majeur pour mes équipes et travailler efficacement seul.",
    projects_header: "Mes projets",
    contact_header: "Entrons en contact",
    first_name: "Prénom",
    last_name: "Nom",
    email: "E-mail",
    message: "Message",
    send: "Envoyer",
    github: "Mon Github",
    linkedin: "Mon Linkedin",
    webdev: "Développeur Web",
    design: "Passionné de Design",
    about_me: "À Propos",
    my_projects: "Mes Projets",
    contact: "Contact",
    outfitters_title: "Outfitters",
    outfitters_description: "Réseau social mode",
    outfitters_project_title: "Outfitters",
    outfitters_project_desc_1:
      "Une plateforme de médias sociaux complète dédiée aux passionnés de mode, permettant aux utilisateurs de cataloguer leur garde-robe et de créer des tenues uniques.",
    outfitters_project_desc_2:
      "La plateforme favorise une communauté où les utilisateurs peuvent partager leurs créations, recevoir des retours via des avis et interagir avec d'autres amateurs de mode.",
    outfitters_project_desc_3:
      "Les marques peuvent utiliser la plateforme pour promouvoir de nouvelles collections et des lancements exclusifs directement auprès d'un public ciblé.",
    outfitters_project_desc_4:
      "Construit avec une stack technique robuste incluant React Native pour mobile assurant une expérience fluide sur tous les appareils.",
    outfitters_duration: "En cours",
    outfitters_duration_label: "Statut :",
    peaxy_title: "Peaxy.fr",
    peaxy_description: "Site de Streamer",
    peaxy_project_title: "Peaxy.fr",
    peaxy_project_desc_1:
      "Un site web sur mesure pour la streameuse Twitch Peaxy, conçu pour centraliser son contenu et engager sa communauté avec des fonctionnalités interactives.",
    peaxy_project_desc_2:
      "Le site met en valeur son stream et inclut un classement Marble-On-Stream pour suivre la participation et les classements de la communauté.",
    peaxy_project_desc_3:
      "Intégré avec diverses API pour afficher les derniers contenus YouTube, les emotes du mois et son rang actuel sur League of Legends.",
    peaxy_project_desc_4:
      "Dispose d'un système de podium mensuel pour reconnaître et célébrer les meilleurs supporters, y compris les meilleurs donateurs, cheerers et subgifters.",
    peaxy_duration: "En cours",
    peaxy_duration_label: "Statut :",
    ccdm_project_image_alt: "Image du projet",
    ccdm_project_title: "Cat coins du monde",
    ccdm_project_desc_1: "Développement d'un jeu pendant la Gamejam MyDigitalSchool 2025",
    ccdm_project_desc_2:
      "Ce jeu réalisé avec mes camarades a remporté les prix du préféré du jury et du préféré des étudiants",
    ccdm_project_desc_3: "J'étais responsable d'une partie du game design ainsi que de l'intégration complète du jeu",
    ccdm_project_desc_4:
      "Nous avons dû utiliser Godot 3 pour ce projet, ce fut un défi car je n'avais jamais utilisé ce langage auparavant, mais au final, nous avons créé quelque chose dont nous pouvons tous être fiers",
    ccdm_project_duration_label: "Durée :",
    ccdm_project_duration: "1 semaine",
    ccdm_project_link_text: "Cat Coins Du Monde",
    pwg_internship_title: "Stage Piwigo",
    pwg_internship_duration: "6 mois",
    pwg_internship_intro:
      "Stage de développement full-stack à distance axé sur l'amélioration de la plateforme Piwigo.",
    pwg_internship_description:
      "Piwigo est un logiciel open-source de gestion de photos conçu pour organiser, partager et héberger des galeries d'images. Il est idéal pour les particuliers, photographes et organisations, offrant des fonctionnalités telles que le traitement par lot, la gestion des utilisateurs, l'ajout de tags et le support de plugins. Piwigo peut être auto-hébergé ou utilisé via Piwigo.com pour un hébergement cloud. Sa flexibilité, ses options de personnalisation et son soutien communautaire en font un choix populaire pour gérer de grandes bibliothèques de photos.",
    pwg_internship_duration_label: "Durée",
    riot_project_title: "Riot Api (Huge Esports)",
    riot_project_description:
      "Ce projet est mon sujet de stage chez HUGE Esport, une association née en 2023 qui gère deux équipes esports, une équipe League of Legends évoluant en 3e division française, considérée comme l'une des meilleures de sa catégorie, et une équipe VALORANT jouant dans la ligue européenne inclusive.",
    riot_project_solution:
      "Comme ces équipes avaient besoin d'un staff de coaching compétent, je leur ai proposé une solution qui leur permettrait de suivre les statistiques de leurs joueurs à l'intérieur du jeu.",
    riot_project_creation:
      "J'ai créé une application principalement réalisée avec React pour l'interface utilisateur, Node.js, Express, MySQL et l'API Riot Games pour le côté serveur.",
    riot_project_duration_label: "Durée",
    riot_project_access_link: "Accéder à l'application",
    pwg_title: "Stage Piwigo",
    pwg_description: "PHP",
    riot_title: "Application Riot Games API (Huge Esports)",
    riot_description: "React & Node.JS",
    gamejam_title: "Cat coins du monde",
    gamejam_description: "Godot 3",
    gamejam_access_link: "Cat coins du monde sur Itch.io",
    motion_title: "Motion Design",
    motion_description: "After Effects",
    projetspe_project_title: "Projet de spécialité",
    projetspe_project_desc_1: "Développement d'un site web de restauration durant ma 2e année à MyDigitalSchool",
    projetspe_project_desc_2:
      "Ce site fictif permet à l'administrateur de modifier le menu, gérer les réservations et définir les jours de fermeture",
    projetspe_project_desc_3:
      "J'étais responsable de l'interface et des fonctionnalités côté client, ainsi que de la coordination entre le développement frontend et backend",
    projetspe_project_duration_label: "Durée :",
    projetspe_project_image_alt: "Image du projet",
    projetspe_title: "Projet de Spécialité",
    projetspe_description: "PHP & JS",
  },
}

export const projects: Project[] = [
  {
    id: "outfitters",
    titleKey: "outfitters_title",
    descKey: "outfitters_description",
    technologies: ["TypeScript", "Express", "Prisma", "PostgreSQL", "React", "React Native", "Docker"],
    image: "/placeholder.svg?height=150&width=200",
    details: {
      titleKey: "outfitters_project_title",
      durationKey: "outfitters_duration",
      durationLabelKey: "outfitters_duration_label",
      descriptionKeys: [
        "outfitters_project_desc_1",
        "outfitters_project_desc_2",
        "outfitters_project_desc_3",
        "outfitters_project_desc_4",
      ],
    },
  },
  {
    id: "peaxy",
    titleKey: "peaxy_title",
    descKey: "peaxy_description",
    technologies: ["TypeScript", "Next", "TailwindCSS", "Express"],
    image: "/placeholder.svg?height=150&width=200",
    details: {
      titleKey: "peaxy_project_title",
      durationKey: "peaxy_duration",
      durationLabelKey: "peaxy_duration_label",
      descriptionKeys: ["peaxy_project_desc_1", "peaxy_project_desc_2", "peaxy_project_desc_3", "peaxy_project_desc_4"],
      link: {
        url: "https://peaxy.fr",
        textKey: "peaxy_project_title",
      },
    },
  },
  {
    id: "piwigo",
    titleKey: "pwg_title",
    descKey: "pwg_description",
    technologies: ["PHP", "Smarty", "jQuery", "MySQL"],
    image: "/placeholder.svg?height=150&width=200",
    details: {
      titleKey: "pwg_internship_title",
      durationKey: "pwg_internship_duration",
      durationLabelKey: "pwg_internship_duration_label",
      descriptionKeys: ["pwg_internship_intro", "pwg_internship_description", "pwg_internship_task_description"],
      link: {
        url: "https://github.com/piwigo",
        labelKey: "github",
      },
    },
  },
  {
    id: "riot_api",
    titleKey: "riot_title",
    descKey: "riot_description",
    technologies: ["React", "Node.js", "Express", "MySQL", "Riot API"],
    image: "/placeholder.svg?height=150&width=200",
    details: {
      titleKey: "riot_project_title",
      descriptionKeys: ["riot_project_description", "riot_project_solution", "riot_project_creation"],
    },
  },
  {
    id: "gamejam",
    titleKey: "gamejam_title",
    descKey: "gamejam_description",
    technologies: ["Godot 3", "GDScript"],
    image: "/placeholder.svg?height=150&width=200",
    details: {
      titleKey: "ccdm_project_title",
      durationLabelKey: "ccdm_project_duration_label",
      descriptionKeys: ["ccdm_project_desc_1", "ccdm_project_desc_2", "ccdm_project_desc_3", "ccdm_project_desc_4"],
      link: {
        url: "https://inesaoufi.itch.io/cat-coins-du-monde",
        textKey: "ccdm_project_link_text",
      },
    },
  },
  // {
  //   id: "projetspe",
  //   titleKey: "projetspe_title",
  //   descKey: "projetspe_description",
  //   technologies: ["PHP", "JavaScript", "HTML", "CSS"],
  //   image: "/placeholder.svg?height=150&width=200",
  //   details: {
  //     titleKey: "projetspe_project_title",
  //     durationLabelKey: "projetspe_project_duration_label",
  //     descriptionKeys: ["projetspe_project_desc_1", "projetspe_project_desc_2", "projetspe_project_desc_3"],
  //   },
  // },
]
