import { useEffect, useState } from "react";
import "./FooterComponent.css";

function WaveComponent() {
  const [offset, setOffset] = useState(1000);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const offsetMe = () => {
      setOffset((prevOffset) => (prevOffset <= 0 ? 1000 : prevOffset - 1));
      animationFrameId = requestAnimationFrame(offsetMe);
    };

    offsetMe();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="mt-10">
      <svg
        viewBox={`0 0 ${width} 50`}
        width="100%"
        height="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="1%" style={{ stopColor: "#ae99fc", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "#3300ff", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <path
          strokeWidth="8"
          strokeDasharray="10 10"
          strokeDashoffset={offset}
          fill="none"
          stroke="url(#waveGradient)"
          d="M 0,20 C 100,40 200,0 300,30 C 400,60 500,0 600,30 C 700,60 800,0 900,30 C 1000,60 1100,0 1200,30 C 1300,60 1400,0 1500,30 C 1600,60 1700,0 1800,30 C 1900,60 2000,0 2100,30 C 2200,60 2300,0 2400,30 C 2500,60 2600,0 2700,30 C 2800,60 2900,0 3000,30 C 3100,60 3200,0 3300,30 C 3400,60 3500,0 3600,30 C 3700,60 3800,0 3900,30 "
        />
      </svg>  
    </div>
  );
}

export default WaveComponent;
