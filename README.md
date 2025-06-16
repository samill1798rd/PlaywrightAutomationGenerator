# 🧠 Playwright Automation Generator

## 📝 Project Description

**Playwright Automation Generator** is a local CLI tool powered by Artificial Intelligence (AI) that converts **Gherkin scenarios** (BDD-style) into automated test scripts using **Playwright and TypeScript**.

This project speeds up the creation of automated tests directly from written functional requirements, improving efficiency for QA teams.

---

## 🎯 Project Objectives

This solution is designed to help QA analysts and developers:

- Generate automated tests directly from Gherkin scenarios.
- Use AI (ChatGPT) as a development assistant.
- Minimize manual scripting time.
- Strengthen the connection between functional QA and test automation.

---

## ⚙️ How It Works

1. The user runs the CLI program in the terminal.
2. The tool prompts the user to input a Gherkin scenario, for example:

   ```gherkin
   Scenario: User logs in
     Given the user is on the login page
     When the user enters valid credentials
     Then the user is redirected to the dashboard
   ```

3. The tool sends this scenario to the OpenAI API (ChatGPT).
4. ChatGPT returns a block of Playwright (TypeScript) test code.
5. The generated code is saved automatically in the `output/generatedTest.ts` file.

---

## 💡 Technologies Used

- **Node.js + TypeScript** – CLI backend.
- **Playwright** – Frontend automation framework.
- **OpenAI API (ChatGPT)** – Converts natural language to test code.
- **Cucumber Syntax (Gherkin)** – Functional test language structure.
- **dotenv** – Secure management of API keys and environment variables.

---

## 📦 Project Structure

```
bdd-to-playwright/
├── src/
│   ├── index.ts               # Main entry point (CLI)
│   ├── openaiService.ts       # OpenAI integration logic
│   └── templates/
│       └── promptTemplate.txt # Prompt template for AI model
├── output/
│   └── generatedTest.ts       # Auto-generated test output
├── .env                       # Contains OpenAI API key (excluded)
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project scripts and dependencies
```

---

## ✅ Results & Benefits

- ✅ Dramatically reduces time spent on manual scripting.
- ✅ Enhances collaboration between QA and Product teams by translating user stories into test code.
- ✅ Works for flows like login, casino platforms, game catalogs, and more.
- ✅ Encourages practical AI usage in QA automation workflows.
- ✅ Scalable: can be extended to parse full `.feature` files or integrate with platforms like TestRail.

---

## 🚀 How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bdd-to-playwright.git
   cd bdd-to-playwright
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

4. Run the CLI:

   ```bash
   npm start
   ```

---
