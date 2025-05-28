import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Glowing Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] md:w-[1200px] md:h-[700px] rounded-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/blackhole.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
      </div>
    </div>
  );
}
