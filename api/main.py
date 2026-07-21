from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY is not set")

# Initialize the Gemini Client
client = genai.Client(api_key=api_key)

# Initialize the FastAPI app
app = FastAPI(
    title="AI Portfolio API",
    description="FastAPI backend powering my AI chatbot."
)

allowed_origins_str = os.getenv("ALLOWED_ORIGINS", "")
allowed_origins_list = [origin.strip() for origin in allowed_origins_str.split(",") if origin.strip()]

# Set up CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins_list,  # Adjust this if your frontend is hosted elsewhere
    allow_credentials=True,
    allow_methods=["*"], # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"], # Allow all headers
)

# Define the data format we expect from the frontend
class ChatRequest(BaseModel):
    message: str

# Root endpoint to verify the server is running
@app.get("/")
async def root():
    return {"message": "Success! The FastAPI server is up and running."}

# AI chat endpoint
@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        # Send the user's message to Gemini
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=request.message,
        )
        # Return the AI's response back to the user
        return {"reply": response.text}

    except Exception as e:
        return {"error": f"Something went wrong: {str(e)}"}