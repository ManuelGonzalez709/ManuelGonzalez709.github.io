export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://ManuelGonzalez709.github.io',
    title: 'Portafolio de Manuel González',
    subtitle: 'Desarrollador Full Stack',
    description: 'Portafolio personal de Manuel González: proyectos, artículos y más sobre desarrollo web, móvil y backend.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Imagen destacada del portafolio de Manuel González'
    },
    headerNavLinks: [
        { text: 'Inicio', href: '/' },
        { text: 'Proyects', href: '/projects' },
        { text: 'Expecience', href: '/blog' },
        { text: 'GitHub', href: 'https://github.com/ManuelGonzalez709' }
    ],
    footerNavLinks: [
        { text: 'Contacto', href: '/contact' },
        { text: 'Términos', href: '/terms' }
    ],
    socialLinks: [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/manuel-gonzalez-4a6ab7212/' },
        { text: 'GitHub', href: 'https://github.com/ManuelGonzalez709' }
    ],
    hero: {
        title: '¡Hola! Soy Manuel González',
        text: "Soy desarrollador de aplicaciones web y multiplataforma con experiencia en React, Laravel, Spring Boot y más. Me apasiona construir soluciones prácticas y eficientes, tanto en frontend como backend. Aquí podrás ver algunos de mis proyectos y publicaciones técnicas. Échales un vistazo y no dudes en ponerte en contacto conmigo si quieres colaborar.",
        image: {
            src: '/dante-preview.jpg',
            alt: 'Manuel González trabajando frente al ordenador'
        },
        actions: [
            { text: 'Contáctame', href: '/contact' }
        ]
    },
    subscribe: {
        title: 'Suscríbete a mi blog',
        text: 'Recibe los últimos artículos sobre desarrollo web y mis proyectos personales directamente en tu correo.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
