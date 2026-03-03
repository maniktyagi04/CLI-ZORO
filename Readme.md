# ⚔️ CLI-ZORO

CLI-ZORO is a fully functional Command Line Interface (CLI) tool built using **Node.js + TypeScript**.

It provides:

- 🧮 Mathematical operations  
- 👋 Greeting functionality  
- 🌐 Integration with 3 public APIs (Quote, Joke, Advice)  
- 🌍 Global CLI support using npm link  

---

## 🛠 Tech Stack

- Node.js  
- TypeScript  
- Commander.js  
- Axios  

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/maniktyagi04/CLI-ZORO.git
cd CLI-ZORO-main
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Compile TypeScript

```bash
npx tsc
```

This generates the compiled JavaScript inside the `dist/` folder.

---

## 🌍 Run as Global CLI (Using npm link)

To use CLI-ZORO as a global command:

```bash
npm link
```

Now you can use:

```bash
zoro <command>
```

### Example:

```bash
zoro greet Manik
```

---

## 📚 Available Commands

Below are all available commands in CLI-ZORO.

---

### 👋 greet `<name>`

Greets the user by name.

```bash
zoro greet Manik
```

---

### ➕ add `<a>` `<b>`

Adds two numbers.

```bash
zoro add 5 3
```

---

### ➖ subtract `<a>` `<b>`

Subtracts second number from first.

```bash
zoro subtract 10 4
```

---

### ✖ multiply `<a>` `<b>`

Multiplies two numbers.

```bash
zoro multiply 6 7
```

---

### ➗ divide `<a>` `<b>`

Divides first number by second.  
Includes division-by-zero protection.

```bash
zoro divide 10 2
```

---

### 🔢 power `<base>` `<expo>`

Raises base to the power of exponent.

```bash
zoro power 2 5
```

---

### 🟦 square `<n>`

Returns square of a number.

```bash
zoro square 4
```

---

### 🟪 cube `<n>`

Returns cube of a number.

```bash
zoro cube 3
```

---

### 💬 quote

Fetches a random quote from the ZenQuotes API.

```bash
zoro quote
```

---

### 😂 joke

Fetches a random joke from the Official Joke API.

```bash
zoro joke
```

---

### 🧠 advice

Fetches a random piece of advice from the Advice Slip API.

```bash
zoro advice
```

---

## 🌐 API Integrations

CLI-ZORO integrates the following public APIs:

- ZenQuotes API  
- Official Joke API  
- Advice Slip API  

---

## 📁 Project Structure

```
CLI-ZORO-main/
│
├── zoro.ts
├── dist/
│   └── zoro.js
│
├── package.json
├── tsconfig.json
└── node_modules/
```

---

⚔️ Built with TypeScript and designed for global CLI usage.