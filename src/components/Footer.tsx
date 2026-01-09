import { Heart, Calendar, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Couple Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary sparkle-animation" />
              <h3 className="text-xl sm:text-2xl font-bold text-gradient">Giovana & Bruno</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2 md:px-0">
              Celebrando nosso amor com as pessoas mais especiais das nossas vidas. 
              Obrigada por fazer parte da nossa história!
            </p>
          </div>

          {/* Wedding Details */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">Detalhes do Casamento</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold">21 de Novembro de 2026</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">Mairiporã - SP</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">Giovana: 11 98625-5309</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">Bruno: 11 99435-7949</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-golden rounded-full sparkle-animation"></div>
            <div className="w-2 h-2 bg-primary rounded-full sparkle-animation" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-golden rounded-full sparkle-animation" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>

        {/* Quote */}
        <div className="text-center mb-8 px-4">
          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-italic text-primary mb-2">
            "- Rapunzel: E o que fazer quando você consegue realizar o seu maior sonho? - Flynn: Bom, essa é a melhor parte, você tem que encontrar um novo."
          </blockquote>
          <p className="text-sm sm:text-base text-muted-foreground">- Enrolados</p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-lavender/30 px-4">
          <p className="text-sm sm:text-base text-muted-foreground">
            © 2026 Giovana & Bruno. Feito com 💜 para nosso dia especial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;