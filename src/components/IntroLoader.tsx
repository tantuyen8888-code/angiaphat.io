import { useState, useEffect } from "react";
import logo from "@/assets/logo-agp-transparent.png";

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [phase, setPhase] = useState<"intro" | "fadeOut" | "done">("intro");

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setPhase("fadeOut");
    }, 2800);

    const completeTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        phase === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(220 15% 12%) 0%, hsl(220 20% 8%) 100%)"
      }}
    >

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo card with 3D effect */}
        <div 
          className="relative logo-3d-wrapper"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Logo with natural diagonal shine */}
          <div className="logo-container relative">
            <img 
              src={logo} 
              alt="An Gia Phát Logo" 
              className="relative h-48 md:h-64 lg:h-80 w-auto z-10 logo-3d"
              style={{
                filter: 'drop-shadow(0 0 30px hsl(var(--primary) / 0.25))'
              }}
            />
          </div>
        </div>

        {/* Company name with premium shine effect */}
        <div className="mt-12 text-center overflow-hidden">
          <div className="title-wrapper" style={{ animationDelay: '0.8s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide title-text">
              AN GIA PHÁT
            </h1>
            <div className="shine-overlay" />
          </div>
          <div className="subtitle-wrapper" style={{ animationDelay: '1.4s' }}>
            <p className="mt-4 text-lg md:text-xl tracking-[0.3em] font-medium subtitle-text">
              XÂY DỰNG & CƠ KHÍ
            </p>
          </div>
        </div>

        {/* Modern loading bar */}
        <div className="mt-12 w-56 h-1 rounded-full overflow-hidden loading-container">
          <div className="loading-bar" />
        </div>
      </div>

      <style>{`

        .logo-3d-wrapper {
          animation: logoEnter 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .logo-container {
          animation: logoEnter 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .logo-3d {
          animation: logo3DRotate 4s ease-in-out 1s infinite;
          transform-style: preserve-3d;
        }

        @keyframes logo3DRotate {
          0%, 100% {
            transform: rotateY(0deg);
          }
          25% {
            transform: rotateY(8deg);
          }
          75% {
            transform: rotateY(-8deg);
          }
        }

        .title-wrapper {
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          animation: titleReveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .title-text {
          background: linear-gradient(135deg, 
            hsl(0 0% 95%) 0%, 
            hsl(0 0% 100%) 50%, 
            hsl(0 0% 90%) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 60px hsl(0 0% 100% / 0.3);
        }

        .shine-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            hsl(0 0% 100% / 0.4) 50%,
            transparent 100%
          );
          animation: shinePass 1.5s ease-in-out 1.3s forwards;
        }

        .subtitle-wrapper {
          opacity: 0;
          transform: translateY(20px);
          animation: subtitleReveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .subtitle-text {
          background: linear-gradient(135deg, 
            hsl(var(--primary)) 0%, 
            hsl(var(--primary) / 0.8) 50%, 
            hsl(var(--primary)) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes subtitleReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            letter-spacing: 0.5em;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.3em;
          }
        }

        @keyframes shinePass {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .loading-container {
          background: hsl(0 0% 100% / 0.1);
          opacity: 0;
          animation: fadeIn 0.5s ease-out 2s forwards;
        }

        .loading-bar {
          height: 100%;
          width: 0%;
          border-radius: 9999px;
          background: linear-gradient(90deg, 
            hsl(var(--primary)), 
            hsl(var(--primary) / 0.7), 
            hsl(var(--primary))
          );
          background-size: 200% 100%;
          animation: 
            loadingProgress 1s ease-out 2.2s forwards,
            shimmerBar 1.5s linear infinite;
          box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
        }

        @keyframes logoEnter {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }


        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes loadingProgress {
          to { width: 100%; }
        }

        @keyframes shimmerBar {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default IntroLoader;