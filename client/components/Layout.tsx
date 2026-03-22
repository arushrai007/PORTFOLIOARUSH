import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Certificates", path: "/certificates" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferredTheme =
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = savedTheme ?? preferredTheme;

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="max-w-[88rem] mx-auto px-6 py-5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl font-bold tracking-[0.2em] hover:opacity-70 transition-opacity"
          >
            AR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm font-medium transition-smooth ${
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative pb-1">
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-left accent-line transition-smooth ${
                      isActive(item.path) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-chip transition-smooth hover:border-foreground/30 hover:text-foreground"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"} mode</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full border border-border/80 bg-card/80 p-2 hover:bg-muted transition-smooth"
              aria-label="Toggle menu"
              type="button"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/70 bg-background/95 backdrop-blur-xl">
            <div className="max-w-[88rem] mx-auto px-6 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-body text-sm font-medium transition-smooth ${
                    isActive(item.path)
                      ? "border-l-2 border-primary pl-4 text-foreground"
                      : "border-l-2 border-transparent pl-4 text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-200px)] relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="max-w-[88rem] mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-body text-sm text-muted-foreground">
                Crafted with attention to detail
              </p>
            </div>
            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground">
                © 2026 Arush Rai
              </p>
            </div>
            <div className="text-right">
              <p className="font-body text-sm text-muted-foreground">
                Available for opportunities
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/ArushRai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-foreground hover:text-primary transition-smooth"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ArushRai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-foreground hover:text-primary transition-smooth"
            >
              LinkedIn
            </a>
            <a
              href="mailto:arushrai007@gmail.com"
              className="font-body text-sm text-foreground hover:text-primary transition-smooth"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
