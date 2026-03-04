# ⚔️ CLI-ZORO

CLI-ZORO is a fully functional **Command Line Interface (CLI) tool** built using **Node.js and TypeScript** following **Object-Oriented Programming (OOP)** principles.

The project is designed with a **modular command architecture**, where every command is implemented as a separate class and registered through a central **CLI Engine**.

---

# 🚀 Features

- Fully functional **global CLI tool**
- Built using **Object-Oriented Programming**
- **Modular command system**
- **Reusable CLI Engine**
- **11 custom commands**
- **Mathematical utilities**
- **Public API integrations**
- **Clean scalable architecture**

---

# 🛠 Tech Stack

- **Node.js**
- **TypeScript**
- **Commander.js**
- **Axios**
- **Object-Oriented Programming**

---

# 🧠 OOP Architecture

CLI-ZORO is structured using core **OOP concepts**:

### 1️⃣ CLI Engine
A central engine responsible for:

- Initializing the CLI
- Registering command classes
- Executing commands

File:
```
cliEngine/cli_engine.ts
```

### 2️⃣ Command Classes
Each CLI command is implemented as a **separate class**.

Example structure:

```
commands/
   greetCommand.ts
   addCommand.ts
   subtractCommand.ts
   multiplyCommand.ts
   divideCommand.ts
   squareCommand.ts
   cubeCommand.ts
   powerCommand.ts
   jokeCommand.ts
   quoteCommand.ts
   adviceCommand.ts
```

Each command class contains:

- command definition
- argument handling
- execution logic

### 3️⃣ Main Entry Point

The CLI starts from:

```
zoro.ts
```

This file:

- initializes the CLI engine
- registers all command classes
- starts the CLI program

---

# 📦 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/maniktyagi04/CLI-ZORO.git
cd CLI-ZORO-main
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Compile TypeScript

```bash
npx tsc
```

This compiles the TypeScript code into JavaScript inside the **dist/** folder.

---

# 🌍 Run as Global CLI

To use CLI-ZORO globally:

```bash
npm link
```

Now the CLI command becomes available globally.

You can run:

```bash
zoro <command>
```

Example:

```bash
zoro greet Manik
```

---

# 📚 Available Commands

CLI-ZORO currently provides **11 custom commands**.

---

## 👋 greet `<name>`

Greets the user.

```bash
zoro greet Manik
```

---

## ➕ add `<a> <b>`

Adds two numbers.

```bash
zoro add 5 3
```

---

## ➖ subtract `<a> <b>`

Subtracts second number from first.

```bash
zoro subtract 10 4
```

---

## ✖ multiply `<a> <b>`

Multiplies two numbers.

```bash
zoro multiply 6 7
```

---

## ➗ divide `<a> <b>`

Divides two numbers with **division-by-zero protection**.

```bash
zoro divide 10 2
```

---

## 🔢 power `<base> <exponent>`

Calculates power of a number.

```bash
zoro power 2 5
```

---

## 🟦 square `<n>`

Returns square of a number.

```bash
zoro square 4
```

---

## 🟪 cube `<n>`

Returns cube of a number.

```bash
zoro cube 3
```

---

## 💬 quote

Fetches a **random quote** from the ZenQuotes API.

```bash
zoro quote
```

---

## 😂 joke

Fetches a **random joke** from the Official Joke API.

```bash
zoro joke
```

---

## 🧠 advice

Fetches a **random piece of advice** from the Advice Slip API.

```bash
zoro advice
```

---

# 🌐 API Integrations

CLI-ZORO integrates multiple public APIs:

- **ZenQuotes API** → Random Quotes
- **Official Joke API** → Random Jokes
- **Advice Slip API** → Random Advice

---

# 📁 Project Structure

```
CLI-ZORO-main
│
├── cliEngine
│   └── cli_engine.ts
│
├── commands
│   ├── greetCommand.ts
│   ├── addCommand.ts
│   ├── subtractCommand.ts
│   ├── multiplyCommand.ts
│   ├── divideCommand.ts
│   ├── squareCommand.ts
│   ├── cubeCommand.ts
│   ├── powerCommand.ts
│   ├── jokeCommand.ts
│   ├── quoteCommand.ts
│   └── adviceCommand.ts
│
├── zoro.ts
├── package.json
├── tsconfig.json
└── node_modules
```

---

# ⚔️ Design Philosophy

CLI-ZORO is built with **extensibility in mind**.

Adding a new command requires only two steps:

1. Create a new **Command Class**
2. Register it inside **zoro.ts**

This architecture makes the CLI **scalable and maintainable**.