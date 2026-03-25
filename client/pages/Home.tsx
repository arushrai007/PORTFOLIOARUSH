import { Link } from "react-router-dom";
import { ArrowRight, Download, Eye } from "lucide-react";

export default function Home() {
  const cvFileUrl = "/arushcv(generaledit).pdf";
  const featuredTracks = [
    {
      title: "AI and Data Projects",
      description: "From job matching to AQI prediction and analytics dashboards.",
    },
    {
      title: "Product and Web Builds",
      description: "Responsive applications, portfolio systems, and user-focused interfaces.",
    },
    {
      title: "Leadership and Impact",
      description: "IGNITE contributions, outreach growth, and community project execution.",
    },
  ];
  const aboutHighlights = [
    "Focused on AI, data systems, and full-stack product development.",
    "Building polished user experiences with strong technical foundations.",
    "Growing through campus leadership, experimentation, and shipped projects.",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="absolute left-[8%] top-24 h-40 w-40 rounded-full bg-accent/15 blur-3xl animate-float" />
        <div className="absolute right-[10%] top-[22%] h-56 w-56 rounded-full bg-primary/10 blur-3xl animate-glow" />
        <div className="absolute bottom-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-secondary/70 blur-3xl animate-shimmer" />

        <div className="max-w-[88rem] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="relative flex flex-col justify-center animate-fade-in">
              <div className="surface-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10">
                <div className="absolute inset-x-0 top-0 h-1 accent-line" />
                <div className="mb-8">
                  <span className="theme-chip mb-5">
                    Building thoughtful software, data products, and campus impact
                  </span>
                  <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-[0.35em]">
                    Welcome to my portfolio
                  </p>
                  <h1 className="font-display text-6xl lg:text-7xl font-bold text-balance mb-6">
                    Arush Rai
                  </h1>
                  <p className="font-display text-3xl lg:text-4xl font-semibold text-muted-foreground mb-8">
                    Data Science & Software Developer
                  </p>
                </div>

                <p className="font-body text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                  Computer Science student at Lovely Professional University. Passionate about building
                  intelligent systems and crafting beautiful digital experiences. Specialized in AI,
                  full-stack development, and cloud technologies.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold text-base bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-smooth shadow-lg shadow-primary/20"
                  >
                    View Projects
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href={cvFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold text-base border border-border bg-card/80 text-foreground px-8 py-4 hover:border-primary/50 hover:text-primary transition-smooth"
                    title="View CV"
                  >
                    <Eye size={18} />
                    View CV
                  </a>

                  <a
                    href={cvFileUrl}
                    download="arushcv(generaledit).pdf"
                    className="inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold text-base border border-border bg-card/80 text-foreground px-8 py-4 hover:border-primary/50 hover:text-primary transition-smooth"
                    title="Download CV"
                  >
                    <Download size={18} />
                    Download CV
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold text-base text-primary hover:bg-primary/10 transition-smooth px-6 py-4"
                  >
                    Get in Touch
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {featuredTracks.map((track) => (
                    <div key={track.title} className="rounded-[1.5rem] border border-border/70 bg-card/65 p-5 backdrop-blur-sm">
                      <p className="font-display text-xl mb-2">{track.title}</p>
                      <p className="font-body text-sm text-muted-foreground">{track.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/15 via-secondary/30 to-primary/10 blur-3xl scale-105" />

                <div className="surface-panel relative rounded-[2rem] p-5 animate-float">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="theme-chip">Available for projects and Interships</span>
                    <span className="h-3 w-3 rounded-full bg-accent" />
                  </div>
                  <img
                    src="/profile/arush-hero.png"
                    alt="Arush Rai"
                    className="w-full h-[30rem] object-cover rounded-[1.5rem] shadow-2xl"
                  />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-secondary/70 px-4 py-3 text-center">
                      <p className="font-display text-2xl font-bold">AI</p>
                      <p className="font-body text-xs text-muted-foreground">Systems</p>
                    </div>
                    <div className="rounded-2xl bg-secondary/70 px-4 py-3 text-center">
                      <p className="font-display text-2xl font-bold">Web</p>
                      <p className="font-body text-xs text-muted-foreground">Apps</p>
                    </div>
                    <div className="rounded-2xl bg-secondary/70 px-4 py-3 text-center">
                      <p className="font-display text-2xl font-bold">Data</p>
                      <p className="font-body text-xs text-muted-foreground">Impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
            Explore
          </p>
          <div className="flex flex-col gap-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-1 h-1 bg-foreground rounded-full animate-bounce"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="border-t border-border bg-background/70 py-16 md:py-24 backdrop-blur-sm">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="stat-panel animate-fade-in" style={{ animationDelay: "100ms" }}>
              <p className="font-display text-4xl md:text-5xl font-bold mb-2 text-primary">
                10+
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Projects Completed
              </p>
            </div>

            <div className="stat-panel animate-fade-in" style={{ animationDelay: "200ms" }}>
              <p className="font-display text-4xl md:text-5xl font-bold mb-2 text-primary">
                200K+
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Social Reach
              </p>
            </div>

            <div className="stat-panel animate-fade-in" style={{ animationDelay: "300ms" }}>
              <p className="font-display text-4xl md:text-5xl font-bold mb-2 text-primary">
                10+
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Certifications
              </p>
            </div>

            <div className="stat-panel animate-fade-in" style={{ animationDelay: "400ms" }}>
              <p className="font-display text-4xl md:text-5xl font-bold mb-2 text-primary">
                15+
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Technologies
              </p>
            </div>

            <div className="stat-panel animate-fade-in" style={{ animationDelay: "300ms" }}>
              <p className="font-display text-4xl md:text-5xl font-bold mb-2 text-primary">
                100+
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Open Source Contributions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash py-20 md:py-24">
        <div className="relative max-w-[88rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 items-center">
            <div className="surface-panel rounded-[2rem] p-4 sm:p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-secondary/60">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                <img
                  src="/profile/arush-hero.png"
                  alt="Portrait of Arush Rai"
                  className="h-[24rem] w-full object-cover object-center sm:h-[30rem]"
                />
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-8 md:p-10">
              <span className="theme-chip mb-5">About me</span>
              <h2 className="font-display text-4xl md:text-5xl mb-5">
                Turning curiosity into software, data stories, and real outcomes
              </h2>
              <p className="font-body text-muted-foreground max-w-3xl mb-8">
                I&apos;m Arush Rai, a Computer Science student who enjoys working across
                intelligent systems, web applications, and data-driven problem solving. I care
                about building things that are useful, visually thoughtful, and grounded in real
                execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {aboutHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[1.5rem] border border-border/70 bg-card/70 p-5 backdrop-blur-sm"
                  >
                    <p className="font-body text-sm text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold text-base bg-primary text-primary-foreground px-7 py-4 hover:opacity-90 transition-smooth shadow-lg shadow-primary/20"
                >
                  More About Me
                  <ArrowRight size={18} />
                </Link>

                <p className="font-body text-sm text-muted-foreground">
                  Student builder with interests spanning AI, product engineering, and community
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash py-20 md:py-24">
        <div className="relative max-w-[88rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="surface-panel rounded-[2rem] p-8 lg:col-span-2">
              <span className="theme-chip mb-5">Landing page spotlight</span>
              <h2 className="font-display text-4xl md:text-5xl mb-4">Software, analytics, and community work in one place</h2>
              <p className="font-body text-muted-foreground max-w-2xl">
                This portfolio brings together product building, AI experimentation, dashboards, and leadership work so visitors immediately understand both technical range and real-world execution.
              </p>
            </div>
            <div className="surface-panel rounded-[2rem] p-8">
              <span className="chip-accent mb-5">Current focus</span>
              <p className="font-display text-2xl mb-3">Building stronger full-stack and data products</p>
              <p className="font-body text-muted-foreground">
                Exploring production-ready apps, better UI systems, and analytics-led project storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
