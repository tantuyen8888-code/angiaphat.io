import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh",
    },
    {
      icon: Phone,
      title: "Điện thoại",
      content: "0123 456 789",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@angiaphat.com",
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 7: 8:00 - 17:30",
    },
  ];

  return (
    <section 
      id="contact" 
      className="pt-28 pb-20 bg-background"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Liên hệ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
            Hãy liên hệ với chúng tôi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn miễn phí cho mọi nhu cầu xây dựng của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 p-4 bg-muted rounded-lg transition-all duration-500 ${
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div 
              className={`aspect-video bg-muted rounded-lg overflow-hidden transition-all duration-700 delay-500 ${
                isVisible 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4694!2d106.6297!3d10.7758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzMzLjAiTiAxMDbCsDM3JzQ3LjAiRQ!5e0!3m2!1svi!2svn!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="An Gia Phát Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`bg-card p-8 rounded-lg shadow-lg border border-border transition-all duration-700 delay-300 ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Gửi yêu cầu tư vấn</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Họ và tên *
                  </label>
                  <Input id="name" placeholder="Nhập họ và tên" className="bg-background" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Số điện thoại *
                  </label>
                  <Input id="phone" placeholder="Nhập số điện thoại" className="bg-background" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Nhập email" className="bg-background" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Dịch vụ quan tâm
                </label>
                <Input id="service" placeholder="VD: Xây nhà, Sửa chữa, Thiết kế..." className="bg-background" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nội dung yêu cầu *
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Mô tả chi tiết nhu cầu của bạn..."
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Gửi yêu cầu
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
