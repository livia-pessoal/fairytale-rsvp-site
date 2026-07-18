-- Atualiza os nomes das famílias já confirmadas para o novo padrão (nome + sobrenome)
-- Rodar no Supabase: SQL Editor > New query > colar tudo > Run

update family_rsvp set family_name = 'Família Fátima Menezes' where family_name = 'Família Fátima';
update family_rsvp set family_name = 'Família Tia Tereza Mandú' where family_name = 'Família Tia Tereza';
update family_rsvp set family_name = 'Família Eliene Gomes' where family_name = 'Família Eliene';
update family_rsvp set family_name = 'Família Tia Neuça Pereira' where family_name = 'Família Tia Neuça';
update family_rsvp set family_name = 'Família Tia Mirian Mandú' where family_name = 'Família Tia Miriam';
update family_rsvp set family_name = 'Família Jânio Mandú' where family_name = 'Família Jânio';
update family_rsvp set family_name = 'Família Ricardo Mandú' where family_name = 'Família Ricardo';
update family_rsvp set family_name = 'Família Paulo Mandú' where family_name = 'Família Paulo';
update family_rsvp set family_name = 'Família Angela Mandú' where family_name = 'Família Angela';
update family_rsvp set family_name = 'Família Tia Letinha Gomes' where family_name = 'Família Tia Letinha';
update family_rsvp set family_name = 'Família Tia Maria Pereira' where family_name = 'Família Tia Maria';
update family_rsvp set family_name = 'Família Auricélia Veronez' where family_name = 'Família Auricélia';
update family_rsvp set family_name = 'Família Ana Paula Vilas Boas' where family_name = 'Família Ana Paula';
update family_rsvp set family_name = 'Família Tia Selma Gomes' where family_name = 'Família Tia Selma';
update family_rsvp set family_name = 'Família Tia Elisângela Soares' where family_name = 'Família Tia Elisangela';
update family_rsvp set family_name = 'Família Elaine Muniz' where family_name = 'Família Elaine';
update family_rsvp set family_name = 'Família Tauane Gasparino' where family_name = 'Família Tauane';
update family_rsvp set family_name = 'Família Diana Menezes' where family_name = 'Família Diana';
update family_rsvp set family_name = 'Família Luana Ribeiro' where family_name = 'Família Luana';
update family_rsvp set family_name = 'Família Tia Eliana Santos' where family_name = 'Família Tia Eliana';
update family_rsvp set family_name = 'Família Luiz Gustavo Lopes' where family_name = 'Família Luiz Gustavo';
update family_rsvp set family_name = 'Família Silvania Fernandes' where family_name = 'Família Silvania';
update family_rsvp set family_name = 'Família Adriana Menezes' where family_name = 'Família Adriana';
update family_rsvp set family_name = 'Família Flávia Menezes' where family_name = 'Família Flávia';
update family_rsvp set family_name = 'Família Geovanna Galvino' where family_name = 'Família Geovanna G.';
update family_rsvp set family_name = 'Família Geovanna Bonfim' where family_name = 'Família Geovanna B.';
update family_rsvp set family_name = 'Família Edna Silva' where family_name = 'Família Edna';
update family_rsvp set family_name = 'Família Ana Julia Rocha' where family_name = 'Família Ana Júlia';
update family_rsvp set family_name = 'Família Josi Menezes' where family_name = 'Família Josi';
update family_rsvp set family_name = 'Família Renata Melo' where family_name = 'Família Renata';
update family_rsvp set family_name = 'Família Jefferson Lins' where family_name = 'Família Jefferson';
update family_rsvp set family_name = 'Família Romualdo Gomes' where family_name = 'Família Romualdo';
update family_rsvp set family_name = 'Família Tio Sinval Gomes' where family_name = 'Família Tio Sinval';
update family_rsvp set family_name = 'Família Thamires Cristina' where family_name = 'Família Thamires';
update family_rsvp set family_name = 'Família Gabriela Ruiz' where family_name = 'Família Gabriela';

-- Ajusta os nomes dos membros que tinham sobrenome
update family_rsvp set member_name = 'Geovanna' where family_name = 'Família Geovanna Galvino' and member_name = 'Geovana Galvino';
update family_rsvp set member_name = 'Geovanna' where family_name = 'Família Geovanna Bonfim' and member_name = 'Geovanna Bonfim';

-- Troca André por Kaique na Família Thamires Cristina
update family_rsvp set member_name = 'Kaique' where family_name = 'Família Thamires Cristina' and member_name = 'André';

-- Remove a Família Breno (desconvidado)
delete from family_rsvp where family_name = 'Família Breno';

-- Confere o resultado
select family_name, member_name, attending from family_rsvp order by family_name, member_name;
