# Islam Nayeemul’s portfolio

This portfolio uses the Next.js App Router, TypeScript, Tailwind CSS, and local content. It runs without a CMS or credentials. Use Node.js 22 or newer and the pnpm version pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. For a production build and local production server, run `pnpm build` and then `pnpm start`.

## Edit content and files

- Edit expertise cards, projects, and experience in `src/content/portfolio.json`. Array order matches display order. Keep project slugs unique and stable because they determine the URLs under `/projects/`.
- Edit education, skill groups, personal details, and contact links in `src/content/portfolio.ts`. Edit headings and hero copy in `src/app/page.tsx`.
- Technology icons use React Icons in `src/app/page.tsx`. Project screenshots and expertise images live in `public/images/`. Expertise cards without an image use a CSS placeholder.
- Put any future downloadable documents in `public/` and link to their public paths.
- The contact form opens a draft in the visitor’s email app. Visitors can also use the direct email or phone link.
