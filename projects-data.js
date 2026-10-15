/**
 * =============================================================================
 * CENTRAL PROJECT DATA SOURCE
 * =============================================================================
 * To edit or add project details in the future, modify the records in this file.
 * Changes here automatically update both:
 *  1. The project card in the Projects gallery
 *  2. The dedicated project detail page (/projects/:projectSlug)
 * =============================================================================
 */

const PROJECTS_DATA = [
  {
    id: "infra-flow",
    slug: "infra-flow",
    title: "Infra Flow",
    category: "DevOps",
    tab: "cloud-devops",
    summary: "A cloud-native deployment and operations platform focused on application delivery, infrastructure provisioning, containerized workloads, Kubernetes orchestration and autoscaling, CI/CD automation, and monitoring.",
    problemStatement: "Modern microservices require resilient infrastructure provisioning, dynamic container scaling, and unified delivery pipelines to avoid deployment bottlenecks and unmonitored failures.",
    idea: "Bring infrastructure, deployment, orchestration, and observability into one repeatable workflow so teams can ship without manually coordinating every layer.",
    solution: "Infra Flow combines Terraform, Docker, Kubernetes, Jenkins, Prometheus, and Grafana into a single delivery path from code commit to monitored production workload.",
    impactUsers: "Developers and platform teams get faster, safer releases; operations teams get consistent environments, automatic recovery, and earlier visibility into failures.",
    overview: "Infra Flow provides a unified platform orchestrating Infrastructure as Code (Terraform), containerized packaging with Docker, declarative cluster management on Kubernetes, automated CI/CD pipelines via Jenkins, and full-stack cluster telemetry using Prometheus and Grafana.",
    features: [
      { title: "Infrastructure as Code", body: "Modular, repeatable multi-environment cloud resource provisioning with Terraform." },
      { title: "Container Orchestration", body: "Kubernetes manifests with Horizontal Pod Autoscaling, rolling updates, and self-healing deployments." },
      { title: "Continuous Delivery", body: "Automated Jenkins pipelines validating tests, linting, container builds, and staging deployments." },
      { title: "Cluster Telemetry", body: "Proactive Prometheus scraping, alert rules, and customizable Grafana performance dashboards." }
    ],
    technologies: ["Jenkins", "Terraform", "Kubernetes", "Prometheus", "Grafana", "Docker"],
    architecture: "Developers push commits -> Jenkins triggers build & test -> Docker containers packaged -> Terraform provisions/updates cloud infra -> Kubernetes orchestrates deployment pods -> Prometheus scrapes metrics & Grafana alerts.",
    contributions: "Configured Jenkins CI/CD pipelines, wrote reusable Terraform modules, structured Kubernetes manifests (Deployments, Services, HPA), and integrated observability dashboards.",
    challenges: "Configuring robust persistent volumes, handling dynamic pod autoscaling under load, and streamlining zero-downtime rolling updates.",
    githubUrl: "https://github.com/kundanchaudhary07/InfraFlow",
    liveDemoUrl: "",
    image: "/projects/01_Infra_Flow.png",
    fringeImage: "/projects/infra-flow-fringe.svg",
    isPlaceholder: false
  },
  {
    id: "examx",
    slug: "examx",
    title: "ExamX",
    category: "Artificial Intelligence",
    tab: "full-stack",
    summary: "An online examination platform featuring AI-assisted question generation, online proctoring, real-time monitoring, automated evaluation, and role-based workflows.",
    problemStatement: "Traditional remote exam platforms lack scalable real-time integrity monitoring, automated evaluation workflows, and flexible question management for diverse academic testing.",
    idea: "Make remote examinations feel structured and trustworthy by combining assessment creation, exam delivery, proctoring, and evaluation in one platform.",
    solution: "ExamX combines role-based workflows, AI-assisted question generation, WebRTC monitoring, browser activity checks, and automated grading for objective answers.",
    impactUsers: "Students receive a clearer exam experience, educators spend less time preparing and reviewing assessments, and administrators gain better visibility into exam integrity.",
    overview: "ExamX is a full-stack digital examination platform that integrates real-time WebRTC proctoring, AI-assisted question set generation, automated evaluation, and role-based access for students, educators, and administrators.",
    features: [
      { title: "AI Question Generation", body: "Assisted generation and categorization of assessment questions across difficulty levels." },
      { title: "Real-Time Proctoring", body: "Live video and tab-switch monitoring using WebRTC and browser visibility APIs." },
      { title: "Secure Authentication", body: "Role-based access control with JWT authentication protecting exam papers and student submissions." },
      { title: "Automated Evaluation", body: "Instant grading for objective responses and organized review dashboards for subjective questions." }
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "WebRTC", "JWT"],
    architecture: "React frontend client communicates with Express/Node API -> JWT authenticates role permissions -> WebRTC establishes peer streaming -> MongoDB stores question banks and exam logs -> AI services process automated evaluation.",
    contributions: "Built interactive student exam interface with React.js, implemented RESTful API endpoints with Node.js & Express, and configured MongoDB database schemas.",
    challenges: "Handling real-time media feeds under low network bandwidth and enforcing strict anti-cheat restrictions across different browsers.",
    githubUrl: "https://github.com/kundanchaudhary07/Exam-Logix",
    liveDemoUrl: "",
    image: "/projects/02_ExamX.png",
    fringeImage: "/projects/examx-fringe.svg",
    isPlaceholder: false
  },
  {
    id: "git-analyzer",
    slug: "git-analyzer",
    title: "Git-Analyzer",
    category: "Full-Stack",
    tab: "full-stack",
    summary: "A repository analytics tool that provides deep insights into GitHub repositories: commit history, contributor activity, language breakdown, and code health metrics.",
    problemStatement: "Development teams lack accessible, visual tools to audit repository health, track contributor patterns, and identify bottlenecks in their codebase evolution.",
    idea: "Turn repository history into an easy-to-read health report so teams can understand how a project is changing without manually piecing together GitHub data.",
    solution: "Git-Analyzer collects repository metadata, commits, contributors, languages, branches, and pull requests, then presents the results through interactive charts and reports.",
    impactUsers: "Engineering leads can spot delivery risks earlier, contributors can understand ownership patterns, and teams can make better decisions from their development data.",
    overview: "Git-Analyzer connects to the GitHub API to fetch repository metadata, commit history, contributor stats, and language distribution. It visualizes these as interactive charts and reports to help teams make data-driven development decisions.",
    features: [
      { title: "Repository Insights", body: "Commit frequency, branch activity, and pull request analytics across any public or authorized repository." },
      { title: "Contributor Analytics", body: "Individual contributor activity heatmaps, commit volume, and code ownership metrics." },
      { title: "Language Breakdown", body: "Visual breakdown of programming languages and file-type distribution within a repository." },
      { title: "Code Health Metrics", body: "Identifies stale branches, long-running PRs, and irregular commit patterns that signal project risk." }
    ],
    technologies: ["React.js", "GitHub API", "Chart.js", "Node.js", "Express"],
    architecture: "React frontend queries a Node.js proxy server -> GitHub REST/GraphQL API fetches repo data -> Data processed and cached -> Chart.js renders interactive visualizations.",
    contributions: "Implemented GitHub OAuth integration, built data aggregation pipeline, and designed the interactive dashboard with Chart.js.",
    challenges: "Managing GitHub API rate limits for large repositories and efficiently aggregating data across thousands of commits.",
    githubUrl: "https://github.com/kundanchaudhary07",
    liveDemoUrl: "",
    image: "/projects/03_Git-Analyzer.png",
    fringeImage: "/projects/git-analyzer-fringe.svg",
    isPlaceholder: false
  },
  {
    id: "relic",
    slug: "relic",
    title: "Relic",
    category: "Artificial Intelligence",
    tab: "full-stack",
    summary: "A predictive cybercrime-intelligence platform designed to evaluate risk and forecast likely cash withdrawal locations associated with cybercrime complaints.",
    problemStatement: "Law enforcement agencies face challenges in predicting and preemptively intercepting cybercrime-related cash withdrawals due to fragmented complaint data and lack of geographic intelligence tools.",
    idea: "Use historical complaint and transaction patterns to turn fragmented records into an actionable geographic risk map for investigation teams.",
    solution: "Relic normalizes complaint data, scores risk with a predictive model, and visualizes likely withdrawal hotspots and alerts through an interactive map dashboard.",
    impactUsers: "Investigators get a faster way to prioritize field work, connect related complaints, and focus attention on locations with the strongest evidence of risk.",
    overview: "Relic is a cybercrime intelligence platform that aggregates complaint data, applies predictive models to identify high-risk withdrawal zones, and presents findings on an interactive geospatial map for investigative teams.",
    features: [
      { title: "Predictive Risk Scoring", body: "Machine learning model evaluates complaint metadata to forecast cash withdrawal probability at ATM clusters." },
      { title: "Geospatial Mapping", body: "Interactive map overlays showing complaint density, predicted hotspots, and historical withdrawal patterns." },
      { title: "Complaint Aggregation", body: "Ingests and normalizes cybercrime complaint records from multiple input sources for unified analysis." },
      { title: "Alert Dashboard", body: "Real-time alert system notifying field agents of newly identified high-risk locations." }
    ],
    technologies: ["Python", "Flask", "Scikit-learn", "Leaflet.js", "PostgreSQL"],
    architecture: "Complaint data ingested -> Python ML pipeline scores risk -> Flask API serves predictions -> Leaflet.js renders geospatial dashboard -> Alerts dispatched to field teams.",
    contributions: "Designed the predictive risk model, built the geospatial visualization layer, and implemented the complaint ingestion pipeline.",
    challenges: "Handling incomplete complaint records, tuning the risk model for geographic precision, and ensuring low-latency map rendering for large datasets.",
    githubUrl: "https://github.com/kundanchaudhary07",
    liveDemoUrl: "",
    image: "/projects/04_Relic.png",
    fringeImage: "/projects/relic-fringe.svg",
    isPlaceholder: false
  },
  {
    id: "cloud-cost",
    slug: "cloud-cost",
    title: "Cloud Cost",
    category: "Cloud",
    tab: "cloud-devops",
    summary: "A cloud cost optimization platform that analyzes infrastructure spend across cloud providers, identifies waste, and recommends right-sizing and reservation strategies.",
    problemStatement: "Organizations running cloud workloads struggle to identify unused resources, right-size over-provisioned services, and forecast budget accurately, resulting in significant unnecessary spend.",
    idea: "Make cloud spending understandable and actionable by connecting billing data with the infrastructure decisions that created the cost.",
    solution: "Cloud Cost ingests provider billing and usage data, detects idle or oversized resources, and surfaces right-sizing, savings-plan, and anomaly recommendations.",
    impactUsers: "Engineering and finance teams can find waste sooner, plan budgets with more confidence, and reduce unnecessary infrastructure spend without slowing delivery.",
    overview: "Cloud Cost connects to cloud provider billing APIs, parses usage data, and applies optimization rules to surface idle resources, savings plan recommendations, and cost anomalies through an intuitive dashboard.",
    features: [
      { title: "Multi-Cloud Billing Analysis", body: "Aggregates cost data from AWS, GCP, or Azure to give a unified view of infrastructure spend." },
      { title: "Idle Resource Detection", body: "Identifies underutilized EC2 instances, unattached volumes, and orphaned snapshots." },
      { title: "Right-Sizing Recommendations", body: "Suggests optimal instance types based on observed CPU, memory, and network utilization patterns." },
      { title: "Cost Anomaly Alerts", body: "Detects sudden cost spikes and sends configurable alerts to prevent budget overruns." }
    ],
    technologies: ["Python", "AWS Cost Explorer API", "Boto3", "React.js", "PostgreSQL"],
    architecture: "Cloud billing APIs polled -> Python ingestion service normalizes data -> Optimization engine applies rules -> React dashboard visualizes spend & recommendations.",
    contributions: "Built the AWS billing ingestion pipeline, implemented the idle-resource detection engine, and designed the cost dashboard.",
    challenges: "Normalizing billing data across different cloud provider schemas and handling large volumes of daily cost records efficiently.",
    githubUrl: "https://github.com/kundanchaudhary07",
    liveDemoUrl: "",
    image: "/projects/05_Cloud_Cost.png",
    fringeImage: "/projects/cloud-cost-fringe.svg",
    isPlaceholder: false
  },
  {
    id: "the-earth",
    slug: "the-earth",
    title: "The Earth",
    category: "Full-Stack",
    tab: "full-stack",
    summary: "An interactive geospatial visualization platform presenting environmental and geographic data through immersive globe and map interfaces.",
    problemStatement: "Environmental datasets are often locked behind dense spreadsheets and static charts, making it difficult for non-specialists to explore spatial relationships and trends.",
    idea: "Let people explore environmental change spatially and over time, turning complex datasets into something they can see, compare, and understand.",
    solution: "The Earth combines a WebGL globe, 2D maps, layered GeoJSON data, charts, and a timeline so users can move from a global overview to local trends.",
    impactUsers: "Students, researchers, and curious users can discover geographic patterns faster and communicate environmental stories more clearly than with static tables alone.",
    overview: "The Earth is an interactive data visualization platform that renders global environmental datasets on a 3D globe and 2D map. Users can explore layers including temperature anomalies, deforestation zones, ocean health indicators, and more.",
    features: [
      { title: "3D Globe Visualization", body: "WebGL-powered interactive globe rendering real-time and historical environmental datasets." },
      { title: "Multi-Layer Data Overlays", body: "Toggle between climate, terrain, deforestation, and ocean health data layers." },
      { title: "Time-Series Playback", body: "Animated timeline slider to observe how environmental metrics change over decades." },
      { title: "Location Drill-Down", body: "Click any region to see detailed local statistics and trend charts." }
    ],
    technologies: ["Three.js", "React.js", "D3.js", "GeoJSON", "Node.js"],
    architecture: "Static GeoJSON datasets loaded -> Three.js renders WebGL globe -> D3.js powers 2D chart overlays -> React manages layer state and UI controls.",
    contributions: "Built the WebGL globe renderer, implemented layer switching, and designed the time-series animation system.",
    challenges: "Optimizing WebGL performance for large GeoJSON datasets and ensuring smooth time-series animations across low-end devices.",
    githubUrl: "https://github.com/kundanchaudhary07",
    liveDemoUrl: "",
    image: "/projects/06_The_Earth.png",
    fringeImage: "/projects/the-earth-fringe.svg",
    isPlaceholder: false
  },
  {
    id: "edu-guard",
    slug: "edu-guard",
    title: "Edu Guard",
    category: "Artificial Intelligence",
    tab: "full-stack",
    summary: "Project details will be added soon.",
    githubUrl: "",
    liveDemoUrl: "",
    image: "/projects/07_Edu_Guard.png",
    fringeImage: "/projects/edu-guard-fringe.svg",
    isPlaceholder: true
  }
];

const PROJECT_CARD_FRINGE_IMAGE = "/projects/deitrix-fringe.svg";

const PROJECT_VISUALS = {
  "infra-flow": {
    stages: ["Commit", "Jenkins", "Docker", "Kubernetes", "Monitor"],
    signals: [["Delivery", 92], ["Reliability", 88], ["Visibility", 84], ["Scale", 90]]
  },
  examx: {
    stages: ["Question Bank", "AI Assist", "Exam Room", "Proctoring", "Evaluate"],
    signals: [["Integrity", 94], ["Automation", 90], ["Clarity", 86], ["Coverage", 82]]
  },
  "git-analyzer": {
    stages: ["GitHub API", "Normalize", "Analyze", "Visualize", "Decide"],
    signals: [["Visibility", 94], ["Health", 88], ["Ownership", 80], ["Trends", 86]]
  },
  relic: {
    stages: ["Complaints", "Normalize", "Risk Model", "Map Hotspots", "Alert Team"],
    signals: [["Detection", 91], ["Geospatial", 89], ["Prioritization", 86], ["Response", 82]]
  },
  "cloud-cost": {
    stages: ["Billing APIs", "Ingest", "Detect Waste", "Recommend", "Act"],
    signals: [["Cost View", 95], ["Waste Scan", 90], ["Forecast", 84], ["Actionability", 88]]
  },
  "the-earth": {
    stages: ["Datasets", "GeoJSON", "WebGL Globe", "Time Series", "Explore"],
    signals: [["Exploration", 94], ["Layering", 90], ["Trends", 86], ["Performance", 80]]
  },
  "edu-guard": {
    stages: ["Student Signal", "AI Detection", "Risk Score", "Alert", "Review"],
    signals: [["Safety", 94], ["Detection", 88], ["Response", 84], ["Trust", 90]]
  }
};

// Helper transformation for gallery cards
function getProjectCards() {
  return PROJECTS_DATA.map(p => ({
    title: p.title,
    subtitle: p.subtitle || "",
    category: p.category,
    image: p.image,
    fringeImage: PROJECT_CARD_FRINGE_IMAGE,
    slug: p.slug,
    tab: p.tab,
    githubUrl: p.githubUrl,
    isPlaceholder: p.isPlaceholder
  }));
}

// Helper transformation for project detail page
function getProjectDetails() {
  return PROJECTS_DATA.map(p => {
    const sections = [];

    if (p.problemStatement) {
      sections.push({ kind: "text", title: "Problem Statement", body: [p.problemStatement] });
    }
    if (p.idea) {
      sections.push({ kind: "text", title: "Idea", body: [p.idea] });
    }
    if (p.solution) {
      sections.push({ kind: "text", title: "Solution", body: [p.solution] });
    }
    if (p.impactUsers) {
      sections.push({ kind: "text", title: "Impact & Users", body: [p.impactUsers] });
    }
    if (p.features && p.features.length) {
      sections.push({ kind: "list", title: "Key Features", items: p.features });
    }
    if (p.challenges) {
      sections.push({ kind: "text", title: "Challenges & Learnings", body: [p.challenges] });
    }
    if (p.githubUrl) {
      const linksBody = ["GitHub Repository: " + p.githubUrl];
      if (p.liveDemoUrl) linksBody.push("Live Demo: " + p.liveDemoUrl);
      sections.push({ kind: "text", title: "Links & Resources", body: linksBody });
    }

    const meta = [{ label: "Category", value: p.category }];
    if (p.technologies && p.technologies.length) {
      meta.push({ label: "Technologies", value: p.technologies.join(" · ") });
    }
    meta.push({ label: "Status", value: p.isPlaceholder ? "Planned / In Progress" : "Completed" });

    return {
      slug: p.slug,
      title: p.title,
      tagline: p.isPlaceholder ? "Project details will be added soon." : p.summary,
      meta: meta,
      intro: [p.isPlaceholder ? "Project details will be added soon." : (p.overview || p.summary)],
      sections: sections
    };
  });
}

// Global browser bindings
if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
  window.PROJECTS_DATA_CARDS = getProjectCards();
  window.PROJECTS_DATA_DETAIL = getProjectDetails();
}

if (typeof document !== "undefined") {
  const PROJECT_CATEGORY_GROUPS = [
    { id: "artificial-intelligence", label: "Artificial Intelligence" },
    { id: "full-stack", label: "Full-Stack" },
    { id: "cloud", label: "Cloud" },
    { id: "devops", label: "DevOps" }
  ];
  const PROJECT_CATEGORY_BY_SLUG = {
    "cloud-cost": "cloud",
    "infra-flow": "devops",
    "git-analyzer": "full-stack",
    "the-earth": "full-stack",
    "examx": "artificial-intelligence",
    "relic": "artificial-intelligence",
    "edu-guard": "artificial-intelligence"
  };

  // The homepage is compiled with two built-in filters. Replace that filter
  // after hydration while keeping the project cards and details data-driven.
  const enhanceProjectTabs = () => {
    const tabList = document.querySelector('[role="tablist"][aria-label="Project category"]');
    if (!tabList || tabList.dataset.portfolioTabsReady === "true") return;

    const templateButton = tabList.querySelector("button");
    const indicator = tabList.querySelector('span[aria-hidden="true"]');
    if (!templateButton || !indicator) return;

    // Hide the compiled two-tab indicator and use one owned by this four-tab filter.
    indicator.style.display = "none";
    const activeIndicator = document.createElement("span");
    activeIndicator.setAttribute("aria-hidden", "true");
    activeIndicator.style.position = "absolute";
    activeIndicator.style.top = "3px";
    activeIndicator.style.bottom = "3px";
    activeIndicator.style.zIndex = "0";
    activeIndicator.style.border = "1px solid #464646";
    activeIndicator.style.borderRadius = "999px";
    activeIndicator.style.background = "#F7CB7C";
    activeIndicator.style.pointerEvents = "none";
    activeIndicator.style.transition = "left 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), width 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    tabList.append(activeIndicator);

    const cardWrappers = [...document.querySelectorAll("[data-tab]")].filter(wrapper =>
      wrapper.querySelector('a[href^="/projects/"]')
    );
    if (!cardWrappers.length) return;

    cardWrappers.forEach(wrapper => {
      const link = wrapper.querySelector('a[href^="/projects/"]');
      const slug = link?.getAttribute("href")?.split("/").filter(Boolean).pop();
      wrapper.dataset.portfolioCategory = PROJECT_CATEGORY_BY_SLUG[slug] || "full-stack";
    });

    const buttons = PROJECT_CATEGORY_GROUPS.map(group => {
      const button = templateButton.cloneNode(true);
      button.textContent = group.label;
      button.dataset.category = group.id;
      button.setAttribute("aria-selected", "false");
      button.style.flex = "1 1 0%";
      button.style.width = "25%";
      button.style.minWidth = "0";
      button.style.color = "#FBEEDE";
      return button;
    });

    tabList.querySelectorAll("button").forEach(button => button.remove());
    buttons.forEach(button => tabList.append(button));

    const setActiveCategory = category => {
      buttons.forEach(button => {
        const isActive = button.dataset.category === category;
        button.setAttribute("aria-selected", String(isActive));
        button.style.color = isActive ? "#151714" : "#FBEEDE";
      });
      cardWrappers.forEach(wrapper => {
        wrapper.style.display = wrapper.dataset.portfolioCategory === category ? "" : "none";
      });
      const activeButton = buttons.find(button => button.dataset.category === category);
      if (activeButton) {
        activeIndicator.style.left = `${activeButton.offsetLeft}px`;
        activeIndicator.style.width = `${activeButton.offsetWidth}px`;
      }
    };

    buttons.forEach(button => {
      button.addEventListener("click", () => setActiveCategory(button.dataset.category));
    });

    tabList.dataset.portfolioTabsReady = "true";
    setActiveCategory(PROJECT_CATEGORY_GROUPS[0].id);
  };

  const projectsByPath = new Map(PROJECTS_DATA.map(project => [`/projects/${project.slug}`, project]));
  const fringeStyles = document.createElement("style");
  fringeStyles.id = "portfolio-project-fringe-styles";
  const fringeCss = `
    .project-card-fringe-card {
      position: relative;
      overflow: visible !important;
      isolation: isolate;
    }
    .project-card-face {
      position: relative;
      z-index: 10 !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
    .project-card-fringe {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1 !important;
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
      display: none;
      transform: translateY(0);
      opacity: 0;
      visibility: hidden;
      transition: transform 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .project-card-fringe-card:hover .project-card-fringe,
    .project-card-fringe-card:focus-visible .project-card-fringe {
      display: block;
      transform: translateY(64px);
      opacity: 1;
      visibility: visible;
    }
    @media (prefers-reduced-motion: reduce) {
      .project-card-fringe { transition: none; }
    }
  `;
  fringeStyles.textContent = fringeCss;
  document.head.append(fringeStyles);
  const ensureFringeStyles = () => {
    if (!document.head.contains(fringeStyles)) document.head.append(fringeStyles);
    if (fringeStyles.textContent !== fringeCss) fringeStyles.textContent = fringeCss;
  };

  const visualStyles = document.createElement("style");
  visualStyles.dataset.portfolioStyle = "project-detail-visuals";
  const visualCss = `
    .project-detail-visuals {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.65fr);
      gap: 1rem;
      margin: 0 0 3.5rem;
      padding: 1.25rem;
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 1rem;
      background: linear-gradient(135deg, rgba(251,178,41,.11), rgba(255,255,255,.035));
      font-family: Afacad, sans-serif;
      animation: project-visual-in .7s cubic-bezier(.25,.46,.45,.94) both;
    }
    .project-detail-visuals h2 {
      margin: 0 0 .9rem;
      color: #ffedd5;
      font-family: "Bowlby One SC", sans-serif;
      font-size: clamp(1.5rem, 3vw, 2.25rem);
      font-weight: 400;
      line-height: 1.2;
      text-transform: uppercase;
      -webkit-text-stroke: 1px rgba(0,0,0,.35);
    }
    .project-flow {
      display: flex;
      align-items: stretch;
      gap: .45rem;
      overflow-x: auto;
      padding-bottom: .35rem;
    }
    .project-flow-step {
      position: relative;
      display: flex;
      min-width: 105px;
      min-height: 74px;
      align-items: center;
      justify-content: center;
      padding: .7rem .55rem;
      border: 1px solid rgba(251,178,41,.65);
      border-radius: .7rem;
      background: #20231e;
      color: rgba(255,255,255,.9);
      font-size: 1.15rem;
      text-align: center;
      animation: project-step-in .65s cubic-bezier(.25,.46,.45,.94) both;
    }
    .project-flow-step:nth-child(2) { animation-delay: .12s; }
    .project-flow-step:nth-child(3) { animation-delay: .24s; }
    .project-flow-step:nth-child(4) { animation-delay: .36s; }
    .project-flow-step:nth-child(5) { animation-delay: .48s; }
    .project-flow-step::before {
      content: "";
      position: absolute;
      left: 9%;
      right: 9%;
      bottom: .45rem;
      height: 2px;
      background: linear-gradient(90deg, transparent, #fbb229, transparent);
      background-size: 220% 100%;
      animation: project-signal-pulse 1.8s linear infinite;
    }
    .project-flow-step:not(:last-child)::after {
      content: "→";
      position: absolute;
      right: -.65rem;
      color: #fbb229;
      font-size: 1.2rem;
      z-index: 2;
    }
    .project-signal { display: grid; gap: .65rem; }
    .project-signal-row { display: grid; grid-template-columns: 110px 1fr 38px; gap: .55rem; align-items: center; color: rgba(255,255,255,.85); font-size: 1.1rem; }
    .project-signal-track { height: .55rem; overflow: hidden; border-radius: 99px; background: rgba(255,255,255,.12); }
    .project-signal-fill { display: block; width: 0; height: 100%; border-radius: inherit; background: linear-gradient(90deg, #f28a38, #fbd27b); animation: project-bar-in 1.1s .35s cubic-bezier(.25,.46,.45,.94) forwards; }
    .project-signal-value { color: #f7d08a; text-align: right; font-variant-numeric: tabular-nums; }
    @keyframes project-visual-in { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes project-step-in { from { opacity: 0; transform: translateX(-18px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes project-signal-pulse { from { background-position: 200% 0; } to { background-position: -20% 0; } }
    @keyframes project-bar-in { from { width: 0; } to { width: var(--signal-width); } }
    @media (prefers-reduced-motion: reduce) {
      .project-detail-visuals, .project-flow-step, .project-flow-step::before, .project-signal-fill { animation: none; }
      .project-signal-fill { width: var(--signal-width); }
    }
    @media (max-width: 760px) {
      .project-detail-visuals { grid-template-columns: 1fr; margin-bottom: 2.5rem; }
      .project-flow-step { min-width: 92px; font-size: .85rem; }
    }
  `;
  visualStyles.textContent = visualCss;
  document.head.append(visualStyles);

  const ensureVisualStyles = () => {
    if (!document.head.contains(visualStyles)) document.head.append(visualStyles);
    if (visualStyles.textContent !== visualCss) visualStyles.textContent = visualCss;
  };

  const enhanceProjectDetail = () => {
    ensureVisualStyles();
    const article = document.querySelector("article");
    const slug = window.location.pathname.match(/^\/projects\/([^/]+)/)?.[1];
    const visual = PROJECT_VISUALS[slug];
    if (!article || !visual) return;
    const existingPanel = article.querySelector(".project-detail-visuals");
    if (existingPanel?.dataset.projectSlug === slug) return;
    existingPanel?.remove();

    const intro = article.children[1];
    if (!(intro instanceof HTMLElement)) return;
    const panel = document.createElement("section");
    panel.className = "project-detail-visuals";
    panel.dataset.projectSlug = slug;
    panel.setAttribute("aria-label", `${slug} visual overview`);

    const flow = document.createElement("div");
    flow.innerHTML = `<h2>System Flow</h2><div class="project-flow"></div>`;
    const flowRow = flow.querySelector(".project-flow");
    visual.stages.forEach(stage => {
      const step = document.createElement("div");
      step.className = "project-flow-step";
      step.textContent = stage;
      flowRow.append(step);
    });

    const signals = document.createElement("div");
    signals.innerHTML = `<h2>Impact Signals</h2><div class="project-signal"></div>`;
    const signalList = signals.querySelector(".project-signal");
    visual.signals.forEach(([label, value]) => {
      const row = document.createElement("div");
      row.className = "project-signal-row";
      row.innerHTML = `<span>${label}</span><span class="project-signal-track"><span class="project-signal-fill" style="--signal-width:${value}%"></span></span><span class="project-signal-value">${value}</span>`;
      signalList.append(row);
    });
    panel.append(flow, signals);
    intro.after(panel);
  };

  const enhanceProjectCards = (root = document) => {
    ensureFringeStyles();
    enhanceProjectDetail();
    const cards = [];
    if (root instanceof Element && root.matches('a[href^="/projects/"]')) cards.push(root);
    if ("querySelectorAll" in root) cards.push(...root.querySelectorAll('a[href^="/projects/"]'));

    cards.forEach(card => {
      const project = projectsByPath.get(card.getAttribute("href"));
      const image = card.querySelector("img");
      const imageContainer = image?.parentElement;
      if (!project || !imageContainer || card.querySelector(".project-card-fringe")) return;

      const fringe = document.createElement("img");
      fringe.className = "project-card-fringe";
      fringe.src = PROJECT_CARD_FRINGE_IMAGE;
      fringe.alt = "";
      fringe.setAttribute("aria-hidden", "true");
      fringe.draggable = false;
      imageContainer.classList.add("project-card-face");
      card.append(fringe);
      card.classList.add("project-card-fringe-card");

      const carousel = card.parentElement?.parentElement;
      if (carousel instanceof HTMLElement) {
        // The fringe extends below the poster on hover. Reserve that space on
        // every category, including categories that currently contain one card.
        carousel.style.minHeight = `${Math.ceil(card.getBoundingClientRect().height + 72)}px`;
        carousel.style.paddingBottom = "72px";
      }
    });
    enhanceProjectTabs();
  };

  enhanceProjectCards();
  new MutationObserver(mutations => {
    mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
      if (node instanceof Element) enhanceProjectCards(node);
    }));
    enhanceProjectTabs();
  }).observe(document.documentElement, { childList: true, subtree: true });
}

// CommonJS module support
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROJECTS_DATA, getProjectCards, getProjectDetails };
}
