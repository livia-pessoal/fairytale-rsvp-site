import { Sparkles, Star } from "lucide-react";

const MagicalElements = () => {
  return (
    <>
      {/* Floating magical sparkles - top left */}
      <div className="fixed top-20 left-10 pointer-events-none z-10 hidden md:block">
        <Sparkles className="h-6 w-6 text-primary/30 twinkle-animation" />
      </div>
      
      {/* Floating magical sparkles - top right */}
      <div className="fixed top-32 right-16 pointer-events-none z-10 hidden md:block">
        <Star className="h-5 w-5 text-golden/40 twinkle-animation" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating magical sparkles - middle left */}
      <div className="fixed top-1/3 left-20 pointer-events-none z-10 hidden lg:block">
        <Star className="h-4 w-4 text-primary/25 twinkle-animation" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Floating magical sparkles - middle right */}
      <div className="fixed top-1/2 right-24 pointer-events-none z-10 hidden lg:block">
        <Sparkles className="h-5 w-5 text-golden/35 twinkle-animation" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Bottom decorative elements */}
      <div className="fixed bottom-32 left-16 pointer-events-none z-10 hidden md:block">
        <div className="relative">
          <div className="absolute w-3 h-3 bg-primary/20 rounded-full pulse-glow-animation"></div>
          <Star className="h-4 w-4 text-primary/30 twinkle-animation" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      
      <div className="fixed bottom-40 right-20 pointer-events-none z-10 hidden md:block">
        <div className="relative">
          <div className="absolute w-2 h-2 bg-golden/20 rounded-full pulse-glow-animation" style={{ animationDelay: '1s' }}></div>
          <Sparkles className="h-5 w-5 text-golden/30 twinkle-animation" style={{ animationDelay: '2.5s' }} />
        </div>
      </div>

      {/* Subtle flower decorations */}
      <div className="fixed top-1/4 left-8 pointer-events-none z-10 hidden xl:block">
        <div className="text-4xl opacity-20 sway-animation">🌸</div>
      </div>
      
      <div className="fixed top-2/3 right-12 pointer-events-none z-10 hidden xl:block">
        <div className="text-3xl opacity-15 sway-animation" style={{ animationDelay: '1.5s' }}>🌺</div>
      </div>
    </>
  );
};

export default MagicalElements;
