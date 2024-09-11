# SVELTEKIT PRISMA AUTH.JS EXAMPLE

## AUTHJS PACKAGES

```bash
npm install @next-auth/prisma-adapter
npm install @auth/core
npm install @auth/sveltekit ## FOI NECESSÁRIO --force. ACREDITO QUE DEVIDO AO SVELTE 5 PEER DEPENDENCY
```

## DEVELOPMENT

```bash
npx prisma db push
npx prisma generate
npm run dev
```
