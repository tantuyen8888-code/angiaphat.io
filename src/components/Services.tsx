import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceSteel from "@/assets/service-steel.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceSupervision from "@/assets/service-supervision.jpg";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const services = [
    {
      image: serviceResidential,
      title: "Xây dựng dân dụng",
      description: "Thi công nhà ở, biệt thự, chung cư cao cấp với thiết kế hiện đại và chất lượng vượt trội.",
    },
    {
      image: serviceIndustrial,
      title: "Xây dựng công nghiệp",
      description: "Xây dựng nhà xưởng, kho bãi, khu công nghiệp đạt tiêu chuẩn quốc tế.",
    },
    {
      image: serviceRenovation,
      title: "Cải tạo & Sửa chữa",
      description: "Dịch vụ cải tạo, nâng cấp và sửa chữa công trình với chi phí hợp lý.",
    },
    {
      image: serviceSteel,
      title: "Cơ khí xây dựng",
      description: "Gia công, lắp đặt kết cấu thép, khung nhà xưởng, mái che công nghiệp.",
    },
    {
      image: serviceDesign,
      title: "Thiết kế kiến trúc",
      description: "Tư vấn và thiết kế kiến trúc, nội thất với phong cách độc đáo, sáng tạo.",
    },
    {
      image: serviceSupervision,
      title: "Giám sát công trình",
      description: "Dịch vụ giám sát thi công chuyên nghiệp, đảm bảo tiến độ và chất lượng.",
    },
  ];

  return (
    <section 
      id="services" 
      className="py-24 bg-background relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Lĩnh vực hoạt động
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
            Dịch vụ của{" "}
            <span className="text-primary font-extrabold">chúng tôi</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Chúng tôi cung cấp đầy đủ các dịch vụ xây dựng từ A đến Z, 
            đáp ứng mọi nhu cầu của khách hàng.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative rounded-2xl overflow-hidden border border-border/50 bg-card transition-all duration-500 hover:border-primary/50 hover:-translate-y-3 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-16"
              }`}
              style={{ 
                transitionDelay: `${200 + index * 100}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10" />
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
              
              {/* Content */}
              <div className="relative p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center justify-between group-hover:text-primary transition-colors duration-300">
                  {service.title}
                  <div className="relative">
                    <ArrowUpRight className="h-5 w-5 text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-md" />
                  </div>
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Multi-layer gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 pointer-events-none" />
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
