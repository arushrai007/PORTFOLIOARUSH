import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Email will be sent via mailto link
    const mailtoLink = `mailto:arushrai007@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "arushrai007@gmail.com",
      href: "mailto:arushrai007@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7355049253",
      href: "tel:+917355049253",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ArushRai",
      href: "https://github.com/arushrai007",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ArushRai",
      href: "https://linkedin.com/in/ArushRai",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="animate-fade-in surface-panel rounded-[2rem] p-6 md:p-7">
            <span className="theme-chip mb-5">Open to projects, internships, and collaborations</span>
            <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-5">
              Contact
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to
              reach out via email, phone, or any of my social channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-wash py-24 md:py-32">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="animate-fade-in surface-panel rounded-[2rem] p-8 md:p-10">
              <h2 className="font-display text-4xl font-bold mb-12">
                Let's Connect
              </h2>

              <div className="space-y-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={index}
                      className="animate-slide-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {method.href ? (
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-6 rounded-[1.5rem] border border-border bg-card/70 p-6 hover:-translate-y-1 hover:bg-secondary/60 hover:border-primary/30 transition-smooth group"
                        >
                          <Icon
                            size={24}
                            className="flex-shrink-0 mt-1 text-primary group-hover:text-accent transition-colors"
                          />
                          <div>
                            <p className="font-body text-sm text-muted-foreground mb-1 uppercase tracking-widest">
                              {method.label}
                            </p>
                            <p className="font-body text-lg font-semibold">
                              {method.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-6 rounded-[1.5rem] border border-border bg-secondary/65 p-6">
                          <Icon size={24} className="flex-shrink-0 mt-1 text-primary" />
                          <div>
                            <p className="font-body text-sm text-muted-foreground mb-1 uppercase tracking-widest">
                              {method.label}
                            </p>
                            <p className="font-body text-lg font-semibold">
                              {method.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-up surface-panel rounded-[2rem] p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-sm font-semibold mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[1.25rem] px-6 py-4 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth bg-background/80 text-foreground placeholder-muted-foreground font-body"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[1.25rem] px-6 py-4 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth bg-background/80 text-foreground placeholder-muted-foreground font-body"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[1.25rem] px-6 py-4 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth bg-background/80 text-foreground placeholder-muted-foreground font-body"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-[1.25rem] px-6 py-4 border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth bg-background/80 text-foreground placeholder-muted-foreground font-body resize-none"
                    placeholder="Tell me more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary text-primary-foreground font-body font-semibold text-base py-4 hover:opacity-90 transition-smooth shadow-lg shadow-primary/20"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t border-border py-16 md:py-24 bg-secondary/65 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or just want to say hello, feel free to
            get in touch. I'll do my best to respond within 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
}
