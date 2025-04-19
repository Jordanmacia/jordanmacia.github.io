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
      "ejpt_description": "En avril 2025, j'ai obtenu la certification EJPTv2, dédiée aux personnes débutant dans le pentesting, après avoir passé un examen pratique de 48 heures. Cette certification valide mes compétences avancées en identification et exploitation de vulnérabilités.",
      "ewpt_cert": "Certification eWPT (en cours)",
      "ewpt_description": "Actuellement en préparation pour la certification eWPT, un examen de 10 heures qui évalue la capacité à réaliser un pentest complet sur des applications web.",
      "ai_project": "Projet d'intelligence artificielle",
      "ai_description": "Développement d'une solution IA pour Asterisk visant à automatiser la gestion des alarmes et des appels : L'objectif, en utilisant les API Cloud Azure et Google, est d'intégrer ces technologies à un serveur Asterisk, spécialisé dans la téléphonie, afin de mettre en place des fonctionnalités de reconnaissance vocale (STT), de synthèse vocale (TTS) et un serveur d'IA capable d'analyser les situations et de prendre des décisions de manière autonome. L'objectif est de réduire et filtrer 90% des appels dus à des erreurs de manipulation des clients.",
      "hacking_course": "Formation d'Initiation au Hacking",
      "hacking_course_description": "J'ai investi environ 150 heures dans ce cours, explorant divers domaines et beaucoup de pratique:\n\n- Reconnaissance : Exploration du réseau, énumération web, identification des technologies web, etc.\n\n- Failles de services et gestionnaires de contenu : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.\n\n- OWASP TOP 10 et vulnérabilités web : SQLI, XSS, XXE, LFI, NoSQL, abus d'API, etc.\n\n- Élévation de privilèges : Sudoers, SUID, PATH Hijacking, Kernel, et les groupes spéciaux, etc.\n\n- Buffer overflow : J'ai acquis une compréhension approfondie de la technique du buffer overflow.\n\n- Résolution de 5 machines vulhub : J'ai mis en pratique mes connaissances avec cinq machines vulhub.\n\n- Outils additionnels : J'ai été introduit à des outils supplémentaires tels que Metasploit, SQLmap et les techniques de pivoting.\n\n- Rédaction de rapports : Acquisition de compétences dans la rédaction de rapports professionnels en utilisant LaTeX.",
      
      // Home2 Component
      "full_name": "Jordan Macia De Las Heras",
      "about_intro_text": "Futur étudiant en Mastère Expert Cybersécurité à Ynov Campus Toulouse, je suis passionné par la cybersécurité offensive et le pentesting.",
      "birth_place": "Âgé de 20 ans, je suis né en Andorre 🇦🇩, où j'ai vécu jusqu'à il y a trois ans.",
      "languages": "Langues : Espagnol, Catalan, Français, et bon niveau en Anglais",
      
      // Education
      "education": "Études",
      "master_title": "Mastère Expert Cybersécurité",
      "master_school": "Ynov Campus (2025-2027)",
      "master_coming_soon": "...",
      "bachelor_title": "Bachelor Cybersécurité (Alternance)",
      "bachelor_school": "Ynov Campus (2024-2025)",
      "bachelor_skill_1": "Pentesting",
      "bachelor_skill_2": "Sécurité des systèmes d'exploitation et des services",
      "bachelor_skill_3": "Administration de BDD",
      "bachelor_skill_4": "Gouvernance de la sécurité",
      "bts_title": "BTS SIO option SISR",
      "bts_school": "Lycée Ozenne (2022-2024)",
      "bts_skill_1": "Administration système et réseau",
      "bts_skill_2": "Sécurisation des SI",
      "bts_skill_3": "Développement (Python, PHP, JavaScript)",
      
      // Professional Experience
      "professional_experience": "Expériences pro",
      "doomap_title": "Alternance chez Doomap",
      "doomap_period": "(Janv. 2025 - Aujourd'hui)",
      "doomap_task_1": "Audit de cybersécurité et renforcement interne",
      "doomap_task_2": "Déploiement IA sur Asterisk (API Speech-to-Text, Text-to-Speech)",
      "doomap_task_3": "Installation, gestion et maintenance des infrastructures informatiques",
      "doomap_task_4": "Développement Python, PHP, JavaScript, SQL",
      "telecom_title": "Stage Andorra Telecom",
      "telecom_period": "(5 semaines)",
      "telecom_task_1": "Gestion des alertes et journaux (SIEM ELK, EDR Defender, Netskope)",
      "telecom_task_2": "Support NOC/SOC (traitement des alarmes et alertes)",
      "telecom_task_3": "Analyse et réponse aux incidents de sécurité",
      
      // Certifications
      "certifications": "Certifications",
      "certification_intro": "Grâce à un entraînement sur plus de 80 machines (Linux/Windows) via HackTheBox, VulHub et PortSwigger, j'ai développé des compétences avancées en sécurité offensive, avec les certifications suivantes :",
      "ejpt_title": "eJPT (INE)",
      "ejpt_date": "avril 2025",
      "ejpt_desc_1": "Certification professionnelle en pentesting",
      "ejpt_desc_2": "48 heures d'examen pratique",
      "ewpt_title": "eWPT (INE)",
      "ewpt_date": "En cours...",
      "ewpt_desc_1": "Certification avancée en pentesting web",
      "ewpt_desc_2": "10 heures d'examen pratique",
      
      // Buttons and interface
      "view_more": "Voir plus",
      "view_less": "Voir moins",
      "language": "Langue",
      "menu": "Menu",
      "more_info": "Plus d'info",
      "find_me_on": "Trouvez-moi sur",
      "all_rights": "Tous droits réservés"
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
      "ejpt_description": "En abril de 2025, obtuve la certificación EJPTv2, dedicada a personas que se inician en el pentesting, después de pasar un examen práctico de 48 horas. Esta certificación valida mis habilidades avanzadas en identificación y explotación de vulnerabilidades.",
      "ewpt_cert": "Certificación eWPT (en curso)",
      "ewpt_description": "Actualmente en preparación para la certificación eWPT, un examen de 10 horas que evalúa la capacidad de realizar un pentest completo en aplicaciones web.",
      "ai_project": "Proyecto de inteligencia artificial",
      "ai_description": "Desarrollo de una solución IA Asterisk para automatizar la gestión de alarmas y llamadas : El objetivo utilizando las API de Cloud Azure y Google es integrar estas tecnologías en un servidor Asterisk, especializado en telefonía, para implementar funcionalidades de reconocimiento de voz (STT), síntesis de voz (TTS) y un servidor de IA capaz de analizar situaciones y tomar decisiones de forma autónoma. El objetivo es reducir y filtrar el 90% de las llamadas debidas a errores de manipulación de los clientes.",
      "hacking_course": "Curso de Iniciación al Hacking",
      "hacking_course_description": "He invertido aproximadamente 150 horas en este curso, explorando diversas áreas y mucha práctica:\n\n- Reconocimiento : Exploración de red, enumeración web, identificación de tecnologías web, etc.\n\n- Vulnerabilidades de servicios y CMS : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.\n\n- OWASP TOP 10 y vulnerabilidades web : SQLI, XSS, XXE, LFI, NoSQL, abuso de API, etc.\n\n- Elevación de privilegios : Sudoers, SUID, PATH Hijacking, Kernel, y grupos especiales, etc.\n\n- Buffer overflow : He adquirido una comprensión profunda de la técnica del buffer overflow.\n\n- Resolución de 5 máquinas vulhub : He puesto en práctica mis conocimientos con cinco máquinas vulhub.\n\n- Herramientas adicionales : He sido introducido a herramientas adicionales como Metasploit, SQLmap y técnicas de pivoting.\n\n- Documentación : Adquisición de habilidades en la redacción de informes profesionales utilizando LaTeX.",
      
      // Home2 Component
      "full_name": "Jordan Macia De Las Heras",
      "about_intro_text": "Futuro estudiante del Máster en Ciberseguridad en Ynov Campus Toulouse, apasionado por la ciberseguridad ofensiva y el pentesting.",
      "birth_place": "Con 20 años, nací en Andorra 🇦🇩, donde viví hasta hace tres años.",
      "languages": "Idiomas: Español, Catalán, Francés y buen nivel de Inglés",
      
      // Education
      "education": "Estudios",
      "master_title": "Máster en Ciberseguridad",
      "master_school": "Ynov Campus (2025-2027)",
      "master_coming_soon": "...",
      "bachelor_title": "Grado en Ciberseguridad (Dual)",
      "bachelor_school": "Ynov Campus (2024-2025)",
      "bachelor_skill_1": "Pentesting",
      "bachelor_skill_2": "Seguridad de sistemas operativos y servicios",
      "bachelor_skill_3": "Administración de BBDD",
      "bachelor_skill_4": "Gobernanza de la seguridad",
      "bts_title": "BTS SIO opción SISR",
      "bts_school": "Lycée Ozenne (2022-2024)",
      "bts_skill_1": "Administración de sistemas y redes",
      "bts_skill_2": "Seguridad de SI",
      "bts_skill_3": "Desarrollo (Python, PHP, JavaScript)",
      
      // Professional Experience
      "professional_experience": "Experiencia profesional",
      "doomap_title": "Prácticas duales en Doomap",
      "doomap_period": "(Enero 2025 - Actualidad)",
      "doomap_task_1": "Auditoría de ciberseguridad y fortalecimiento interno",
      "doomap_task_2": "Despliegue de IA en Asterisk (API Speech-to-Text, Text-to-Speech)",
      "doomap_task_3": "Instalación, gestión y mantenimiento de infraestructuras informáticas",
      "doomap_task_4": "Desarrollo en Python, PHP, JavaScript, SQL",
      "telecom_title": "Prácticas en Andorra Telecom",
      "telecom_period": "(5 semanas)",
      "telecom_task_1": "Gestión de alertas y logs (SIEM ELK, EDR Defender, Netskope)",
      "telecom_task_2": "Soporte NOC/SOC (procesamiento de alarmas y alertas)",
      "telecom_task_3": "Análisis y respuesta a incidentes de seguridad",
      
      // Certifications
      "certifications": "Certificaciones",
      "certification_intro": "Gracias a un entrenamiento en más de 80 máquinas (Linux/Windows) a través de HackTheBox, VulHub y PortSwigger, he desarrollado habilidades avanzadas en seguridad ofensiva, con las siguientes certificaciones:",
      "ejpt_title": "eJPT (INE)",
      "ejpt_date": "abril 2025",
      "ejpt_desc_1": "Certificación profesional en pentesting",
      "ejpt_desc_2": "48 horas de examen práctico",
      "ewpt_title": "eWPT (INE)",
      "ewpt_date": "En curso...",
      "ewpt_desc_1": "Certificación avanzada en pentesting web",
      "ewpt_desc_2": "10 horas de examen práctico",
      
      // Buttons and interface
      "view_more": "Ver más",
      "view_less": "Ver menos",
      "language": "Idioma",
      "menu": "Menú",
      "more_info": "Más información",
      "find_me_on": "Encuéntrame en",
      "all_rights": "Todos los derechos reservados"
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
      "ejpt_description": "A l'abril de 2025, vaig obtenir la certificació EJPTv2, dedicada a persones que s'inicien en el pentesting, després de passar un examen pràctic de 48 hores. Aquesta certificació valida les meves habilitats avançades en identificació i explotació de vulnerabilitats.",
      "ewpt_cert": "Certificació eWPT (en curs)",
      "ewpt_description": "Actualment en preparació per a la certificació eWPT, un examen de 10 hores que avalua la capacitat de realitzar un pentest complet en aplicacions web.",
      "ai_project": "Projecte d'intel·ligència artificial",
      "ai_description": "Desenvolupament d'una solució IA Asterisk per automatitzar la gestió d'alarmes i trucades : L'objectiu utilitzant les API de Cloud Azure i Google és integrar aquestes tecnologies en un servidor Asterisk, especialitzat en telefonia, per implementar funcionalitats de reconeixement de veu (STT), síntesi de veu (TTS) i un servidor d'IA capaç d'analitzar situacions i prendre decisions de forma autònoma. L'objectiu és reduir i filtrar el 90% de les trucades degudes a errors de manipulació dels clients.",
      "hacking_course": "Curs d'Iniciació al Hacking",
      "hacking_course_description": "He invertit aproximadament 150 hores en aquest curs, explorant diverses àrees i molta pràctica:\n\n- Reconeixement : Exploració de xarxa, enumeració web, identificació de tecnologies web, etc.\n\n- Vulnerabilitats de serveis i CMS : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.\n\n- OWASP TOP 10 i vulnerabilitats web : SQLI, XSS, XXE, LFI, NoSQL, abús d'API, etc.\n\n- Elevació de privilegis : Sudoers, SUID, PATH Hijacking, Kernel, i grups especials, etc.\n\n- Buffer overflow : He adquirit una comprensió profunda de la tècnica del buffer overflow.\n\n- Resolució de 5 màquines vulhub : He posat en pràctica els meus coneixements amb cinc màquines vulhub.\n\n- Eines addicionals : He estat introduït a eines addicionals com Metasploit, SQLmap i tècniques de pivoting.\n\n- Documentació : Adquisició d'habilitats en la redacció d'informes professionals utilitzant LaTeX.",
      
      // Home2 Component
      "full_name": "Jordan Macia De Las Heras",
      "about_intro_text": "Futur estudiant del Màster en Ciberseguretat a Ynov Campus Toulouse, apassionat per la ciberseguretat ofensiva i el pentesting.",
      "birth_place": "Amb 20 anys, vaig néixer a Andorra 🇦🇩, on vaig viure fins fa tres anys.",
      "languages": "Idiomes: Espanyol, Català, Francès i bon nivell d'Anglès",
      
      // Education
      "education": "Estudis",
      "master_title": "Màster en Ciberseguretat",
      "master_school": "Ynov Campus (2025-2027)",
      "master_coming_soon": "...",
      "bachelor_title": "Grau en Ciberseguretat (Dual)",
      "bachelor_school": "Ynov Campus (2024-2025)",
      "bachelor_skill_1": "Pentesting",
      "bachelor_skill_2": "Seguretat de sistemes operatius i serveis",
      "bachelor_skill_3": "Administració de BBDD",
      "bachelor_skill_4": "Governança de la seguretat",
      "bts_title": "BTS SIO opció SISR",
      "bts_school": "Lycée Ozenne (2022-2024)",
      "bts_skill_1": "Administració de sistemes i xarxes",
      "bts_skill_2": "Seguretat de SI",
      "bts_skill_3": "Desenvolupament (Python, PHP, JavaScript)",
      
      // Professional Experience
      "professional_experience": "Experiència professional",
      "doomap_title": "Pràctiques duals a Doomap",
      "doomap_period": "(Gener 2025 - Actualitat)",
      "doomap_task_1": "Auditoria de ciberseguretat i enfortiment intern",
      "doomap_task_2": "Desplegament d'IA a Asterisk (API Speech-to-Text, Text-to-Speech)",
      "doomap_task_3": "Instal·lació, gestió i manteniment d'infraestructures informàtiques",
      "doomap_task_4": "Desenvolupament en Python, PHP, JavaScript, SQL",
      "telecom_title": "Pràctiques a Andorra Telecom",
      "telecom_period": "(5 setmanes)",
      "telecom_task_1": "Gestió d'alertes i logs (SIEM ELK, EDR Defender, Netskope)",
      "telecom_task_2": "Suport NOC/SOC (processament d'alarmes i alertes)",
      "telecom_task_3": "Anàlisi i resposta a incidents de seguretat",
      
      // Certifications
      "certifications": "Certificacions",
      "certification_intro": "Gràcies a un entrenament en més de 80 màquines (Linux/Windows) a través de HackTheBox, VulHub i PortSwigger, he desenvolupat habilitats avançades en seguretat ofensiva, amb les següents certificacions:",
      "ejpt_title": "eJPT (INE)",
      "ejpt_date": "abril 2025",
      "ejpt_desc_1": "Certificació professional en pentesting",
      "ejpt_desc_2": "48 hores d'examen pràctic",
      "ewpt_title": "eWPT (INE)",
      "ewpt_date": "En curs...",
      "ewpt_desc_1": "Certificació avançada en pentesting web",
      "ewpt_desc_2": "10 hores d'examen pràctic",
      
      // Buttons and interface
      "view_more": "Veure més",
      "view_less": "Veure menys",
      "language": "Llengua",
      "menu": "Menú",
      "more_info": "Més informació",
      "find_me_on": "Troba'm a",
      "all_rights": "Tots els drets reservats"
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
      "ejpt_description": "In April 2025, I obtained the EJPTv2 certification, dedicated to people starting in pentesting, after passing a 48-hour practical exam. This certification validates my advanced skills in vulnerability identification and exploitation.",
      "ewpt_cert": "eWPT Certification (in progress)",
      "ewpt_description": "Currently preparing for the eWPT certification, a 10-hour exam that evaluates the ability to perform a complete pentest on web applications.",
      "ai_project": "Artificial Intelligence Project",
      "ai_description": "Development of an AI Asterisk solution to automate alarm and call management: The goal using Cloud Azure and Google APIs is to integrate these technologies into an Asterisk server, specialized in telephony, to implement voice recognition (STT), text-to-speech (TTS) functionalities, and an AI server capable of analyzing situations and making decisions autonomously. The aim is to reduce and filter 90% of calls due to customer handling errors.",
      "hacking_course": "Introduction to Hacking Course",
      "hacking_course_description": "I invested approximately 150 hours in this course, exploring various areas and lots of hands-on practice:\n\n- Reconnaissance : Network exploration, web enumeration, web technology identification, etc.\n\n- Service and CMS vulnerabilities : FTP, SSH, SMB, WordPress, Joomla, Drupal, etc.\n\n- OWASP TOP 10 and web vulnerabilities : SQLI, XSS, XXE, LFI, NoSQL, API abuse, etc.\n\n- Privilege Escalation : Sudoers, SUID, PATH Hijacking, Kernel, and special groups, etc.\n\n- Buffer overflow : I gained a deep understanding of the buffer overflow technique.\n\n- Resolution of 5 Vulhub machines : I put my knowledge into practice with five vulhub machines.\n\n- Additional tools : I was introduced to additional tools such as Metasploit, SQLmap and pivoting techniques.\n\n- Documentation : Acquisition of professional report writing skills using LaTeX.",
      
      // Home2 Component
      "full_name": "Jordan Macia De Las Heras",
      "about_intro_text": "Future Cybersecurity Master's student at Ynov Campus Toulouse, passionate about offensive cybersecurity and pentesting.",
      "birth_place": "At 20 years old, I was born in Andorra 🇦🇩, where I lived until three years ago.",
      "languages": "Languages: Spanish, Catalan, French, and proficient in English",
      
      // Education
      "education": "Education",
      "master_title": "Master's in Cybersecurity",
      "master_school": "Ynov Campus (2025-2027)",
      "master_coming_soon": "...",
      "bachelor_title": "Bachelor's in Cybersecurity (Work-Study)",
      "bachelor_school": "Ynov Campus (2024-2025)",
      "bachelor_skill_1": "Pentesting",
      "bachelor_skill_2": "Operating systems and services security",
      "bachelor_skill_3": "Database administration",
      "bachelor_skill_4": "Security governance",
      "bts_title": "BTS SIO SISR option",
      "bts_school": "Lycée Ozenne (2022-2024)",
      "bts_skill_1": "System and network administration",
      "bts_skill_2": "IS security",
      "bts_skill_3": "Development (Python, PHP, JavaScript)",
      
      // Professional Experience
      "professional_experience": "Professional Experience",
      "doomap_title": "Work-Study at Doomap",
      "doomap_period": "(Jan 2025 - Present)",
      "doomap_task_1": "Cybersecurity audit and internal strengthening",
      "doomap_task_2": "AI deployment on Asterisk (Speech-to-Text, Text-to-Speech API)",
      "doomap_task_3": "Installation, management and maintenance of IT infrastructures",
      "doomap_task_4": "Development in Python, PHP, JavaScript, SQL",
      "telecom_title": "Internship at Andorra Telecom",
      "telecom_period": "(5 weeks)",
      "telecom_task_1": "Alert and log management (SIEM ELK, EDR Defender, Netskope)",
      "telecom_task_2": "NOC/SOC support (alarm and alert processing)",
      "telecom_task_3": "Security incident analysis and response",
      
      // Certifications
      "certifications": "Certifications",
      "certification_intro": "Thanks to training on over 80 machines (Linux/Windows) through HackTheBox, VulHub, and PortSwigger, I have developed advanced skills in offensive security, with the following certifications:",
      "ejpt_title": "eJPT (INE)",
      "ejpt_date": "April 2025",
      "ejpt_desc_1": "Professional certification in pentesting",
      "ejpt_desc_2": "48-hour practical exam",
      "ewpt_title": "eWPT (INE)",
      "ewpt_date": "In progress...",
      "ewpt_desc_1": "Advanced certification in web pentesting",
      "ewpt_desc_2": "10-hour practical exam",
      
      // Buttons and interface
      "view_more": "View more",
      "view_less": "View less",
      "language": "Language",
      "menu": "Menu",
      "more_info": "More info",
      "find_me_on": "Find me on",
      "all_rights": "All rights reserved"
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