import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Job Jugaad",
      subtitle: "AI-Based Job Recommendation Platform",
      description:
        "A sophisticated job recommendation platform that leverages AI and machine learning to help users find relevant job opportunities efficiently. The system uses advanced NLP techniques to match resumes with job postings based on keyword matching and semantic similarity.",
      fullDescription:
        "Developed a comprehensive AI-based job recommendation platform designed to streamline the job search process. The platform aggregates job openings from multiple sources using web scraping with Puppeteer and Beautiful Soup, analyzes them with Python-based NLP algorithms for JobMatch scoring, and recommends roles based on user profiles and preferences.",
      technologies: [
        "Node.js",
        "Express",
        "Python",
        "NLP",
        "MongoDB",
        "Puppeteer",
        "Beautiful Soup",
      ],
      highlights: [
        "Designed and implemented a job aggregator that scrapes and processes job openings",
        "Integrated Python-based NLP for intelligent JobMatch scoring",
        "Built backend microservices using Node.js and Express",
        "Automated data scraping with intelligent retry and error handling",
        "Delivered a fast, scalable platform suitable for real-world job search",
      ],
      github: "https://github.com/arushrai007/job-jugaad",
      date: "November 2025",
    },
    {
      id: 2,
      title: "NutriFood",
      subtitle: "Nutrition and Healthy Food Guidance Platform",
      description:
        "A wellness-focused application centered on nutrition awareness, healthy meal choices, and smarter food decision-making through a clean user experience.",
      fullDescription:
        "Built NutriFood as a health-centric product experience that helps users explore better food choices and make nutrition more understandable. The project focuses on practical UI, informative presentation, and user-friendly interactions that make diet-related content easier to consume.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "UI Design"],
      highlights: [
        "Designed a health-oriented interface for food and nutrition exploration",
        "Focused on accessible information architecture for everyday users",
        "Built responsive layouts for a smoother browsing experience",
        "Structured the project around clarity, readability, and usability",
      ],
      github: "https://github.com/arushrai007/NutriFood",
      date: "2025",
    },
    {
      id: 3,
      title: "Resume Architect",
      subtitle: "Resume Builder and Career Positioning Tool",
      description:
        "A resume-focused project aimed at helping users structure stronger profiles, present their skills better, and create more polished career documents.",
      fullDescription:
        "Developed Resume Architect as a practical career tool for better resume presentation and structured profile building. The project emphasizes clean workflow design, clearer information sections, and a polished interface to support job-seeking users.",
      technologies: ["React", "TypeScript", "Forms", "CSS", "Career Tech"],
      highlights: [
        "Organized resume content into a more guided user flow",
        "Improved profile readability through better section structure",
        "Focused on cleaner input handling and presentation logic",
        "Built for practical use in internships and job applications",
      ],
      github: "https://github.com/arushrai007/Resume-Architect",
      date: "2025",
    },
    {
      id: 4,
      title: "AI Travel Companion Chatbot",
      subtitle: "Personalized Travel Assistant",
      description:
        "An AI chatbot that helps users with personalized travel planning, recommendations, and real-time trip support in a conversational format.",
      fullDescription:
        "Built an AI-powered travel assistant using conversational interfaces to make trip planning easier and more interactive. The chatbot focuses on suggesting destinations, supporting travel decisions, and offering a smoother planning journey through natural interactions.",
      technologies: ["Python", "Streamlit", "OpenAI API", "NLP", "Chatbot UX"],
      highlights: [
        "Created personalized travel recommendations through AI-driven prompts",
        "Designed a user-friendly chatbot workflow for trip planning",
        "Built a real-time web interface for conversational support",
        "Improved travel discovery with guided interactions and utility features",
      ],
      github: "https://github.com/arushrai007/AI-Travel-Companion-Chatbot",
      date: "2024",
    },
    {
      id: 5,
      title: "TaskFlow App",
      subtitle: "Task Management and Productivity Application",
      description:
        "A productivity-focused task management application built to simplify planning, organization, and everyday workflow tracking.",
      fullDescription:
        "Designed TaskFlow as a practical CRUD-based productivity application for managing tasks and staying organized. The app focuses on straightforward task handling, useful workflow structure, and an interface aimed at reducing friction in daily productivity routines.",
      technologies: ["Django", "SQLite", "HTML", "CSS", "CRUD"],
      highlights: [
        "Built core task create, update, and tracking flows",
        "Implemented authentication-focused productivity usage patterns",
        "Designed a simple workflow for better everyday organization",
        "Focused on clarity and speed over unnecessary complexity",
      ],
      github: "https://github.com/arushrai007/TASKFLOW-APP",
      date: "2024",
    },
    {
      id: 6,
      title: "Air Quality Analysis and AQI Prediction",
      subtitle: "Environmental Analytics and Forecasting Project",
      description:
        "A data-driven project for analyzing pollution trends and predicting AQI using statistical and machine learning techniques.",
      fullDescription:
        "Developed this project to explore environmental datasets, identify important pollution indicators, and forecast AQI patterns through analytics workflows. The work highlights data cleaning, exploratory analysis, model thinking, and presentation of environmental insights in a usable format.",
      technologies: ["Python", "Pandas", "NumPy", "Machine Learning", "Data Visualization"],
      highlights: [
        "Analyzed pollution patterns and AQI-driving variables",
        "Applied predictive techniques for air quality forecasting",
        "Translated raw environmental data into interpretable insights",
        "Focused on decision-friendly dashboards and visual summaries",
      ],
      github: "https://github.com/arushrai007/Air-Quality-Analysis-and-AQI-Prediction",
      date: "2025",
    },
    {
      id: 7,
      title: "Global Terrorism Dashboard",
      subtitle: "Interactive Dashboard for Global Incident Analysis",
      description:
        "A dashboard project for exploring terrorism-related trends, patterns, and geographic insights through interactive visual analysis.",
      fullDescription:
        "Built an analytical dashboard to make complex global terrorism data easier to navigate and understand. The project emphasizes clear visual storytelling, interactive exploration, and converting large datasets into decision-oriented insights.",
      technologies: ["Power BI", "Data Analysis", "Dashboarding", "Visualization"],
      highlights: [
        "Created interactive views for region-wise and trend-wise exploration",
        "Structured large datasets into readable visual stories",
        "Focused on clarity in time-series and geographic analysis",
        "Built for easier discovery of high-level security patterns",
      ],
      github: "https://github.com/arushrai007/GLOBAL-TERRORISM-DASHBOARD",
      date: "2025",
    },
    {
      id: 8,
      title: "Indian Stock Market Analytics Dashboard",
      subtitle: "Market Insights and Financial Visualization Dashboard",
      description:
        "A dashboard-based analytics project for understanding stock trends, market movement, and financial indicators through visual reporting.",
      fullDescription:
        "Developed a stock market analytics dashboard focused on transforming market data into easy-to-read visual insights. The project highlights trend analysis, comparative reporting, and dashboard-driven exploration for better understanding of stock behavior.",
      technologies: ["Power BI", "Finance Analytics", "Data Visualization", "Reporting"],
      highlights: [
        "Visualized stock trends and comparative market performance",
        "Built dashboard interactions for easier financial exploration",
        "Improved readability of market data through structured reporting",
        "Focused on investor-friendly and presentation-ready insights",
      ],
      github: "https://github.com/arushrai007/Indian-Stock-Market-Analytics-Dashboard",
      date: "2025",
    },
    {
      id: 9,
      title: "Nova Browser",
      subtitle: "Chromium-based Desktop Web Browser",
      description:
        "A futuristic, feature-rich desktop web browser built with Electron and Chromium. Showcases modern UI/UX design principles with a custom neon-inspired interface, dynamic tab management, and personalized user experience.",
      fullDescription:
        "Engineered a functional desktop web browser prototype to demonstrate mastery of browser architecture, the Electron framework, and real-world desktop application development. The browser features a glass morphism UI with transparent effects, dynamic tab management, custom start page with user shortcuts, and a personalized welcome system.",
      technologies: [
        "Electron",
        "Chromium",
        "HTML",
        "CSS",
        "JavaScript",
        "WebView",
      ],
      highlights: [
        "Built cross-platform browser using Electron and JavaScript",
        "Integrated Chromium WebView for rendering web content",
        "Implemented dynamic tab management with full browser controls",
        "Created custom start page with user shortcut management",
        "Designed modern glass morphism UI with CSS",
        "Added personalized welcome system and local storage integration",
      ],
      github: "https://github.com/arushrai007/nova-browser",
      date: "March 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="relative max-w-[88rem] mx-auto px-6">
          <div className="animate-rise-blur surface-panel rounded-[2rem] p-6 md:p-7">
            <span className="theme-chip mb-5">Selected builds across AI, web, and desktop</span>
            <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Portfolio
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-5">
              Featured Projects
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A curated selection of projects that demonstrate my expertise in full-stack
              development, AI/ML, and desktop applications. Each project represents a significant
              learning experience and real-world application.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-wash section-merge py-20 md:py-24">
        <div className="relative max-w-[88rem] mx-auto px-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`mb-16 md:mb-20 border-b border-border pb-16 md:pb-20 last:border-b-0 animate-rise-blur`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="mb-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
                <div>
                  <span className="chip-accent mb-5">{project.subtitle}</span>
                  <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
                    {project.date}
                  </p>
                  <h2 className="font-display mb-4 text-4xl lg:text-5xl font-bold">
                    {project.title}
                  </h2>
                  <p className="font-body mb-6 text-base text-muted-foreground leading-relaxed md:text-lg">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body font-semibold text-base text-primary hover:text-opacity-70 transition-smooth"
                    >
                      View on GitHub
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Placeholder for project visual */}
                <div className="hidden lg:block">
                  <div className="surface-panel mx-auto flex min-h-[16rem] max-w-[22rem] items-center justify-center rounded-[1.75rem] p-6 animate-glow">
                    <div className="text-center">
                      <span className="chip-accent mb-5">{project.date}</span>
                      <p className="font-display mb-3 text-2xl text-primary">{project.title}</p>
                      <p className="font-body mx-auto max-w-xs text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h4 className="font-display mb-4 text-2xl font-bold">Overview</h4>
                <p className="font-body mb-8 text-base text-muted-foreground leading-relaxed md:text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="font-display mb-4 text-2xl font-bold">Key Features</h4>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="surface-panel flex gap-3 rounded-[1.1rem] p-4 transition-smooth hover:-translate-y-1 hover:bg-secondary/65"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                      <span className="font-body text-sm text-muted-foreground md:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-display mb-4 text-2xl font-bold">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 bg-card/80 px-3 py-2 font-body text-sm text-foreground backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-16 md:py-24 bg-secondary/65 backdrop-blur-sm">
        <div className="max-w-[88rem] mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Want to see more of my work?
          </h2>
          <a
            href="https://github.com/arushrai007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full font-body font-semibold text-base bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-smooth shadow-lg shadow-primary/20"
          >
            Visit My GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
