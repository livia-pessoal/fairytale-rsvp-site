import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Magical wedding backdrop with lanterns"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-white/60"></div>
      </div>

      {/* Floating Lanterns Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-golden rounded-full opacity-60 float-animation"></div>
        <div className="absolute top-40 right-1/3 w-6 h-6 bg-golden-glow rounded-full opacity-40 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/2 w-3 h-3 bg-golden rounded-full opacity-70 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-golden rounded-full opacity-50 float-animation" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">
            Giovana <span className="text-golden">&</span> Bruno
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Nosso Felizes Para Sempre Começa Aqui
          </p>
        </div>

        {/* Wedding Date & Venue */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-lavender/30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">21 de Novembro de 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
<span className="text-lg font-semibold">Mairiporã - SP</span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground italic">
            "Porque o amor verdadeiro não tem fim, como as luzes das lanternas que iluminam nosso caminho."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="gradient-primary hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full shadow-lg"
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Confirmar Presença
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            onClick={() => document.getElementById('gifts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lista de Presentes
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            onClick={() => document.getElementById('guest-manual')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Manual do Convidado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;