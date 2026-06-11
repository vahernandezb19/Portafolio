document.addEventListener("DOMContentLoaded", () => {
    heroWordRotation();
    navbarScroll();
    languageSwitch();
    projectsOverlay();
    aboutTabs();
    scrollAnimations();
    mobileMenu();
});

function heroWordRotation() {
    const words = {
        es: ["comprenden.", "adoptan.", "quieren usar."],
        en: ["understand.", "adopt.", "actually use."]
    };
    let wordIndex = 0;
    const rotatingEl = document.getElementById("rotating-word");
    const dots = document.querySelectorAll(".dot");

    if (!rotatingEl) return;

    setInterval(() => {
        rotatingEl.style.opacity = "0";
        rotatingEl.style.filter = "blur(4px)";

        setTimeout(() => {
            const lang = localStorage.getItem('lang') || 'es';
            const currentWords = words[lang] || words['es'];
            wordIndex = (wordIndex + 1) % currentWords.length;
            rotatingEl.textContent = currentWords[wordIndex];

            dots.forEach((dot, idx) => {
                if (idx === wordIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });

            rotatingEl.style.opacity = "1";
            rotatingEl.style.filter = "blur(0px)";
        }, 350);

    }, 2700);
}

function navbarScroll() {
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll(".nav-item");

    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('light');
            navbar.classList.remove('dark');
        } else {
            navbar.classList.remove('light');
            navbar.classList.add('dark');
        }
    });

    const sections = document.querySelectorAll("section[id], footer[id]");
    const observerOptions = { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let id = entry.target.getAttribute("id");
                navItems.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
}

function mobileMenu() {
    const btn = document.querySelector('.nav-mobile-btn');
    const menu = document.getElementById('mobileMenu');
    const links = document.querySelectorAll('.mobile-link');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

function aboutTabs() {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.style.display = "none");

            tab.classList.add("active");
            const targetId = `tab-${tab.getAttribute("data-tab")}`;
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                targetContent.style.display = "block";
            }
        });
    });
}

function scrollAnimations() {
    const elements = document.querySelectorAll('.gs-fade-up, .gs-reveal-clip');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(el => observer.observe(el));
}

// ========================
// TRANSLATIONS AND OVERLAY
// ========================

const db = {
    es: {
        // Nav & Hero
        nav_home: "Inicio", nav_projects: "Proyectos", nav_about: "Sobre mí", nav_how: "Cómo trabajo", nav_contact: "Hablemos",
        hero_rol: "Diseñadora de producto · UX/UI", hero_h1_1: "Valentina", hero_h1_2: "Hernandez",
        hero_phrase: "Diseño productos que las personas ", hero_cta_primary: "Ver proyectos", hero_cta_secondary: "Descargar CV",
        scroll_ind: "Scroll",

        // Projects Cards
        proj_eyebrow: "Proyectos destacados", proj_title: "Diseño productos digitales con enfoque estratégico.",
        proj_desc: "Una selección de proyectos enfocados en producto, experiencia de usuario y sistemas digitales escalables.",
        proj_note: "Este portafolio incluye proyectos bajo acuerdos de confidencialidad. Las pantallas mostradas son representativas del proceso y no exponen datos sensibles de los clientes.",
        proj_btn_more: "Ver más →",
        proj1_cat: "Fintech · Mobile", proj1_title: "Superapp", proj1_desc: "Diseño de una app financiera para centralizar cuentas, gestionar finanzas y simplificar la toma de decisiones.",
        proj2_cat: "AI · Enterprise", proj2_title: "E2P", proj2_desc: "Rediseño de una plataforma de inteligencia artificial para optimizar la gestión de procesos empresariales.",
        proj3_cat: "Fintech · SaaS B2B", proj3_title: "CUBO", proj3_desc: "Diseño de una plataforma B2B para centralizar y optimizar la gestión de pagos de nómina y proveedores.",
        proj4_cat: "HRTech · Web", proj4_title: "Drimtim", proj4_desc: "Optimización de una plataforma ERP para una empresa de outsourcing y administración de talento humano.",

        // Overlay Headers
        proj_challenge: "Reto", proj_role_title: "Mi rol", proj_result_title: "Resultado",

        // Quote
        quote_text: "Menos ruido. Más intención.",

        // About
        about_eyebrow: "SOBRE MÍ", about_title: "Diseño con intención.",
        about_p1: "Soy diseñadora de producto con enfoque en UX/UI. Antes de diseñar, necesito entender el problema, el contexto y a quién afecta realmente.",
        about_p2: "Trabajo en la intersección entre investigación, arquitectura e interacción para construir productos con una propuesta de valor clara, funcionales y pensados para su contexto real de uso. Me interesa diseñar experiencias que reduzcan complejidad, faciliten la toma de decisiones y generen valor tanto para el usuario como para el negocio.",
        about_p3: "Tengo experiencia colaborando con equipos multidisciplinarios en productos digitales B2B y B2C, participando desde research y definición de flujos hasta prototipado, sistemas de diseño y validación con usuarios. Disfruto trabajar de forma colaborativa, iterar rápido y convertir problemas complejos en soluciones utilizables, escalables y visualmente coherentes.",

        tab_exp: "Experiencia", tab_edu: "Estudios", tab_rec: "Habilidades", tab_tools: "Herramientas",

        // How I work
        how_eyebrow: "CÓMO TRABAJO", how_title: "Cada proyecto empieza con preguntas. El diseño es cómo las respondo.",
        how_card1_title: "Entender antes de diseñar", how_card1_desc: "Me involucro en el proyecto desde su raíz: escucho a los usuarios, comprendo los objetivos del negocio y mapeo el contexto completo para tomar decisiones de diseño.",
        how_card2_title: "Diseñar para generar valor", how_card2_desc: "Cada decisión de diseño responde a un objetivo claro. Diseño experiencias accesibles, funcionales y pensadas para contextos reales de uso.",
        how_card3_title: "Construir para escalar", how_card3_desc: "Pienso en sistemas, no en pantallas aisladas. Diseño soluciones coherentes y escalables, cuidando los detalles visuales y de interacción para mantener consistencia a medida que el producto evoluciona.",

        // Footer
        footer_title: "¿Tienes un proyecto en mente?", footer_cta: "Hablemos."
    },
    en: {
        // Nav & Hero
        nav_home: "Home", nav_projects: "Projects", nav_about: "About me", nav_how: "How I Work", nav_contact: "Let's talk",
        hero_rol: "Product Designer · UX/UI", hero_h1_1: "Valentina", hero_h1_2: "Hernandez",
        hero_phrase: "I design products that people ", hero_cta_primary: "View projects", hero_cta_secondary: "Download CV",
        scroll_ind: "Scroll",

        // Projects Cards
        proj_eyebrow: "Selected Work", proj_title: "Designing digital products with a strategic approach.",
        proj_desc: "A selection of projects focused on product, user experience, and scalable digital systems.",
        proj_note: "This portfolio includes projects under confidentiality agreements. The screens shown represent the design process and do not expose sensitive client information.",
        proj_btn_more: "View more →",
        proj1_cat: "Fintech · Mobile", proj1_title: "Superapp", proj1_desc: "Design of a financial app to centralize accounts and simplify money management.",
        proj2_cat: "AI · Enterprise", proj2_title: "E2P", proj2_desc: "Redesign of an AI-powered platform to improve enterprise process management.",
        proj3_cat: "Fintech · B2B SaaS", proj3_title: "CUBO", proj3_desc: "Design of a B2B platform to centralize and optimize payroll and supplier payments.",
        proj4_cat: "HRTech · Web", proj4_title: "Drimtim", proj4_desc: "Optimization of an ERP platform to improve navigation and operational efficiency.",

        // Overlay Headers
        proj_challenge: "Challenge", proj_role_title: "My role", proj_result_title: "Outcome",

        // Quote
        quote_text: "Less noise. More intention.",

        // About
        about_eyebrow: "ABOUT ME", about_title: "Design with intention.",
        about_p1: "I’m a product designer focused on UX/UI. Before designing, I take the time to understand the problem, the context, and the people affected.",
        about_p2: "I work at the intersection of research, structure, and interaction to build products with clear value, functional products designes for real-world use. I’m especially interested in reducing complexity, improving decision-making, and creating experiences that generate value for both users and businesses.",
        about_p3: "I’ve collaborated with cross-functional teams across B2B and B2C digital products, contributing from research and user flows to prototyping, design systems, and usability validation. I enjoy working collaboratively, iterating quickly, and turning complex problems into scalable and intuitive solutions.",

        tab_exp: "Experience", tab_edu: "Education", tab_rec: "Skills", tab_tools: "Tools",

        // How I work
        how_eyebrow: "HOW I WORK",
        how_title: "Every project begins with questions. Design is how I answer them.",
        how_desc: "",
        how_card1_title: "Understand before designing", how_card1_desc: "I start by understanding users, business goals, and context to make informed design decisions.",
        how_card2_title: "Design for impact", how_card2_desc: "Every design decision serves a clear purpose. I design accessible, functional experiences that balance user needs, business goals, and technical feasibility.",
        how_card3_title: "Build to scale", how_card3_desc: "I design systems, not isolated screens, creating scalable and consistent experiences while paying attention to the details that matter.",

        // Footer
        footer_title: "Have a project in mind?", footer_cta: "Let's talk."
    }
};

const overlayData = {
    superapp: {
        img: "../assets/SUPERAPP OVERLAY.jpg",
        es: {
            category: "Fintech · Mobile", title: "Superapp",
            summary: "Diseño de una app financiera para centralizar cuentas, gestionar finanzas y simplificar la toma de decisiones.",
            challenge: "¿Cómo construir claridad en un ecosistema financiero de alta complejidad? El desafío era diseñar una plataforma donde múltiples servicios convivieran sin fricción, algo que el mercado colombiano aún no tenía.",
            role: "<ul><li>Conduje investigación y entrevistas con usuarios para entender el contexto real de uso.</li><li>Definí la arquitectura de información y los flujos de interacción priorizando la reducción de fricción.</li><li>Diseñé el sistema visual alineado a la marca del cliente y llevé el producto de wireframes a prototipo de alta fidelidad.</li><li>Validé el MVP con usuarios reales e iteré a partir de los hallazgos.</li></ul>",
            result: "MVP validado con usuarios que permitió centralizar múltiples servicios financieros en una sola experiencia clara y navegable, reduciendo la complejidad percibida y facilitando la gestión financiera mediante una interfaz que reduce la curva de aprendizaje."
        },
        en: {
            category: "Fintech · Mobile", title: "Superapp",
            summary: "Design of a financial app to centralize accounts and simplify money management.",
            challenge: "Designing a platform where multiple financial services coexist without friction, bringing clarity to a highly complex ecosystem.",
            role: "<ul><li>Led user research and interviews to understand real usage contexts.</li><li>Defined information architecture and user flows focused on reducing friction.</li><li>Designed the visual system aligned with the client’s brand and developed the product from wireframes to high-fidelity prototype.</li><li>Validated the MVP with users and iterated based on insights.</li></ul>",
            result: "Validated MVP that centralized multiple financial services into a single experience, reducing perceived complexity and enabling easier financial management with minimal learning curve."
        }
    },
    e2p: {
        img: "../assets/E2P.png",
        es: {
            category: "AI · Enterprise", title: "E2P",
            summary: "Rediseño de una plataforma de inteligencia artificial para optimizar la gestión de procesos empresariales.",
            challenge: "Transformar un producto desarrollado sin criterios de UX en una herramienta comprensible y usable, abordando problemas estructurales de navegación, interacción y entendimiento de los procesos.",
            role: "<ul><li>Realicé la evaluación heurística y conduje sesiones de testeo para identificar los problemas de raíz.</li><li>A partir de los hallazgos, rediseñé la arquitectura de interacción completa y construí un nuevo sistema de diseño, más limpio, más guiado.</li><li>Desarrollé el copy UX, los wireframes y los prototipos.</li><li>Documenté los lineamientos visuales y de experiencia para el equipo de desarrollo.</li></ul>",
            result: "Rediseño integral que convirtió una herramienta compleja en un sistema más claro y estructurado, mejorando la comprensión de los procesos, la interacción con la inteligencia artificial y la toma de decisiones de los usuarios."
        },
        en: {
            category: "AI · Enterprise", title: "E2P",
            summary: "Redesign of an AI-powered platform to improve enterprise process management.",
            challenge: "Transforming a technically-driven product with no UX foundation into a usable and understandable tool.",
            role: "<ul><li>Conducted heuristic evaluation and usability testing to identify core issues.</li><li>Led the redesign of the interaction architecture and built a new, clearer design system.</li><li>Developed UX writing, wireframes, and prototypes, and documented design guidelines for development teams.</li></ul>",
            result: "End-to-end redesign that improved usability, clarified complex processes, and enhanced decision-making within the platform."
        }
    },
    cubo: {
        img: "../assets/CUBO.png",
        es: {
            category: "Fintech · SaaS B2B", title: "CUBO",
            summary: "Diseño de una plataforma B2B para centralizar y optimizar la gestión de pagos de nómina y proveedores.",
            challenge: "Simplificar una operación crítica y altamente operativa, integrando en una sola plataforma la gestión de pagos con trazabilidad completa y control en tiempo real.",
            role: "<ul><li>Contribuí al diseño de la experiencia de usuario definiendo arquitectura de información y flujos.</li><li>Desarrollé wireframes y prototipos de alta fidelidad aplicando el sistema de diseño del cliente.</li><li>Participé en sesiones de testeo con usuarios e iteré la solución a partir de los hallazgos.</li><li>Documenté la experiencia mediante historias de usuario y manuales, trabajando en colaboración con equipos multidisciplinarios.</li></ul>",
            result: "Experiencia optimizada que mejoró la claridad en la gestión de pagos, redujo errores operativos y aumentó el control y la trazabilidad para los equipos financieros."
        },
        en: {
            category: "Fintech · B2B SaaS", title: "CUBO",
            summary: "Design of a B2B platform to centralize and optimize payroll and supplier payments.",
            challenge: "Simplifying a critical, operational-heavy process while ensuring full traceability and real-time control.",
            role: "<ul><li>Contributed to UX design by defining information architecture and user flows.</li><li>Created wireframes and high-fidelity prototypes aligned with the existing design system.</li><li>Participated in user testing and iterated based on insights.</li><li>Documented the product through user stories and guides in collaboration with cross-functional teams.</li></ul>",
            result: "Improved clarity in payment management, reduced operational errors, and increased control and traceability for financial teams."
        }
    },
    drimtim: {
        img: "../assets/Portada Drimitim.png",
        es: {
            category: "HRTech · Web", title: "Drimtim",
            summary: "Optimización de una plataforma ERP para una empresa de outsourcing y administración de talento humano.",
            challenge: "Mejorar la experiencia de una herramienta interna utilizada por distintos perfiles, asegurando coherencia en un sistema de diseño existente e integrando nuevas funcionalidades sin generar fricción.",
            role: "<ul><li>Apliqué y extendí el sistema de diseño existente, diseñando nuevas secciones y flujos.</li><li>Trabajé en wireframes y prototipos, colaborando estrechamente con desarrollo para asegurar viabilidad técnica y consistencia en la implementación.</li></ul>",
            result: "Mejora en la navegación y estructura de la plataforma, permitiendo una ejecución más eficiente de tareas y una experiencia más consistente entre diferentes perfiles de usuario."
        },
        en: {
            category: "HRTech · Web", title: "Drimtim",
            summary: "Optimization of an ERP platform to improve navigation and operational efficiency.",
            challenge: "Enhancing a multi-user internal tool while maintaining consistency within an existing design system.",
            role: "<ul><li>Extended the design system and designed new flows and sections.</li><li>Developed wireframes and prototypes, collaborating closely with developers to ensure feasibility and consistency.</li></ul>",
            result: "Improved navigation and structure, enabling more efficient task execution and a more consistent experience across user roles."
        }
    }
};

const aboutData = {
    es: {
        exp: `
            <div class="experience-item">
                <h4>UX/UI Designer — Digital Bank Group</h4>
                <span>Nov 2024 – Feb 2026</span>
                <p>Definí journeys y flujos de interacción end-to-end, para productos fintech web y mobile, priorizando claridad y eficiencia.<br>Conduje investigación y testeo con usuarios para validar e iterar.<br>Diseñé prototipos hi-fi alineados a necesidades de negocio y usuario.<br>Creé design systems consistentes con la identidad de marca del cliente.<br>Colaboré con equipos multidisciplinarios en entornos Agile.</p>
            </div>
            <div class="experience-item">
                <h4>UX/UI Designer — Grupo Fesa S.A.</h4>
                <span>Oct – Dic 2024</span>
                <p>Definí arquitectura de información de módulos faltantes.<br>Diseñé flujos y prototipos aplicando y escalando el design system.<br>Coordiné con stakeholders y desarrollo para asegurar viabilidad técnica antes del handoff.</p>
            </div>
            <div class="experience-item">
                <h4>UX/UI Designer — Banco de Bogotá</h4>
                <span>2023 – 2024</span>
                <p>Rediseñé flujos para mejorar la eficiencia en procesos operativos.<br>Optimicé interfaces existentes a partir de principios de usabilidad y feedback de usuarios.<br>Gestioné las comunicaciones y rediseño de la plataforma web interna.</p>
            </div>
        `,
        edu: `
            <div class="experience-item">
                <h4>Diseño Industrial</h4>
                <span>Universidad Nacional de Colombia · 2025</span>
            </div>
            <div class="experience-item">
                <h4>Google UX Design Professional Certificate</h4>
                <span>2025</span>
            </div>
            <div class="experience-item">
                <h4>Reconocimientos</h4>
                <p>Semifinalista – Premio Mario Hernández 2024<br>Top 15 mejores proyectos en la categoría de estrategia de marketing</p>
            </div>
        `,
        rec: `
            <div class="experience-item">
                <p>Definición de producto e investigación UX<br>Arquitectura de información y flujos de usuario<br>Wireframes y prototipado hi-fi<br>Design Systems<br>Testeos de usabilidad<br>Inglés B2</p>
            </div>
        `,
        tools: `
            <div class="experience-item">
                <p>Figma<br>Sketch<br>Adobe XD<br>Photoshop<br>Illustrator<br>Maze<br>Jira<br>Miro<br>Herramientas IA: Lovable, Gemini, ChatGPT, Antigravity, etc.</p>
            </div>
        `
    },
    en: {
        exp: `
            <div class="experience-item">
                <h4>UX/UI Designer — Digital Bank Group</h4>
                <span>Nov 2024 – Feb 2026</span>
                <p>Defined end-to-end interaction journeys and flows for fintech web and mobile products, prioritising clarity and efficiency at every user decision point.<br>Conducted user research and testing to validate and iterate.<br>Designed hi-fi prototypes aligned to business and user needs.<br>Created consistent design systems aligned with the client's brand identity.<br>Collaborated with cross-functional teams in Agile environments.</p>
            </div>
            <div class="experience-item">
                <h4>UX/UI Designer — Grupo Fesa S.A.</h4>
                <span>Oct – Dec 2024</span>
                <p>Defined the information architecture of missing modules.<br>Designed flows and prototypes applying and scaling the design system.<br>Coordinated with stakeholders and development to ensure technical feasibility before handoff.</p>
            </div>
            <div class="experience-item">
                <h4>UX/UI Designer — Banco de Bogotá</h4>
                <span>2023 – 2024</span>
                <p>Redesigned flows to improve efficiency in operational processes.<br>Optimised existing interfaces based on usability principles and user feedback.<br>Managed communications and redesign of the internal web platform.</p>
            </div>
        `,
        edu: `
            <div class="experience-item">
                <h4>Industrial Design</h4>
                <span>National University of Colombia · 2025</span>
            </div>
            <div class="experience-item">
                <h4>Google UX Design Professional Certificate</h4>
                <span>2025</span>
            </div>
            <div class="experience-item">
                <h4>Achievements</h4>
                <p>Semi-finalist — Mario Hernández Award 2024<br>Top 15 projects in Marketing Strategy category</p>
            </div>
        `,
        rec: `
            <div class="experience-item">
                <p>Product definition & UX research<br>Information architecture & user flows<br>Wireframing & high-fidelity prototyping<br>Design systems<br>Usability testing<br>English — B2</p>
            </div>
        `,
        tools: `
            <div class="experience-item">
                <p>Figma<br>Sketch<br>Adobe XD<br>Photoshop<br>Illustrator<br>Maze<br>Jira<br>Miro<br>Herramientas IA: Lovable, Gemini, ChatGPT, Antigravity, etc.</p>
            </div>
        `
    }
};

let currentProjectId = null;

function projectsOverlay() {
    const cards = document.querySelectorAll('.project-card');
    const overlay = document.getElementById('project-overlay');
    const closeBtn = document.getElementById('overlay-close');
    const backdrop = document.getElementById('overlay-backdrop');

    const heroContent = document.getElementById('overlay-hero');
    const categoryEl = document.getElementById('overlay-category');
    const titleEl = document.getElementById('overlay-title');
    const summaryEl = document.getElementById('overlay-summary');
    const challengeEl = document.getElementById('overlay-challenge');
    const roleEl = document.getElementById('overlay-role');
    const resultEl = document.getElementById('overlay-result');

    function openOverlay(id) {
        currentProjectId = id;
        const data = overlayData[id];
        const lang = localStorage.getItem('lang') || 'es';
        const localized = data[lang] || data['es'];

        heroContent.innerHTML = `<img src="${data.img}" alt="${localized.title}">`;
        categoryEl.textContent = localized.category;
        titleEl.textContent = localized.title;

        summaryEl.textContent = localized.summary;
        challengeEl.textContent = localized.challenge;
        roleEl.innerHTML = localized.role;
        resultEl.textContent = localized.result;

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeOverlay() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        currentProjectId = null;
    }

    cards.forEach(card => card.addEventListener('click', () => openOverlay(card.getAttribute('data-project'))));
    closeBtn.addEventListener('click', closeOverlay);
    backdrop.addEventListener('click', closeOverlay);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) closeOverlay();
    });
}

function languageSwitch() {
    const langBtns = document.querySelectorAll('.lang-opt');
    const switchContainer = document.getElementById('langSwitch');
    if (langBtns.length === 0) return;

    let browserLang = navigator.language.split('-')[0];
    if (browserLang !== 'es' && browserLang !== 'en') browserLang = 'es';
    let currentLang = localStorage.getItem('lang') || browserLang;

    const updateLanguage = (lang) => {
        // Update simple texts
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (db[lang] && db[lang][key]) el.innerHTML = db[lang][key];
        });

        // Update About Me desc
        const aboutDesc = document.getElementById('about-desc');
        if (aboutDesc) {
            aboutDesc.innerHTML = `<p>${db[lang].about_p1}</p><br><p>${db[lang].about_p2}</p><br><p>${db[lang].about_p3}</p>`;
        }

        // Update About Me Tabs
        document.getElementById('tab-exp').innerHTML = aboutData[lang].exp;
        document.getElementById('tab-edu').innerHTML = aboutData[lang].edu;
        document.getElementById('tab-rec').innerHTML = aboutData[lang].rec;
        document.getElementById('tab-tools').innerHTML = aboutData[lang].tools;

        // Update Switch State
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        if (switchContainer) switchContainer.setAttribute('data-current', lang);

        // Update active overlay
        if (currentProjectId && overlayData[currentProjectId]) {
            const localized = overlayData[currentProjectId][lang] || overlayData[currentProjectId]['es'];
            document.getElementById('overlay-category').textContent = localized.category;
            document.getElementById('overlay-title').textContent = localized.title;
            document.getElementById('overlay-summary').textContent = localized.summary;
            document.getElementById('overlay-challenge').textContent = localized.challenge;
            document.getElementById('overlay-role').innerHTML = localized.role;
            document.getElementById('overlay-result').textContent = localized.result;
        }
    };

    updateLanguage(currentLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentLang = e.target.getAttribute('data-lang');
            localStorage.setItem('lang', currentLang);
            updateLanguage(currentLang);

            const rotatingEl = document.getElementById("rotating-word");
            if (rotatingEl) rotatingEl.style.opacity = '0';
        });
    });
}
