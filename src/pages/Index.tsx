
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BarzakhPortal } from "@/components/BarzakhPortal";
import { CosmicBackground } from "@/components/CosmicBackground";

const Index = () => {
  // Enhanced state management
  const [scrollY, setScrollY] = useState(0);
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverPlay, setHoverPlay] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  // Set target date August 21, 2025
  useEffect(() => {
    const targetDate = new Date('2025-08-21T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      // If the target date is in the past, don't update countdown
      if (difference < 0) return;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, mins, secs });
    };
    
    // Initialize countdown immediately
    updateCountdown();
    
    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Animation calculations based on scroll
  const gateDoorScale = Math.max(1, 1 + scrollY / 500);
  const gateOpacity = Math.max(0, 1 - scrollY / 400);
  // Adjusted to fade in more gradually to prevent overlap
  const insideGateOpacity = Math.min(1, (scrollY - 150) / 300);

  // Handle scroll events with debouncing for smoother performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        const newSecs = prev.secs - 1;
        if (newSecs >= 0) return { ...prev, secs: newSecs };
        
        const newMins = prev.mins - 1;
        if (newMins >= 0) return { ...prev, mins: newMins, secs: 59 };
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) return { ...prev, hours: newHours, mins: 59, secs: 59 };
        
        const newDays = prev.days - 1;
        if (newDays >= 0) return { days: newDays, hours: 23, mins: 59, secs: 59 };
        
        return prev; // Keep at 0 if countdown finished
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black text-white font-mono">
      {/* Enhanced cosmic background component */}
      <CosmicBackground />

      {/* Enhanced 3D Barzakh Portal Component */}
      <BarzakhPortal 
        scrollY={scrollY} 
        gateDoorScale={gateDoorScale} 
        gateOpacity={gateOpacity} 
        insideGateOpacity={insideGateOpacity} 
      />

      {/* First Screen Content - adjusted spacing for better layout */}
      <div className="relative min-h-screen flex flex-col items-center justify-start pt-24 px-4 z-20">
        {/* Studio title - kept outside the gate as requested */}
        <div 
          className="mb-16 text-center"
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            opacity: Math.max(0, 1 - scrollY / 500),
            transform: `translateY(${Math.min(0, -scrollY / 8)}px)`,
            transition: "opacity 0.3s ease-out, transform 0.3s ease-out", // Smoother transitions
          }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-wide text-gray-100"
            style={{
              letterSpacing: "0.15em",
              textShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(150, 120, 255, 0.5)",
              animation: "barzakhGlow 3s infinite alternate ease-in-out"
            }}
          >
            BARZAKH STUDIO
          </h1>

          {/* Enhanced subtitle with modern digital effect */}
          <p
            className="text-xl text-gray-300/70 mb-6 relative overflow-hidden"
            style={{
              letterSpacing: "0.2em",
              background: "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmerText 6s linear infinite"
            }}
          >
            {/* <span className="relative">
              INTO THE GLITCH
              <span 
                className="absolute inset-0 bg-white mix-blend-difference"
                style={{
                  animation: "glitchEffect 8s infinite",
                  clipPath: "polygon(0 0, 100% 0, 100% 5%, 0 5%)",
                }}
              ></span>
            </span> */}
          </p>

          {/* Game type tag with enhanced styling */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 bg-purple-400 animate-pulse"></div>
            <span
              className="text-gray-300/80 text-sm"
              style={{
                letterSpacing: "0.2em",
              }}
            >
              STEALTH MODE
            </span>
            <div className="w-2 h-2 bg-purple-400 animate-pulse"></div>
          </div>
        </div>

        {/* Game "Enter the Realm" button - with enhanced futuristic effects */}
        <div
          className="mt-4 relative z-30"
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
          }}
        >
            <button
              className="relative px-10 py-4 text-gray-100 rounded-lg overflow-hidden"
              style={{
                letterSpacing: "0.1em",
                fontSize: "1.2rem",
                fontWeight: "bold",
                transform: hoverPlay ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                background: "linear-gradient(135deg, rgba(81, 29, 139, 0.9), rgba(41, 20, 91, 0.9))",
                boxShadow: hoverPlay 
                  ? "0 0 25px rgba(150, 120, 255, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.3)"
                  : "0 0 15px rgba(150, 120, 255, 0.4), inset 0 0 5px rgba(255, 255, 255, 0.1)",
              }}
              onMouseEnter={() => setHoverPlay(true)}
              onMouseLeave={() => setHoverPlay(false)}
            >
              {/* Gaming icon */}
              <span className="mr-2">▶</span>
              ENTER THE REALM
              
              {/* Enhanced button effects */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  transform: hoverPlay ? "translateX(0)" : "translateX(-100%)",
                  transition: "transform 0.5s ease-out",
                  animation: hoverPlay ? "buttonPulse 2s infinite" : "none",
                }}
              ></div>
              
              {/* Button border glow */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-lg"
                style={{
                  border: "1px solid rgba(150, 120, 255, 0.5)",
                  animation: "borderPulse 2s infinite alternate",
                }}
              ></div>

              {/* Futuristic electric field effect */}
              {hoverPlay && (
                <div 
                  className="absolute -left-10 -right-10 top-1/2 h-[1px]"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(150, 120, 255, 0.7), transparent)",
                    animation: "electricField 1.5s infinite ease-in-out",
                    transform: "translateY(-50%)"
                  }}
                ></div>
              )}
            </button>
         

          {/* Enhanced power level indicator with animated fill */}
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className="relative w-8 h-2 rounded-full overflow-hidden bg-gray-800"
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      width: level <= 3 ? "100%" : "0%",
                      background: "linear-gradient(to right, #9f7aea, #7c3aed)",
                      animation: level <= 3 ? "levelPulse 3s infinite alternate" : "none",
                      animationDelay: `${level * 0.3}s`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <span
              className="text-xs text-purple-400/90"
              style={{ letterSpacing: "0.1em" }}
            >
              LVL 3 EXPLORER
            </span>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div
          className="absolute bottom-8 flex flex-col items-center"
          style={{
            opacity: scrollY > 10 ? 0 : 0.8,
            transition: "opacity 0.3s ease",
          }}
        >
          <span
            className="text-sm text-gray-300/70 mb-2"
            style={{ letterSpacing: "0.1em" }}
          >
            JOURNEY BEYOND
          </span>
          <div className="relative w-6 h-10 border-2 border-purple-400/30 rounded-full flex justify-center p-1">
            <div
              className="w-1 h-2 bg-purple-400/70 rounded-full"
              style={{
                animation: "scrollPulse 1.5s infinite",
              }}
            ></div>
            
            {/* Decorative light rays */}
            <div 
              className="absolute -bottom-4 left-1/2 w-px h-10"
              style={{
                background: "linear-gradient(to bottom, rgba(150, 120, 255, 0.7), transparent)",
                transform: "translateX(-50%)",
              }}
            ></div>

            {/* Additional rays for futuristic feel */}
            <div 
              className="absolute -bottom-2 left-1/2 w-[2px] h-6 rotate-30"
              style={{
                background: "linear-gradient(to bottom, rgba(150, 120, 255, 0.3), transparent)",
                transform: "translateX(-8px) rotate(30deg)",
              }}
            ></div>
            <div 
              className="absolute -bottom-2 left-1/2 w-[2px] h-6 -rotate-30"
              style={{
                background: "linear-gradient(to bottom, rgba(150, 120, 255, 0.3), transparent)",
                transform: "translateX(8px) rotate(-30deg)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Second Screen - Coming Soon Section - Adjusted spacing and positioning */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 z-20 mt-32">
        {/* Coming soon container */}
        <div
          className="w-full max-w-xl mx-auto text-center"
          style={{
            opacity: Math.min(1, (scrollY - 250) / 300), // Adjusted to appear later
            transform: `translateY(${Math.max(0, 50 - (scrollY - 250) / 6)}px)`,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {/* Mystical border with animated corners */}
          <div className="relative mb-12 pb-12 px-4">
            <div className="absolute left-0 top-0 w-16 h-16">
              <div className="absolute left-0 top-0 w-full h-1 bg-purple-500 opacity-80" style={{ animation: "borderExtendHorizontal 1s forwards" }}></div>
              <div className="absolute left-0 top-0 w-1 h-full bg-purple-500 opacity-80" style={{ animation: "borderExtendVertical 1s forwards" }}></div>
            </div>
            
            <div className="absolute right-0 top-0 w-16 h-16">
              <div className="absolute right-0 top-0 w-full h-1 bg-purple-500 opacity-80" style={{ animation: "borderExtendHorizontal 1s forwards" }}></div>
              <div className="absolute right-0 top-0 w-1 h-full bg-purple-500 opacity-80" style={{ animation: "borderExtendVertical 1s forwards" }}></div>
            </div>

            {/* Coming soon heading with enhanced digital distortion effect */}
            <div className="relative overflow-hidden inline-block">
              <h2
                className="text-4xl sm:text-5xl font-bold mb-3 text-gray-100 relative z-10"
                style={{
                  letterSpacing: "0.15em",
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
              >
                COMING SOON
              </h2>
              
              {/* Enhanced glitch effect overlay */}
              {/* <div 
                className="absolute inset-0 bg-purple-500 mix-blend-multiply z-0"
                style={{
                  animation: "titleGlitch 8s infinite",
                  clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
                }}
              ></div> */}
              {/* <div 
                className="absolute inset-0 bg-blue-500 mix-blend-screen z-0"
                style={{
                  animation: "titleGlitch 7s infinite 1s",
                  clipPath: "polygon(0 60%, 100% 60%, 100% 65%, 0 65%)",
                }}
              ></div> */}
            </div>

            {/* Enhanced progress bar with cosmic particles */}
            <div className="w-48 h-4 bg-gray-800/50 mx-auto mb-8 mt-6 rounded-full relative overflow-hidden border border-purple-500/30">
              <div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ 
                  width: "75%",
                  background: "linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.9))"
                }}
              ></div>
              
              {/* Progress pulse effect */}
              <div
                className="absolute left-0 top-0 h-full bg-white opacity-30 rounded-full"
                style={{
                  width: "20%",
                  animation: "progressPulse 2s infinite",
                  transform: "translateX(275%)",
                }}
              ></div>
              
              {/* Enhanced particle effects in progress bar */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`particle-prog-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-white/70"
                  style={{
                    left: `${8 + i * 9}%`,
                    animation: `particleRise 3s infinite ease-in-out`,
                    animationDelay: `${i * 0.3}s`,
                    opacity: 0.6,
                    height: "200%",
                    top: "-50%",
                  }}
                ></div>
              ))}
            </div>

            {/* Loading status */}
            <p
              className="text-purple-300/80 mb-8"
              style={{
                letterSpacing: "0.1em",
              }}
            >
              DEVELOPMENT: 75% COMPLETE
            </p>

            {/* Game description with enhanced cosmic styling */}
            <p
              className="text-base sm:text-lg text-gray-300/80 mb-10 leading-relaxed relative"
            >
              <span className="relative inline-block">
                Journey through the mystical realm of Barzakh, where dreams and
                reality intertwine. Discover ancient secrets and harness celestial
                powers in this otherworldly adventure.
              </span>

              {/* Subtle cosmic dust effect */}
              <span 
                className="absolute -top-2 -right-2 w-4 h-4 opacity-60"
                style={{
                  background: "radial-gradient(circle, rgba(150, 120, 255, 0.8) 0%, transparent 70%)",
                  filter: "blur(2px)",
                  animation: "nebulaFloat 6s infinite ease-in-out",
                }}
              ></span>
              <span 
                className="absolute -bottom-2 -left-2 w-3 h-3 opacity-40"
                style={{
                  background: "radial-gradient(circle, rgba(200, 100, 255, 0.8) 0%, transparent 70%)",
                  filter: "blur(2px)",
                  animation: "nebulaFloat 8s infinite ease-in-out reverse",
                  animationDelay: "1s",
                }}
              ></span>
            </p>

            {/* Enhanced countdown timer with cosmic effects */}
            <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-10">
              {[
                { value: countdown.days, label: "DAYS" },
                { value: countdown.hours, label: "HRS" },
                { value: countdown.mins, label: "MIN" },
                { value: countdown.secs, label: "SEC" },
              ].map((unit, index) => (
                <div key={unit.label} className="text-center text-gray-300/80">
                  <div
                    className="relative bg-gray-800/80 border border-purple-700/50 rounded px-3 py-2 text-2xl font-bold text-gray-100 mb-1 overflow-hidden"
                    style={{
                      minWidth: "60px",
                      boxShadow: "0 0 10px rgba(124, 58, 237, 0.2)",
                    }}
                  >
                    {/* Flip animation for changing numbers */}
                    <div 
                      style={{
                        animation: `numberFlip 1s ease-in-out`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {unit.value}
                    </div>
                    
                    {/* Enhanced light sweep effect */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"
                      style={{
                        animation: "lightSweep 3s infinite",
                        animationDelay: `${index * 0.5}s`,
                      }}
                    ></div>

                    {/* Cosmic particles in timer */}
                    {[1, 2, 3].map((particle) => (
                      <div 
                        key={`timer-particle-${index}-${particle}`}
                        className="absolute w-px h-px bg-white rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          boxShadow: "0 0 2px 1px rgba(255,255,255,0.5)",
                          opacity: Math.random() * 0.7 + 0.3,
                          animation: `twinkle ${2 + Math.random() * 3}s infinite alternate`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <div
                    className="text-xs text-purple-400/90"
                    style={{
                      letterSpacing: "0.1em",
                    }}
                  >
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom border animation */}
            <div className="absolute left-0 bottom-0 w-16 h-16">
              <div className="absolute left-0 bottom-0 w-full h-1 bg-purple-500 opacity-80" style={{ animation: "borderExtendHorizontal 1s forwards" }}></div>
              <div className="absolute left-0 bottom-0 w-1 h-full bg-purple-500 opacity-80" style={{ animation: "borderExtendVertical 1s forwards" }}></div>
            </div>
            
            <div className="absolute right-0 bottom-0 w-16 h-16">
              <div className="absolute right-0 bottom-0 w-full h-1 bg-purple-500 opacity-80" style={{ animation: "borderExtendHorizontal 1s forwards" }}></div>
              <div className="absolute right-0 bottom-0 w-1 h-full bg-purple-500 opacity-80" style={{ animation: "borderExtendVertical 1s forwards" }}></div>
            </div>
          </div>

          {/* Signup form with enhanced styling */}
          <div className="mb-12 relative">
            {/* Futuristic form heading */}
            <div
              className="mb-6 text-lg font-bold text-gray-100"
              style={{
                letterSpacing: "0.1em",
                textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                position: "relative",
              }}
            >
              JOIN THE CELESTIAL ORDER
              <div className="absolute bottom-0 left-1/2 w-24 h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  className="w-full px-4 py-3 bg-gray-800/80 border border-purple-700/50 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                  style={{
                    letterSpacing: "0.05em",
                  }}
                />
                
                {/* Enhanced input focus effect */}
                <div 
                  className="absolute bottom-0 left-1/2 w-0 h-px bg-purple-400"
                  style={{
                    transform: "translateX(-50%)",
                    transition: "width 0.3s ease",
                  }}
                ></div>

                {/* Input scan line effect */}
                <div 
                  className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
                  style={{
                    animation: "lightSweep 3s infinite linear",
                  }}
                ></div>
              </div>

              <button
                className="relative px-6 py-3 text-gray-100 rounded-md overflow-hidden"
                style={{
                  letterSpacing: "0.1em",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #7c3aed, #4c1d95)",
                  boxShadow: hoverButton 
                    ? "0 0 15px rgba(124, 58, 237, 0.6)" 
                    : "0 0 10px rgba(124, 58, 237, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={() => setHoverButton(true)}
                onMouseLeave={() => setHoverButton(false)}
              >
                CROSS THE THRESHOLD
                
                {/* Enhanced button effects */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                    transform: hoverButton ? "translateX(0)" : "translateX(-100%)",
                    transition: "transform 0.5s ease-out",
                  }}
                ></div>
                
                {/* Enhanced button energy particles */}
                {hoverButton && Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`btn-particle-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3,
                      transform: `scale(${Math.random() * 0.7 + 0.3})`,
                      animation: `floatUp ${Math.random() * 1 + 0.5}s linear forwards`,
                      boxShadow: "0 0 3px rgba(255,255,255,0.8)",
                    }}
                  ></div>
                ))}
              </button>
            </div>

            {/* XP bonus with enhanced animation */}
            <div
              className="text-sm text-purple-400/70"
              style={{ 
                letterSpacing: "0.05em",
                animation: "pulseBrightness 4s infinite alternate",
              }}
            >
              <span className="text-purple-300 font-bold">+500 XP</span> FOR EARLY
              EXPLORERS
            </div>
          </div>

          {/* Footer with enhanced social links */}
          <div className="text-purple-300/70">
            <p className="mb-6 text-sm">
              <span className="text-purple-400">|</span> LAUNCHING SUMMER 2025{" "}
              <span className="text-purple-400">|</span>
            </p>
            <div className="flex justify-center flex-wrap gap-6 sm:gap-8 mt-4">
              {["TWITTER", "DISCORD", "STEAM"].map((platform) => (
                <div
                  key={platform}
                  className="relative cursor-pointer group"
                >
                  <span
                    className="text-sm relative px-2 py-1 transition-colors"
                    style={{
                      letterSpacing: "0.1em",
                    }}
                  >
                    {platform}
                    
                    {/* Animated underline effect */}
                    <span 
                      className="absolute bottom-0 left-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"
                      style={{
                        width: "0%",
                        transform: "translateX(50%)",
                      }}
                    ></span>
                  </span>
                  
                  {/* Enhanced hover glow effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"
                    style={{
                      background: "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0) 70%)",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
