# Casamento Giovana & Bruno 💛

Site do casamento com confirmação de presença (RSVP) por família.

- **Data do casamento**: 21 de Novembro de 2026
- **Confirmações**: salvas no Supabase (tabela `family_rsvp`)
- **Hospedagem**: Netlify (publica automaticamente a cada push na branch `main`)

## Como rodar localmente

Requisitos: Node.js e npm instalados.

```sh
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

O site fica disponível em `http://localhost:8080`.

## Tecnologias

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase

## Onde editar a lista de convidados

A lista de famílias e membros fica em `src/data/families.ts`.
