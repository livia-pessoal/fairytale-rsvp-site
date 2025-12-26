import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

<<<<<<< HEAD
interface RSVPData {
  name: string;
  email: string;
  attending: string;
=======
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
  { name: "Família Diana", members: ["Diana", "Paulo", "João", "Beatriz", "Gustavo", "Luana"] },
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
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)
}

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<RSVPData>({
    name: "",
<<<<<<< HEAD
    email: "",
    attending: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
    contact: "",
    family: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState<string>("");
  const [membersAttendance, setMembersAttendance] = useState<Record<string, "yes" | "no" | "">>({});
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)

  const handleInputChange = (field: keyof RSVPData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

<<<<<<< HEAD
=======
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

>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
<<<<<<< HEAD
      // Insert RSVP into the database
      const { error } = await supabase
        .from('rsvp_confirmations')
        .insert({
          name: formData.name,
          email: formData.email,
          attending: formData.attending === 'yes'
        });
=======
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
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)

      if (error) {
        throw error;
      }
      
      toast({
        title: "Confirmação Recebida! 💜",
<<<<<<< HEAD
        description: `Obrigada, ${formData.name}! Sua confirmação foi registrada com sucesso.`,
=======
        description: `Obrigada, ${formData.name}! A confirmação da sua família foi registrada com sucesso.`,
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)
      });

      // Reset form
      setFormData({
        name: "",
<<<<<<< HEAD
        email: "",
        attending: ""
      });
=======
        contact: "",
        family: ""
      });
      setSelectedFamily("");
      setMembersAttendance({});
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)

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

<<<<<<< HEAD
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
=======
              {/* Contact Number Field */}
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Número para contato
                </Label>
                <Input
                  id="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                  placeholder="(11) 99999-9999"
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)
                  className="text-lg p-3 border-2 border-lavender/50 focus:border-primary"
                />
              </div>

<<<<<<< HEAD
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
=======
              {/* Family Selection */}
              <div className="space-y-2">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  De qual família você faz parte?
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
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)
                  </SelectContent>
                </Select>
              </div>

<<<<<<< HEAD
=======
              {/* Members Attendance */}
              {selectedFamily && (
                <div className="space-y-4 mt-4">
                  <p className="text-lg font-semibold">
                    Confirme a presença de cada membro da família:
                  </p>
                  <div className="space-y-3">
                    {FAMILIES.find(f => f.name === selectedFamily)?.members.map((member) => (
                      <div
                        key={member}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 border border-lavender/40 rounded-lg bg-white/60"
                      >
                        <span className="font-medium">{member}</span>
                        <Select
                          value={membersAttendance[member]}
                          onValueChange={(value: "yes" | "no") => handleMemberAttendanceChange(member, value)}
                          required
                        >
                          <SelectTrigger className="w-full sm:w-48 border-2 border-lavender/50 focus:border-primary">
                            <SelectValue placeholder="Sim ou Não" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Sim 💜</SelectItem>
                            <SelectItem value="no">Não 😔</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)

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

<<<<<<< HEAD
        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground">
            Dúvidas? Entre em contato conosco! 💌
          </p>
=======
        {/* Guest Manual */}
        <div id="guest-manual" className="mt-10">
          <Card className="shadow-xl border-2 border-lavender/30 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Manual do Convidado
                <Heart className="h-5 w-5 text-primary" />
              </CardTitle>
              <CardDescription className="text-base">
                Algumas orientações com todo carinho para que nossa cerimônia seja ainda mais especial ✨
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-left text-muted-foreground text-base leading-relaxed">
              <div>
                <p className="font-semibold text-foreground mb-1">Tipo de traje</p>
                <p>Traje: <span className="font-semibold">sport fino</span>.</p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Cores não recomendadas</p>
                <p>
                  Para manter a harmonia das fotos e da decoração, pedimos que evitem as cores:
                  <span className="font-semibold"> Branco, Off White, Bege, Creme, Roxo, Lilás, Prata e Dourado</span>.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Durante a cerimônia</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>O uso de celular não é recomendado durante a cerimônia.</li>
                  <li>Por favor, não leve itens de decoração próprios.</li>
                  <li>Evite ficar na frente ou ao lado dos fotógrafos e cinegrafistas.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-1">Crianças</p>
                <p>
                  Teremos uma <span className="font-semibold">área kids com monitoria</span> preparada com carinho para acolher as crianças
                  com segurança enquanto todos aproveitam a festa.
                </p>
              </div>
            </CardContent>
          </Card>
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;