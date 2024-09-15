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

## HOW TO CREATE THE CREDENTIALS

- [FOR GITHUB](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)
- [FOR GOOGLE](https://developers.google.com/identity/protocols/oauth2/web-server#httprests)
