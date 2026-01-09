import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, User, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import GuestManual from "./GuestManual";

const FAMILIES = [
  { name: "Família Fátima", members: ["Fátima"] },
  { name: "Família Tia Tereza", members: ["Tia Tereza", "Milena", "Dávila"] },
  { name: "Família Eliene", members: ["Eliene", "João", "Guilherme", "Alice"] },
  { name: "Família Tia Neuça", members: ["Tia Neuça", "Livia", "William", "Neuza"] },
  { name: "Família Tia Miriam", members: ["Tia Miriam", "Tio Edmundo", "Camila", "Vitória", "André", "Iva", "Júnior", "Thamires"] },
  { name: "Família Jânio", members: ["Jânio", "Aparecida"] },
  { name: "Família Ricardo", members: ["Ricardo", "Penha", "Raphael"] },
  { name: "Família Paulo", members: ["Paulo", "Edilaine", "Júlia", "Arthur"] },
  { name: "Família Angela", members: ["Angela", "Eliésio", "José Augusto"] },
  { name: "Família Tia Letinha", members: ["Tia Letinha", "Tio Zé", "Alan", "Maria Vitória", "Luana"] },
  { name: "Família Tia Maria", members: ["Tia Maria", "Pereira", "Alberto", "Klarice"] },
  { name: "Família Auricélia", members: ["Auricélia", "Alan", "Fernando"] },
  { name: "Família Ana Paula", members: ["Ana Paulo", "Luan"] },
  { name: "Família Tia Selma", members: ["Tia Selma", "Danilo", "Camila", "Nego"] },
  { name: "Família Tia Elisangela", members: ["Tia Elisangela", "Mauro", "Paulinho", "Mariana", "Pedro", "Sarah"] },
  { name: "Família Elaine", members: ["Elaine", "Maurício", "Matheus"] },
  { name: "Família Tauane", members: ["Tauane", "Oswaldo", "Marcos", "Eliane", "Mariana"] },
  { name: "Família Diana", members: ["Diana", "Paulo", "João", "Beatriz", "Gustavo"] },
  { name: "Família Luana", members: ["Leonardo", "Kelli", "Luana", "Laura"] },
  { name: "Família Tia Eliana", members: ["Eliana", "Reginaldo", "Guilherme"] },
  { name: "Família Luiz Gustavo", members: ["Luiz Gustavo", "Sergio", "Cida", "Paloma", "Leonardo", "Margareth"] },
  { name: "Família Silvania", members: ["Silvania", "Rivia", "Douglas", "Thalys", "Bianca", "Pedro"] },
  { name: "Família Adriana", members: ["Adriana", "Fábio"] },
  { name: "Família Flávia", members: ["Flávia", "Eduarda"] },
  { name: "Família Geovanna G.", members: ["Geovana Galvino", "Danielle"] },
  { name: "Família Breno", members: ["Breno", "Vanessa"] },
  { name: "Família Geovanna B.", members: ["Geovanna Bonfim", "Thiago"] },
  { name: "Família Edna", members: ["Edna", "Ronaldo", "Rayanne", "Henry"] },
  { name: "Família Ana Júlia", members: ["Ana Júlia"] },
  { name: "Família Josi", members: ["Josi", "Gabriel", "Thiago"] },
];

interface RSVPData {
  name: string;
  contact: string;
  family: string;
}

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<RSVPData>({
    name: "",
    contact: "",
    family: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState<string>("");
  const [membersAttendance, setMembersAttendance] = useState<Record<string, "yes" | "no" | "">>({});
  const [showGuestManual, setShowGuestManual] = useState(false);

  const handleInputChange = (field: keyof RSVPData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFamilyChange = (familyName: string) => {
    setSelectedFamily(familyName);
    setFormData(prev => ({ ...prev, family: familyName }));

    const family = FAMILIES.find(f => f.name === familyName);
    if (family) {
      const initialAttendance: Record<string, "yes" | "no" | ""> = {};
      family.members.forEach(member => {
        initialAttendance[member] = "";
      });
      setMembersAttendance(initialAttendance);
    } else {
      setMembersAttendance({});
    }
  };

  const handleMemberAttendanceChange = (member: string, value: "yes" | "no") => {
    setMembersAttendance(prev => ({
      ...prev,
      [member]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!selectedFamily) {
        toast({
          title: "Selecione uma família",
          description: "Por favor, selecione sua família antes de confirmar a presença.",
          variant: "destructive",
        });
        return;
      }

      const family = FAMILIES.find(f => f.name === selectedFamily);
      if (!family) {
        toast({
          title: "Família inválida",
          description: "Ocorreu um erro ao identificar a família selecionada.",
          variant: "destructive",
        });
        return;
      }

      const allAnswered = family.members.every(member => membersAttendance[member] === "yes" || membersAttendance[member] === "no");

      if (!allAnswered) {
        toast({
          title: "Confirme todos os membros",
          description: "Marque Sim ou Não para cada pessoa da família.",
          variant: "destructive",
        });
        return;
      }

      const rows = family.members.map(member => ({
        family_name: selectedFamily,
        member_name: member,
        attending: membersAttendance[member] === "yes",
        responder_name: formData.name,
        responder_contact: formData.contact || null,
      }));

      const { error } = await supabase
        .from('family_rsvp')
        .insert(rows);

      if (error) {
        throw error;
      }
      
      toast({
        title: "Confirmação Recebida! 💜",
        description: `Obrigada, ${formData.name}! A confirmação da sua família foi registrada com sucesso.`,
      });

      // Reset form
      setFormData({
        name: "",
        contact: "",
        family: ""
      });
      setSelectedFamily("");
      setMembersAttendance({});

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

{/* Contact Field */}
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contato (WhatsApp/Telefone)
                </Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                  placeholder="Digite seu WhatsApp ou telefone"
                  className="text-lg p-3 border-2 border-lavender/50 focus:border-primary"
                />
              </div>
                                                                    {/* Family Selection */}
              <div className="space-y-2">
                <Label htmlFor="family" className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Sua Família
                </Label>
                <Select value={selectedFamily} onValueChange={handleFamilyChange} required>
                  <SelectTrigger className="text-lg p-3 border-2 border-lavender/50 focus:border-primary">
                    <SelectValue placeholder="Selecione sua família" />
                  </SelectTrigger>
                  <SelectContent>
                    {FAMILIES.map((family) => (
                      <SelectItem key={family.name} value={family.name}>
                        {family.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Family Members Attendance */}
              {selectedFamily && (
                <div className="space-y-4 p-4 bg-lavender/10 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-primary">
                    Marque a presença de cada membro da família:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {FAMILIES.find(f => f.name === selectedFamily)?.members.map((member) => (
                      <div key={member} className="flex flex-col space-y-2">
                        <Label className="text-sm font-medium">{member}</Label>
                        <Select
                          value={membersAttendance[member] || ""}
                          onValueChange={(value: "yes" | "no") => handleMemberAttendanceChange(member, value)}
                          required
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Confirmar presença" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Sim, estarei presente</SelectItem>
                            <SelectItem value="no">Não poderei comparecer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Confirmar Presença
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Manual do Convidado */}
        <GuestManual />
      </div>
    </section>
  );
};

export default RSVPSection;