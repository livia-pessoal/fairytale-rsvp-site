import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GuestManual = () => {
  return (
    <Card className="shadow-2xl border-2 border-lavender/30 bg-white/95 backdrop-blur-sm mt-8">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-primary">Dicas para o Nosso Grande Dia</CardTitle>
        <CardDescription>
          Preparamos este guia para que você aproveite cada momento da nossa celebração com o máximo de conforto e alegria!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">Traje e o Cenário</h3>
            <p className="text-sm text-gray-700 mb-2">
              Nosso "sim" será em meio à natureza! O traje é o <strong>Sport Fino</strong>. Como o casamento será no campo, sugerimos que escolham calçados que tragam conforto.
            </p>
            <p className="text-sm text-gray-700 italic">
              <strong>Dica para as convidadas:</strong> Saltos mais grossos (bloco) ou anabelas são ótimas opções para caminhar com tranquilidade na grama e aproveitar a festa sem preocupações!
            </p>
          </div>
          
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">Nossa Paleta de Cores</h3>
            <p className="text-sm text-gray-700 mb-2">
              Para que o cenário do nosso dia fique em total harmonia, pedimos a gentileza de evitarem os tons abaixo:
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Branco, Off White, Bege e Creme</strong> (reservados para a noiva).
            </p>
            <p className="text-sm text-gray-700">
              <strong>Roxo, Lilás, Prata e Dourado</strong> (cores presentes nas madrinhas e decoração).
            </p>
          </div>
          
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">Presente com o Coração (Cerimônia Desconectada)</h3>
            <p className="text-sm text-gray-700">
              Queremos muito ver seus sorrisos e sentir a energia de vocês durante os nossos votos! Por isso, fazemos um convite: que tal deixar o celular guardadinho durante a cerimônia? Teremos fotógrafos profissionais registrando cada detalhe para que vocês não precisem se preocupar com cliques. Assim, garantimos que nossas fotos mostrem apenas a emoção de cada um, sem interferências de telas ou flashes.
            </p>
          </div>
          
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">Estacionamento</h3>
            <p className="text-sm text-gray-700">
              Sua única preocupação deve ser celebrar! O local conta com serviço de manobrista, então é só chegar e se divertir.
            </p>
          </div>
          
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">Espaço Kids</h3>
            <p className="text-sm text-gray-700">
              Os pequenos também têm um lugar especial! Teremos uma Área Kids com monitoria para que as crianças se divirtam com segurança, enquanto os papais e mamães aproveitam a festa com tranquilidade.
            </p>
          </div>
          
          <div className="bg-lavender/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-primary">Carinho com a Nossa Festa</h3>
            <p className="text-sm text-gray-700">
              Nossa decoração foi pensada para criar um ambiente mágico do início ao fim da noite. Pedimos que não retirem flores ou itens decorativos das mesas, para que o cenário continue lindo para todos os convidados até o último brinde!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuestManual;
