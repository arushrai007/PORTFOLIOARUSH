import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Experience {
  organization: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  photos: string[];
  externalUrl: string;
  externalLabel: string;
}

export default function Experience() {
  const [monthlyReach, setMonthlyReach] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 200;
    const interval = setInterval(() => {
      current += 5;
      if (current > target) {
        current = target;
        clearInterval(interval);
      }
      setMonthlyReach(current);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  const experiences: Experience[] = [
    {
      organization: "IGNITE LPU",
      role: "Social Media Lead / CTO Team Contributor",
      period: "2024 - 2025",
      description:
        "Led comprehensive social media strategy for IGNITE LPU's official Instagram channel, managing content creation, community engagement, and brand positioning. Transformed the channel into a vibrant hub for university announcements, student achievements, and campus culture.",
      achievements: [
        "Managed Instagram: @ignite.lpu",
        "Achieved 200K+ monthly reach",
        "Increased follower engagement by 150%",
        "Led 8+ successful campaigns and promotions",
        "Coordinated IGNITE Premier League event with 500+ participants",
      ],
      photos: [
        "/experience/ignite-award-stage.png",
        "/experience/ignite-team-night.png",
        "/experience/ignite-desk-work.png",
        "/experience/ignite-formal-team.png",
        "/experience/ignite-times-cover.png",
        "/experience/ignite-tier3-poster.png",
      ],
      externalUrl: "https://www.instagram.com/ignite.lpu/",
      externalLabel: "Visit Instagram Channel",
    },
    {
      organization: "Matrichhaya Foundation",
      role: "Volunteer & Project Lead",
      period: "2024",
      description:
        "Actively contributed to social welfare initiatives at Matrichhaya Foundation, a shelter home dedicated to supporting vulnerable women through care, rehabilitation, and community outreach. Participated in community development projects and awareness campaigns.",
      achievements: [
        "Completed Community Development Project with 40+ hours of dedicated service",
        "Organized awareness and support programs for underprivileged women",
        "Contributed to welfare initiatives and skill development programs",
        "Worked on sustainable community development solutions",
      ],
      photos: [
        "/experience/matrichhaya-fieldwork.png",
        "/experience/matrichhaya-group.png",
        "/experience/matrichhaya-certificate.png",
      ],
      externalUrl: "https://www.linkedin.com/in/arushrai/",
      externalLabel: "Learn More on LinkedIn",
    },
  ];

  const achievements = [
    {
      date: "October 2025",
      title: "Smart India Hackathon 2025",
      description: "Gear Up Season 4 - Building innovative solutions for real-world problems",
      category: "Hackathon",
    },
    {
      date: "October 2025",
      title: "SPEEDATHON at IEEE Day 2025",
      description:
        "Organized by IEEE GTBIT SB and Delhi Technological University (DTU). Fast-paced coding competition.",
      category: "Competition",
    },
    {
      date: "November 2025",
      title: "Top 5% in NPTEL Cloud Computing",
      description:
        "Secured Top 5% rank demonstrating excellence in MapReduce, distributed storage, Kubernetes basics, and cloud security frameworks.",
      category: "Achievement",
    },
    {
      date: "November 2025",
      title: "3-Day Open-Source Kickoff",
      description:
        "Conducted by Synex, LPU - Focused on open-source contribution and collaborative development practices.",
      category: "Workshop",
    },
    {
      date: "March 2024",
      title: "Code-A-Haunt Hackathon 2024",
      description:
        "Secured 3rd place for developing an interactive cultural website showcasing India's heritage and diversity.",
      category: "Hackathon",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="animate-fade-in surface-panel rounded-[2rem] p-6 md:p-7">
            <span className="theme-chip mb-5">Leadership, volunteering, and visible outcomes</span>
            <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Career
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-5">
              Experience
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A journey of continuous learning, leadership, and impact through diverse roles and
              experiences in tech and community building.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      {experiences.map((exp, index) => (
        <section
          key={index}
          className={`section-wash border-b border-border py-24 md:py-32 ${
            index % 2 === 1 ? "bg-secondary/45" : ""
          }`}
        >
          <div className="relative max-w-7xl mx-auto px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`animate-fade-in surface-panel rounded-[2rem] p-8 md:p-10 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <span className="chip-accent mb-5">{exp.role}</span>
                <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
                  {exp.period}
                </p>
                <h2 className="font-display text-5xl lg:text-6xl font-bold mb-4">
                  {exp.organization}
                </h2>
                <h3 className="font-body text-2xl text-muted-foreground mb-8">{exp.role}</h3>

                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-8">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-3 h-3 bg-accent rounded-full flex-shrink-0 mt-2" />
                      <p className="font-body text-lg">{achievement}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={exp.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-semibold text-base text-primary hover:text-opacity-70 transition-smooth"
                >
                  {exp.externalLabel}
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Experience Photos */}
              <div className="animate-slide-in-up lg:order-1">
                <div className="surface-panel rounded-[2rem] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 overflow-hidden rounded-[1.5rem] border border-border hover:border-foreground transition-smooth">
                      <img
                        src={exp.photos[0]}
                        alt={`${exp.organization} featured`}
                        className="w-full h-[28rem] object-cover"
                      />
                    </div>
                    {exp.photos.slice(1).map((photo, photoIndex) => (
                      <div
                        key={`${exp.organization}-photo-${photoIndex + 1}`}
                        className="overflow-hidden rounded-[1.5rem] border border-border hover:border-foreground transition-smooth"
                      >
                        <img
                          src={photo}
                          alt={`${exp.organization} experience ${photoIndex + 2}`}
                          className="w-full h-56 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {index === 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="stat-panel">
                      <p className="font-display text-3xl font-bold text-primary">{monthlyReach}K+</p>
                      <p className="font-body text-xs text-muted-foreground">Monthly Reach</p>
                    </div>
                    <div className="stat-panel">
                      <p className="font-display text-3xl font-bold text-primary">150%</p>
                      <p className="font-body text-xs text-muted-foreground">Engagement Growth</p>
                    </div>
                    <div className="stat-panel">
                      <p className="font-display text-3xl font-bold text-primary">8+</p>
                      <p className="font-body text-xs text-muted-foreground">Campaigns</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Achievements Timeline */}
      <section className="section-wash py-24 md:py-32">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-16 animate-fade-in surface-panel rounded-[2rem] p-8 md:p-10">
            <span className="theme-chip mb-5">Highlights across competitions and learning</span>
            <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Timeline
            </p>
            <h2 className="font-display text-5xl font-bold">
              Notable Achievements
            </h2>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group surface-panel animate-fade-in cursor-default rounded-[1.75rem] p-8 hover:-translate-y-1 hover:bg-secondary/60 transition-smooth"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div>
                    <p className="font-body text-sm text-muted-foreground mb-2 uppercase tracking-widest">
                      {achievement.date}
                    </p>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      {achievement.title}
                    </h3>
                    <p className="font-body text-lg text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                  <span className="flex-shrink-0 rounded-full px-4 py-2 bg-primary text-primary-foreground font-body text-xs font-semibold uppercase">
                    {achievement.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-16 md:py-24 bg-secondary/65 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Looking to collaborate on exciting projects?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full font-body font-semibold text-base bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-smooth shadow-lg shadow-primary/20"
          >
            Get In Touch
            <ExternalLink size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
