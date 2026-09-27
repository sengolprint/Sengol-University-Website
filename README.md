# Sengol International University Website

Modern multi-page university website built with Next.js, React, TypeScript, Tailwind CSS, Prisma and PostgreSQL.

## Included

- Premium responsive homepage
- About university page with establishment/recognition details
- Programs directory covering 17 schools
- Admissions page and application-form UI
- Campus Life page
- News & Notices page
- Official Contact page
- Admin/CMS dashboard scaffold
- Prisma PostgreSQL schema for users, schools, programs, faculty, news and admission applications
- SEO metadata and reusable header/footer components

## Run locally

```bash
git clone https://github.com/sengolprint/Sengol-University-Website.git
cd Sengol-University-Website
npm install
npm run dev
```

Open `http://localhost:3000`.

## PostgreSQL setup

Copy the example environment file:

```bash
cp .env.example .env
```

Update `DATABASE_URL` with your PostgreSQL username, password and database. Then run:

```bash
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Prisma Studio:

```bash
npm run prisma:studio
```

## Main routes

- `/` — Homepage
- `/about` — About
- `/programs` — Programs & Schools
- `/admissions` — Admissions
- `/campus-life` — Campus Life
- `/news` — News & Notices
- `/contact` — Contact
- `/admin` — CMS dashboard scaffold

## Design system

Warm ivory and white surfaces, deep navy institutional sections, Sengol gold highlights and maroon admission/action accents.

## Next backend layer

Before production, add authenticated admin access, CRUD server actions/API routes, media storage, form validation, rate limiting, email notifications and deployment database configuration.
