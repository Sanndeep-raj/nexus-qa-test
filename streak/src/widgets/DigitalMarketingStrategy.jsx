

const DigitalMarketingStrategy = () => {
  const gradientText = {
    background: "linear-gradient(90deg, #22d3ee 0%, #34d399 55%, #4ade80 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    filter: "drop-shadow(0 0 14px rgba(34,211,238,0.55)) drop-shadow(0 0 30px rgba(52,211,153,0.35))",
  };

  return (
    <section
      style={{
        background: "radial-gradient(ellipse at 30% 40%, #001a0a 0%, #000d05 40%, #000000 100%)",
        minHeight: "max(100vh, 900px)",
      }}
      className="relative flex items-center justify-center text-white overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes smokeL {
          0%   { transform: translateY(0) scale(1); opacity: 0.65; }
          100% { transform: translateY(-28px) scale(1.12); opacity: 1; }
        }
        @keyframes smokeR {
          0%   { transform: translateY(-18px) scale(1.06); opacity: 0.55; }
          100% { transform: translateY(22px) scale(0.94); opacity: 1; }
        }
        @keyframes smokeB {
          0%   { transform: translateY(0) scaleX(1); opacity: 0.45; }
          100% { transform: translateY(-8px) scaleX(1.05); opacity: 0.85; }
        }
        @keyframes dm-floatX {
          0%, 100% { transform: translate(-50%, -50%) translateX(0px); }
          50%       { transform: translate(-50%, -50%) translateX(15px); }
        }
        @keyframes dm-haloB {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50%       { opacity: 1; transform: scale(1.05); }
        }
        @keyframes dm-rimSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes dm-b1 {
          0%      { transform: translate(0, 0) scale(1); }
          25%     { transform: translate(35%, 15%) scale(1.2); }
          50%     { transform: translate(0, 0) scale(1.1); }
          75%     { transform: translate(-35%, -15%) scale(0.9); }
          100%    { transform: translate(0, 0) scale(1); }
        }
        @keyframes dm-b2 {
          0%      { transform: translate(0, 0) scale(1); }
          30%     { transform: translate(-25%, 35%) scale(1.15); }
          60%     { transform: translate(0, 0) scale(1.1); }
          85%     { transform: translate(25%, -35%) scale(0.85); }
          100%    { transform: translate(0, 0) scale(1); }
        }
        @keyframes dm-b3 {
          0%, 100% { transform: translate(0, 0) scale(1.2); opacity: 0.5; }
          50%      { transform: translate(10%, -10%) scale(1.4); opacity: 0.9; }
        }
        @keyframes dm-corePulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50%      { transform: scale(1.2); opacity: 0.7; }
        }
        @keyframes dm-orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes dm-dp {
          0%,100% { opacity: 0.35; }
          50%     { opacity: 1; }
        }
        .dm-smoke-l { animation: smokeL 30s ease-in-out infinite alternate; }
        .dm-smoke-r { animation: smokeR 35s ease-in-out infinite alternate; }
        .dm-smoke-b { animation: smokeB 40s ease-in-out infinite alternate; }
        .dm-smoke-t { animation: smokeL 45s ease-in-out infinite alternate-reverse; }
        .dm-globe-float { animation: dm-floatX 20s ease-in-out infinite; }
        .dm-halo { animation: dm-haloB 20s ease-in-out infinite; }
        .dm-globe-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(
            from 210deg,
            rgba(16,185,129,0.7) 0deg,
            rgba(5,150,105,0.5) 28deg,
            rgba(4,120,87,0.15) 55deg,
            transparent 80deg,
            transparent 280deg,
            rgba(6,95,70,0.3) 330deg,
            rgba(16,185,129,0.7) 360deg
          );
          mask: radial-gradient(circle, transparent 91%, black 92%);
          -webkit-mask: radial-gradient(circle, transparent 91%, black 92%);
          filter: blur(5px);
          animation: dm-rimSpin 12s linear infinite;
        }
        .dm-blob-1 { animation: dm-b1 6s ease-in-out infinite; }
        .dm-blob-2 { animation: dm-b2 8s ease-in-out infinite; }
        .dm-blob-3 { animation: dm-b3 5s ease-in-out infinite; }
        .dm-orbit { animation: dm-rimSpin 12s linear infinite; }
        .dm-d1 { animation: dm-dp 3s ease-in-out infinite; }
        .dm-d2 { animation: dm-dp 4s ease-in-out 1s infinite; }
        .dm-d3 { animation: dm-dp 5s ease-in-out 2s infinite; }
      `}} />

      {/* Smoky green side glows */}
      <div className="dm-smoke-l" style={{ position: "absolute", left: "-10%", top: "5%", width: "50%", height: "90%", zIndex: 0, background: "radial-gradient(ellipse at center, rgba(10,80,40,0.12) 0%, rgba(5,50,20,0.05) 45%, transparent 72%)", filter: "blur(70px)" }} />
      <div className="dm-smoke-r" style={{ position: "absolute", right: "-10%", top: "5%", width: "50%", height: "90%", zIndex: 0, background: "radial-gradient(ellipse at center, rgba(20,140,100,0.1) 0%, rgba(10,80,50,0.04) 45%, transparent 72%)", filter: "blur(70px)" }} />
      <div className="dm-smoke-b" style={{ position: "absolute", bottom: "-8%", left: "15%", width: "70%", height: "40%", zIndex: 0, background: "radial-gradient(ellipse at center, rgba(20,140,80,0.08) 0%, transparent 70%)", filter: "blur(55px)" }} />
      <div className="dm-smoke-t" style={{ position: "absolute", top: "-5%", left: "25%", width: "50%", height: "30%", zIndex: 0, background: "radial-gradient(ellipse at center, rgba(10,120,60,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      {/* Globe */}
      <div className="dm-globe-float" style={{ position: "absolute", top: "50%", left: "50%", zIndex: 2 }}>
        <div className="dm-halo" style={{ position: "absolute", inset: "-35px", borderRadius: "50%", background: "radial-gradient(circle, transparent 52%, rgba(10,100,40,0.12) 70%, rgba(20,140,100,0.08) 84%, transparent 100%)", filter: "blur(22px)", pointerEvents: "none" }} />

        <div className="dm-globe-inner" style={{
          position: "relative",
          width: "min(72vw, 680px)",
          height: "min(72vw, 680px)",
          borderRadius: "50%",
          background: [
            "radial-gradient(circle at 34% 26%, rgba(10,120,60,0.18) 0%, transparent 42%)",
            "radial-gradient(circle at 66% 74%, rgba(5,80,40,0.15) 0%, transparent 42%)",
            "radial-gradient(circle at 50% 50%, #010804 0%, #000402 55%, #000000 100%)",
          ].join(", "),
          boxShadow: "0 0 60px rgba(10,100,40,0.3), 0 0 110px rgba(20,140,80,0.12), inset 0 0 50px rgba(0,0,0,0.98)",
          overflow: "hidden",
        }}>
          <div className="dm-blob-1" style={{ position: "absolute", width: "58%", height: "58%", top: "8%", left: "8%", borderRadius: "50%", background: "radial-gradient(circle, rgba(16,120,50,0.45) 0%, rgba(5,60,30,0.2) 50%, transparent 80%)", filter: "blur(26px)" }} />
          <div className="dm-blob-2" style={{ position: "absolute", width: "52%", height: "52%", bottom: "8%", right: "8%", borderRadius: "50%", background: "radial-gradient(circle, rgba(10,100,70,0.4) 0%, rgba(5,80,40,0.2) 50%, transparent 80%)", filter: "blur(22px)" }} />
          <div className="dm-blob-3" style={{ position: "absolute", width: "36%", height: "36%", top: "38%", left: "33%", borderRadius: "50%", background: "radial-gradient(circle, rgba(20,140,80,0.3) 0%, transparent 70%)", filter: "blur(16px)" }} />
        </div>

        <div style={{ position: "absolute", inset: "-1px", borderRadius: "50%", border: "1px solid rgba(10,120,60,0.2)", boxShadow: "0 0 12px rgba(10,100,50,0.2), inset 0 0 10px rgba(5,80,30,0.1)", pointerEvents: "none" }} />

        <div className="dm-orbit" style={{ position: "absolute", inset: "-42px", borderRadius: "50%", pointerEvents: "none" }}>
          <div className="dm-d1" style={{ position: "absolute", width: "3px", height: "3px", background: "rgba(34,197,94,0.65)", boxShadow: "0 0 7px rgba(34,197,94,0.65)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(50deg) translateX(calc(min(36vw,340px) + 42px))" }} />
          <div className="dm-d2" style={{ position: "absolute", width: "4px", height: "4px", background: "rgba(16,185,129,0.55)", boxShadow: "0 0 9px rgba(16,185,129,0.55)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(175deg) translateX(calc(min(36vw,340px) + 48px))" }} />
          <div className="dm-d3" style={{ position: "absolute", width: "2px", height: "2px", background: "rgba(52,211,153,0.7)", boxShadow: "0 0 6px rgba(52,211,153,0.7)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(295deg) translateX(calc(min(36vw,340px) + 38px))" }} />
        </div>
      </div>

      {/* Text */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-[900px] mx-auto pt-40 sm:pt-64 py-24 sm:py-28"
      >
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)", lineHeight: 1.4, fontWeight: 400, letterSpacing: "-0.01em", marginBottom: "clamp(3rem, 5vw, 4rem)" }}>
          Grow With<br />
          <span style={gradientText}>The Right Strategy</span>
        </h2>
        <p style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)", lineHeight: 1.7, fontWeight: 300, color: "#ffffff", textShadow: "0 0 10px rgba(255,255,255,0.35)", maxWidth: "640px", margin: "0 auto", marginBottom: "clamp(3.5rem, 6vw, 5rem)" }}>
          Strategic Approach. Real growth. Let&rsquo;s build<br />your digital success.
        </p>
        <a href="/contact">
          <button className="border border-white px-6 md:px-8 py-3 text-base md:text-lg transition-all duration-300 hover:bg-white hover:text-black">
            Learn More →
          </button>
        </a>
      </div>
    </section>
  );
};

export default DigitalMarketingStrategy;