import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo-agp.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref: footerRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <footer 
      className="bg-secondary text-secondary-foreground"
      ref={footerRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div 
            className={`transition-all duration-700 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <img src={logo} alt="An Gia Phát Logo" className="h-16 w-auto mb-4 bg-secondary-foreground rounded p-1" />
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Công ty TNHH Cơ Khí Xây Dựng An Gia Phát - Đối tác tin cậy trong lĩnh vực xây dựng.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">Trang chủ</a></li>
              <li><a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">Giới thiệu</a></li>
              <li><a href="#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Dịch vụ</a></li>
              <li><a href="#projects" className="text-secondary-foreground/80 hover:text-primary transition-colors">Dự án</a></li>
              <li><a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Dịch vụ</h3>
            <ul className="space-y-3">
              <li><span className="text-secondary-foreground/80">Xây dựng dân dụng</span></li>
              <li><span className="text-secondary-foreground/80">Xây dựng công nghiệp</span></li>
              <li><span className="text-secondary-foreground/80">Cơ khí xây dựng</span></li>
              <li><span className="text-secondary-foreground/80">Thiết kế kiến trúc</span></li>
              <li><span className="text-secondary-foreground/80">Sửa chữa & Cải tạo</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">123 Đường ABC, Quận XYZ, TP. HCM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">0123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">info@angiaphat.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div 
          className={`border-t border-secondary-foreground/20 mt-8 pt-8 text-center transition-all duration-700 delay-500 ${
            isVisible 
              ? "opacity-100" 
              : "opacity-0"
          }`}
        >
          <p className="text-secondary-foreground/60">
            © 2024 An Gia Phát Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
