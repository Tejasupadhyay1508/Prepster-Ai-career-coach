This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Prepster — AI Career Coach

Prepster is a Next.js app that provides AI-powered career tools: resume builder, cover letter generator, and interview preparation tailored to a user's industry and skills.

## Features
- Personalized industry insights (weekly updates)
- Resume builder with AI improvement and PDF export
- AI-generated cover letters
- Industry- and skill-specific interview quizzes and assessment tracking
- Authentication via Clerk

## Quick start

1. Install dependencies:
```sh
npm install
# or
pnpm install
```

2. Run locally:
```sh
npm run dev
# or
pnpm dev
```

3. Build for production:
```sh
npm run build
npm start
```

## Environment variables

Create a .env file with at least:

- GEMINI_API_KEY — AI / Gemini API key
- DATABASE_URL — Prisma database URL
- Clerk env vars (as required by Clerk)

## Key files & entry points

- App layout and entry
  - [app/layout.js](app/layout.js)
  - [app/page.jsx](app/page.jsx)

- Auth & user checks
  - [`checkUser`](lib/checkUser.js) — [lib/checkUser.js](lib/checkUser.js)

- UI / Components
  - [`Header`](components/header.jsx) — [components/header.jsx](components/header.jsx)
  - Resume UI: [`ResumeBuilder`](app/(main)/resume/_components/resume-builder.jsx) — [app/(main)/resume/_components/resume-builder.jsx](app/(main)/resume/_components/resume-builder.jsx)
  - Cover letter UI: [`CoverLetterGenerator`](app/(main)/ai-cover-letter/_components/cover-letter-generator.jsx) — [app/(main)/ai-cover-letter/_components/cover-letter-generator.jsx](app/(main)/ai-cover-letter/_components/cover-letter-generator.jsx)
  - Quiz UI: [`Quiz`](app/(main)/interview/_components/quiz.jsx) — [app/(main)/interview/_components/quiz.jsx](app/(main)/interview/_components/quiz.jsx)

- Server actions / AI integrations
  - Interview: [`generateQuiz`](actions/interview.js), [`saveQuizResult`](actions/interview.js), [`getAssessments`](actions/interview.js) — [actions/interview.js](actions/interview.js)
  - Cover letter: [`generateCoverLetter`](actions/cover-letter.js), [`getCoverLetters`](actions/cover-letter.js) — [actions/cover-letter.js](actions/cover-letter.js)
  - Resume: [`saveResume`](actions/resume.js), [`improveWithAI`](actions/resume.js) — [actions/resume.js](actions/resume.js)
  - Dashboard / insights: [`generateAIInsights`](actions/dashboard.js) — [actions/dashboard.js](actions/dashboard.js)

- Background / scheduled tasks
  - Inngest function: [`generateIndustryInsights`](lib/inngest/functions.js) — [lib/inngest/functions.js](lib/inngest/functions.js)
  - Inngest client: [lib/inngest/client.js](lib/inngest/client.js)
  - API route: [app/api/inngest/route.js](app/api/inngest/route.js)

- Utilities
  - Tailwind / styles: [app/globals.css](app/globals.css)
  - Helper: [app/lib/helper.js](app/lib/helper.js)
  - Prisma client: [lib/prisma](lib/prisma) (db access)

## Development notes
- Authentication uses Clerk — see components that import `@clerk/nextjs`.
- AI calls use Google Generative AI via `@google/generative-ai` (Gemini). API key stored in GEMINI_API_KEY.
- Generated JSON from AI is cleaned and parsed (see `actions/dashboard.js`, `actions/interview.js`, `actions/resume.js`, `actions/cover-letter.js`).

## Deploy
- Works on Vercel. Ensure environment variables (GEMINI_API_KEY, DATABASE_URL, Clerk keys) are set in the deployment target.
- Next.js image settings in [next.config.mjs](next.config.mjs).

## Troubleshooting
- If you get parsing errors from AI responses, check the cleaning logic in:
  - [actions/dashboard.js](actions/dashboard.js)
  - [actions/interview.js](actions/interview.js)

## Contributing
- Follow existing code patterns (React + Next.js app router, server actions in `actions/*`, UI primitives in `components/ui/*`).
- Run lint and tests (if present) before pushing.

## License
- (Add license info)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
