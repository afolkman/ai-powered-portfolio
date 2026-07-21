FROM --platform=linux/amd64 python:3.12-slim
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all your backend code into the container
COPY . .

# Tell the container which command to run to start the app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]