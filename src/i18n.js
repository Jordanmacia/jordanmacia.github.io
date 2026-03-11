import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation
      "home": "Accueil",
      "about": "À propos",
      "projects": "Projets",
      "resume": "CV",
      "contact": "Contact",
      "skills": "Compétences",
      
      // Home page
      "hello": "Salut",
      "im": "Je suis",
      "student": "Étudiant en Cybersécurité",
      "ethical_hacker": "Passionné de Hacking",
      "ctf_player": "En Apprentissage Constant",
      "welcome_message": "Bienvenue sur mon portfolio",
      
      // About section
      "professional_heading": "Profil",
      "about_me": "Professionnel",
      "about_subheading": "Découvrez mon parcours et mes compétences",
      "professional_tools": "Outils",
      "i_use": "Professionnels",
      "about_intro": "Je consacre une part importante de mon temps libre à l'autoformation, notamment en suivant des cours en ligne proposés par",
      "and_platform": "et la plateforme",
      "training_completed": "J'ai complété les formations suivantes :",
      "intro_hacking": "Introduction au Hacking",
      "web_hacking": "Hacking Web",
      "ad_hacking": "Hacking de Active Directory",
      "practice_platforms": "Je m'entraîne régulièrement sur des plateformes telles que",
      "more_details": "Plus de détails sur mes certifications et projets dans la section Projets",
      
      // Projects section
      "recent_prefix": "Mes",
      "recent_highlight": "Travaux",
      "recent_suffix": "Récents",
      "recent_projects": "Voici quelques projets sur lesquels j'ai récemment travaillé",
      "training_platform": "Plateforme d'Entraînement",
      "htb_description": "est une plateforme sur laquelle je m'entraîne régulièrement, en affrontant des environnements réels qui présentent diverses situations et défis, tels que l'exploitation de vulnérabilités, la résolution d'énigmes de sécurité et l'élévation de privilèges.",
      "hacking_notes": "Hacking Notes ",
      "notes_description": "Mon site web dédié à la cybersécurité offensive, où je partage mes connaissances et recherches sur la sécurité des applications web, l'exploitation de vulnérabilités, la résolution d'énigmes de sécurité et l'élévation de privilèges.",
      "ejpt_cert": "Certification eJPT",
      "ejpt_description": "En avril 2025, j'ai obtenu la certification EJPTv2 (eLearnSecurity Junior Penetration Tester), dédiée aux personnes débutant dans le pentesting, après avoir passé un examen pratique de 48 heures. Cette certification valide mes compétences avancées en identification et exploitation de vulnérabilités.",
      "ewpt_cert": "Certification eWPTX",
      "ewpt_description": "Actuellement en préparation pour la certification eWPTX, un examen de 18 heures qui évalue la capacité à réaliser un pentest complet sur des applications web.",
      "ai_project": "Projet d'intelligence artificielle",
      "ai_description": "Développement d'une solution IA pour Asterisk (VOIP) visant à automatiser la gestion des alarmes et des appels. L'objectif, en utilisant des API d'intelligence artificielle, est d'intégrer des technologies de reconnaissance vocale (ASR), de synthèse vocale (TTS), de génération de réponses via LLM, ainsi qu'un serveur d'IA capable d'analyser les situations et de prendre des décisions de manière autonome. Le but final est de réduire et filtrer jusqu'à 90 % des appels résultant d'erreurs de manipulation de la part des clients.",
      "websec_academy": "Certification BSCP",
      "websec_academy_description": "Obtention de la certification BSCP (Burp Suite Certified Practitioner) en hacking web sur la plateforme d'apprentissage Web Security Academy, qui propose plus de 269 laboratoires pratiques et couvre plus de 30 types de vulnérabilités. Vous trouverez ci-dessous l'ensemble de mes notes et des contenus étudiés pour tous les niveaux : Apprentice, Practitioner et Expert.",
      
      // Home2 Component
      "full_name": "Jordan Macia De Las Heras",
      "about_intro_text": "Passionné par la cybersécurité et le pentest, avec de solides bases en réseaux et développement. Je travaille avec rigueur et méthode, en accordant une grande importance à la documentation technique, à la précision et à la veille technologique. Recherche une alternance en pentest pour ma dernière année de Master (12 mois – rythme : 2 semaines entreprise / 1 semaine école).",
      "birth_place": "",
      "languages": "Langues : Espagnol, Catalan, Français, Anglais.",
      
      // Education
      "education": "Études",
      "master_title": "Mastère Expert Cybersécurité (Alternance)",
      "master_school": "Ynov Campus (2025-2027)",
      "master_skill_tech": "Technique : Pentesting, Reverse Engineering, Sécurité Cloud et Vulnérabilités Web/Logiciels.",
      "master_skill_gov": "Gouvernance & GRC : SMSI, PCA/PRA, Gouvernance et Cyber Threat Intelligence (CTI)",
      "master_skill_infra": "Infrastructure : Architecture SSI, Sécurité des Réseaux, Systèmes et Gestion d'incidents",
      "bachelor_title": "Bachelor Cybersécurité (Alternance)",
      "bachelor_school": "Ynov Campus (2024-2025)",
      "bts_title": "BTS SIO option SISR",
      "bts_school": "Lycée Ozenne (2022-2024)",
      
      // Professional Experience
      "professional_experience": "Expériences pro",
      "doomap_title": "Alternance chez Doomap",
      "doomap_period": "(Déc. 2024 - Aujourd'hui)",
      "doomap_task_1": "Audit de cybersécurité et restructuration interne",
      "doomap_task_2": "Déploiement IA sur telephonie VOIP (ASR, LLM, Text-to-Speech)",
      "doomap_task_3": "Installation, gestion et maintenance des infrastructures informatiques",
      "doomap_task_4": "Développement Node, React, Python, PHP, CSS, SQL",
      "telecom_title": "Stage Andorra Telecom",
      "telecom_period": "(5 semaines)",
      "telecom_task_1": "Gestion des alertes et journaux (SIEM ELK, EDR Defender, Netskope)",
      "telecom_task_2": "Support NOC/SOC (traitement des alarmes et alertes)",
      "telecom_task_3": "Analyse et réponse aux incidents de sécurité",
      
      // Certifications
      "certifications": "Certifications",
      "certification_intro": "",
      "ewptx_title": "eWPTX (Web Application Penetration Tester eXtreme)",
      "ewptx_org": "INE SECURITY",
      "ewptx_date": "En cours de préparation",
      "bscp_title": "BSCP (Burp Suite Certified Practitioner)",
      "bscp_org": "PORTSWIGGER",
      "bscp_date": "Mars 2026",
      "ejpt_title": "eJPT (eLearnSecurity Junior Penetration Tester)",
      "ejpt_org": "INE SECURITY",
      "ejpt_date": "Avril 2025",
      
      // Buttons and interface
      "view_more": "Voir plus",
      "view_less": "Voir moins",
      "language": "Langue",
      "menu": "Menu",
      "more_info": "Plus d'info",
      "find_me_on": "Trouvez-moi sur",
      "all_rights": "Tous droits réservés",
      "download_cv": "Télécharger CV",
      "btn_certification": "Certification",
      "btn_notes": "Notes",
      "btn_htb": "HTB",
      "btn_cloud": "Cloud",
      "btn_demo": "Démo"
    }
  },
  es: {
    translation: {
      // Navigation
      "home": "Inicio",
      "about": "Sobre mí",
      "projects": "Proyectos",
      "resume": "Currículum",
      "contact": "Contacto",
      "skills": "Habilidades",
      
      // Home page
      "hello": "¡Hola!",
      "im": "Soy",
      "student": "Estudiante de Ciberseguridad",
      "ethical_hacker": "Apasionado por el Hacking",
      "ctf_player": "En constante Aprendizaje",
      "welcome_message": "Bienvenido a mi portfolio",
      
      // About section
      "professional_heading": "Perfil",
      "about_me": "Profesional",
      "about_subheading": "Descubre mi trayectoria y habilidades",
      "professional_tools": "Herramientas",
      "i_use": "Profesionales",
      "about_intro": "Dedico una parte importante de mi tiempo libre a la autoformación, especialmente siguiendo cursos en línea ofrecidos por",
      "and_platform": "y la plataforma",
      "training_completed": "He completado las siguientes formaciones:",
      "intro_hacking": "Introducción al Hacking",
      "web_hacking": "Hacking Web",
      "ad_hacking": "Hacking de Active Directory",
      "practice_platforms": "Me entreno regularmente en plataformas como",
      "more_details": "Más detalles sobre mis certificaciones y proyectos en la sección Proyectos",
      
      // Projects section
      "recent_prefix": "Mis",
      "recent_highlight": "Trabajos",
      "recent_suffix": "Recientes",
      "recent_projects": "Aquí hay algunos proyectos en los que he trabajado recientemente",
      "training_platform": "Plataforma de Entrenamiento",
      "htb_description": "es una plataforma en la que entreno regularmente, enfrentándome a entornos reales que presentan diversas situaciones y desafíos, como la explotación de vulnerabilidades, la resolución de enigmas de seguridad y la elevación de privilegios.",
      "hacking_notes": "Hacking Notes",
      "notes_description": "Este es mi sitio web dedicado a la ciberseguridad ofensiva, donde comparto mis conocimientos e investigaciones sobre la seguridad de las aplicaciones web, la explotación de vulnerabilidades, la resolución de enigmas de seguridad y la elevación de privilegios.",
      "ejpt_cert": "Certificación eJPT",
      "ejpt_description": "En abril de 2025, obtuve la certificación EJPTv2 (eLearnSecurity Junior Penetration Tester), dedicada a personas que se inician en el pentesting, después de pasar un examen práctico de 48 horas. Esta certificación valida mis habilidades avanzadas en identificación y explotación de vulnerabilidades.",
      "ewpt_cert": "Certificación eWPTX",
      "ewpt_description": "Actualmente en preparación para la certificación eWPTX, un examen de 18 horas que evalúa la capacidad de realizar un pentest completo en aplicaciones web.",
      "ai_project": "Proyecto de inteligencia artificial",
      "ai_description": "Desarrollo de una solución de IA para Asterisk (VOIP) con el objetivo de automatizar la gestión de alarmas y llamadas. El objetivo, mediante el uso de APIs de inteligencia artificial, es integrar tecnologías de reconocimiento de voz (ASR), síntesis de voz (TTS) y generación de respuestas a través de LLM, junto con un servidor de IA capaz de analizar situaciones y tomar decisiones de forma autónoma. El objetivo final es reducir y filtrar hasta el 90% de las llamadas derivadas de errores de manipulación por parte de los clientes.",
      "hacking_course": "Curso de Iniciación al Hacking",
      "hacking_course_description": "He invertido aproximadamente 150 horas en este curso, explorando diversas áreas y mucha práctica:\n\n- Reconocimiento : Exploración de red, enumeración web, identificación de tecnologías web, etc.\n\n- Vulnerabilidades de servicios y CMS : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.\n\n- OWASP TOP 10 y vulnerabilidades web : SQLI, XSS, XXE, LFI, NoSQL, abuso de API, etc.\n\n- Elevación de privilegios : Sudoers, SUID, PATH Hijacking, Kernel, y grupos especiales, etc.\n\n- Buffer overflow : He adquirido una comprensión profunda de la técnica del buffer overflow.\n\n- Resolución de 5 máquinas vulhub : He puesto en práctica mis conocimientos con cinco máquinas vulhub.\n\n- Herramientas adicionales : He sido introducido a herramientas adicionales como Metasploit, SQLmap y técnicas de pivoting.\n\n- Documentación : Adquisición de habilidades en la redacción de informes profesionales utilizando LaTeX.",
      "websec_academy": "Certificación BSCP",
      "websec_academy_description": "He obtenido la certificación BSCP (Burp Suite Certified Practitioner) en hacking web a través de la Web Security Academy, que ofrece más de 269 laboratorios prácticos y cubre más de 30 tipos de vulnerabilidades. A continuación encontrarás todas mis notas y contenidos estudiados para todos los niveles: Apprentice, Practitioner y Expert.",
      
      // Home2 Component
      "full_name": "Jordan Macia De Las Heras",
      "about_intro_text": "Apasionado por la ciberseguridad y el pentesting, con sólidas bases en redes y desarrollo. Trabajo con rigor y método, dando gran importancia a la documentación técnica, la precisión y la vigilancia tecnológica. Busco una alternancia en pentesting para mi último año de Máster (12 meses – ritmo: 2 semanas empresa / 1 semana escuela).",
      "birth_place": "",
      "languages": "Idiomas: Español, Catalán, Francés, Inglés",
      
      // Education
      "education": "Estudios",
      "master_title": "Mastère Experto en Ciberseguridad (Alternancia)",
      "master_school": "Ynov Campus (2025-2027)",
      "master_skill_tech": "Técnica: Pentesting, Ingeniería Inversa, Seguridad Cloud y Vulnerabilidades Web/Software.",
      "master_skill_gov": "Gobernanza y GRC: SGSI, PCA/PRA, Gobernanza y Cyber Threat Intelligence (CTI)",
      "master_skill_infra": "Infraestructura: Arquitectura SSI, Seguridad de Redes, Sistemas y Gestión de Incidentes",
      "bachelor_title": "Grado en Ciberseguridad (Dual)",
      "bachelor_school": "Ynov Campus (2024-2025)",
      "bts_title": "BTS SIO opción SISR",
      "bts_school": "Lycée Ozenne (2022-2024)",
      
      // Professional Experience
      "professional_experience": "Experiencia profesional",
      "doomap_title": "Prácticas duales en Doomap",
      "doomap_period": "(Dic. 2024 - Actualidad)",
      "doomap_task_1": "Auditoría de ciberseguridad y fortalecimiento interno",
      "doomap_task_2": "Despliegue de IA en telefonía VOIP (ASR, LLM, Text-to-Speech)",
      "doomap_task_3": "Instalación, gestión y mantenimiento de infraestructuras informáticas",
      "doomap_task_4": "Desarrollo en Python, PHP, JavaScript, SQL",
      "telecom_title": "Prácticas en Andorra Telecom",
      "telecom_period": "(5 semanas)",
      "telecom_task_1": "Gestión de alertas y logs (SIEM ELK, EDR Defender, Netskope)",
      "telecom_task_2": "Soporte NOC/SOC (procesamiento de alarmas y alertas)",
      "telecom_task_3": "Análisis y respuesta a incidentes de seguridad",
      
      // Certifications
      "certifications": "Certificaciones",
      "certification_intro": "",
      "ewptx_title": "eWPTX (Web Application Penetration Tester eXtreme)",
      "ewptx_org": "INE SECURITY",
      "ewptx_date": "En curso de preparación",
      "bscp_title": "BSCP (Burp Suite Certified Practitioner)",
      "bscp_org": "PORTSWIGGER",
      "bscp_date": "Marzo 2026",
      "ejpt_title": "eJPT (eLearnSecurity Junior Penetration Tester)",
      "ejpt_org": "INE SECURITY",
      "ejpt_date": "Abril 2025",
      
      // Buttons and interface
      "view_more": "Ver más",
      "view_less": "Ver menos",
      "language": "Idioma",
      "menu": "Menú",
      "more_info": "Más información",
      "find_me_on": "Encuéntrame en",
      "all_rights": "Todos los derechos reservados",
      "download_cv": "Descargar CV",
      "btn_certification": "Certificación",
      "btn_notes": "Notas",
      "btn_htb": "HTB",
      "btn_cloud": "Cloud",
      "btn_demo": "Demo"
    }
  },
  ad: {
    translation: {
      // Navigation
      "home": "Inici",
      "about": "Sobre mi",
      "projects": "Projectes",
      "resume": "Currículum",
      "contact": "Contacte",
      "skills": "Habilitats",
      
      // Home page
      "hello": "Hola!",
      "im": "Sóc",
      "student": "Estudiant de Ciberseguretat",
      "ethical_hacker": "Apassionat pel Hacking",
      "ctf_player": "En Aprenentatge Constant",
      "welcome_message": "Benvingut al meu portfolio",
      
      // About section
      "professional_heading": "Perfil",
      "about_me": "Professional",
      "about_subheading": "Descobreix la meva trajectòria i habilitats",
      "professional_tools": "Eines",
      "i_use": "Professionals",
      "about_intro": "Dedico una part important del meu temps lliure a l'autoformació, especialment seguint cursos en línia oferts per",
      "and_platform": "i la plataforma",
      "training_completed": "He completat les següents formacions:",
      "intro_hacking": "Introducció al Hacking",
      "web_hacking": "Hacking Web",
      "ad_hacking": "Hacking d'Active Directory",
      "practice_platforms": "M'entreno regularment en plataformes com",
      "more_details": "Més detalls sobre les meves certificacions i projectes a la secció Projectes",
      
      // Projects section
      "recent_prefix": "Els Meus",
      "recent_highlight": "Treballs",
      "recent_suffix": "Recents",
      "recent_projects": "Aquí hi ha alguns projectes en els quals he treballat recentment",
      "training_platform": "Plataforma d'Entrenament",
      "htb_description": "és una plataforma en la qual entreno regularment, enfrontant-me a entorns reals que presenten diverses situacions i reptes, com l'explotació de vulnerabilitats, la resolució d'enigmes de seguretat i l'elevació de privilegis.",
      "hacking_notes": "Hacking Notes",
      "notes_description": "Aquest és el meu lloc web dedicat a la ciberseguretat ofensiva, on comparteixo els meus coneixements i investigacions sobre la seguretat de les aplicacions web, l'explotació de vulnerabilitats, la resolució d'enigmes de seguretat i l'elevació de privilegis.",
      "ejpt_cert": "Certificació eJPT",
      "ejpt_description": "A l'abril de 2025, vaig obtenir la certificació EJPTv2 (eLearnSecurity Junior Penetration Tester), dedicada a persones que s'inicien en el pentesting, després de passar un examen pràctic de 48 hores. Aquesta certificació valida les meves habilitats avançades en identificació i explotació de vulnerabilitats.",
      "ewpt_cert": "Certificació eWPTX",
      "ewpt_description": "Actualment en preparació per a la certificació eWPTX, un examen de 18 hores que avalua la capacitat de realitzar un pentest complet en aplicacions web.",
      "ai_project": "Projecte d'intel·ligència artificial",
      "ai_description": "Desenvolupament d'una solució d'IA per a Asterisk (VOIP) amb l'objectiu d'automatitzar la gestió d'alarmes i trucades. L'objectiu, mitjançant l'ús d'APIs d'intel·ligència artificial, és integrar tecnologies de reconeixement de veu (ASR), síntesi de veu (TTS) i generació de respostes a través de LLM, juntament amb un servidor d'IA capaç d'analitzar situacions i prendre decisions de forma autònoma. L'objectiu final és reduir i filtrar fins al 90% de les trucades derivades d'errors de manipulació per part dels clients.",
      "hacking_course": "Curs d'Iniciació al Hacking",
      "hacking_course_description": "He invertit aproximadament 150 hores en aquest curs, explorant diverses àrees i molta pràctica:\n\n- Reconeixement : Exploració de xarxa, enumeració web, identificació de tecnologies web, etc.\n\n- Vulnerabilitats de serveis i CMS : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.\n\n- OWASP TOP 10 i vulnerabilitats web : SQLI, XSS, XXE, LFI, NoSQL, abús d'API, etc.\n\n- Elevació de privilegis : Sudoers, SUID, PATH Hijacking, Kernel, i grups especials, etc.\n\n- Buffer overflow : He adquirit una comprensió profunda de la tècnica del buffer overflow.\n\n- Resolució de 5 màquines vulhub : He posat en pràctica els meus coneixements amb cinc màquines vulhub.\n\n- Eines addicionals : He estat introduït a eines addicionals com Metasploit, SQLmap i tècniques de pivoting.\n\n- Documentació : Adquisició d'habilitats en la redacció d'informes professionals utilitzant LaTeX.",
      "websec_academy": "Certificació BSCP",
      "websec_academy_description": "He obtingut la certificació BSCP (Burp Suite Certified Practitioner) en hacking web a través de la Web Security Academy, que ofereix més de 269 laboratoris pràctics i cobreix més de 30 tipus de vulnerabilitats. A continuació trobaràs totes les meves notes i continguts estudiats per a tots els nivells: Apprentice, Practitioner i Expert.",
      
      // Home2 Component
      "full_name": "Jordan Macia De Las Heras",
      "about_intro_text": "Apassionat per la ciberseguretat i el pentesting, amb sòlides bases en xarxes i desenvolupament. Treballo amb rigor i mètode, donant gran importància a la documentació tècnica, la precisió i la vigilància tecnològica. Busco una alternança en pentesting per al meu últim any de Màster (12 mesos – ritme: 2 setmanes empresa / 1 setmana escola).",
      "birth_place": "",
      "languages": "Idiomes: Espanyol, Català, Francès, Anglès",
      
      // Education
      "education": "Estudis",
      "master_title": "Màster Expert en Ciberseguretat (Alternança)",
      "master_school": "Ynov Campus (2025-2027)",
      "master_skill_tech": "Tècnica: Pentesting, Enginyeria Inversa, Seguretat Cloud i Vulnerabilitats Web/Software.",
      "master_skill_gov": "Governança i GRC: SGSI, PCA/PRA, Governança i Cyber Threat Intelligence (CTI)",
      "master_skill_infra": "Infraestructura: Arquitectura SSI, Seguretat de Xarxes, Sistemes i Gestió d'Incidents",
      "bachelor_title": "Grau en Ciberseguretat (Dual)",
      "bachelor_school": "Ynov Campus (2024-2025)",
      "bts_title": "BTS SIO opció SISR",
      "bts_school": "Lycée Ozenne (2022-2024)",
      
      // Professional Experience
      "professional_experience": "Experiència professional",
      "doomap_title": "Pràctiques duals a Doomap",
      "doomap_period": "(Desembre 2024 - Actualitat)",
      "doomap_task_1": "Auditoria de ciberseguretat i enfortiment intern",
      "doomap_task_2": "Desplegament d'IA en telefonia VOIP (ASR, LLM, Text-to-Speech)",
      "doomap_task_3": "Instal·lació, gestió i manteniment d'infraestructures informàtiques",
      "doomap_task_4": "Desenvolupament en Python, PHP, JavaScript, SQL",
      "telecom_title": "Pràctiques a Andorra Telecom",
      "telecom_period": "(5 setmanes)",
      "telecom_task_1": "Gestió d'alertes i logs (SIEM ELK, EDR Defender, Netskope)",
      "telecom_task_2": "Suport NOC/SOC (processament d'alarmes i alertes)",
      "telecom_task_3": "Anàlisi i resposta a incidents de seguretat",
      
      // Certifications
      "certifications": "Certificacions",
      "certification_intro": "",
      "ewptx_title": "eWPTX (Web Application Penetration Tester eXtreme)",
      "ewptx_org": "INE SECURITY",
      "ewptx_date": "En curs de preparació",
      "bscp_title": "BSCP (Burp Suite Certified Practitioner)",
      "bscp_org": "PORTSWIGGER",
      "bscp_date": "Març 2026",
      "ejpt_title": "eJPT (eLearnSecurity Junior Penetration Tester)",
      "ejpt_org": "INE SECURITY",
      "ejpt_date": "Abril 2025",
      
      // Buttons and interface
      "view_more": "Veure més",
      "view_less": "Veure menys",
      "language": "Llengua",
      "menu": "Menú",
      "more_info": "Més informació",
      "find_me_on": "Troba'm a",
      "all_rights": "Tots els drets reservats",
      "download_cv": "Descarregar CV",
      "btn_certification": "Certificació",
      "btn_notes": "Notes",
      "btn_htb": "HTB",
      "btn_cloud": "Cloud",
      "btn_demo": "Demo"
    }
  },
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "about": "About",
      "projects": "Projects",
      "resume": "Resume",
      "contact": "Contact",
      "skills": "Skills",
      
      // Home page
      "hello": "Hello!",
      "im": "I'm",
      "student": "Cybersecurity Student",
      "ethical_hacker": "Passionate About Hacking",
      "ctf_player": "In Constant Learning",
      "welcome_message": "Welcome to my portfolio",
      
      // About section
      "professional_heading": "Profile",
      "about_me": "Professional",
      "about_subheading": "Discover my journey and skills",
      "professional_tools": "Tools",
      "i_use": "Professional",
      "about_intro": "I dedicate a significant part of my free time to self-learning, particularly following online courses offered by",
      "and_platform": "and the platform",
      "training_completed": "I have completed the following training:",
      "intro_hacking": "Introduction to Hacking",
      "web_hacking": "Web Hacking",
      "ad_hacking": "Active Directory Hacking",
      "practice_platforms": "I regularly train on platforms such as",
      "more_details": "More details about my certifications and projects in the Projects section",
      
      // Projects section
      "recent_prefix": "My Recent",
      "recent_highlight": "Works",
      "recent_suffix": "",
      "recent_projects": "Here are a few projects I've worked on recently",
      "training_platform": "Training Platform",
      "htb_description": "is a platform where I train regularly, facing real environments that present various situations and challenges, such as vulnerability exploitation, security puzzle solving, and privilege escalation.",
      "hacking_notes": "Hacking Notes",
      "notes_description": "My website dedicated to offensive cybersecurity, where I share my knowledge and research on web application security, vulnerability exploitation, security puzzle solving, and privilege escalation.",
      "ejpt_cert": "eJPT Certification",
      "ejpt_description": "In April 2025, I obtained the EJPTv2 (eLearnSecurity Junior Penetration Tester) certification, dedicated to people starting in pentesting, after passing a 48-hour practical exam. This certification validates my advanced skills in vulnerability identification and exploitation.",
      "ewpt_cert": "eWPTX Certification",
      "ewpt_description": "Currently preparing for the eWPTX certification, an 18-hour exam that evaluates the ability to perform a complete pentest on web applications.",
      "ai_project": "Artificial Intelligence Project",
      "ai_description": "Development of an AI solution for Asterisk (VOIP) aiming to automate alarm and call management. The goal, through the use of artificial intelligence APIs, is to integrate voice recognition (ASR), speech synthesis (TTS), and response generation via LLM, along with an AI server capable of analyzing situations and making decisions autonomously. The final objective is to reduce and filter up to 90% of calls resulting from customer handling errors.",
      "hacking_course": "Introduction to Hacking Course",
      "hacking_course_description": "I invested approximately 150 hours in this course, exploring various areas and lots of hands-on practice:\n\n- Reconnaissance : Network exploration, web enumeration, web technology identification, etc.\n\n- Service and CMS vulnerabilities : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.\n\n- OWASP TOP 10 and web vulnerabilities : SQLI, XSS, XXE, LFI, NoSQL, API abuse, etc.\n\n- Privilege Escalation : Sudoers, SUID, PATH Hijacking, Kernel, and special groups, etc.\n\n- Buffer overflow : I gained a deep understanding of the buffer overflow technique.\n\n- Resolution of 5 Vulhub machines : I put my knowledge into practice with five vulhub machines.\n\n- Additional tools : I was introduced to additional tools such as Metasploit, SQLmap and pivoting techniques.\n\n- Documentation : Acquisition of professional report writing skills using LaTeX.",
      "websec_academy": "Certification BSCP",
      "websec_academy_description": "Obtained the BSCP (Burp Suite Certified Practitioner) certification in web hacking through the Web Security Academy, which offers over 269 hands-on labs and covers more than 30 vulnerability types. Below you will find all my notes and studied materials for all levels: Apprentice, Practitioner, and Expert.",
      
      // Home2 Component
      "full_name": "Jordan Macia De Las Heras",
      "about_intro_text": "Passionate about cybersecurity and pentesting, with strong foundations in networking and development. I work with rigor and method, placing great importance on technical documentation, precision, and technological monitoring. Looking for a work-study position in pentesting for my final year of Master's (12 months – rhythm: 2 weeks company / 1 week school).",
      "birth_place": "",
      "languages": "Languages: Spanish, Catalan, French, English",
      
      // Education
      "education": "Education",
      "master_title": "Mastère Expert Cybersecurity (Work-Study)",
      "master_school": "Ynov Campus (2025-2027)",
      "master_skill_tech": "Technique: Pentesting, Reverse Engineering, Cloud Security, and Web/Software Vulnerabilities.",
      "master_skill_gov": "Governance & GRC: ISMS, BCP/DRP, Governance, and Cyber Threat Intelligence (CTI)",
      "master_skill_infra": "Infrastructure: ISS Architecture, Network Security, Systems, and Incident Management",
      "bachelor_title": "Bachelor's in Cybersecurity (Work-Study)",
      "bachelor_school": "Ynov Campus (2024-2025)",
      "bts_title": "BTS SIO SISR option",
      "bts_school": "Lycée Ozenne (2022-2024)",
      
      // Professional Experience
      "professional_experience": "Professional Experience",
      "doomap_title": "Work-Study at Doomap",
      "doomap_period": "(Dec 2024 - Present)",
      "doomap_task_1": "Cybersecurity audit and internal strengthening",
      "doomap_task_2": "AI deployment on VOIP telephony (ASR, LLM, Text-to-Speech)",
      "doomap_task_3": "Installation, management and maintenance of IT infrastructures",
      "doomap_task_4": "Development in Python, PHP, JavaScript, SQL",
      "telecom_title": "Internship at Andorra Telecom",
      "telecom_period": "(5 weeks)",
      "telecom_task_1": "Alert and log management (SIEM ELK, EDR Defender, Netskope)",
      "telecom_task_2": "NOC/SOC support (alarm and alert processing)",
      "telecom_task_3": "Security incident analysis and response",
      
      // Certifications
      "certifications": "Certifications",
      "certification_intro": "",
      "ewptx_title": "eWPTX (Web Application Penetration Tester eXtreme)",
      "ewptx_org": "INE SECURITY",
      "ewptx_date": "In preparation",
      "bscp_title": "BSCP (Burp Suite Certified Practitioner)",
      "bscp_org": "PORTSWIGGER",
      "bscp_date": "March 2026",
      "ejpt_title": "eJPT (eLearnSecurity Junior Penetration Tester)",
      "ejpt_org": "INE SECURITY",
      "ejpt_date": "April 2025",
      
      // Buttons and interface
      "view_more": "View more",
      "view_less": "View less",
      "language": "Language",
      "menu": "Menu",
      "more_info": "More info",
      "find_me_on": "Find me on",
      "all_rights": "All rights reserved",
      "download_cv": "Download CV",
      "btn_certification": "Certification",
      "btn_notes": "Notes",
      "btn_htb": "HTB",
      "btn_cloud": "Cloud",
      "btn_demo": "Demo"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;