/* =============================================================================
   PORTFOLIO CONTENT: edit THIS file to update your site
   =============================================================================

   You do NOT need to touch any HTML/CSS/JS to add experiences or images.
   Everything on the page is generated from the data below.

   After editing, run   node tools/build.mjs   from the project folder. It
   refreshes the copy of this content inside index.html that search engines,
   link previews and visitors without JavaScript read, plus the sitemap. The
   page itself works either way; a GitHub check flags it if you forget.

   ---------------------------------------------------------------------------
   HOW TO ADD A NEW TIMELINE ENTRY
   ---------------------------------------------------------------------------
   Copy one of the { ... } blocks inside the `timeline` array, paste it, and
   edit the fields. Only `title`, `start`, and `categories` are required.

   Field reference:
     title        (string)  Main line, e.g. "R&D Intern, Robotics".
     org          (string)  Company / school / organisation.
     location     (string)  "City, Country".
     start        (string)  "YYYY-MM"  (month is optional: "2025" also works),
                            or "upcoming" for something that hasn't started yet
                            (it gets its own group above the dated years).
     end          (string)  "YYYY-MM" or "present" (omit for a one-off event).
     kind         (string)  Picks the icon. One of:
                            "experience" | "education" | "project" | "research" |
                            "leadership" | "honor" | "certification" | "fitness"
                            It also picks the entry's lane on the "At a glance"
                            map: experience/research → Work & research,
                            education → Education, project → Projects,
                            leadership → Leadership, honor/certification →
                            Awards & certificates; anything in the "personal"
                            category goes to the Personal lane.
     importance   (number)  1 to 5, 5 = most important. The timeline is sorted
                            by importance by default (ties: newest first), in
                            three groups: Key work (5), Also notable (3 and 4)
                            and Other activities (1 and 2). Visitors can switch
                            to date order. Missing = 3. Change the numbers
                            freely; nothing else needs editing.
     categories   (array)   Which filters this entry belongs to. Use any of the
                            ids listed in the `categories` array further down,
                            e.g. ["research","technical"]. An entry shows up
                            whenever AT LEAST ONE of its categories is enabled.
     summary      (string)  One sentence, shown in the hover preview and when
                            the card is opened.
     highlights   (array)   Bullet points (optional). The first two also appear
                            in the hover preview; all of them when opened.
     tags         (array)   Small skill/keyword chips (optional).
     links        (array)   [{ label:"GitHub", url:"https://..." }] (optional).
     image        (string)  "assets/images/yourphoto.jpg" (optional). Drop the
                            file in assets/images/. If it's missing, the card
                            simply shows no image and nothing breaks.
     ongoing      (boolean)  Optional. Shows the "Ongoing" tag on an entry that has an end date
                            but is still running (end: "present" does it too).
     featured     (boolean) true stars the entry AND shows it as a tile in the
                            Highlights row at the top of the page. Keep it to
                            about 6: the row is only useful if it's selective.
                            Featured entries should also get importance 5.
     detail       (array)   Optional story paragraphs (\n = line break), shown when the card is
                            fully opened, after the image. detail_fr for French.
     art          (string)  Optional animated picture above the story: "elephant".
     id           (string)  Optional. Pins the entry's deep-link address
                            (#entry-<id>). Without it, one is made from the
                            title + start date, so editing the title's words
                            changes the link (punctuation changes don't).

   Each card has three levels of detail: compact (dates, title, organisation),
   a preview (summary, tags, first two bullets) on hover or keyboard focus,
   and everything once opened.

   ---------------------------------------------------------------------------
   FRENCH TRANSLATION (the EN / FR button)
   ---------------------------------------------------------------------------
   Any text field can have a French twin by adding the same name + "_fr":
     title  / title_fr        summary / summary_fr
     org    / org_fr          highlights / highlights_fr   (array)
     role   / role_fr         tags / tags_fr               (array)
     label  / label_fr        items / items_fr             (array)
     location / location_fr   group / group_fr
     position / position_fr   abbr / abbr_fr
     value  / value_fr        pageTitle / pageDescription (+ _fr)
   If a `*_fr` field is missing, the site simply falls back to the English text,
   so nothing breaks if you only translate part of an entry.

   ---------------------------------------------------------------------------
   THE HERO: PLAYER CARD AND KEY FIGURES
   ---------------------------------------------------------------------------
   Next to your name, the hero shows a "player card" (in the spirit of FIFA
   Ultimate Team cards and NBA 2K ratings): your photo (`profile.photo`), name,
   `profile.position`, and one rated row per `skills` group that has a
   `rating` (0 to 99) and an `abbr`. Its overall (OVR) is the rounded average
   of those ratings. Leave `rating` out of a group to keep it off the card.
   The ratings are a self-assessment, and the card says so.
   Under it, `profile.stats` are the key figures (6 fit the layout best).

   ---------------------------------------------------------------------------
   HOW TO ADD AN IMAGE TO AN ENTRY
   ---------------------------------------------------------------------------
   1. Put the image file in  assets/images/   (e.g. wro2025.jpg)
   2. Add  image: "assets/images/wro2025.jpg"  to that entry.
   That's it.

   Style note: the site avoids em dashes. Use a comma, a colon, parentheses
   or " · " instead.
   ============================================================================= */

window.PORTFOLIO = {

  profile: {
    name: "Imene Ait Abdellah",
    initials: "iaa",
    photo: "assets/images/profile.jpg",   // add your square photo here; until then the initials show
    role: "Master 2 and Graduate Program (IA2S) student at University Paris-Est · Graduate engineer in AI and Data Science from ENSIA",
    role_fr: "Étudiante en Master 2 et Programme de Graduate (IA2S) à l'Université Paris-Est · Diplômée ingénieure en IA et science des données de l'ENSIA",
    tagline: "Research in trustworthy generative AI. Industry experience, through the industrial integration of AI systems, agentic ones in particular.",
    tagline_fr: "Recherche en IA générative de confiance. Expérience en industrie, par l'intégration industrielle des systèmes d'IA, notamment agentiques.",
    summary: "Open to any 4 to 6-month internship offer in applied AI in industry from February 2027",
    summary_fr: "Ouverte à toute proposition de stage de 4 à 6 mois en IA appliquée en industrie à partir de février 2027",
    position: "AI engineer · research & industry",
    position_fr: "Ingénieure IA · recherche & industrie",
    location: "Paris, France",
    pageTitle: "Imene Ait Abdellah · AI Engineer, Master 2 and Graduate Program (IA2S) at University Paris-Est",
    pageTitle_fr: "Imene Ait Abdellah · Ingénieure IA, Master 2 et Programme de Graduate (IA2S) à l'Université Paris-Est",
    pageDescription: "AI engineer (ENSIA, first cohort) and Master 2 and Graduate Program (IA2S) student at University Paris-Est, working on deepfake detection, RAG in production and agentic AI. Looking for a 6-month internship from February 2027.",
    pageDescription_fr: "Ingénieure IA (ENSIA, première promotion) et étudiante en Master 2 et Programme de Graduate (IA2S) à l'Université Paris-Est : détection de deepfakes, RAG en production et IA agentique. Recherche un stage de 6 mois à partir de février 2027.",
    updated: "2026-11-23",
    email: "theimeneart@gmail.com",
    phone: "+33 7 59 80 38 26",
    github: "https://github.com/imeneait",
    linkedin: "https://www.linkedin.com/in/imene-ait-abdellah",
    cv: "assets/CV_AIT_ABDELLAH_Imene_2027.pdf",
    stats: [
      { value: "6th / 731,723", value_fr: "6e / 731 723", label: "National rank, Baccalauréat in Mathematics (19.18/20)", label_fr: "Rang national, baccalauréat en mathématiques (19,18/20)" },
      { value: "1st cohort", value_fr: "1re promotion", label: "École Nationale Supérieure d'Intelligence Artificielle (ENSIA): top 10% of the class, then defence average 17.37/20", label_fr: "École Nationale Supérieure d'Intelligence Artificielle (ENSIA) : top 10 % de la classe, puis moyenne de soutenance de 17,37/20" },
      { value: "1 year", value_fr: "1 an", label: "International research experience through the Mitacs Globalink Research Award, with Calcul Québec funding", label_fr: "Expérience internationale en recherche grâce au Mitacs Globalink Research Award, avec le financement de Calcul Québec" },
      { value: "1+ year", value_fr: "+1 an", label: "National and international experience in the forward deployment of AI solutions, in line with business needs", label_fr: "Expérience nationale et internationale en déploiement avancé (forward deployment) de solutions d'IA, dans le respect de la demande métier" },
      { value: "ICT Day", label: "Pitched the Huawei and ENSIA RAG-based chatbot to stakeholders (the minister) as an innovative solution for Algeria's higher-education system", label_fr: "Pitch du chatbot RAG de Huawei et de l'ENSIA devant les parties prenantes (le ministre) comme solution innovante pour l'enseignement supérieur algérien" }
    ]
  },

  categories: [
    { id: "research",   label: "Research",      label_fr: "Recherche",   color: "#9333ea" },
    { id: "technical",  label: "Technical",     label_fr: "Technique",   color: "#0891b2" },
    { id: "academic",   label: "Academic",      label_fr: "Académique",  color: "#0f766e" },
    { id: "leadership", label: "Leadership",    label_fr: "Leadership",  color: "#ea580c" },
    { id: "community",  label: "Community",     label_fr: "Communauté",  color: "#ef4444" },
    { id: "award",      label: "Awards & Honors", label_fr: "Prix & distinctions", color: "#a16207" }
  ],

  timeline: [
    {
      title: "AI-Driven WLAN Intrusion Detection and Response System",
      title_fr: "Système de détection et de réponse aux intrusions WLAN piloté par IA",
      start: "2025",
      kind: "project", importance: 4,
      categories: ["technical", "research"],
      summary: "An AI intrusion detection system for Wi-Fi networks, based on 802.11 traffic and network behaviour analysis.",
      summary_fr: "Un système IA de détection d'intrusion WLAN, basé sur l'analyse du trafic 802.11 et des comportements réseau.",
      highlights: [
        "Two-level Random Forest trained on AWID: 98% F1.",
        "Simulated adversarial scenarios: ARP-spoofing MITM, rogue access point, deauthentication DoS and WPA2 replay.",
        "Designed a probabilistic blacklist with time-based expiry to reduce false positives."
      ],
      highlights_fr: [
        "Random Forest à deux niveaux entraînée sur AWID : F1 de 98 %.",
        "Scénarios adverses simulés : MITM par usurpation ARP, point d'accès indésirable, DoS par désauthentification et rejeu WPA2.",
        "Liste noire probabiliste à expiration temporelle pour réduire les faux positifs."
      ],
      tags: ["Random Forest", "AWID", "802.11", "Network security"],
      tags_fr: ["Random Forest", "AWID", "802.11", "Sécurité réseau"]
    },
    {
      title: "DocFlow: microservices-based document management & ERP integration platform",
      title_fr: "DocFlow : plateforme de gestion documentaire en microservices et intégration ERP",
      org: "Enterprise Computing Project", org_fr: "Projet Enterprise Computing",
      start: "2025",
      kind: "project", importance: 4,
      categories: ["technical"],
      summary: "A document-management backend split into microservices, plugged into an Odoo ERP.",
      summary_fr: "Un backend de gestion documentaire en microservices, branché sur un ERP Odoo.",
      highlights: [
        "Architected modular microservices for authentication, documents, storage, translation and gateway routing with Spring Boot, REST APIs, PostgreSQL, Kafka, S3-compatible storage, JWT/RBAC and Docker.",
        "Extended an existing Odoo ERP with a custom DMS module (models, security rules, relational fields, XML views); enforced department-level document access and manager/user permissions.",
        "Hardened it with unit, integration and end-to-end tests and a CI/CD pipeline, and added database observability with Prometheus, PostgreSQL Exporter and Grafana.",
        "Integrated the Gemini API as a separate translation service, isolated from the access-control services."
      ],
      highlights_fr: [
        "Architecture en microservices modulaires (authentification, documents, stockage, traduction, passerelle) avec Spring Boot, API REST, PostgreSQL, Kafka, stockage compatible S3, JWT/RBAC et Docker.",
        "Extension d'un ERP Odoo existant avec un module DMS sur mesure (modèles, règles de sécurité, champs relationnels, vues XML) ; accès aux documents par département et permissions manager/utilisateur.",
        "Fiabilisation par des tests unitaires, d'intégration et de bout en bout et un pipeline CI/CD, et observabilité de la base avec Prometheus, PostgreSQL Exporter et Grafana.",
        "Intégration de l'API Gemini comme service de traduction distinct, isolé des services de contrôle d'accès."
      ],
      tags: ["Spring Boot", "Microservices", "Kafka", "PostgreSQL", "Odoo", "Docker", "CI/CD", "Grafana"],
      tags_fr: ["Spring Boot", "Microservices", "Kafka", "PostgreSQL", "Odoo", "Docker", "CI/CD", "Grafana"]
    },
    {
      title: "Research Contributor, AI for CSRD compliance checking",
      title_fr: "Contributrice de recherche, IA pour la vérification de conformité CSRD",
      location: "Paris, France",
      start: "2026", end: "present",
      kind: "research", importance: 4,
      categories: ["research", "technical"],
      summary: "Intelligent agents that read long legal texts and compare them with data from the whole production process.",
      summary_fr: "Des agents intelligents qui lisent de longs textes juridiques et les comparent aux données de l'ensemble du processus de production.",
      highlights: [
        "Developing agents that read long, complex legal texts, mainly the EU Corporate Sustainability Reporting Directive (CSRD), and compare them with data extracted from all nodes of the production process.",
        "Approaching compliance checking as an AI safety problem: legal interpretation has to be reliable before anyone can lean on it."
      ],
      highlights_fr: [
        "Développement d'agents qui lisent de longs textes juridiques complexes, principalement la directive européenne CSRD (Corporate Sustainability Reporting Directive), et les comparent aux données extraites de tous les nœuds du processus de production.",
        "Vérification de conformité abordée comme un problème de sûreté de l'IA : l'interprétation juridique doit être fiable avant qu'on puisse s'y appuyer."
      ],
      tags: ["Agentic AI", "CSRD", "AI safety", "Compliance"],
      tags_fr: ["IA agentique", "CSRD", "Sûreté de l'IA", "Conformité"]
    },
    {
      title: "LLM alignment with RL: SFT, PPO and DPO against toxicity",
      title_fr: "Alignement de LLM par RL : SFT, PPO et DPO contre la toxicité",
      org: "Team project (5 people)", org_fr: "Projet d'équipe (5 personnes)",
      start: "2024", end: "2025",
      kind: "project", importance: 4,
      categories: ["research", "technical"],
      summary: "Comparing SFT, PPO and DPO to detoxify a small language model.",
      summary_fr: "Comparaison de SFT, PPO et DPO pour réduire la toxicité d'un petit modèle de langage.",
      highlights: [
        "Cut TinyLlama-1.1B's toxicity from 0.41 to 0.08 (-80%) on 100 toxic prompts (Detoxify), comparing SFT, PPO (reward 1 - toxicity, target KL 0.02: -44%) and DPO (-10%), fine-tuned with 8-bit LoRA (0.6% of the parameters) on GPU."
      ],
      highlights_fr: [
        "Toxicité de TinyLlama-1.1B réduite de 0,41 à 0,08 (-80 %) sur 100 prompts toxiques (Detoxify), en comparant SFT, PPO (récompense 1 - toxicité, KL cible 0,02 : -44 %) et DPO (-10 %), fine-tunés par LoRA (0,6 % des paramètres) en 8 bits sur GPU."
      ],
      tags: ["RLHF", "PPO", "DPO", "LoRA", "Detoxify"],
      tags_fr: ["RLHF", "PPO", "DPO", "LoRA", "Detoxify"]
    },
    {
      title: "Dale Carnegie Leadership certification",
      title_fr: "Certification Leadership Dale Carnegie",
      org: "Dale Carnegie Algeria", org_fr: "Dale Carnegie Algérie",
      start: "2026-02",
      kind: "certification", importance: 3,
      categories: ["leadership", "award"],
      summary: "Earned the Dale Carnegie Leadership certification in February 2026.",
      summary_fr: "Certification Leadership Dale Carnegie obtenue en février 2026.",
      image: "assets/images/dale-carnegie.jpg",   // drop your picture here; hidden until the file exists
      art: "elephant",                            // the animated elephant shown above the story (opened card only)
      detail: [
        "What if I asked: \u201cHow many elephants wearing pink shoes do you have in your pocket?\u201d \ud83d\udc18\ud83d\udc60",
        "You\u2019d say: \u201cWhat the hell? None.\u201d",
        "But actually\u2026 you have one somewhere now. In your head. You IMAGINED it.",
        "And strangely enough, Dale Carnegie made me see that: communication creates realities in people\u2019s minds. The way we phrase an idea can make someone feel involved or excluded, appreciated or criticized, curious or defensive.",
        "\u201cHow do I convince this person?\u201d: WRONG QUESTION",
        "Maybe it\u2019s not about winning the conversation.\nMaybe it\u2019s about creating the conditions where coordination feels natural rather than forced.",
        "Listen instead of prepare your next argument.\nLet people contribute to the solution.\nAnd sometimes, let them feel that the idea is theirs.",
        "I came to Dale Carnegie thinking I was going to learn how to communicate better.",
        "I\u2019m leaving questioning every \u201cCan we talk?\u201d I\u2019ve ever sent. \ud83d\ude02",
        "And with a pink-shoed elephant permanently living in my head. \ud83d\udc18"
      ],
      detail_fr: [
        "Et si je te demandais : \u00ab Combien d\u2019\u00e9l\u00e9phants en chaussures roses as-tu dans ta poche ? \u00bb \ud83d\udc18\ud83d\udc60",
        "Tu r\u00e9pondrais : \u00ab Mais c\u2019est quoi, cette question ? Aucun. \u00bb",
        "Mais en fait\u2026 tu en as un quelque part, maintenant. Dans ta t\u00eate. Tu l\u2019as IMAGIN\u00c9.",
        "Et c\u2019est assez \u00e9tonnant : Dale Carnegie m\u2019a fait voir que la communication cr\u00e9e des r\u00e9alit\u00e9s dans l\u2019esprit des gens. La fa\u00e7on de formuler une id\u00e9e peut faire sentir quelqu\u2019un impliqu\u00e9 ou exclu, appr\u00e9ci\u00e9 ou critiqu\u00e9, curieux ou sur la d\u00e9fensive.",
        "\u00ab Comment convaincre cette personne ? \u00bb : MAUVAISE QUESTION",
        "Il ne s\u2019agit peut-\u00eatre pas de gagner la conversation.\nIl s\u2019agit peut-\u00eatre de cr\u00e9er les conditions o\u00f9 la coordination para\u00eet naturelle plut\u00f4t que forc\u00e9e.",
        "\u00c9couter au lieu de pr\u00e9parer son prochain argument.\nLaisser les gens contribuer \u00e0 la solution.\nEt parfois, leur laisser sentir que l\u2019id\u00e9e est la leur.",
        "Je suis venue chez Dale Carnegie en pensant apprendre \u00e0 mieux communiquer.",
        "J\u2019en repars en remettant en question chaque \u00ab On peut se parler ? \u00bb que j\u2019ai d\u00e9j\u00e0 envoy\u00e9. \ud83d\ude02",
        "Et avec un \u00e9l\u00e9phant en chaussures roses qui vit d\u00e9sormais en permanence dans ma t\u00eate. \ud83d\udc18"
      ],
      tags: ["Leadership", "Communication"],
      tags_fr: ["Leadership", "Communication"]
    },
    {
      title: "Agentic AI Intern, private-security workflow automation",
      title_fr: "Stagiaire IA agentique, automatisation des workflows de sécurité privée",
      org: "Dupont Tech", location: "Île-de-France, France",
      start: "2026-11", end: "2027-01", ongoing: true,
      kind: "experience", importance: 5, featured: true,
      categories: ["technical"],
      summary: "AI agents connected to Comète (AEXAE) to automate quote production, scheduling and field-agent follow-up.",
      summary_fr: "Agents IA connectés à Comète (AEXAE) pour automatiser la production des devis, le planning et le suivi des agents.",
      highlights: [
        "Production time cut by 70% when replaying 10k+ historical quotes.",
        "Agents deployed on top of the client's existing business software."
      ],
      highlights_fr: [
        "Temps de production réduit de 70 % sur un rejeu de plus de 10 000 devis historiques.",
        "Agents déployés au-dessus du logiciel métier existant du client."
      ],
      tags: ["Agentic AI", "LLM agents", "Automation"],
      tags_fr: ["IA agentique", "Agents LLM", "Automatisation"]
    },
    {
      title: "Master 2 in AI, Data Science and Cyber-Physical Systems (IA2S)",
      title_fr: "Master 2 Intelligence Artificielle, Science des Données et Systèmes Cyber-Physiques (IA2S)",
      org: "Université Paris-Est Créteil (UPEC)", location: "Île-de-France, France",
      start: "2026-09", end: "present",
      kind: "education", importance: 4,
      categories: ["academic"],
      summary: "Master 2 for 2026 to 2027, alongside the internship search for February 2027.",
      summary_fr: "Master 2 pour 2026 à 2027, en parallèle de la recherche d'un stage pour février 2027.",
      tags: ["AI", "Cyber-physical systems"],
      tags_fr: ["IA", "Systèmes cyber-physiques"]
    },
    {
      title: "Heidelberg Laureate Forum, 13th edition",
      title_fr: "Heidelberg Laureate Forum, 13e édition",
      org: "Heidelberg Laureate Forum Foundation", location: "Heidelberg, Germany",
      location_fr: "Heidelberg, Allemagne",
      start: "2026-09",
      kind: "honor", importance: 4, featured: true,
      categories: ["award", "research", "community"],
      summary: "Took part as a young researcher, 12 to 19 September 2026.",
      summary_fr: "Participation en tant que jeune chercheuse, du 12 au 19 septembre 2026.",
      tags: ["Young researcher", "Networking"],
      tags_fr: ["Jeune chercheuse", "Réseautage"]
    },
    {
      title: "Research Assistant, Canadian Globalink Research Award",
      title_fr: "Assistante de recherche, Canadian Globalink Research Award",
      org: "Université du Québec en Outaouais & Calcul Québec", location: "Canada (on site)",
      location_fr: "Canada (sur site)",
      start: "2025-09", end: "2026-08",
      kind: "research", importance: 5, featured: true,
      categories: ["research", "technical"],
      summary: "Deepfake detection that generalises to diffusion-model videos, and detector decisions that can be explained.",
      summary_fr: "Détection de deepfakes qui généralise aux vidéos issues de modèles de diffusion, avec des décisions du détecteur explicables.",
      highlights: [
        "CRAFT: a 3D-CNN with 1.2M parameters that treats facial motion as a 3D frequency signal. AUC 0.963 on FF++ and 0.942 on Celeb-DF v2.",
        "S-GAT: a signed graph attention network that makes the detector's decisions interpretable across 11 facial regions."
      ],
      highlights_fr: [
        "CRAFT : un 3D-CNN de 1,2 M de paramètres qui traite le mouvement du visage comme un signal fréquentiel 3D. AUC de 0,963 sur FF++ et 0,942 sur Celeb-DF v2.",
        "S-GAT : un réseau d'attention sur graphe signé qui rend les décisions du détecteur interprétables sur 11 zones du visage."
      ],
      tags: ["Deepfake detection", "3D-CNN", "Graph attention", "Interpretability"],
      tags_fr: ["Détection de deepfakes", "3D-CNN", "Attention sur graphe", "Interprétabilité"]
    },
    {
      title: "Auditing the ghost: detecting deception in multi-step agents' chain of thought",
      title_fr: "Auditer le fantôme : détecter la tromperie dans la chaîne de pensée des agents multi-étapes",
      start: "2026", end: "present",
      kind: "project", importance: 5, featured: true,
      categories: ["research", "technical"],
      summary: "An audit system that flags when an agent's stated reasoning diverges from what it actually does.",
      summary_fr: "Un système d'audit qui repère quand le raisonnement affiché d'un agent diverge de ses actions réelles.",
      highlights: [
        "Reads execution traces from LangGraph agents through Arize Phoenix.",
        "Uses Pydantic parsing to catch false compliance."
      ],
      highlights_fr: [
        "Lit les traces d'exécution d'agents LangGraph via Arize Phoenix.",
        "Utilise le parsing Pydantic pour repérer les fausses conformités."
      ],
      tags: ["AI safety", "LangGraph", "Arize Phoenix", "Pydantic"],
      tags_fr: ["Sûreté de l'IA", "LangGraph", "Arize Phoenix", "Pydantic"]
    },
    {
      title: "IoT-DriftGen: generative digital twin for failure anticipation",
      title_fr: "IoT-DriftGen : jumeau numérique génératif pour anticiper les pannes",
      org: "IEEE GenAI Challenge", start: "2026",
      kind: "project", importance: 4,
      categories: ["technical", "research"],
      summary: "A generative twin of an industrial IoT system that anticipates failures with early alerts and drift-aware temporal evaluation.",
      summary_fr: "Un jumeau génératif de système IIoT qui anticipe les défaillances, avec alerte précoce et évaluation temporelle tenant compte de la dérive.",
      highlights: ["Degradation trajectories forecast with a CVAE-LSTM: AUC 0.981, RMSE 0.158."],
      highlights_fr: ["Trajectoires de dégradation prévues par CVAE-LSTM : AUC 0,981 ; RMSE 0,158."],
      tags: ["Digital twin", "CVAE-LSTM", "Concept drift", "IIoT"],
      tags_fr: ["Jumeau numérique", "CVAE-LSTM", "Dérive conceptuelle", "IIoT"]
    },
    {
      title: "AI Systems Engineer",
      title_fr: "Ingénieure systèmes IA",
      org: "Huawei Technologies", location: "Algiers, Algeria", location_fr: "Alger, Algérie",
      start: "2025-04", end: "2025-08",
      kind: "experience", importance: 5, featured: true,
      categories: ["technical"],
      summary: "Deployed a RAG system in a pilot with 300+ users, and presented it at the Algeria Digitalisation Summit.",
      summary_fr: "Déploiement d'un système RAG en phase pilote auprès de 300+ utilisateurs, présenté au Sommet de la Numérisation d'Algérie.",
      highlights: [
        "RAG built with LlamaIndex on Huawei Cloud: 86% of answers judged relevant.",
        "Multi-step FAISS retrieval over 2,000+ documents, down to 0.3 s latency, with +12 points of recall@5 validated by relevance benchmarking."
      ],
      highlights_fr: [
        "RAG construit avec LlamaIndex sur Huawei Cloud : 86 % de réponses jugées pertinentes.",
        "Recherche FAISS multi-étapes sur 2 000+ documents, jusqu'à 0,3 s de latence, avec +12 points de recall@5 validés par benchmarking de pertinence."
      ],
      tags: ["RAG", "LlamaIndex", "FAISS", "Huawei Cloud"],
      tags_fr: ["RAG", "LlamaIndex", "FAISS", "Huawei Cloud"]
    },
    {
      title: "Co-founder & CTO, DURAR: real-time LLM comprehension quizzes",
      title_fr: "Cofondatrice & CTO de DURAR : quiz de compréhension en temps réel par LLM",
      start: "2024", end: "2026",
      kind: "leadership", importance: 4, featured: true,
      categories: ["technical", "leadership"],
      summary: "A tool that turns a course into a quiz, streamed live to students with a tracking dashboard.",
      summary_fr: "Un outil qui génère un quiz à partir du cours, diffusé en direct aux étudiants avec un dashboard de suivi.",
      highlights: [
        "Fine-tuned LLaMA-3, PaddleOCR and LangChain; tested with 120 students; mobile extensions.",
        "Incubated at ENSIA V2V, then supported by RISE UP Djezzy.",
        "Co-founded with a team of 6, building an LLM-based teaching assistant."
      ],
      highlights_fr: [
        "LLaMA-3 fine-tuné, PaddleOCR et LangChain ; testé sur 120 étudiants ; extensions mobiles.",
        "Incubé à ENSIA V2V, puis soutenu par RISE UP Djezzy.",
        "Cofondé avec une équipe de 6 personnes, pour construire un assistant pédagogique basé sur un LLM."
      ],
      tags: ["LLM fine-tuning", "LangChain", "PaddleOCR", "EdTech"],
      tags_fr: ["Fine-tuning de LLM", "LangChain", "PaddleOCR", "EdTech"]
    },
    {
      title: "AI Consulting Intern",
      title_fr: "Stagiaire en conseil IA",
      org: "Sonatrach", location: "Algeria", location_fr: "Algérie",
      start: "2024-09", end: "2024-10",
      kind: "experience", importance: 3,
      categories: ["technical"],
      summary: "Characterised lithology from resistivity logs for two mud types (WBM and OBM) to improve drilling-data interpretation.",
      summary_fr: "Caractérisation de la lithologie à partir de diagraphies de résistivité sur deux types de boues (WBM et OBM) pour mieux interpréter les données de forage.",
      highlights: ["Field immersion across 10+ sites, including a data centre, an R&D centre and Hassi Messaoud."],
      highlights_fr: ["Immersion terrain sur 10+ sites, dont un data center, un centre R&D et Hassi Messaoud."],
      tags: ["Well logs", "Data analysis", "Energy"],
      tags_fr: ["Diagraphies", "Analyse de données", "Énergie"]
    },
    {
      title: "Co-founder & co-lead, Google Developers Group ENSIA",
      title_fr: "Co-fondatrice & co-lead, Google Developers Group ENSIA",
      org: "Google Developers Group", location: "Algiers, Algeria", location_fr: "Alger, Algérie", start: "2022", end: "2024",
      kind: "leadership", importance: 4,
      categories: ["leadership", "community"],
      summary: "A STEM community of 20k+ people.",
      summary_fr: "Une communauté STEM de 20k+ personnes.",
      highlights: [
        "Founded and co-led a team of 30+ lead members; organised 20+ workshops, seminars and hackathons on AI.",
        "Grew an audience of 20k+ people through events and online platforms.",
        "Promoted AgriChallenge, a national event pairing ENSIA's AI students with Algeria's Higher School of Agriculture to build plant-classification computer vision on data they collected themselves at the Hamma Garden (Jardin d'Essai du Hamma) in Algiers."
      ],
      highlights_fr: [
        "Fondé et co-dirigé une équipe de plus de 30 membres chefs ; organisé plus de 20 ateliers, séminaires et hackathons sur l'IA.",
        "Audience de plus de 20k personnes développée à travers événements et plateformes en ligne.",
        "Promotion d'AgriChallenge, un événement national associant les étudiants en IA de l'ENSIA à l'École supérieure d'agronomie d'Algérie pour construire une vision par ordinateur de classification de plantes, sur des données collectées au Jardin d'Essai du Hamma, à Alger."
      ],
      tags: ["Community", "Leadership", "STEM"],
      tags_fr: ["Communauté", "Leadership", "STEM"]
    },
    {
      title: "Engineering degree & Master's in AI and Data Science",
      title_fr: "Diplôme d'ingénieur & Master en IA et science des données",
      org: "ENSIA, École Nationale Supérieure d'Intelligence Artificielle", location: "Algiers, Algeria", location_fr: "Alger, Algérie",
      start: "2021", end: "2026",
      kind: "education", importance: 4,
      categories: ["academic"],
      summary: "Graduated with honours (17.37/20) from the school's first cohort (Bac+5).",
      summary_fr: "Diplômée avec mention (17,37/20) de la première promotion de l'école (Bac+5).",
      tags: ["AI", "Data science"],
      tags_fr: ["IA", "Science des données"]
    },
    {
      title: "Baccalauréat in Mathematics: 19.18/20",
      title_fr: "Baccalauréat en mathématiques : 19,18/20",
      org: "Lycée National de Mathématiques", location: "Algiers, Algeria", location_fr: "Alger, Algérie",
      start: "2018", end: "2021",
      kind: "honor", importance: 3,
      categories: ["academic", "award"],
      summary: "Ranked 6th out of 731,723 candidates nationally.",
      summary_fr: "Classée 6e sur 731 723 candidats à l'échelle nationale.",
      tags: ["Mathematics"],
      tags_fr: ["Mathématiques"]
    }
  ],

  skills: [
  {
    group: "LLMs & AI Systems",
    group_fr: "LLM & Systèmes IA",
    abbr: "LLM",
    rating: 90,
    items: [
      "LLM fine-tuning (SFT, LoRA/QLoRA)",
      "RAG architectures & hybrid retrieval",
      "Prompt engineering & context engineering",
      "Hugging Face (Transformers, PEFT, TRL)",
      "Model optimization & inference",
      "Multimodal AI"
    ]
  },
  {
    group: "Agentic AI & Orchestration",
    group_fr: "IA agentique & Orchestration",
    abbr: "AGT",
    abbr_fr: "AGT",
    rating: 92,
    items: [
      "Multi-agent systems",
      "LangChain & LangGraph",
      "Model Context Protocol (MCP)",
      "Tool calling & API orchestration",
      "Agent evaluation & observability",
      "Human-in-the-loop workflows",
      "Self-correction & LLM-as-a-judge"
    ]
  },
  {
    group: "AI Engineering & Deployment",
    group_fr: "Ingénierie IA & Déploiement",
    abbr: "ENG",
    rating: 90,
    items: [
      "Python & Java",
      "FastAPI & REST APIs",
      "Docker & Kubernetes",
      "CI/CD (GitHub Actions, GitLab CI)",
      "Cloud AI deployment",
      "MLflow & experiment tracking",
      "Model serving & inference optimization",
      "SQL & vector databases"
    ]
  },
  {
    group: "AI Evaluation & Reliability",
    group_fr: "Évaluation & Fiabilité IA",
    abbr: "EVA",
    rating: 88,
    items: [
      "LLM evaluation & benchmarking",
      "RAG evaluation (RAGAS)",
      "LLM observability & tracing",
      "AI red-teaming & adversarial testing",
      "Hallucination detection",
      "Model performance monitoring",
      "SHAP & LIME",
      "Business KPIs & impact measurement"
    ]
  },
  {
    group: "Languages",
    group_fr: "Langues",
    link: false,
    items: ["Kabyle", "Arabic", "English", "French"],
    items_fr: ["Kabyle", "Arabe", "Anglais", "Français"],
    /* One visual per language, in the same order as `items`: the language
       written in its own script (native), the script's name (script /
       script_fr), a few of its letters, and its language tag (lang) and
       direction (dir) so the browser picks the right font and order. */
    scripts: [
      { native: "ⵜⴰⵇⴱⴰⵢⵍⵉⵜ", lang: "kab-Tfng", dir: "ltr" },
      { native: "العربية", lang: "ar", dir: "rtl" },
      { native: "English", lang: "en", dir: "ltr"},
      { native: "Français", lang: "fr", dir: "ltr"}
    ]
  }
]
};