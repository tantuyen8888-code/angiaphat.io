import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-agp.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Trang chủ", href: "#home" },
    { label: "Giới thiệu", href: "#about" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Dự án", href: "#projects" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 shadow-lg backdrop-blur-xl border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      {/* Top bar - hidden when scrolled */}
      <div 
        className={`bg-secondary text-secondary-foreground overflow-hidden transition-all duration-500 ${
          isScrolled ? 'h-0 opacity-0' : 'h-auto py-2 opacity-100'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0123456789" className="flex items-center gap-2 hover:text-primary transition-colors group">
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span className="hidden sm:inline font-medium">0123 456 789</span>
            </a>
            <a href="mailto:info@angiaphat.com" className="flex items-center gap-2 hover:text-primary transition-colors group">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline font-medium">info@angiaphat.com</span>
            </a>
          </div>
          <span className="hidden md:block font-medium tracking-wide">Chất lượng • Uy tín • Chuyên nghiệp</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with modern effect */}
          <a href="#home" className="flex items-center gap-3 group">
            <div 
              className={`relative overflow-hidden rounded-xl p-2 transition-all duration-500 ${
                isScrolled 
                  ? 'bg-card shadow-md border border-border/50' 
                  : 'bg-background/10 backdrop-blur-md border border-primary-foreground/10'
              }`}
              style={{
                boxShadow: isScrolled ? undefined : '0 8px 32px hsl(0 0% 0% / 0.1)',
              }}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                style={{
                  background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />
              <img 
                src={logo} 
                alt="An Gia Phát Logo" 
                className="relative h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Company name - visible on larger screens */}
            <div className={`hidden xl:block transition-colors duration-500 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              <div className="font-bold text-sm leading-tight">CÔNG TY TNHH CƠ KHÍ XÂY DỰNG</div>
              <div className="text-lg font-bold tracking-wide">AN GIA PHÁT</div>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary hover:bg-primary/5' 
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
            <Button 
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
            >
              Báo giá miễn phí
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-foreground hover:bg-muted' 
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav 
            className="py-4 px-2 rounded-2xl border border-border/50 backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--background) / 0.95), hsl(var(--background) / 0.9))',
            }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 px-4 py-3 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-3 mx-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Báo giá miễn phí
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;