
import React from "react";

export const CosmicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Deep space background with enhanced gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(to bottom, #0b0521, #000000)",
          opacity: 0.95,
        }}
      ></div>

      {/* Cosmic dust and nebulae */}
      <div 
        className="absolute inset-0"
        style={{
          background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"400\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"black\" /><g fill=\"white\" opacity=\"0.1\"><circle cx=\"20\" cy=\"30\" r=\"0.5\" /><circle cx=\"40\" cy=\"60\" r=\"0.3\" /><circle cx=\"60\" cy=\"20\" r=\"0.4\" /><circle cx=\"80\" cy=\"40\" r=\"0.2\" /><circle cx=\"15\" cy=\"80\" r=\"0.3\" /><circle cx=\"35\" cy=\"10\" r=\"0.5\" /><circle cx=\"75\" cy=\"85\" r=\"0.4\" /></g></svg>')",
          opacity: 0.5,
        }}
      ></div>

      {/* Enhanced animated stars with different layers */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 0.5 + "px",
              height: Math.random() * 3 + 0.5 + "px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: `0 0 ${Math.random() * 6 + 2}px rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
              animation: `twinkle ${Math.random() * 8 + 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Distant stars layer */}
      <div className="absolute inset-0">
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={`distant-star-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 1.5 + 0.2 + "px",
              height: Math.random() * 1.5 + 0.2 + "px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              boxShadow: `0 0 ${Math.random() * 2 + 1}px rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
            }}
          ></div>
        ))}
      </div>

      {/* Star clusters */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`star-cluster-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 100 + 50 + "px",
            height: Math.random() * 100 + 50 + "px",
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 80 + 5}%`,
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
            animation: `starCluster ${Math.random() * 15 + 20}s infinite alternate ease-in-out`,
            animationDelay: `${i * 2}s`,
          }}
        >
          {/* Add small stars in the cluster */}
          {Array.from({ length: 8 }).map((_, j) => (
            <div
              key={`cluster-star-${i}-${j}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 2 + 0.5 + "px",
                height: Math.random() * 2 + 0.5 + "px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                boxShadow: `0 0 ${Math.random() * 3 + 1}px rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`,
              }}
            ></div>
          ))}
        </div>
      ))}

      {/* Enhanced colorful nebulae */}
      <div
        className="absolute"
        style={{
          top: "10%",
          left: "15%",
          width: "40%",
          height: "40%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(111, 31, 216, 0.06) 0%, rgba(111, 31, 216, 0) 70%)",
          filter: "blur(30px)",
          animation: "nebulaFloat 25s infinite alternate ease-in-out",
          transform: "rotate(-15deg)",
        }}
      ></div>
      
      <div
        className="absolute"
        style={{
          top: "40%",
          right: "10%",
          width: "35%",
          height: "35%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(31, 87, 216, 0.06) 0%, rgba(31, 87, 216, 0) 70%)",
          filter: "blur(25px)",
          animation: "nebulaFloat 20s infinite alternate-reverse ease-in-out",
          animationDelay: "3s",
          transform: "rotate(15deg)",
        }}
      ></div>
      
      {/* New purplish galaxy */}
      <div
        className="absolute"
        style={{
          bottom: "20%",
          left: "30%",
          width: "25%",
          height: "30%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(180, 60, 220, 0.06) 0%, rgba(180, 60, 220, 0) 70%)",
          filter: "blur(30px)",
          animation: "nebulaFloat 30s infinite alternate ease-in-out",
          animationDelay: "5s",
          transform: "rotate(25deg)",
        }}
      ></div>

      {/* Bluish dust cloud */}
      <div
        className="absolute"
        style={{
          top: "20%",
          right: "25%",
          width: "20%",
          height: "15%",
          borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%",
          background: "radial-gradient(ellipse, rgba(60, 120, 220, 0.04) 0%, rgba(60, 120, 220, 0) 70%)",
          filter: "blur(20px)",
          animation: "nebulaFloat 22s infinite alternate-reverse ease-in-out",
          animationDelay: "8s",
        }}
      ></div>

      {/* Extra dim background glow to fill any dark spots */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(40, 20, 80, 0.2) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      ></div>

      {/* Subtle cosmic rays */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * 360;
        return (
          <div
            key={`cosmic-ray-${i}`}
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              width: "1px",
              height: `${Math.random() * 100 + 100}px`,
              background: "linear-gradient(to top, transparent, rgba(255, 255, 255, 0.2), transparent)",
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              opacity: Math.random() * 0.15 + 0.05,
              animation: `electricField ${Math.random() * 5 + 8}s infinite alternate ease-in-out`,
              animationDelay: `${i}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};
