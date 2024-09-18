# Next.js with Docker

This is a Next.js project containerized with Docker and Docker Compose for easier development and deployment.

## Prerequisites

Ensure that you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow the steps below to get the project running in a Docker container.

### 1. Clone the Repository

```bash
git clone https://github.com/maatheuus/Buzz-test
cd buzz-test
```

### 2. Build and Run with Docker

You can build the Docker image and run the container using Docker Compose.

To start the project in development mode, run:

```bash
docker-compose up --build
```

This will start the container and make the application available at `http://localhost:3000`

### 3. Stop the Containers

To stop the running containers, press Ctrl + C or run:

```bash
docker-compose stop
```

## Build Containers without initializing them:

You can run:

```bash
docker-compose build
```

after that if you want initial, you run:

```bash
docker-compose up -d
```

## Running Locally without Docker (optional)

If you prefer running the project locally without Docker:

### 1. Install the dependencies:

```bash
npm install
```

### 2. Run the development server:

```bash
npm run dev
```

### 3. Open http://localhost:3000 in your browser to see the app.

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
