import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface RSVPData {
  name: string;
  email: string;
  attending: string;
}

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<RSVPData>({
    name: "",
    email: "",
    attending: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof RSVPData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Find matching family in the database and update confirmation
      const familyName = formData.name.toLowerCase();
      let updateColumn = '';
      
      // Check which family column matches the name
      const { data: guestList, error: fetchError } = await supabase
        .from('Lista de Convidados')
        .select('*')
        .limit(1);

      if (fetchError) {
        throw new Error('Erro ao acessar lista de convidados');
      }

      if (guestList && guestList.length > 0) {
        const firstRow = guestList[0];
        const columns = Object.keys(firstRow);
        
        // Find the family column that matches
        const matchingColumn = columns.find(col => 
          col.includes('Família') && 
          firstRow[col] && 
          firstRow[col].toLowerCase().includes(familyName.split(' ')[0].toLowerCase())
        );

        if (matchingColumn) {
          // Find the corresponding confirmation column
          const columnIndex = columns.indexOf(matchingColumn);
          const confirmationColumns = columns.filter(col => col.includes('Confirmação'));
          
          if (confirmationColumns.length > 0) {
            // Map family column to confirmation column
            if (matchingColumn.includes('Fátima')) updateColumn = 'Confirmação';
            else if (matchingColumn.includes('Tereza')) updateColumn = 'Confirmação_1';
            else if (matchingColumn.includes('Eliene')) updateColumn = 'Confirmação_2';
            else if (matchingColumn.includes('Neuza')) updateColumn = 'Confirmação_3';
            else if (matchingColumn.includes('Miriam')) updateColumn = 'Confirmação_4';
            else if (matchingColumn.includes('Jênio')) updateColumn = 'Confirmação_5';
            else if (matchingColumn.includes('Ricardo')) updateColumn = 'Confirmação_6';
            else if (matchingColumn.includes('Paulo')) updateColumn = 'Confirmação_7';
            else if (matchingColumn.includes('Angela')) updateColumn = 'Confirmação_8';
            else if (matchingColumn.includes('Letinha')) updateColumn = 'Confirmação_9';
            else if (matchingColumn.includes('Maria')) updateColumn = 'Confirmação_10';
            else if (matchingColumn.includes('Auricélia')) updateColumn = 'Confirmação_11';
            else if (matchingColumn.includes('Paula')) updateColumn = 'Confirmação_12';
            else if (matchingColumn.includes('Selma')) updateColumn = 'Confirmação_13';
            else if (matchingColumn.includes('Elisangela')) updateColumn = 'Confirmação_14';
            else if (matchingColumn.includes('Elaine')) updateColumn = 'Confirmação_15';
            else if (matchingColumn.includes('Tauane')) updateColumn = 'Confirmação_16';
            else if (matchingColumn.includes('Diana')) updateColumn = 'Confirmação_17';
            else if (matchingColumn.includes('Eliana')) updateColumn = 'Confirmação_18';
            else if (matchingColumn.includes('Gustavo')) updateColumn = 'Confirmação_19';
            else if (matchingColumn.includes('Silvana')) updateColumn = 'Confirmação_20';
            else if (matchingColumn.includes('Adriana')) updateColumn = 'Confirmação_21';
            else if (matchingColumn.includes('Flávia')) updateColumn = 'Confirmação_22';
            else if (matchingColumn.includes('Geovanna G')) updateColumn = 'Confirmação_23';
            else if (matchingColumn.includes('Breno')) updateColumn = 'Confirmação_24';
            else if (matchingColumn.includes('Thamires')) updateColumn = 'Confirmação_25';
            else if (matchingColumn.includes('Geovanna B')) updateColumn = 'Confirmação_26';
            else if (matchingColumn.includes('Edna')) updateColumn = 'Confirmação_27';
            else if (matchingColumn.includes('Ana Julia')) updateColumn = 'Confirmação_28';
          }
        }
      }

      if (updateColumn) {
        const { error: updateError } = await supabase
          .from('Lista de Convidados')
          .update({ [updateColumn]: formData.attending === 'yes' ? 'SIM' : 'NÃO' })
          .eq('Família Fátima', firstRow['Família Fátima']); // Using first row as reference

        if (updateError) {
          throw new Error('Erro ao atualizar confirmação');
        }
      }
      
      toast({
        title: "Confirmação Recebida! 💜",
        description: `Obrigada, ${formData.name}! Sua confirmação foi registrada com sucesso.`,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        attending: ""
      });

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