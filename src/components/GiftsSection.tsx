import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gift, ExternalLink, Heart, Star } from "lucide-react";

const GiftsSection = () => {
  const [giftListUrl, setGiftListUrl] = useState("");

// URL real da lista de presentes do casal
  const defaultGiftListUrl = "https://site.lejour.com.br/giovana-e-bruno26";

  const handleGiftListClick = () => {
    const url = giftListUrl || defaultGiftListUrl;
    window.open(url, '_blank');
  };

  return (
    <section id="gifts" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="h-8 w-8 text-golden sparkle-animation" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Lista de Presentes</h2>
            <Gift className="h-8 w-8 text-golden sparkle-animation" />
          </div>
          <p className="text-xl text-muted-foreground">
            Sua presença já é o nosso maior presente, mas se desejar nos presentear... ✨
          </p>
        </div>

{/* Main Gift List Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1 - Descrição da lista */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-lavender/30 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                <Heart className="h-6 w-6" />
                Nossa Lista Especial
              </CardTitle>
              <CardDescription className="text-lg">
                Como Rapunzel que sonhava com uma nova vida, nós também estamos construindo nosso lar dos sonhos!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Preparamos uma lista cuidadosa de presentes que nos ajudarão a criar memórias mágicas em nossa nova jornada juntos.
                Cada item foi escolhido com carinho para fazer parte da nossa história de amor.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Acesso à lista */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-golden/30 h-full flex flex-col justify-center">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-golden to-golden-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Acesse Nossa Lista</h3>
                <p className="text-muted-foreground">
                  Clique no botão abaixo para ver nossa lista de presentes completa
                </p>
              </div>

              <Button
                size="lg"
                className="gradient-golden hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full shadow-lg w-full"
                onClick={handleGiftListClick}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Lista de Presentes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;