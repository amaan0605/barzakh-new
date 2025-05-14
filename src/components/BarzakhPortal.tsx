
import React from "react";

interface BarzakhPortalProps {
  scrollY: number;
  gateDoorScale: number;
  gateOpacity: number;
  insideGateOpacity: number;
}

export const BarzakhPortal: React.FC<BarzakhPortalProps> = ({ 
  scrollY, 
  gateDoorScale, 
  gateOpacity, 
  insideGateOpacity 
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
      <div
        className="relative"
        style={{ 
          perspective: "1500px",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Enhanced Main Gate Structure */}
        <div
          className="relative"
          style={{
            width: "350px",
            height: "550px",
            borderRadius: "175px 175px 0 0", 
            transform: `scale(${gateDoorScale}) rotateY(${scrollY / 50}deg)`,
            opacity: gateOpacity,
            transition: "transform 0.2s ease-out", // Smoother transition
            overflow: "hidden",
          }}
        >
          {/* Complete circular top with enhanced border effects */}
          <div
            className="absolute inset-0"
            style={{
              overflow: "hidden",
              borderRadius: "175px 175px 0 0",
              background: "rgba(20, 10, 30, 0.3)",
              border: "8px solid transparent",
              borderImage: "linear-gradient(180deg, rgba(220, 170, 255, 0.9), rgba(81, 31, 139, 0.3)) 1",
              boxShadow: "0 0 20px rgba(180, 120, 255, 0.6), inset 0 0 20px rgba(180, 120, 255, 0.4)",
            }}
          ></div>
          
          {/* Additional glowing outline */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "175px 175px 0 0",
              border: "1px solid rgba(180, 120, 255, 0.4)",
              boxShadow: "0 0 25px 5px rgba(180, 120, 255, 0.3)",
              pointerEvents: "none",
            }}
          ></div>
          
          {/* Enhanced energy lines on the gate with multiple lines */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(180, 120, 255, 0.9), transparent)",
              transform: "translateX(-50%)",
              animation: "energyPulse 2s infinite ease-in-out",
              boxShadow: "0 0 10px rgba(180, 120, 255, 0.7)",
            }}
          ></div>
          
          {/* Secondary vertical lines */}
          <div 
            className="absolute left-1/4 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(180, 120, 255, 0.5), transparent)",
              animation: "energyPulse 3s infinite ease-in-out",
              animationDelay: "0.7s",
            }}
          ></div>
          
          <div 
            className="absolute left-3/4 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(180, 120, 255, 0.5), transparent)",
              animation: "energyPulse 3s infinite ease-in-out",
              animationDelay: "1.4s",
            }}
          ></div>
          
          {/* Enhanced horizontal energy lines */}
          <div 
            className="absolute top-1/4 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(180, 120, 255, 0.9), transparent)",
              animation: "energyPulse 3s infinite ease-in-out",
              animationDelay: "0.5s",
              boxShadow: "0 0 8px rgba(180, 120, 255, 0.6)",
            }}
          ></div>
          
          <div 
            className="absolute top-1/2 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(180, 120, 255, 0.7), transparent)",
              animation: "energyPulse 4s infinite ease-in-out",
              animationDelay: "1s",
            }}
          ></div>
          
          <div 
            className="absolute top-3/4 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(180, 120, 255, 0.5), transparent)",
              animation: "energyPulse 5s infinite ease-in-out",
              animationDelay: "1.5s",
            }}
          ></div>

          {/* Enhanced magical runes around the gate with cosmic symbols */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI;
            const x = Math.cos(angle) * 160;
            const y = Math.sin(angle) * 160 + 160;
            
            return (
              <div
                key={`rune-${i}`}
                className="absolute"
                style={{
                  width: "20px",
                  height: "20px",
                  left: "50%",
                  top: "50%",
                  transform: `translate(${x}px, ${y}px) rotate(${i * 30}deg)`,
                  opacity: Math.max(0.2, Math.random() * 0.8),
                  animation: `runeGlow ${3 + Math.random() * 4}s infinite alternate ease-in-out`,
                  animationDelay: `${i * 0.5}s`,
                  fontSize: "22px",
                  color: "rgba(180, 120, 255, 0.8)",
                }}
              >
                {["✧", "⦿", "⟡", "⦾", "⧗", "⧚", "☉", "⧉", "◎", "⌘", "⌬", "⍟"][i]}
              </div>
            );
          })}
          
          {/* Ghostly faces or shapes that occasionally appear in the gate */}
          <div
            className="absolute left-1/4 top-1/3 w-8 h-12 opacity-0"
            style={{
              background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
              filter: "blur(3px)",
              animation: "ghostlyAppear 15s infinite",
              animationDelay: "7s",
            }}
          ></div>
          
          <div
            className="absolute right-1/4 top-2/3 w-10 h-10 rounded-full opacity-0"
            style={{
              background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
              filter: "blur(4px)",
              animation: "ghostlyAppear 20s infinite",
              animationDelay: "13s",
            }}
          ></div>
        </div>
        
        {/* Enhanced Inside the gate content - appears as we scroll - COSMIC BARZAKH REALM */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{
            opacity: insideGateOpacity,
            transform: `translateZ(${scrollY}px)`,
            borderRadius: "175px 175px 0 0", // Match the gate radius exactly
            pointerEvents: insideGateOpacity > 0.5 ? "auto" : "none",
            visibility: insideGateOpacity > 0.1 ? "visible" : "hidden", // Hide content completely when not visible
          }}
        >
          {/* Enhanced cosmic background for mysterious realm */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle, rgba(45, 15, 100, 0.9) 0%, rgba(15, 5, 40, 0.97) 70%)",
              animation: "portalPulse 10s infinite alternate ease-in-out",
            }}
          ></div>
          
          {/* Mysterious cosmic wormhole/tunnel effect - improved fluidity */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "conic-gradient(from 0deg at 50% 50%, rgba(90, 40, 150, 0) 0%, rgba(140, 80, 220, 0.2) 25%, rgba(90, 40, 150, 0) 50%, rgba(140, 80, 220, 0.2) 75%, rgba(90, 40, 150, 0) 100%)",
              animation: "cosmicSwirl 30s linear infinite",
              opacity: 0.7,
              filter: "blur(5px)",
            }}
          ></div>
          
          {/* Additional wormhole tunnel layers */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "conic-gradient(from 90deg at 50% 50%, rgba(90, 40, 150, 0) 0%, rgba(80, 100, 220, 0.1) 25%, rgba(90, 40, 150, 0) 50%, rgba(80, 100, 220, 0.1) 75%, rgba(90, 40, 150, 0) 100%)",
              animation: "cosmicSwirl 25s linear infinite reverse",
              opacity: 0.5,
              filter: "blur(8px)",
            }}
          ></div>
          
          {/* New enhanced spiral galaxy effect */}
          <div
            className="absolute left-1/2 top-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\" viewBox=\"0 0 300 300\"><defs><radialGradient id=\"spiral\" cx=\"50%\" cy=\"50%\" r=\"50%\" fx=\"50%\" fy=\"50%\"><stop offset=\"0%\" stop-color=\"white\" stop-opacity=\"0.3\" /><stop offset=\"100%\" stop-color=\"white\" stop-opacity=\"0\" /></radialGradient></defs><path d=\"M150,150 m0,0 a1,1 0 0,1 0,0 M150,150 m5,0 a5,5 0 0,1 0,0 M150,150 m10,0 a10,10 0 0,1 0,0 M150,150 m15,0 a15,15 0 0,1 0,0 M150,150 m20,0 a20,20 0 0,1 0,0 M150,150 m25,0 a25,25 0 0,1 0,0 M150,150 m30,0 a30,30 0 0,1 0,0 M150,150 m35,0 a35,35 0 0,1 0,0 M150,150 m40,0 a40,40 0 0,1 0,0 M150,150 m45,0 a45,45 0 0,1 0,0 M150,150 m50,0 a50,50 0 0,1 0,0 M150,150 m55,0 a55,55 0 0,1 0,0 M150,150 m60,0 a60,60 0 0,1 0,0 M150,150 m65,0 a65,65 0 0,1 0,0 M150,150 m70,0 a70,70 0 0,1 0,0 M150,150 m75,0 a75,75 0 0,1 0,0 M150,150 m80,0 a80,80 0 0,1 0,0 M150,150 m85,0 a85,85 0 0,1 0,0 M150,150 m90,0 a90,90 0 0,1 0,0 M150,150 m95,0 a95,95 0 0,1 0,0 M150,150 m100,0 a100,100 0 0,1 0,0 M150,150 m105,0 a105,105 0 0,1 0,0 M150,150 m110,0 a110,110 0 0,1 0,0 M150,150 m115,0 a115,115 0 0,1 0,0 M150,150 m120,0 a120,120 0 0,1 0,0 M150,150 m125,0 a125,125 0 0,1 0,0 M150,150 m130,0 a130,130 0 0,1 0,0 M150,150 m135,0 a135,135 0 0,1 0,0 M150,150 m140,0 a140,140 0 0,1 0,0\" stroke=\"url(#spiral)\" stroke-width=\"1.5\" fill=\"none\" /></svg>')",
              opacity: 0.7,
              animation: "cosmicSwirl 60s linear infinite",
              filter: "blur(1px)",
            }}
          ></div>
          
          {/* Galactic center pulsing light - enhanced brightness */}
          <div
            className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full z-0"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(200, 150, 255, 0.5) 30%, transparent 70%)",
              boxShadow: "0 0 60px 30px rgba(200, 150, 255, 0.3)",
              animation: "galaxyPulse 8s infinite ease-in-out",
              filter: "blur(4px)",
            }}
          ></div>
          
          {/* Enhanced dimension fractal rifts */}
          <div
            className="absolute left-1/3 top-1/3 w-40 h-40 rounded-full opacity-60"
            style={{
              background: "radial-gradient(circle, rgba(200, 150, 255, 0.6) 0%, transparent 70%)",
              animation: "dimensionRift 8s infinite alternate ease-in-out",
              filter: "blur(4px)",
            }}
          ></div>
          
          <div
            className="absolute right-1/3 bottom-1/3 w-32 h-32 rounded-full opacity-50"
            style={{
              background: "radial-gradient(circle, rgba(100, 180, 255, 0.6) 0%, transparent 70%)",
              animation: "dimensionRift 10s infinite alternate-reverse ease-in-out",
              filter: "blur(3px)",
              animationDelay: "2s",
            }}
          ></div>
          
          {/* Enhanced energy particles inside the portal */}
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.9,
                filter: `blur(1px) drop-shadow(0 0 4px rgba(255, 255, 255, 1))`,
                animation: `floatParticle ${10 + Math.random() * 15}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            ></div>
          ))}
          
          {/* Enhanced star clusters within the portal */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`portal-cluster-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 60 + 40 + "px",
                height: Math.random() * 60 + 40 + "px",
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                opacity: 0.7,
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 70%)",
                animation: `starCluster ${Math.random() * 15 + 10}s infinite alternate ease-in-out`,
                animationDelay: `${i * 3}s`,
                filter: "blur(1px)",
                zIndex: 1,
              }}
            ></div>
          ))}
          
          {/* Enhanced flowing energy streams */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * 360;
            return (
              <div
                key={`energy-stream-${i}`}
                className="absolute left-1/2 top-1/2 h-1 w-32 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(200, 150, 255, 0.8), transparent)",
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  animation: "energyPulse 4s infinite ease-in-out",
                  animationDelay: `${i * 0.6}s`,
                  opacity: 0.6,
                  filter: "blur(1px)",
                }}
              ></div>
            );
          })}
          
          {/* Additional multi-layered wormhole effect */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] opacity-40"
            style={{
              background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"280\" height=\"280\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"48\" fill=\"none\" stroke=\"white\" stroke-width=\"0.5\" stroke-opacity=\"0.8\" /><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"white\" stroke-width=\"0.4\" stroke-opacity=\"0.7\" /><circle cx=\"50\" cy=\"50\" r=\"32\" fill=\"none\" stroke=\"white\" stroke-width=\"0.3\" stroke-opacity=\"0.6\" /></svg>')",
              animation: "wormholeEffect 15s linear infinite",
              filter: "blur(1px)",
            }}
          ></div>
          
          {/* Additional cosmic dust clouds */}
          <div
            className="absolute w-40 h-40 rounded-full opacity-40"
            style={{
              top: "30%",
              left: "20%",
              background: "radial-gradient(circle, rgba(170, 120, 255, 0.4) 0%, transparent 70%)",
              filter: "blur(15px)",
              animation: "nebulaFloat 25s infinite alternate ease-in-out",
            }}
          ></div>
          
          <div
            className="absolute w-32 h-32 rounded-full opacity-30"
            style={{
              top: "60%",
              right: "25%",
              background: "radial-gradient(circle, rgba(100, 200, 255, 0.3) 0%, transparent 70%)",
              filter: "blur(12px)",
              animation: "nebulaFloat 30s infinite alternate-reverse ease-in-out",
              animationDelay: "5s",
            }}
          ></div>
          
          {/* New mysterious glow in the center */}
          <div
            className="absolute left-1/2 top-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 z-2"
            style={{
              background: "radial-gradient(circle, rgba(255, 220, 255, 0.5) 0%, rgba(180, 120, 255, 0.3) 30%, transparent 70%)",
              boxShadow: "0 0 40px 20px rgba(200, 150, 255, 0.2)",
              animation: "mysteryGlow 10s infinite alternate ease-in-out",
              filter: "blur(5px)",
            }}
          ></div>
        </div>
      </div>

      {/* Custom keyframes for the Barzakh Portal */}
      <style>
        {`
        @keyframes ghostlyAppear {
          0%, 90%, 100% { opacity: 0; }
          94%, 96% { opacity: 0.3; }
        }
        
        @keyframes cosmicSwirl {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes galaxyPulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        
        @keyframes dimensionRift {
          0% { transform: scale(0.8) translate(5px, 5px); opacity: 0.4; }
          50% { transform: scale(1.2) translate(-5px, -5px); opacity: 0.7; }
          100% { transform: scale(0.8) translate(5px, 5px); opacity: 0.4; }
        }
        
        @keyframes floatParticle {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -20px) rotate(120deg); }
          66% { transform: translate(-15px, 10px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        @keyframes starCluster {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0.8; }
        }
        
        @keyframes wormholeEffect {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(0.9) rotate(180deg); }
          100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); }
        }
        
        @keyframes nebulaFloat {
          0% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(10px, -10px); opacity: 0.4; }
          100% { transform: translate(0, 0); opacity: 0.3; }
        }
        
        @keyframes mysteryGlow {
          0% { opacity: 0.5; filter: blur(5px); }
          50% { opacity: 0.8; filter: blur(8px); }
          100% { opacity: 0.5; filter: blur(5px); }
        }
        `}
      </style>
    </div>
  );
};

