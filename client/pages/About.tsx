import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const skillPalettes = [
    "skill-card-amber",
    "skill-card-cyan",
    "skill-card-rose",
    "skill-card-violet",
    "skill-card-emerald",
    "skill-card-gold",
  ];

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      school: "Lovely Professional University, Punjab, India",
      period: "2023 - Present",
      score: "CGPA: 7.8",
    },
    {
      degree: "Higher Secondary",
      school: "Aatmadeep Vidyalaya, Gorakhpur, Uttar Pradesh",
      period: "Completed April 2023",
      score: "CGPA: 6.8",
    },
    {
      degree: "Secondary School",
      school: "HP Children's Academy, Gorakhpur, Uttar Pradesh",
      period: "Completed April 2021",
      score: "CGPA: 8.6",
    },
  ];

  const technicalSkills = [
    "C/C++",
    "Java",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "NumPy",
    "Pandas",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Power BI",
  ];

  const additionalSkills = [
    "Video Editing",
    "Social Media Management",
    "Content Strategy",
    "UI/UX Design",
    "Project Leadership",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="relative max-w-[88rem] mx-auto px-6">
          <div className="animate-fade-in surface-panel rounded-[2rem] p-6 md:p-7">
            <span className="theme-chip mb-5">Skills, education, and creative range</span>
            <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Get to know me
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-5">
              About
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm a Computer Science student at Lovely Professional University with a passion for
              building intelligent systems and crafting elegant digital solutions. With expertise in
              full-stack development, data science, and cloud technologies, I create products that
              solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-wash py-24 md:py-32">
        <div className="relative max-w-[88rem] mx-auto px-6">
          {/* Technical Skills */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold mb-12">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className={`skill-card ${skillPalettes[index % skillPalettes.length]}`}>
                    <p className="relative z-10 font-body font-semibold text-center">{skill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mb-20">
            <h2 className="font-display text-4xl font-bold mb-12">Additional Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={`skill-card ${skillPalettes[(index + 2) % skillPalettes.length]} flex items-center gap-4 animate-slide-in-up`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative z-10 w-3 h-3 bg-accent rounded-full flex-shrink-0" />
                  <p className="relative z-10 font-body font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display text-4xl font-bold mb-12">Education</h2>
            <div className="grid gap-6">
              {education.map((item) => (
                <div key={item.degree} className="surface-panel rounded-[2rem] p-8">
                  <span className="chip-accent mb-5">{item.period}</span>
                  <h3 className="font-display text-2xl font-bold mb-2">{item.degree}</h3>
                  <p className="font-body text-lg text-muted-foreground mb-4">{item.school}</p>
                  <p className="font-body text-lg font-semibold text-primary">{item.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-16 md:py-24 bg-secondary/65 backdrop-blur-sm">
        <div className="max-w-[88rem] mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Interested in working together?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full font-body font-semibold text-base bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-smooth shadow-lg shadow-primary/20"
          >
            Let's Connect
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
