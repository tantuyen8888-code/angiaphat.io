import { ArrowRight, Building2, Award, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            animation: 'pulse 4s ease-in-out infinite alternate'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full"
          style={{ animation: 'spin 60s linear infinite' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full"
          style={{ animation: 'spin 40s linear infinite reverse' }}
        />
      </div>

      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) scale(1.1)`
        }}
      />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-3xl">
          {/* Badge with glow effect */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 backdrop-blur-md border border-primary/30 bg-primary/10"
            style={{
              boxShadow: '0 0 30px hsl(var(--primary) / 0.2), inset 0 1px 0 hsl(0 0% 100% / 0.1)',
              animation: 'fadeSlideUp 0.8s ease-out forwards',
              opacity: 0,
            }}
          >
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Hơn 15 năm kinh nghiệm</span>
          </div>
          
          {/* Main heading with modern typography */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]"
            style={{
              animation: 'fadeSlideUp 0.8s ease-out 0.2s forwards',
              opacity: 0,
            }}
          >
            <span className="text-primary-foreground block">Xây Dựng Ước Mơ</span>
            <span className="block text-primary mt-2 relative font-extrabold">
              Kiến Tạo Tương Lai
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse"/>
              </svg>
            </span>
          </h1>
          
          {/* Description with better typography */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed font-light"
            style={{
              animation: 'fadeSlideUp 0.8s ease-out 0.4s forwards',
              opacity: 0,
            }}
          >
            Công ty TNHH Cơ Khí Xây Dựng <span className="text-primary font-medium">An Gia Phát</span> - Đối tác tin cậy trong lĩnh vực 
            xây dựng công trình dân dụng và công nghiệp với chất lượng hàng đầu.
          </p>
          
          {/* CTA Buttons with modern effects */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            style={{
              animation: 'fadeSlideUp 0.8s ease-out 0.6s forwards',
              opacity: 0,
            }}
          >
            <Button 
              size="lg" 
              className="group relative bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Khám phá dự án
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-lg px-8 h-14 backdrop-blur-sm"
            >
              Liên hệ tư vấn
            </Button>
          </div>
          
          {/* Stats with glassmorphism */}
          <div 
            className="grid grid-cols-3 gap-4 md:gap-6"
            style={{
              animation: 'fadeSlideUp 0.8s ease-out 0.8s forwards',
              opacity: 0,
            }}
          >
            {[
              { icon: Building2, value: "500+", label: "Dự án hoàn thành" },
              { icon: Users, value: "200+", label: "Nhân viên chuyên nghiệp" },
              { icon: Award, value: "15+", label: "Năm kinh nghiệm" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="group text-center p-5 md:p-7 rounded-2xl border border-primary-foreground/10 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.05), hsl(0 0% 100% / 0.02))',
                  boxShadow: '0 8px 32px hsl(0 0% 0% / 0.1), inset 0 1px 0 hsl(0 0% 100% / 0.05)',
                }}
              >
                <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-primary mx-auto mb-3 transition-transform group-hover:scale-110" />
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-primary-foreground/60 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50"
        style={{
          animation: 'bounce 2s ease-in-out infinite',
        }}
      >
        <span className="text-xs font-medium tracking-wider uppercase">Cuộn xuống</span>
        <ChevronDown className="h-5 w-5" />
      </div>

      {/* Inline animations */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;