# Portfólio — João Vitor de Medeiros

Portfólio pessoal de desenvolvedor Full Stack, feito com **React 19 + Vite** e CSS puro (sem framework de UI).

## Como rodar

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente
```

## Estrutura

```
index.html              SEO, Open Graph, JSON-LD e tema sem "piscar"
public/                 favicon, robots.txt (e o currículo em PDF, quando houver)
src/
  data/profile.js       TODO o conteúdo: textos, experiência, tecnologias, projetos e links
  components/           uma seção por componente (Hero, About, Experience, Skills, Projects...)
  hooks/                tema claro/escuro, rotas por hash, animações de entrada, menu ativo
  styles/global.css     tokens de design (cores, fontes) e estilos
  assets/img/           foto e prints dos projetos
```

## Como atualizar o conteúdo

Quase tudo se resolve em `src/data/profile.js`:

- **Novo projeto:** adicione um objeto em `projects` (o `slug` vira a página `#/projetos/<slug>`).
  Sem print, use `cover: 'graph' | 'dashboard' | 'table'` para uma capa ilustrada; com print,
  importe a imagem de `src/assets/img/` e preencha `image`.
- **Currículo:** coloque o PDF em `public/` e preencha `profile.resumeUrl`
  (ex.: `'./curriculo-joao-vitor-de-medeiros.pdf'`). Os botões de download aparecem sozinhos.
- **Links de projeto:** `links.repo` e `links.demo`; vazio esconde o botão.

## Funcionalidades

- Layout responsivo (celular, tablet e desktop) e menu mobile
- Tema claro e escuro (respeita o sistema e lembra a escolha)
- Página de detalhes para cada projeto (rotas por hash, funciona em qualquer hospedagem estática)
- Animações de entrada sutis que respeitam `prefers-reduced-motion`
- Formulário de contato com validação (abre o e-mail do visitante já preenchido)
- SEO: título, descrição, Open Graph e dados estruturados (schema.org `Person`)
- Acessibilidade: link "pular para o conteúdo", foco visível, rótulos ARIA

## Publicação

O build usa caminhos relativos (`base: './'`), então a pasta `dist/` funciona tanto na raiz de um
domínio quanto em subpasta (GitHub Pages em `/Portifolio/`, por exemplo).
Depois de publicar, acrescente `og:url` e `og:image` com a URL absoluta no `index.html`.
