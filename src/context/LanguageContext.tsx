"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "fr" | "ar" | "de";

const translations: Record<Language, any> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.partners": "Partners",
    "nav.industries": "Industries",
    "nav.contact": "Contact",
    "hero.tag": "Azhar Plastics",
    "hero.title1": "Redefining ",
    "hero.title2": "Plastics Production",
    "hero.carousel": [
      "Plastics Production",
      "Raw Materials",
      "Advanced Technologies",
      "Industrial Solutions"
    ],
    "hero.desc": "Exclusive representation for world-leading manufacturers of plastics raw materials and advanced processing technologies.",
    "hero.btnConsult": "Request Consultation",
    "hero.btnPartners": "View Partners",
    "hero.statPartners": "Strategic Partners",
    "hero.statProjects": "Projects Delivered",
    "hero.statExperience": "Years Experience",
    "provide.title1": "What We ",
    "provide.title2": "Provide",
    "provide.desc": "Azhar Plastics serves as the exclusive representative for world-leading manufacturers of plastics raw materials, packaging machinery, and advanced processing technologies.",
    "core.title1": "Core ",
    "core.title2": "Offerings",
    "core.desc": "Comprehensive solutions across the plastics value chain",
    "partners.title1": "Exclusive ",
    "partners.title2": "Partners",
    "partners.desc": "We represent only world-class manufacturers with proven track records",
    "ind.title1": "Industries We ",
    "ind.title2": "Serve",
    "ind.desc": "Trusted solutions across multiple sectors",
    "why.title1": "Why Choose ",
    "why.title2": "Azhar Plastics",
    "cta.title1": "Ready to Transform ",
    "cta.title2": "Your Production?",
    "cta.desc": "Speak with our technical team to find the right materials and machinery for your needs.",
    "contact.title": "Get in Touch",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.company": "Company Name",
    "contact.msg": "Message",
    "contact.send": "Send Message",
    "footer.desc": "Azhar Plastics is an international leader in exclusive representation for the plastics and packaging industry.",
    "footer.partOf": "Part of Azhar Cons SARL",
    "footer.rights": "© 2026 Azhar Plastics. All rights reserved.",
    offerings: [
      { title: "Raw Materials & Engineered Polymers", desc: "High-performance resins, compounds, and specialty polymers from Nexeo Plastics (USA) and other global suppliers.", items: ["Polyethylene (PE)", "Polypropylene (PP)", "PET & Engineering Plastics", "Custom Compounds"] },
      { title: "Extrusion Technologies", desc: "Advanced extrusion lines and blown film technology from Reifenhäuser (Germany), world leader in film extrusion.", items: ["Blown Film Lines", "Cast Film Systems", "Multi-layer Technology", "Process Automation"] },
      { title: "PET Preform & Closures", desc: "Complete PET bottling solutions with Otto Systems (Switzerland) for preform and closure manufacturing.", items: ["Preform Injection Molding", "Closure Manufacturing", "Quality Control Systems", "Material Optimization"] },
      { title: "Thermoforming & Packaging", desc: "Industrial thermoforming systems from Kiefel (Germany) for food and industrial packaging.", items: ["Food Packaging Lines", "Medical Packaging", "Cups & Containers", "Automation Integration"] },
      { title: "Blow Molding Systems", desc: "Extrusion and injection blow molding technology from Uniloy (USA/Italy) for containers and industrial parts.", items: ["Extrusion Blow Molding", "Injection Blow Molding", "Industrial Containers", "Custom Solutions"] },
      { title: "Technical Consulting", desc: "Project planning, material selection, process optimization, and operator training for complete production setup.", items: ["Feasibility Studies", "Material Selection", "Process Engineering", "Training & Support"] },
    ],
    partners: [
      { name: "Nexeo Plastics", flag: "🇺🇸", country: "USA", desc: "Leading distributor of thermoplastic resins, with a global network and deep technical expertise in polymer solutions.", logo: "/partenaires/nexeo.png", url: "https://www.nexeoplastics.com/" },
      { name: "Reifenhäuser", flag: "🇩🇪", country: "Germany", desc: "World leader in blown film extrusion technology, with over 70 years of innovation in plastics processing.", logo: "/partenaires/reifenhauser.png", url: "https://reifenhauser.com/" },
      { name: "Otto Systems", flag: "🇨🇭", country: "Switzerland", desc: "Precision engineering for PET preform and closure manufacturing, delivering Swiss quality and reliability.", logo: "/partenaires/otto.png", url: "https://www.otto-systems.com/" },
      { name: "Kiefel", flag: "🇩🇪", country: "Germany", desc: "Advanced thermoforming technology for packaging applications, with industry-leading automation and efficiency.", logo: "/partenaires/kiefel.png", url: "https://www.kiefel.com/en" },
      { name: "Uniloy", flag: "🇺🇸🇮🇹", country: "USA / Italy", desc: "Complete blow molding solutions for containers and industrial parts, combining American innovation with Italian craftsmanship.", logo: "/partenaires/uniloy.png", url: "https://www.uniloy.com/" },
    ],
    features: [
      { icon: "/icons/badge.png", title: "Exclusive Representation", desc: "We represent only the world's most respected brands in plastics and packaging, bringing cutting-edge solutions to Morocco and North Africa." },
      { icon: "/icons/technical-service.png", title: "Technical Expertise", desc: "Our team provides deep technical support, from material selection to process optimization and machinery integration." },
      { icon: "/icons/homme-daffaire.png", title: "Local Support", desc: "Complete after-sales support, spare parts management, and technical training—all delivered locally with international standards." },
      { icon: "/icons/global.png", title: "Industry Network", desc: "Access to global knowledge networks, industry best practices, and continuous innovation from our partner companies." },
    ],
    industries: ["Food & Beverage", "Consumer Goods", "Industrial Packaging", "Automotive"],
    whyUs: [
      { icon: "/icons/global.png", title: "Global Technology, Local Presence", desc: "Access to world-class technology with the convenience and trust of local support and service." },
      { icon: "/icons/homme-daffaire.png", title: "Exclusive Partnerships", desc: "Direct representation of industry leaders ensures authentic products, full warranties, and technical backing." },
      { icon: "/icons/technical-service.png", title: "Complete Support", desc: "From initial consultation to installation, training, and ongoing maintenance—we're with you at every step." },
    ]
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.products": "Produits",
    "nav.partners": "Partenaires",
    "nav.industries": "Secteurs",
    "nav.contact": "Contact",
    "hero.tag": "Azhar Plastics",
    "hero.title1": "Redéfinir ",
    "hero.title2": "la Production Plastique",
    "hero.carousel": [
      "la Production Plastique",
      "les Matières Premières",
      "les Technologies Avancées",
      "les Solutions Industrielles"
    ],
    "hero.desc": "Représentation exclusive de fabricants mondiaux de matières premières plastiques et de technologies de transformation avancées.",
    "hero.btnConsult": "Demander une Consultation",
    "hero.btnPartners": "Voir nos Partenaires",
    "hero.statPartners": "Partenaires Stratégiques",
    "hero.statProjects": "Projets Réalisés",
    "hero.statExperience": "Années d'Expérience",
    "provide.title1": "Ce que nous ",
    "provide.title2": "Fournissons",
    "provide.desc": "Azhar Plastics est le représentant exclusif de fabricants mondiaux de matières premières plastiques, de machines d'emballage et de technologies de transformation avancées.",
    "core.title1": "Offres ",
    "core.title2": "Principales",
    "core.desc": "Solutions complètes dans la chaîne de valeur des plastiques",
    "partners.title1": "Partenaires ",
    "partners.title2": "Exclusifs",
    "partners.desc": "Nous représentons uniquement des fabricants de classe mondiale ayant fait leurs preuves",
    "ind.title1": "Industries que nous ",
    "ind.title2": "Servons",
    "ind.desc": "Des solutions de confiance dans de multiples secteurs",
    "why.title1": "Pourquoi Choisir ",
    "why.title2": "Azhar Plastics",
    "cta.title1": "Prêt à transformer ",
    "cta.title2": "Votre Production?",
    "cta.desc": "Parlez avec notre équipe technique pour trouver les matériaux et les machines adaptés à vos besoins.",
    "contact.title": "Contactez-nous",
    "contact.name": "Votre Nom",
    "contact.email": "Votre Email",
    "contact.company": "Nom de l'Entreprise",
    "contact.msg": "Message",
    "contact.send": "Envoyer le Message",
    "footer.desc": "Azhar Plastics est un leader international de la représentation exclusive pour l'industrie du plastique et de l'emballage.",
    "footer.partOf": "Membre d'Azhar Cons SARL",
    "footer.rights": "© 2026 Azhar Plastics. Tous droits réservés.",
    offerings: [
      { title: "Matières premières et polymères techniques", desc: "Résines haute performance, composés et polymères spécialisés de Nexeo Plastics (USA) et d'autres.", items: ["Polyéthylène (PE)", "Polypropylène (PP)", "PET & Plastiques techniques", "Composés sur mesure"] },
      { title: "Technologies d'extrusion", desc: "Lignes d'extrusion avancées et technologie de film soufflé de Reifenhäuser (Allemagne).", items: ["Lignes de film soufflé", "Systèmes de film coulé", "Technologie multicouche", "Automatisation des processus"] },
      { title: "Préformes PET et Bouchons", desc: "Solutions complètes d'embouteillage PET avec Otto Systems (Suisse).", items: ["Moulage par injection de préformes", "Fabrication de bouchons", "Systèmes de contrôle qualité", "Optimisation des matériaux"] },
      { title: "Thermoformage et Emballage", desc: "Systèmes de thermoformage industriel de Kiefel (Allemagne) pour l'emballage alimentaire et industriel.", items: ["Lignes d'emballage alimentaire", "Emballage médical", "Gobelets et conteneurs", "Intégration de l'automatisation"] },
      { title: "Systèmes de moulage par soufflage", desc: "Technologie de moulage par extrusion et injection-soufflage d'Uniloy pour conteneurs.", items: ["Extrusion-soufflage", "Injection-soufflage", "Conteneurs industriels", "Solutions personnalisées"] },
      { title: "Consultation Technique", desc: "Planification, sélection des matériaux, optimisation des processus et formation.", items: ["Études de faisabilité", "Sélection des matériaux", "Ingénierie des processus", "Formation & Support"] },
    ],
    partners: [
      { name: "Nexeo Plastics", flag: "🇺🇸", country: "USA", desc: "Premier distributeur de résines thermoplastiques, avec un réseau mondial et une expertise technique approfondie.", logo: "/partenaires/nexeo.png", url: "https://www.nexeoplastics.com/" },
      { name: "Reifenhäuser", flag: "🇩🇪", country: "Allemagne", desc: "Leader mondial dans la technologie d'extrusion de films soufflés, avec plus de 70 ans d'innovation.", logo: "/partenaires/reifenhauser.png", url: "https://reifenhauser.com/" },
      { name: "Otto Systems", flag: "🇨🇭", country: "Suisse", desc: "Ingénierie de précision pour la fabrication de préformes PET et de bouchons (qualité suisse).", logo: "/partenaires/otto.png", url: "https://www.otto-systems.com/" },
      { name: "Kiefel", flag: "🇩🇪", country: "Allemagne", desc: "Technologie de thermoformage avancée pour les applications d'emballage, avec une automatisation de pointe.", logo: "/partenaires/kiefel.png", url: "https://www.kiefel.com/en" },
      { name: "Uniloy", flag: "🇺🇸🇮🇹", country: "USA / Italie", desc: "Solutions complètes de moulage par soufflage combinant l'innovation américaine et le savoir-faire italien.", logo: "/partenaires/uniloy.png", url: "https://www.uniloy.com/" },
    ],
    features: [
      { icon: "/icons/badge.png", title: "Représentation Exclusive", desc: "Nous représentons uniquement les marques les plus respectées, apportant des solutions de pointe au Maroc." },
      { icon: "/icons/technical-service.png", title: "Expertise Technique", desc: "Notre équipe fournit un support technique approfondi, de la sélection des matériaux à l'intégration des machines." },
      { icon: "/icons/homme-daffaire.png", title: "Support Local", desc: "SAV complet, gestion des pièces de rechange et formation technique fournis localement avec des normes internationales." },
      { icon: "/icons/global.png", title: "Réseau Industriel", desc: "Accès aux réseaux de connaissances mondiaux, aux meilleures pratiques et à l'innovation continue de nos partenaires." },
    ],
    industries: ["Alimentation et Boissons", "Biens de Consommation", "Emballage Industriel", "Automobile"],
    whyUs: [
      { icon: "/icons/global.png", title: "Technologie globale, présence locale", desc: "Accès à une technologie de classe mondiale avec la commodité et la confiance du support local." },
      { icon: "/icons/homme-daffaire.png", title: "Partenariats Exclusifs", desc: "La représentation directe des leaders de l'industrie garantit des produits authentiques et des garanties." },
      { icon: "/icons/technical-service.png", title: "Support Complet", desc: "De la consultation initiale à l'installation, la formation et la maintenance, nous sommes à vos côtés." },
    ]
  },
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.products": "Produkte",
    "nav.partners": "Partner",
    "nav.industries": "Branchen",
    "nav.contact": "Kontakt",
    "hero.tag": "Azhar Plastics",
    "hero.title1": "Neudefinition der ",
    "hero.title2": "Kunststoffproduktion",
    "hero.carousel": [
      "Kunststoffproduktion",
      "Rohstoffexzellenz",
      "Fortschrittlichen Technologien",
      "Industriellen Lösungen"
    ],
    "hero.desc": "Exklusive Vertretung für weltweit führende Hersteller von Kunststoffrohstoffen und fortschrittlichen Verarbeitungstechnologien.",
    "hero.btnConsult": "Beratung anfordern",
    "hero.btnPartners": "Unsere Partner ansehen",
    "hero.statPartners": "Strategische Partner",
    "hero.statProjects": "Abgeschlossene Projekte",
    "hero.statExperience": "Jahre Erfahrung",
    "provide.title1": "Was wir ",
    "provide.title2": "Bieten",
    "provide.desc": "Azhar Plastics ist exklusiver Vertreter weltweit führender Hersteller von Kunststoffrohstoffen, Verpackungsmaschinen und fortschrittlichen Verarbeitungstechnologien.",
    "core.title1": "Kern ",
    "core.title2": "Angebote",
    "core.desc": "Umfassende Lösungen entlang der Kunststoff-Wertschöpfungskette",
    "partners.title1": "Exklusive ",
    "partners.title2": "Partner",
    "partners.desc": "Wir vertreten nur erstklassige Hersteller mit nachgewiesener Erfolgsbilanz",
    "ind.title1": "Branchen, die wir ",
    "ind.title2": "Bedienen",
    "ind.desc": "Vertrauenswürdige Lösungen für verschiedene Sektoren",
    "why.title1": "Warum ",
    "why.title2": "Azhar Plastics wählen",
    "cta.title1": "Bereit, Ihre ",
    "cta.title2": "Produktion zu transformieren?",
    "cta.desc": "Sprechen Sie mit unserem technischen Team, um die richtigen Materialien und Maschinen für Ihre Bedürfnisse zu finden.",
    "contact.title": "Kontaktieren Sie uns",
    "contact.name": "Ihr Name",
    "contact.email": "Ihre E-Mail",
    "contact.company": "Firmenname",
    "contact.msg": "Nachricht",
    "contact.send": "Nachricht Senden",
    "footer.desc": "Azhar Plastics ist international führend in der exklusiven Vertretung für die Kunststoff- und Verpackungsindustrie.",
    "footer.partOf": "Teil der Azhar Cons SARL",
    "footer.rights": "© 2026 Azhar Plastics. Alle Rechte vorbehalten.",
    offerings: [
      { title: "Rohstoffe & technische Polymere", desc: "Hochleistungsrohstoffe, Compounds und Spezialpolymere von Nexeo Plastics (USA) und anderen.", items: ["Polyethylen (PE)", "Polypropylen (PP)", "PET & Technische Kunststoffe", "Spezial-Compounds"] },
      { title: "Extrusionstechnologien", desc: "Fortschrittliche Extrusionslinien und Blasfolientechnologie von Reifenhäuser (Deutschland).", items: ["Blasfolienanlagen", "Gießfoliensysteme", "Mehrschichttechnologie", "Prozessautomatisierung"] },
      { title: "PET-Preforms & Verschlüsse", desc: "Komplette PET-Abfülllösungen mit Otto Systems (Schweiz) für die Preform- und Verschlussherstellung.", items: ["Preform-Spritzguss", "Verschlussherstellung", "Qualitätskontrollsysteme", "Materialoptimierung"] },
      { title: "Thermoformen & Verpackung", desc: "Industrielle Thermoformsysteme von Kiefel (Deutschland) für Lebensmittel- und Industrieverpackungen.", items: ["Lebensmittelverpackungslinien", "Medizinische Verpackungen", "Becher & Behälter", "Automatisierungsintegration"] },
      { title: "Blasform-Systeme", desc: "Extrusions- und Spritzblasformtechnik von Uniloy (USA/Italien) für Behälter.", items: ["Extrusionsblasformen", "Spritzblasformen", "Industriebehälter", "Maßgeschneiderte Lösungen"] },
      { title: "Technische Beratung", desc: "Projektplanung, Materialauswahl, Prozessoptimierung und Bedienerschulung.", items: ["Machbarkeitsstudien", "Materialauswahl", "Prozesstechnik", "Schulung & Support"] },
    ],
    partners: [
      { name: "Nexeo Plastics", flag: "🇺🇸", country: "USA", desc: "Führender Distributor von thermoplastischen Kunststoffen mit einem globalen Netzwerk.", logo: "/partenaires/nexeo.png", url: "https://www.nexeoplastics.com/" },
      { name: "Reifenhäuser", flag: "🇩🇪", country: "Deutschland", desc: "Weltmarktführer in der Blasfolienextrusionstechnologie mit über 70 Jahren Innovation.", logo: "/partenaires/reifenhauser.png", url: "https://reifenhauser.com/" },
      { name: "Otto Systems", flag: "🇨🇭", country: "Schweiz", desc: "Präzisionstechnik für PET-Preforms und Verschlüsse, die Schweizer Qualität liefert.", logo: "/partenaires/otto.png", url: "https://www.otto-systems.com/" },
      { name: "Kiefel", flag: "🇩🇪", country: "Deutschland", desc: "Fortschrittliche Thermoformtechnologie für Verpackungsanwendungen mit branchenführender Automatisierung.", logo: "/partenaires/kiefel.png", url: "https://www.kiefel.com/en" },
      { name: "Uniloy", flag: "🇺🇸🇮🇹", country: "USA / Italien", desc: "Komplette Blasformlösungen für Behälter, die amerikanische Innovation mit italienischer Handwerkskunst verbinden.", logo: "/partenaires/uniloy.png", url: "https://www.uniloy.com/" },
    ],
    features: [
      { icon: "/icons/badge.png", title: "Exklusive Vertretung", desc: "Wir vertreten die angesehensten Marken für Kunststoffe und Verpackungen in Marokko." },
      { icon: "/icons/technical-service.png", title: "Technische Expertise", desc: "Unser Team bietet umfassende technische Unterstützung, von der Materialauswahl bis zur Maschinenintegration." },
      { icon: "/icons/homme-daffaire.png", title: "Lokaler Support", desc: "Kompletter After-Sales-Support, Ersatzteilmanagement und technische Schulungen, die lokal erbracht werden." },
      { icon: "/icons/global.png", title: "Branchennetzwerk", desc: "Zugang zu globalen Wissensnetzwerken, Best Practices und kontinuierlicher Innovation." },
    ],
    industries: ["Lebensmittel & Getränke", "Konsumgüter", "Industrieverpackungen", "Automobil"],
    whyUs: [
      { icon: "/icons/global.png", title: "Globale Technologie, lokale Präsenz", desc: "Zugang zu Weltklasse-Technologie mit dem Vertrauen von lokalem Support." },
      { icon: "/icons/homme-daffaire.png", title: "Exklusive Partnerschaften", desc: "Die direkte Vertretung von Branchenführern garantiert authentische Produkte und volle Garantien." },
      { icon: "/icons/technical-service.png", title: "Kompletter Support", desc: "Von der Erstberatung bis hin zu Installation, Schulung und laufender Wartung." },
    ]
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "معلومات عنا",
    "nav.products": "المنتجات",
    "nav.partners": "الشركاء",
    "nav.industries": "الصناعات",
    "nav.contact": "اتصل بنا",
    "hero.tag": "أزهار للبلاستيك",
    "hero.title1": "إعادة تعريف ",
    "hero.title2": "إنتاج البلاستيك",
    "hero.carousel": [
      "إنتاج البلاستيك",
      "المواد الخام",
      "التقنيات المتقدمة",
      "الحلول الصناعية"
    ],
    "hero.desc": "التمثيل الحصري للشركات العالمية الرائدة في تصنيع المواد الخام البلاستيكية وتقنيات المعالجة المتقدمة.",
    "hero.btnConsult": "طلب استشارة",
    "hero.btnPartners": "عرض الشركاء",
    "hero.statPartners": "شركاء استراتيجيون",
    "hero.statProjects": "مشاريع منجزة",
    "hero.statExperience": "سنوات الخبرة",
    "provide.title1": "ماذا ",
    "provide.title2": "نقدم",
    "provide.desc": "تعمل أزهار للبلاستيك كممثل حصري للشركات العالمية الرائدة في تصنيع المواد الخام البلاستيكية، آلات التغليف، وتقنيات المعالجة المتقدمة.",
    "core.title1": "العروض ",
    "core.title2": "الأساسية",
    "core.desc": "حلول شاملة عبر سلسلة قيمة البلاستيك",
    "partners.title1": "شركاء ",
    "partners.title2": "حصريون",
    "partners.desc": "نحن نمثل فقط المصنعين العالميين ذوي السجلات الحافلة",
    "ind.title1": "الصناعات التي ",
    "ind.title2": "نخدمها",
    "ind.desc": "حلول موثوقة في قطاعات متعددة",
    "why.title1": "لماذا تختار ",
    "why.title2": "أزهار للبلاستيك",
    "cta.title1": "مستعد لتحويل ",
    "cta.title2": "إنتاجك؟",
    "cta.desc": "تحدث مع فريقنا الفني للعثور على المواد والآلات المناسبة لاحتياجاتك.",
    "contact.title": "تواصل معنا",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.company": "اسم الشركة",
    "contact.msg": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "footer.desc": "أزهار للبلاستيك هي شركة عالمية رائدة في التمثيل الحصري لصناعة البلاستيك والتغليف.",
    "footer.partOf": "عضو في أزهار كونس",
    "footer.rights": "© 2026 أزهار للبلاستيك. جميع الحقوق محفوظة.",
    offerings: [
      { title: "المواد الخام والبوليمرات الهندسية", desc: "راتنجات ومركبات وبوليمرات متخصصة عالية الأداء من Nexeo Plastics (الولايات المتحدة الأمريكية) وموردين عالميين آخرين.", items: ["البولي إيثيلين (PE)", "البولي بروبيلين (PP)", "PET والبلاستيك الهندسي", "مركبات مخصصة"] },
      { title: "تقنيات البثق", desc: "خطوط بثق متقدمة وتقنية نفخ الأفلام من Reifenhäuser (ألمانيا)، الشركة الرائدة عالميًا في هذا المجال.", items: ["خطوط نفخ الأفلام", "أنظمة الأفلام المصبوبة", "تقنية الطبقات المتعددة", "أتمتة العمليات"] },
      { title: "قوالب التشكيل PET والأغطية", desc: "حلول متكاملة لتعبئة الـ PET مع Otto Systems (سويسرا) لتصنيع القوالب والأغطية.", items: ["القولبة بالحقن", "تصنيع الأغطية", "أنظمة مراقبة الجودة", "تحسين المواد"] },
      { title: "التشكيل الحراري والتغليف", desc: "أنظمة التشكيل الحراري الصناعية من Kiefel (ألمانيا) لتغليف المواد الغذائية والتغليف الصناعي.", items: ["خطوط تغليف المواد الغذائية", "التغليف الطبي", "الأكواب والحاويات", "تكامل الأتمتة"] },
      { title: "أنظمة القولبة بالنفخ", desc: "تقنية القولبة بالبثق والنفخ من Uniloy (الولايات المتحدة / إيطاليا) للحاويات والأجزاء الصناعية.", items: ["القولبة بالبثق والنفخ", "القولبة بالحقن والنفخ", "الحاويات الصناعية", "حلول مخصصة"] },
      { title: "الاستشارات الفنية", desc: "تخطيط المشاريع، اختيار المواد، تحسين العمليات، وتدريب المشغلين لإعداد إنتاج متكامل.", items: ["دراسات الجدوى", "اختيار المواد", "هندسة العمليات", "التدريب والدعم"] },
    ],
    partners: [
      { name: "Nexeo Plastics", flag: "🇺🇸", country: "الولايات المتحدة", desc: "الموزع الرائد لراتنجات التلدن الحراري، مع شبكة عالمية وخبرة فنية عميقة.", logo: "/partenaires/nexeo.png", url: "https://www.nexeoplastics.com/" },
      { name: "Reifenhäuser", flag: "🇩🇪", country: "ألمانيا", desc: "الشركة الرائدة عالميًا في تقنية بثق الأفلام المنفوخة، مع أكثر من 70 عامًا من الابتكار.", logo: "/partenaires/reifenhauser.png", url: "https://reifenhauser.com/" },
      { name: "Otto Systems", flag: "🇨🇭", country: "سويسرا", desc: "هندسة دقيقة لتصنيع قوالب الـ PET والأغطية، مما يوفر الجودة السويسرية والموثوقية.", logo: "/partenaires/otto.png", url: "https://www.otto-systems.com/" },
      { name: "Kiefel", flag: "🇩🇪", country: "ألمانيا", desc: "تقنية متقدمة للتشكيل الحراري لتطبيقات التغليف مع أتمتة رائدة في الصناعة.", logo: "/partenaires/kiefel.png", url: "https://www.kiefel.com/en" },
      { name: "Uniloy", flag: "🇺🇸🇮🇹", country: "الولايات المتحدة / إيطاليا", desc: "حلول متكاملة للقولبة بالنفخ للحاويات، تجمع بين الابتكار الأمريكي والبراعة الإيطالية.", logo: "/partenaires/uniloy.png", url: "https://www.uniloy.com/" },
    ],
    features: [
      { icon: "/icons/badge.png", title: "التمثيل الحصري", desc: "نحن نمثل فقط العلامات التجارية الأكثر احترامًا في البلاستيك والتغليف، مما يجلب حلولًا متطورة إلى المغرب." },
      { icon: "/icons/technical-service.png", title: "الخبرة التقنية", desc: "يوفر فريقنا الدعم الفني العميق، بدءًا من اختيار المواد وحتى دمج الآلات." },
      { icon: "/icons/homme-daffaire.png", title: "الدعم المحلي", desc: "دعم كامل لما بعد البيع وإدارة قطع الغيار والتدريب الفني يتم تقديمها محليًا." },
      { icon: "/icons/global.png", title: "شبكة الصناعة", desc: "الوصول إلى شبكات المعرفة العالمية وأفضل الممارسات الصناعية والابتكار المستمر من شركاتنا الشريكة." },
    ],
    industries: ["الأغذية والمشروبات", "السلع الاستهلاكية", "التغليف الصناعي", "السيارات"],
    whyUs: [
      { icon: "/icons/global.png", title: "تكنولوجيا عالمية، وجود محلي", desc: "الوصول إلى تكنولوجيا عالمية المستوى مع راحة وثقة الدعم والخدمة المحلية." },
      { icon: "/icons/homme-daffaire.png", title: "شراكات حصرية", desc: "يضمن التمثيل المباشر لقادة الصناعة منتجات أصلية وضمانات كاملة ودعمًا فنيًا." },
      { icon: "/icons/technical-service.png", title: "دعم كامل", desc: "من الاستشارة الأولية إلى التركيب والتدريب والصيانة المستمرة، نحن معك في كل خطوة." },
    ]
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("preferredLanguage") as Language;
    if (savedLang && ["en", "fr", "ar", "de"].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
      localStorage.setItem("preferredLanguage", language);
    }
  }, [language, mounted]);

  const t = (key: string) => {
    const val = translations[language][key];
    return val !== undefined ? val : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
