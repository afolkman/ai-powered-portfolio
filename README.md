# AI-Powered Portfolio Monorepo

This repository contains a full-stack portfolio application with an AI chat experience.

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: FastAPI + Gemini API
- Deployment model: decoupled frontend and backend services

## Project Structure

```text
.
├── api/        # FastAPI service powering the chat endpoint
├── web/        # Next.js App Router frontend
├── .github/    # CI workflows
└── README.md   # Monorepo documentation
```

## Architecture

The frontend sends user prompts to the backend endpoint.

1. User enters a message in the web UI.
2. Frontend sends a POST request to `/api/chat`.
3. Backend forwards the message to Gemini.
4. Backend returns the generated reply.
5. Frontend renders the response with Markdown support.

## Prerequisites

- Node.js 20+
- npm 10+
- Python 3.12+

## Local Development

Run backend and frontend in separate terminals.

### 1) Start the API

```bash
cd api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 2) Start the Web App

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000.

## Environment Configuration

### API (.env in api/)

- `GEMINI_API_KEY`: Google Gemini API key
- `ALLOWED_ORIGINS`: comma-separated explicit origins

### Web (.env in web/)

- `NEXT_PUBLIC_API_URL`: public base URL for backend API (example: `http://localhost:8000`)

## Testing

### API tests

```bash
cd api
pytest -q
```

### Web lint

```bash
cd web
npm run lint
```

## Deployment Notes

- Deploy `web/` to Vercel.
- Deploy `api/` to your Python hosting provider.
- Ensure frontend domain(s) are included in backend CORS configuration.
- Set `NEXT_PUBLIC_API_URL` to the deployed backend URL.

## Commit Convention

This project follows Conventional Commits.

Format:

```text
<type>(<scope>): <description>

[optional body]
```

Types used in this repository:

- `feat`: user-facing feature
- `fix`: bug fix
- `docs`: documentation changes
- `style`: formatting-only changes
- `refactor`: internal code improvements without behavior changes
- `chore`: maintenance and tooling updates

Examples:

```text
feat(frontend): add authentication guard to user dashboard
fix(backend): resolve CORS issue in FastAPI endpoint
chore(repo): consolidate .gitignore files to root level
```

## Branch Naming Convention

Use short, descriptive branch names that include the type of work and scope.

Recommended format:

```text
<type>/<scope>-<short-description>
```

Examples:

```text
feat/frontend-chat-ui
fix/backend-cors-preflight
docs/repo-readme-updates
refactor/api-error-handling
chore/ci-workflow-cleanup
```

Guidelines:

- Use lowercase letters.
- Use hyphens (`-`) between words.
- Keep names concise but specific.
- Match `type` with Conventional Commit categories when possible.