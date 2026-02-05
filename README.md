# Uandersts.com – Bio tecnológica

Site pessoal (link-in-bio) do **Uander Santos**: especialista em diagnóstico, anúncios, sistemas e processos para assistência técnica.

- **Stack:** Vite + React + TypeScript + Tailwind CSS + Framer Motion
- **Deploy:** preparado para Vercel

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Conectar ao GitHub e fazer deploy na Vercel

### 1. Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: **Uander** (ou outro, ex: `uandersts-site`)
3. Deixe **público** e **não** marque "Add a README" (o projeto já tem)
4. Clique em **Create repository**

### 2. Conectar e enviar o código

No terminal, na pasta do projeto:

```bash
git remote add origin https://github.com/SEU_USUARIO/Uander.git
git branch -M main
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu usuário do GitHub. Se o repositório tiver outro nome, use esse nome no lugar de `Uander`.

### 3. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login (pode usar conta GitHub)
2. **Add New** → **Project**
3. **Import** o repositório **Uander** (ou o nome que você usou)
4. A Vercel detecta Vite automaticamente:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**
6. Depois do deploy, em **Settings → Domains** você pode adicionar **uandersts.com** (e apontar o DNS do domínio para a Vercel)

Pronto: o site estará no ar e cada push em `main` gera um novo deploy automático.
