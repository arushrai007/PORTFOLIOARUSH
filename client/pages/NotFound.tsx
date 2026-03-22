import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="surface-panel max-w-2xl rounded-[2rem] mx-auto p-10 text-center animate-fade-in">
        <span className="theme-chip mb-5">Route not found</span>
        <p className="font-body text-sm text-muted-foreground mb-4 uppercase tracking-widest">
          Error 404
        </p>
        <h1 className="font-display text-7xl lg:text-8xl font-bold mb-6">
          Oops!
        </h1>
        <p className="font-body text-2xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          It seems like you've stumbled upon a page that isn't part of my portfolio. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full font-body font-semibold text-base bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-smooth shadow-lg shadow-primary/20"
        >
          Return to Home
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
