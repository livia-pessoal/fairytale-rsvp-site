import { Heart, Star } from "lucide-react";

const StorySection = () => {
  return (
    <section id="story" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-6 w-6 text-golden sparkle-animation" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Nossa História</h2>
            <Star className="h-6 w-6 text-golden sparkle-animation" />
          </div>
          <p className="text-xl text-muted-foreground">
            Como todo conto de fadas, nosso amor começou de forma mágica...
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {/* First Meeting */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lavender/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">O Primeiro Encontro</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Como Rapunzel que sonhava em ver as lanternas de perto, nossos caminhos se cruzaram 
                    de forma única e especial. Desde o primeiro momento, soubemos que algo mágico estava acontecendo.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* The Proposal */}
          <div className="relative">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lavender/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-6 w-6 text-golden sparkle-animation" />
                    <h3 className="text-2xl font-bold text-primary">O Pedido</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Como Flynn que encontrou seu verdadeiro lar no coração de Rapunzel, 
                    nosso amor cresceu até que chegou o momento mágico do "sim". 
                    Um momento que ficará gravado em nossos corações para sempre.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-golden to-golden-glow rounded-full flex items-center justify-center shadow-lg">
                  <Star className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* The Wedding */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lavender/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-6 w-6 text-primary sparkle-animation" />
                    <h3 className="text-2xl font-bold text-primary">O Grande Dia</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Agora chegou a hora de celebrarmos nosso amor com quem mais amamos. 
                    Como as lanternas que iluminam o céu no filme, queremos que vocês sejam 
                    as luzes que tornarão nosso dia ainda mais especial e mágico.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary via-accent to-golden rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-4xl">💍</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
            <blockquote className="text-2xl md:text-3xl font-italic text-primary mb-4">
              "E assim, eles viveram felizes para sempre..."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Nossa história está apenas começando, e vocês fazem parte dela! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;