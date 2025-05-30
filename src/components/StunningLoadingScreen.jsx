import React from 'react';
import MakonisLogo from '../Asserts/Makonis-Logo.png';

const StunningLoadingScreen = React.forwardRef(({ loadingProgress }, ref) => {
  const styles = `
    .stunning-loader-container {
      background: linear-gradient(135deg, #001f3f 0%, #00152b 50%, #000c1a 100%);
      z-index: 99999;
      overflow: hidden;
    }

    .stunning-grid-bg {
      background-image:
        linear-gradient(rgba(0, 120, 200, 0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 120, 200, 0.07) 1px, transparent 1px);
      background-size: 70px 70px;
      animation: stunningGridMove 40s linear infinite;
      opacity: 0.5;
    }
    @keyframes stunningGridMove {
      0% { background-position: 0 0; }
      100% { background-position: 140px 140px; }
    }

    ${[...Array(7)].map((_, i) => `
      .stunning-orb-${i} {
        width: ${100 + i * 30}px;
        height: ${100 + i * 30}px;
        background: radial-gradient(circle, rgba(0, 160, 233, ${0.05 - i * 0.005}) 0%, transparent 65%);
        filter: blur(${20 + i * 5}px);
        animation: stunningFloatOrb${i} ${12 + i * 3}s ease-in-out infinite;
        animation-delay: ${i * 0.7}s;
      }
      @keyframes stunningFloatOrb${i} {
        0%, 100% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(1); opacity: ${0.04 - i * 0.005}; }
        50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(${1 + i * 0.03}); opacity: ${0.06 - i * 0.005}; }
      }
    `).join('')}

    .stunning-logo-perspective {
      perspective: 1500px;
    }
    .stunning-logo-3d-container {
      width: 250px;
      height: 250px;
      position: relative;
      margin: 0 auto;
      transform-style: preserve-3d;
    }

    /* New rotating globe behind the logo */
    .stunning-globe {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      height: 300px;
      margin-top: -150px;
      margin-left: -150px;
      border-radius: 50%;
      background: radial-gradient(circle at center, #007acc 0%, #004a80 70%);
      box-shadow:
        inset 0 0 30px #00aaff,
        0 0 40px #00aaff;
      animation: globeRotate 20s linear infinite;
      z-index: 0;
    }
    @keyframes globeRotate {
      0% { transform: rotateY(0deg) rotateX(0deg); }
      100% { transform: rotateY(360deg) rotateX(360deg); }
    }

    .stunning-logo-face {
      background: radial-gradient(circle at 50% 40%, rgba(200, 235, 255, 0.9) 0%, rgba(150, 210, 240, 0.7) 100%);
      border: 3px solid rgba(0, 180, 255, 0.7);
      box-shadow:
        0 0 70px rgba(0, 180, 255, 0.7),
        inset 0 0 30px rgba(0, 150, 220, 0.4),
        0 0 10px rgba(255, 255, 255, 0.3);
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .stunning-logo-front { transform: translateZ(40px); }
    .stunning-logo-back { transform: translateZ(-40px) rotateY(180deg); }

    .stunning-logo-image {
      width: 120px;
      animation: stunningLogoGlow 2.2s ease-in-out infinite alternate;
    }
    @keyframes stunningLogoGlow {
      from {
        filter: drop-shadow(0 0 15px rgba(0, 200, 255, 0.8)) brightness(1.15) saturate(1.1);
        transform: scale(1);
      }
      to {
        filter: drop-shadow(0 0 30px rgba(0, 220, 255, 1)) brightness(1.3) saturate(1.2);
        transform: scale(1.03);
      }
    }

    ${[...Array(4)].map((_, i) => `
      .stunning-logo-ring-${i} {
        width: ${180 + i * 30}px;
        height: ${180 + i * 30}px;
        border: 2.5px solid rgba(0, 180, 255, ${0.4 - i * 0.08});
        box-shadow: 0 0 ${10 + i * 5}px rgba(0, 180, 255, ${0.3 - i * 0.05});
        animation: stunningRingRotate${i} ${7 + i * 2}s linear infinite;
        animation-delay: ${i * 0.5}s;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform-style: preserve-3d;
        transform-origin: center center;
        margin: 0;
      }
      @keyframes stunningRingRotate${i} {
        0% { transform: translate(-50%, -50%) rotateX(${20 + i * 20}deg) translateZ(${i * 12}px) rotateY(0deg); }
        100% { transform: translate(-50%, -50%) rotateX(${20 + i * 20}deg) translateZ(${i * 12}px) rotateY(${i % 2 === 0 ? '360deg' : '-360deg'}); }
      }
    `).join('')}

    ${[...Array(12)].map((_, i) => `
      .stunning-logo-particle-${i} {
        width: ${3 + Math.floor(i/4)}px;
        height: ${3 + Math.floor(i/4)}px;
        background: rgba(0, 200, 255, ${0.6 + Math.random() * 0.4});
        box-shadow: 0 0 10px rgba(0, 220, 255, 0.8), 0 0 5px rgba(255,255,255,0.5);
        animation: stunningParticleOrbit${i} ${4 + Math.random() * 2}s linear infinite;
        animation-delay: ${i * 0.1}s;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform-style: preserve-3d;
        transform-origin: center center;
        margin: 0;
      }
      @keyframes stunningParticleOrbit${i} {
        0% { transform: translate(-50%, -50%) rotate(${i * (360/12)}deg) translateX(${95 + (i%3)*10}px) translateZ(${Math.sin(0 * Math.PI / 180 + i*30) * 20}px) scale(0.8); opacity: 0.5; }
        50% { transform: translate(-50%, -50%) rotate(${i * (360/12) + 180}deg) translateX(${100 + (i%3)*10}px) translateZ(${Math.sin(180 * Math.PI / 180 + i*30) * 20}px) scale(1.1); opacity: 1;}
        100% { transform: translate(-50%, -50%) rotate(${i * (360/12) + 360}deg) translateX(${95 + (i%3)*10}px) translateZ(${Math.sin(360 * Math.PI / 180 + i*30) * 20}px) scale(0.8); opacity: 0.5;}
      }
    `).join('')}

    .stunning-loading-title {
      font-weight: 700;
      letter-spacing: 3px;
      font-size: 1.8rem;
      color: #e0f5ff;
      text-shadow: 0 0 10px rgba(0, 180, 255, 0.6), 0 0 20px rgba(0, 180, 255, 0.4);
      animation: stunningTextPulse 2.8s ease-in-out infinite;
    }
    @keyframes stunningTextPulse {
      0%, 100% { opacity: 0.8; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.03); text-shadow: 0 0 15px rgba(0, 200, 255, 0.8), 0 0 30px rgba(0, 200, 255, 0.6); }
    }

    .stunning-loading-status {
      color: rgba(180, 220, 255, 0.8);
      font-size: 1rem;
      letter-spacing: 1.5px;
      animation: stunningFadeInOut 3s ease-in-out infinite;
      min-height: 1.5em;
    }
    @keyframes stunningFadeInOut {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }

    .stunning-progress-bar-container {
      width: 350px;
      height: 6px;
      background: rgba(0, 50, 100, 0.3);
      border-radius: 3px;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
      margin: 0 auto 0.5rem auto;
    }
    .stunning-progress-bar-fill {
      background: linear-gradient(90deg, #00a0e9 0%, #00d0ff 50%, #00a0e9 100%);
      background-size: 250% 100%;
      border-radius: 3px;
      box-shadow: 0 0 15px rgba(0, 180, 255, 0.8), 0 0 8px rgba(100, 220, 255, 0.6);
      animation: stunningProgressBarFill 2s linear infinite;
    }
    @keyframes stunningProgressBarFill {
      0% { background-position: 0% 50%; }
      100% { background-position: 250% 50%; }
    }

    .stunning-progress-text {
      color: rgba(200, 235, 255, 0.9);
      font-size: 0.95rem;
      font-weight: 500;
      letter-spacing: 1.5px;
      text-shadow: 0 0 5px rgba(0,160,233,0.5);
      margin: 0;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div
        ref={ref}
        className="stunning-loader-container position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      >
        {/* Animated Background Grid */}
        <div className="stunning-grid-bg position-absolute w-100 h-100" />

        {/* Floating Orbs (Atmosphere) */}
        {[...Array(7)].map((_, i) => (
          <div
            key={`stunning-orb-${i}`}
            className={`stunning-orb-${i} position-absolute rounded-circle`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="text-center position-relative" style={{ zIndex: 1 }}>
          {/* Rotating Globe */}
          <div className="stunning-globe" />

          {/* Static 3D Logo */}
          <div className="stunning-logo-perspective mb-5">
            <div className="stunning-logo-3d-container">
              {/* Front Logo Face */}
              <div className="stunning-logo-face stunning-logo-front">
                <img src={MakonisLogo} alt="Makonis Logo" className="stunning-logo-image" />
              </div>
              {/* Back Logo Face */}
              <div className="stunning-logo-face stunning-logo-back">
                <img src={MakonisLogo} alt="Makonis Logo Back" className="stunning-logo-image" style={{ transform: 'scaleX(-1)' }} />
              </div>
              {/* Side Rings */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`stunning-ring-${i}`}
                  className={`stunning-logo-ring-${i}`}
                />
              ))}
              {/* Particles around Logo */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`stunning-particle-${i}`}
                  className={`stunning-logo-particle-${i}`}
                />
              ))}
            </div>
          </div>

          {/* Loading Title */}
          <h3 className="stunning-loading-title text-white mb-3">
            MAKONIS SOFTWARE
          </h3>

          {/* Loading Status */}
          <div className="stunning-loading-status mb-4">
            {loadingProgress < 20 && "Initializing Core Systems..."}
            {loadingProgress >= 20 && loadingProgress < 40 && "Loading Interface Modules..."}
            {loadingProgress >= 40 && loadingProgress < 60 && "Assembling Components..."}
            {loadingProgress >= 60 && loadingProgress < 80 && "Finalizing Setup..."}
            {loadingProgress >= 80 && "Almost Ready to Launch..."}
          </div>

          {/* Progress Bar */}
          <div className="stunning-progress-bar-container">
            <div
              className="stunning-progress-bar-fill h-100"
              style={{ width: `${loadingProgress}%`, transition: 'width 0.2s ease-out' }}
            />
          </div>

          {/* Progress Text */}
          <p className="stunning-progress-text">
            {Math.round(loadingProgress)}%
          </p>
        </div>
      </div>
    </>
  );
});

export default StunningLoadingScreen;
