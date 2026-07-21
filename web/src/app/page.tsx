"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get base URL from environment variable or fallback to localhost
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  // Safely construct the full endpoint URL, handling trailing slashes automatically
  const chatEndpoint = new URL("/api/chat", baseUrl).toString();


  const sendMessage = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setReply(""); // Clear previous response

    try {
      // Send the POST request to the FastAPI backend
      const response = await fetch(chatEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setReply(data.reply);
    } catch (error) {
      setReply("Error connecting to the backend. Is the server running?");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      {/* CSS GRID: 1 column on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start w-full max-w-2xl md:max-w-6xl rounded-xl shadow-lg p-8">
        {/* LEFT SIDE: ABOUT ME */}
        <div id="about-me">
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Adam!</h1>
          <h2 className="text-xl italic mb-6">Software Engineer & WGU Graduate</h2>
          <p>
            I am a full-stack developer with a background as a Business Analyst with experience in Python, 
            Next.js, and integrating AI into practical applications. I&apos;m passionate about building clean, 
            scalable, enterprise-grade software.
          </p>
        </div>
        {/* RIGHT SIDE: CHATBOT */}
        <div className="flex flex-col h-full">
          <h1 className="text-3xl font-bold mb-6">
            My AI Portfolio Chatbot
          </h1>

          {/* Input area to send messages to the chatbot */}
          <div className="flex flex-col h-full">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={2}
              placeholder="Ask me anything about my experience..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="mt-1 w-full bg-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {isLoading ? "Thinking..." : "Send Message"}
            </button>
            
            {/* Display the chatbot's reply, if it exists */}
            <div className="mt-4 h-[320px]">
              <div className="h-full overflow-y-auto p-4 rounded-lg border border-gray-200">
                {reply && (
                  <div>
                    <h3 className="font-bold mb-2">Chatbot Reply:</h3>
                    <div className="prose prose-blue dark:prose-invert max-w-none">
                      <ReactMarkdown>{reply}</ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}