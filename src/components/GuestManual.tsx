import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Palette, Smartphone, Car, Baby, Flower2 } from "lucide-react";

const sections = [
  {
    icon: Shirt,
    title: "Traje e o Cenário",
    content: (
      <>
        <p className="text-base text-gray-700 leading-relaxed mb-3">
          Nosso "sim" será em meio à natureza! O traje é o <strong>Sport Fino</strong>. Como o casamento será no campo, sugerimos que escolham calçados que tragam conforto.
        </p>
        <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-3">
          <p className="text-base text-gray-700 italic leading-relaxed">
            <strong>Dica para as convidadas:</strong> Saltos mais grossos (bloco) ou anabelas são ótimas opções para caminhar com tranquilidade na grama e aproveitar a festa sem preocupações!
          </p>
        </div>
      </>
    ),
  },
  {
    icon: Palette,
    title: "Nossa Paleta de Cores",
    content: (
      <>
        <p className="text-base text-gray-700 leading-relaxed mb-3">
          Para que o cenário do nosso dia fique em total harmonia, pedimos a gentileza de evitarem os tons abaixo:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="mt-1 w-3 h-3 rounded-full bg-gray-200 border border-gray-400 flex-shrink-0"></span>
            <p className="text-base text-gray-700"><strong>Branco, Off White, Bege e Creme</strong> — reservados para a noiva.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 w-3 h-3 rounded-full bg-primary/60 flex-shrink-0"></span>
            <p className="text-base text-gray-700"><strong>Roxo, Lilás, Prata e Dourado</strong> — cores das madrinhas e decoração.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: Smartphone,
    title: "Cerimônia Desconectada",
    content: (
      <p className="text-base text-gray-700 leading-relaxed">
        Queremos muito ver seus sorrisos e sentir a energia de vocês durante os nossos votos! Por isso, fazemos um convite: que tal deixar o celular guardadinho durante a cerimônia? Teremos fotógrafos profissionais registrando cada detalhe. Assim, nossas fotos mostrarão apenas a emoção de cada um, sem interferências de telas ou flashes.
      </p>
    ),
  },
  {
    icon: Car,
    title: "Estacionamento",
    content: (
      <p className="text-base text-gray-700 leading-relaxed">
        Sua única preocupação deve ser celebrar! O local conta com serviço de <strong>manobrista</strong>, então é só chegar e se divertir.
      </p>
    ),
  },
  {
    icon: Baby,
    title: "Espaço Kids",
    content: (
      <p className="text-base text-gray-700 leading-relaxed">
        Os pequenos também têm um lugar especial! Teremos uma <strong>Área Kids com monitoria</strong> para que as crianças se divirtam com segurança, enquanto os papais e mamães aproveitam a festa com tranquilidade.
      </p>
    ),
  },
  {
    icon: Flower2,
    title: "Carinho com a Nossa Festa",
    content: (
      <p className="text-base text-gray-700 leading-relaxed">
        Nossa decoração foi pensada para criar um ambiente mágico do início ao fim da noite. Pedimos que não retirem flores ou itens decorativos das mesas, para que o cenário continue lindo para todos os convidados até o último brinde!
      </p>
    ),
  },
];

const GuestManual = () => {
  return (
    <Card id="guest-manual" className="shadow-2xl border-2 border-lavender/30 bg-white/95 backdrop-blur-sm mt-8">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-3xl font-cardo font-bold text-primary">Dicas para o Nosso Grande Dia</CardTitle>
        <CardDescription className="text-base mt-2">
          Preparamos este guia para que você aproveite cada momento da nossa celebração com o máximo de conforto e alegria!
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-4">
          {sections.map(({ icon: Icon, title, content }) => (
            <div key={title} className="bg-lavender/10 rounded-xl p-5 border border-lavender/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-cardo font-bold text-lg text-primary leading-tight">{title}</h3>
              </div>
              <div>{content}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GuestManual;
