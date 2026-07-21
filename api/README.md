# AI-Powered Portfolio Backend API

This service provides the backend for the AI-powered portfolio chat experience.

- Framework: FastAPI
- AI provider: Google Gemini (via `google-genai`)
- Runtime: Python 3.12+

## Features

- Health/root endpoint for service verification
- Chat endpoint that forwards user prompts to Gemini
- CORS middleware for local frontend and Vercel preview deployments

## API Endpoints

### GET /

Returns a basic service status message.

Example response:

```json
{
  "message": "Success! The FastAPI server is up and running."
}
```

### POST /api/chat

Accepts a user message and returns the model response.

Request body:

```json
{
  "message": "Tell me about this portfolio"
}
```

Response body:

```json
{
  "reply": "...generated response..."
}
```

## Prerequisites

- Python 3.12+
- pip

## Environment Variables

Create a `.env` file in this directory.

Required:

- `GEMINI_API_KEY`: API key for Gemini

Optional:

- `ALLOWED_ORIGINS`: comma-separated explicit origins
  - Example: `http://localhost:3000,https://ai-powered-portfolio.vercel.app`

Notes:

- Vercel preview URLs are allowed by regex in the app CORS middleware.
- If your deployment platform injects environment variables differently, verify that `ALLOWED_ORIGINS` is loaded at runtime.

## Local Development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at http://localhost:8000.

## Running Tests

```bash
pytest -q
```

Tests currently cover:

- Root endpoint response
- Chat endpoint behavior with mocked Gemini client

## Docker

Build and run:

```bash
docker build -t ai-portfolio-api .
docker run --env-file .env -p 8000:8000 ai-portfolio-api
```

## Troubleshooting CORS

If the frontend reports CORS preflight failures:

1. Confirm the deployed API is running the latest code.
2. Verify the request `Origin` is included in `ALLOWED_ORIGINS`, or matches the configured preview regex.
3. Ensure deployment environment variables are set on the hosting platform, not only in local `.env`.
4. Validate with a preflight request:

```bash
curl -i -X OPTIONS "https://<api-domain>/api/chat" \
  -H "Origin: https://<frontend-domain>" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: content-type"
```