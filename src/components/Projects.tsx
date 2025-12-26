import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, ExternalLink } from "lucide-react";

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cao ốc văn phòng ABC Tower",
      category: "Thương mại",
      location: "TP. Hồ Chí Minh",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Biệt thự nghỉ dưỡng Đà Lạt",
      category: "Dân dụng",
      location: "Lâm Đồng",
    },
    {
      image: "https://images.unsplash.com/photo-1565636291267-c2820e0cffc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Nhà máy sản xuất XYZ",
      category: "Công nghiệp",
      location: "Bình Dương",
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Khu đô thị mới Sunrise",
      category: "Dân dụng",
      location: "Hà Nội",
    },
    {
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Trung tâm thương mại Metro",
      category: "Thương mại",
      location: "Đà Nẵng",
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Villa hiện đại Phú Quốc",
      category: "Dân dụng",
      location: "Kiên Giang",
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-24 bg-muted relative overflow-hidden"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
            Dự án tiêu biểu
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
            Công trình chúng tôi đã{" "}
            <span className="text-primary font-extrabold">thực hiện</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Khám phá những dự án nổi bật mà An Gia Phát đã hoàn thành với chất lượng xuất sắc.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-card shadow-md cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* View button */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ExternalLink className="h-5 w-5 text-primary-foreground" />
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground border-0 mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">{project.title}</h3>
                  <p className="text-primary-foreground/80 text-sm flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </p>
                </div>
              </div>
              
              {/* Bottom info bar (visible by default) */}
              <div className="p-5 bg-card group-hover:opacity-0 transition-opacity duration-300">
                <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;