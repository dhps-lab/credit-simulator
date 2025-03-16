# 📌 Credit simulator with NestJS

## 📖 Introduction
This proyect is an API developed with **NestJS** that allows payment simulation credit based on credit profile customer, amount of loan and terms managed.
### 📜 Docs:
You can find docs like sequence diagram and component diagram 📎[here](https://drive.google.com/drive/folders/1jRLUdhSiOY1mPL9aA2VZNdk2I_G1HybY?usp=drive_link) 
### 🏗️ Stack:
- **NestJS** (Backend Framework)
- **MongoDB** (Database NoSQL)
- **Docker & Docker Compose** (Containerization)
- **Mongoose** (ORM para MongoDB)
- **Jest** (Unit test)

## 🚀 Install and run

### 🔧 Requirements
Before start, ensure you have installed:
- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/get-started)

### 🏃‍♂️ Fast run with Docker
Setting up the API and database within docker containers, run:

```sh
docker-compose up --build
```

This would start services setting up database with test data.

### ⚡ Manually
If would rather run local without Docker: :

```sh
# Clone repository
git clone https://github.com/dhps-lab/credit-simulator.git
cd credit-simulator

# Install dependencies
npm install

# Config environment variables
cp .env.example .env  # Luego edita el archivo con tus valores

# Start MongoDB locally (if you don't use Docker)
mongod --dbpath ./data

# Run API
npm run start
```

## 🔍 Main endpoints

| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| GET    | `/offers/:dni`   | Get offers by dni client |
| POST   | `/simulations`     | Makes a credit simulation |


## 📂 Structure project

```plaintext
📦 src
 ┣ 📂 customers     # Module for manage customers
 ┣ 📂 simulations   # Module for simulates credit
 ┣ 📂 parameters    # Module to load parameters store it
 ┣ 📜 app.module.ts # Root module
 ┣ 📜 main.ts       # Gateway of API
```

## 🎯 Principles applied
✅ **SOLID** for better maintainability code.
✅ **Modularization** into separate modules.  
✅ **Dependency injection** for decouple.

---
### 📩 Contact
For queries or improvements, you can open an issue or make a pull request in the repository. 🚀

