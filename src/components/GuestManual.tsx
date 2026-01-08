import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GuestManual = () => {
  return (
    <Card className="shadow-2xl border-2 border-lavender/30 bg-white/95 backdrop-blur-sm mt-8">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold text-primary">Manual do Convidado</CardTitle>
        <CardDescription className="text-lg">
          Algumas dicas especiais para tornar nosso dia ainda mais mágico!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">✨ Traje Sugerido</h3>
            <p className="text-gray-700">
              Sugerimos traje <strong>sport fino</strong> para que todos se sintam confortáveis e elegantes em nossa celebração!
            </p>
          </div>
          
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">🎨 Cores Reservadas</h3>
            <p className="text-gray-700">
              Para preservar a harmonia da paleta de cores do nosso casamento, pedimos gentilmente que evitem: 
              <strong> Branco, Off White, Bege, Creme, Roxo, Lilás, Prata e Dourado</strong>. 
              Essas cores fazem parte da decoração e do visual dos noivos. Agradecemos a compreensão! 💜
            </p>
          </div>
          
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">📸 Durante a Cerimônia</h3>
            <p className="text-gray-700">
              Para que todos possam aproveitar cada momento mágico, pedimos que evitem o uso de celulares durante a cerimônia. 
              Nossos fotógrafos profissionais estarão capturando cada detalhe especial para compartilharmos com vocês depois! 
              Por favor, não levem decoração própria e ajudem-nos a não atrapalhar o trabalho dos fotógrafos. 
              Assim todos terão lindas lembranças desse dia! 📷✨
            </p>
          </div>
          
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">👶 Espaço Kids</h3>
            <p className="text-gray-700">
              Preparamos uma <strong>área kids especial com monitor</strong> para que as crianças se divirtam com segurança 
              enquanto os adultos aproveitam a festa! Os pequenos terão um espaço mágico só deles! 🎈
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuestManual;
