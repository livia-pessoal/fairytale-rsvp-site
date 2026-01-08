import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GuestManual = () => {
  return (
    <Card className="shadow-2xl border-2 border-lavender/30 bg-white/95 backdrop-blur-sm mt-8">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-primary">Manual do Convidado</CardTitle>
        <CardDescription>
          Algumas dicas importantes para nosso dia especial!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="bg-lavender/10 p-3 rounded-lg">
            <h3 className="font-semibold mb-1 text-primary">Traje Sugerido</h3>
            <p className="text-sm text-gray-700">Sport fino</p>
          </div>
          
          <div className="bg-lavender/10 p-3 rounded-lg">
            <h3 className="font-semibold mb-1 text-primary">Cores Reservadas</h3>
            <p className="text-sm text-gray-700">
              Para preservar a harmonia das cores, pedimos que evitem: <strong>Branco, Off White, Bege, Creme, Roxo, Lilás, Prata e Dourado</strong>.
            </p>
          </div>
          
          <div className="bg-lavender/10 p-3 rounded-lg">
            <h3 className="font-semibold mb-1 text-primary">Durante a Cerimônia</h3>
            <p className="text-sm text-gray-700">
              Pedimos que evitem o uso de celulares durante a cerimônia. Os flashs podem atrapalhar os fotógrafos e cobrir rostos nas fotos. 
              Nossos profissionais estarão registrando tudo para compartilhar com vocês depois. Por favor, não levem decoração própria.
            </p>
          </div>
          
          <div className="bg-lavender/10 p-3 rounded-lg">
            <h3 className="font-semibold mb-1 text-primary">Espaço Kids</h3>
            <p className="text-sm text-gray-700">
              Haverá área kids com monitor para as crianças.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuestManual;
