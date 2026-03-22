import { Download, ExternalLink } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  verified: boolean;
  description: string;
  credentialUrl?: string;
  downloadUrl?: string;
  image?: string;
  accent: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Machine Learning with Python Professional Certificate",
      issuer: "LinkedIn Learning & Anaconda",
      date: "February 2026",
      skills: ["Machine Learning", "Python", "Artificial Intelligence"],
      verified: true,
      description:
        "Comprehensive certification covering machine learning fundamentals, algorithms, and practical implementation using Python.",
      credentialUrl: "/certificates/machine-learning-anaconda.png",
      downloadUrl: "/certificates/machine-learning-anaconda.png",
      image: "/certificates/machine-learning-anaconda.png",
      accent: "from-cyan-400/25 via-sky-500/10 to-transparent",
    },
    {
      id: 2,
      title: "Fundamentals of Network Communication",
      issuer: "University of Colorado",
      date: "September 2024",
      skills: ["Network Communication", "Networking Basics"],
      verified: true,
      description:
        "In-depth study of network communication protocols, architecture, and real-world applications.",
      downloadUrl: "/certificates/colorado-network-communication.png",
      image: "/certificates/colorado-network-communication.png",
      credentialUrl: "https://coursera.org/verify/C7I9Q1PL9QPQ",
      accent: "from-amber-400/25 via-orange-500/10 to-transparent",
    },
    {
      id: 3,
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "September 2024",
      skills: ["Computer Networking", "Network Fundamentals"],
      verified: true,
      description:
        "Google's comprehensive introduction to computer networking, covering protocols, infrastructure, and troubleshooting.",
      downloadUrl: "/certificates/google-bits-bytes-networking.png",
      image: "/certificates/google-bits-bytes-networking.png",
      credentialUrl: "https://coursera.org/verify/1L7DXX4RVQED",
      accent: "from-emerald-400/25 via-lime-500/10 to-transparent",
    },
    {
      id: 4,
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM",
      date: "December 2024",
      skills: ["Hardware", "Operating Systems"],
      verified: true,
      description:
        "Introduction to computer hardware components and operating system concepts, architecture, and management.",
      downloadUrl: "/certificates/ibm-hardware-operating-systems.png",
      image: "/certificates/ibm-hardware-operating-systems.png",
      credentialUrl: "https://coursera.org/verify/LA3E65M5NKG7",
      accent: "from-violet-400/25 via-indigo-500/10 to-transparent",
    },
    {
      id: 5,
      title: "Data Structures and Algorithm",
      issuer: "Lovely Professional University",
      date: "December 2024",
      skills: ["Data Structures", "Algorithms", "Java"],
      verified: true,
      description:
        "Advanced course on data structures and algorithms, including design patterns and optimization techniques.",
      downloadUrl: "/certificates/data-structures-lpu.png",
      image: "/certificates/data-structures-lpu.png",
      accent: "from-rose-400/25 via-pink-500/10 to-transparent",
    },
    {
      id: 6,
      title: "Java Programming",
      issuer: "iAmNeo EdTech",
      date: "May 2025",
      skills: ["Java", "Object-Oriented Programming"],
      verified: true,
      description:
        "Comprehensive Java programming certification covering OOP concepts, design patterns, and best practices.",
      downloadUrl: "/certificates/java-programming-iamneo.png",
      image: "/certificates/java-programming-iamneo.png",
      accent: "from-yellow-400/25 via-amber-500/10 to-transparent",
    },
    {
      id: 7,
      title: "Software Engineering: Implementation and Testing",
      issuer: "Coursera",
      date: "May 2024",
      skills: ["Software Engineering", "Testing", "Implementation"],
      verified: true,
      description:
        "Practical course on software engineering principles, implementation strategies, and comprehensive testing methodologies.",
      credentialUrl: "https://coursera.org/verify/fyMNY4T4TFYE",
      downloadUrl: "/certificates/software-engineering-coursera.png",
      image: "/certificates/software-engineering-coursera.png",
      accent: "from-fuchsia-400/25 via-purple-500/10 to-transparent",
    },
    {
      id: 8,
      title: "Cloud Computing (Elite - Top 5%)",
      issuer: "NPTEL - Ministry of Education, India",
      date: "November 2025",
      skills: ["Cloud Computing", "MapReduce", "Kubernetes", "Cloud Security"],
      verified: true,
      description:
        "Advanced cloud computing certification with top 5% performance, covering distributed systems, Kubernetes, and cloud security frameworks.",
      credentialUrl: "/certificates/cloud-computing-nptel.jpeg",
      downloadUrl: "/certificates/cloud-computing-nptel.jpeg",
      image: "/certificates/cloud-computing-nptel.jpeg",
      accent: "from-blue-400/25 via-cyan-500/10 to-transparent",
    },
    {
      id: 9,
      title: "Digital Systems: From Logic Gates to Processors",
      issuer: "Universitat Autonoma de Barcelona",
      date: "September 2024",
      skills: ["Digital Systems", "Logic Gates", "Computer Architecture"],
      verified: true,
      description:
        "Coursework focused on logic gates, processor fundamentals, and the digital systems concepts that connect hardware design to modern computing.",
      credentialUrl: "https://coursera.org/verify/ZV7AVD0GNFLQ",
      downloadUrl: "/certificates/logic-gates-uab.png",
      image: "/certificates/logic-gates-uab.png",
      accent: "from-teal-400/25 via-emerald-500/10 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="relative max-w-[88rem] mx-auto px-6">
          <div className="animate-rise-blur surface-panel rounded-[2rem] p-6 md:p-7">
            <span className="theme-chip mb-5">Verified learning and recent milestones</span>
            <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Credentials
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-5">
              Certifications
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A comprehensive collection of professional certifications from leading institutions and
              platforms. Each certification represents dedicated learning and expertise in specific
              domains.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="section-wash section-merge py-20 md:py-24">
        <div className="relative max-w-[88rem] mx-auto px-6">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3 animate-rise-blur">
            <div className="surface-panel rounded-[2rem] p-8 lg:col-span-2">
              <span className="theme-chip mb-5">Certificate showcase</span>
              <h2 className="font-display text-4xl mb-4">A growing record of hands-on learning across software, systems, and AI</h2>
              <p className="font-body text-muted-foreground max-w-2xl">
                These cards collect coursework from Coursera, NPTEL, LinkedIn Learning, and university-led programs that support my work in software engineering, networking, cloud, and machine learning.
              </p>
            </div>
            <div className="surface-panel rounded-[2rem] p-8">
              <span className="chip-accent mb-5">Updated portfolio assets</span>
              <p className="font-display text-2xl mb-3">Certificate previews and direct downloads</p>
              <p className="font-body text-muted-foreground">
                Available certificate images now open directly from the page, while the remaining entries stay listed with their titles, issuers, and learning focus.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((cert, index) => (
              <article
                key={cert.id}
                className="animate-rise-blur"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div
                  className={`surface-panel group flex h-full min-h-[23.5rem] flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-gradient-to-br ${cert.accent} p-0 transition-smooth hover:-translate-y-1 hover:border-primary/30`}
                >
                  <div className="relative h-40 overflow-hidden border-b border-border/70 bg-card/30">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-end bg-card/40 p-6">
                        <div>
                          <span className="theme-chip mb-4 w-fit">Certificate Preview</span>
                          <p className="font-display text-2xl">{cert.title}</p>
                        </div>
                      </div>
                    )}
                    {cert.verified && (
                      <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                        VERIFIED
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between bg-card/92 p-5">
                    <div>
                      <p className="font-body mb-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                        {cert.date}
                      </p>
                      <h3 className="font-display mb-2 line-clamp-2 text-xl leading-snug">
                        {cert.title}
                      </h3>
                      <p className="font-body mb-2 text-sm leading-snug text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <p className="font-body truncate text-sm leading-snug text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      {(cert.downloadUrl ?? cert.credentialUrl) && (
                        <a
                          href={cert.downloadUrl ?? cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-smooth hover:opacity-90"
                        >
                          <Download size={15} />
                          Open
                        </a>
                      )}
                      {cert.credentialUrl && cert.credentialUrl.startsWith("http") && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-4 py-2 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
                        >
                          <ExternalLink size={15} />
                          Verify
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="border-t border-border py-16 md:py-24 bg-secondary/65 backdrop-blur-sm">
        <div className="max-w-[88rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat-panel animate-fade-in">
              <p className="font-display text-5xl font-bold mb-2 text-primary">9+</p>
              <p className="font-body text-sm text-muted-foreground">
                Professional Certifications
              </p>
            </div>
            <div className="stat-panel animate-fade-in" style={{ animationDelay: "100ms" }}>
              <p className="font-display text-5xl font-bold mb-2 text-primary">100%</p>
              <p className="font-body text-sm text-muted-foreground">
                Verified & Authentic
              </p>
            </div>
            <div className="stat-panel animate-fade-in" style={{ animationDelay: "200ms" }}>
              <p className="font-display text-5xl font-bold mb-2 text-primary">2024-2026</p>
              <p className="font-body text-sm text-muted-foreground">
                Recent Achievements
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
