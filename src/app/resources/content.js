import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Alexandre",
  lastName: "Quin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Développeur Web",
  avatar: "/images/avatar.jpg",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "Anglais"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alexandrequin",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alexandre-quin-a58b71342/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@alexandre-quin.fr",
  },
];

const home = {
  label: "Accueil",
  title: `${person.name} - ${person.role}`,
  description: `Portfolio web mettant en avant mon travail en tant que développeur Full Stack JavaScript Node.js.`,
  headline: <>Développeur et créateur de solutions Web.</>,
  subline: (
    <>
      Je suis Alexandre, développeur Full Stack JavaScript Node.js. <br /> Ma
      passion ? Concevoir des API REST performantes, des architectures back-end
      optimisées et des interfaces web modernes.
    </>
  ),
};

const about = {
  label: "A propos",
  title: `A propos`,
  description: `Voici Alexandre, développeur Full Stack JavaScript Node.js passionné par la conception d'API REST et d'architectures web performantes.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Je suis Alexandre, développeur Full Stack JavaScript Node.js basé en
        Île-de-France. Passionné par la transformation de défis complexes en
        solutions back-end simples et efficaces, mon travail englobe la
        conception d'API REST, l'optimisation des architectures, l'intégration
        de technologies modernes, ainsi que la mise en place de pratiques DevOps
        pour améliorer l'efficacité et la fiabilité des déploiements.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiences",
    experiences: [
      {
        company: "Development Hosting Quin",
        timeframe: "2022 - Present",
        role: "Auto Entrepreneur",
        achievements: [
          <>Création de sites web pour les entreprises et les particuliers.</>,
          <>Développement d'API REST pour les applications web et mobiles.</>,
          <>Optimisation des performances</>,
          <>Assistance technique et maintenance des applications.</>,
        ],

        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Marasit",
        timeframe: "2020 - 2022",
        role: "Developpeur Web Full Stack",
        achievements: [
          <>
            Développement WordPress et intégration de thèmes et de plugins
            personnalisés.
          </>,
          <>Refonte plugin API SugarCRM pour intégration avec WordPress</>,
          <>Assistance clientèle sur le CMS.</>,
        ],
        images: [],
      },
      {
        company: "Auchan",
        timeframe: "2015 - 2020",
        role: "Employé Libre Service Liquide",
        achievements: [
          <>
            Préparation et mise en place FAV, mise en rayon, gestion des stocks.
          </>,
          <>Inventaire magasin.</>,
          <>Installation entrée saisonnière.</>,
          <>Renseignements clients sur les vins.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formations",
    institutions: [
      {
        name: "Alt | Incubateur Tech",
        description: <>RNCP VI - Concepteur Développeur D'applications</>,
      },
      {
        name: "Doranco",
        description: <>RNCP V - Développeur web et web mobile</>,
      },
      {
        name: "Lycée Professionnel du Véxin",
        description: <>Baccalauréat professionnel vente</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences",
    skills: [
      {
        title: "DevOps",
        description: <>DOCKER | CI/CD | VPS | LINUX</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/devops.png",
            alt: "DevOps",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Développement",
        description: <>TYPESCRIPT | NODEJS | NESTJS | REACT | NEXTJS | SHELL</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: `Développement, DevOps & Tech`,
  description: `Mes publications sur le développement web, les technologies et les bonnes pratiques.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projets",
  title: `${person.name} - Projets`,
  description: `Les différents projets sur lesquels j'ai travaillé.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
