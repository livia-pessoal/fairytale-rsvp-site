import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, Mail, User, Baby } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RSVPData {
  name: string;
  email: string;
  adults: string;
  children: string;
  attending: string;
}

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<RSVPData>({
    name: "",
    email: "",
    adults: "",
    children: "0",
    attending: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof RSVPData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would normally send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Confirmação Recebida! 💜",
        description: `Obrigada, ${formData.name}! Sua confirmação foi registrada com sucesso.`,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        adults: "",
        children: "0",
        attending: ""
      });

      // Store in localStorage for demo purposes (in real app, this would go to a database)
      const existingRSVPs = JSON.parse(localStorage.getItem('wedding-rsvps') || '[]');
      existingRSVPs.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('wedding-rsvps', JSON.stringify(existingRSVPs));

    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar sua confirmação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-br from-lavender/20 to-white">
      <div className="container mx-auto max-w-2xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-primary sparkle-animation" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Confirmar Presença</h2>
            <Heart className="h-8 w-8 text-primary sparkle-animation" />
          </div>
          <p className="text-xl text-muted-foreground">
            Sua presença será o presente mais especial para nós! ✨
          </p>
        </div>

        {/* RSVP Form */}
        <Card className="shadow-2xl border-2 border-lavender/30 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-primary">Reserve Sua Vaga</CardTitle>
            <CardDescription className="text-lg">
              Preencha os dados abaixo para confirmar sua presença em nosso grande dia
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Digite seu nome completo"
                  required
                  className="text-lg p-3 border-2 border-lavender/50 focus:border-primary"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="text-lg p-3 border-2 border-lavender/50 focus:border-primary"
                />
              </div>

              {/* Attendance Confirmation */}
              <div className="space-y-2">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Você irá comparecer?
                </Label>
                <Select value={formData.attending} onValueChange={(value) => handleInputChange("attending", value)} required>
                  <SelectTrigger className="text-lg p-3 border-2 border-lavender/50 focus:border-primary">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Sim, estarei presente! 💜</SelectItem>
                    <SelectItem value="no">Infelizmente não poderei comparecer 😔</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.attending === "yes" && (
                <>
                  {/* Number of Adults */}
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Número de Adultos
                    </Label>
                    <Select value={formData.adults} onValueChange={(value) => handleInputChange("adults", value)} required>
                      <SelectTrigger className="text-lg p-3 border-2 border-lavender/50 focus:border-primary">
                        <SelectValue placeholder="Quantos adultos?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 adulto</SelectItem>
                        <SelectItem value="2">2 adultos</SelectItem>
                        <SelectItem value="3">3 adultos</SelectItem>
                        <SelectItem value="4">4 adultos</SelectItem>
                        <SelectItem value="5">5+ adultos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Number of Children */}
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold flex items-center gap-2">
                      <Baby className="h-5 w-5 text-primary" />
                      Número de Crianças
                    </Label>
                    <Select value={formData.children} onValueChange={(value) => handleInputChange("children", value)}>
                      <SelectTrigger className="text-lg p-3 border-2 border-lavender/50 focus:border-primary">
                        <SelectValue placeholder="Quantas crianças?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Nenhuma criança</SelectItem>
                        <SelectItem value="1">1 criança</SelectItem>
                        <SelectItem value="2">2 crianças</SelectItem>
                        <SelectItem value="3">3 crianças</SelectItem>
                        <SelectItem value="4">4+ crianças</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full text-xl p-6 gradient-primary hover:scale-105 transition-all duration-300 font-bold rounded-full shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Confirmar Presença ✨"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground">
            Dúvidas? Entre em contato conosco! 💌
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;