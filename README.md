# Rota View — Estrada do Encanamento

Diagnóstico interativo de defeitos do pavimento (Rota Engenharia · DNIT 005/2003).
Site estático: HTML + CSS + JS puros, sem build e sem dependências.

```
index.html        marcação
styles.css        estilos (mobile-first: base = celular; 600px e 861px ampliam)
app.js            dados das ocorrências, mapa, modo rua, pranchas CAD
assets/img/       fotos, croqui e logo
vercel.json       cache dos assets e cabeçalhos de segurança
```

## Publicar na Vercel

**Pelo painel (sem instalar nada):** vercel.com → *Add New… → Project*. Importe o repositório do GitHub
com esta pasta (ou arraste a pasta). Framework Preset: **Other**. Build Command e Output Directory: deixe vazios.

**Pela linha de comando:**
```bash
npm i -g vercel
vercel login
vercel          # preview
vercel --prod   # produção
```

## Testar localmente
```bash
npx serve .
```
Abrir o `index.html` direto pelo navegador também funciona.

## Editar o conteúdo
As nove ocorrências ficam no array `DEFEITOS`, no começo do `app.js`: coordenadas, textos, foto e
posição na seção transversal (`cad`). O texto do relatório fica no `index.html`.
