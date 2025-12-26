import { CheckCircle2, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import aboutBanner from "@/assets/about-banner.jpg";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const features = [
    "Đội ngũ kỹ sư và công nhân lành nghề",
    "Trang thiết bị máy móc hiện đại",
    "Cam kết tiến độ và chất lượng",
    "Giá cả cạnh tranh, minh bạch",
    "Bảo hành công trình dài hạn",
    "Tư vấn thiết kế chuyên nghiệp",
  ];

  return (
    <section 
      id="about" 
      className="relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src={aboutBanner}
          alt="Công trình xây dựng An Gia Phát"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center transition-all duration-1000 tracking-tight ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            Giới thiệu
          </h2>
          <div className={`w-20 h-1 bg-primary-foreground mt-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`} />
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-muted relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Company Info */}
            <div 
              className={`mb-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Về chúng tôi
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                Công ty TNHH Cơ Khí Xây Dựng{" "}
                <span className="text-primary font-extrabold">An Gia Phát</span>
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                Được thành lập từ năm 2008, An Gia Phát đã không ngừng phát triển và khẳng định 
                vị thế trong ngành xây dựng Việt Nam. Chúng tôi tự hào mang đến những công trình 
                chất lượng cao, đáp ứng mọi yêu cầu khắt khe của khách hàng.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Với phương châm <span className="text-foreground font-semibold">"Chất lượng - Uy tín - Chuyên nghiệp"</span>, 
                chúng tôi cam kết đồng hành cùng khách hàng trong mọi dự án.
              </p>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { number: "15+", label: "Năm kinh nghiệm" },
                { number: "500+", label: "Dự án hoàn thành" },
                { number: "100+", label: "Nhân viên" },
                { number: "50+", label: "Đối tác" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features grid */}
            <div 
              className={`grid sm:grid-cols-2 gap-4 mb-8 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-background"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div 
              className={`text-center transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Tìm hiểu thêm
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
