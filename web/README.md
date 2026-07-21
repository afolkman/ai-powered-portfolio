# AI-Powered Portfolio Frontend

This is the client application for the AI-powered portfolio, built with Next.js App Router, TypeScript, and Tailwind CSS.

The frontend provides:

- A personal portfolio presentation
- A chat interface for AI-powered Q&A
- Markdown-rendered responses from the backend service

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- react-markdown

## Prerequisites

- Node.js 20+
- npm 10+

## Environment Variables

Create a `.env` file in this directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

- `NEXT_PUBLIC_API_URL` is the base URL for the backend API.
- The app posts chat requests to `/api/chat` on this base URL.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Project Layout

```text
src/
└── app/
	├── globals.css
	├── layout.tsx
	└── page.tsx
```

The main chat and portfolio UI is implemented in `src/app/page.tsx`.

## Deployment

This frontend is designed for Vercel deployment.

Before deploying:

1. Set `NEXT_PUBLIC_API_URL` to your deployed backend URL.
2. Confirm backend CORS allows your Vercel domain and preview URLs.

## Learn More

- Next.js docs: https://nextjs.org/docs
- App Router docs: https://nextjs.org/docs/app
- Vercel deployment docs: https://nextjs.org/docs/app/building-your-application/deploying
