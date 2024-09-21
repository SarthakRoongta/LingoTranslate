# LingoTranslate Translation Chatbot

This project is a language translation chatbot that uses OpenAI's GPT-3.5 Turbo model for generating responses and Google Translate for translating the responses into different languages. The chatbot is built using Flask for the backend and a simple HTML/CSS/JavaScript frontend.

## Features

- Generate AI-powered responses using OpenAI's GPT-3.5 Turbo model.
- Translate the chatbot's responses into multiple languages.
- A simple and responsive frontend.
- Backend powered by Flask with OpenAI and Deep Translator integration.

## Prerequisites

Before running the project, ensure that you have the following installed:

- Python 3.7 or higher
- pip (Python package installer)
- OpenAI API Key (You can obtain it [here](https://beta.openai.com/signup/))
- Google Translator API (Deep Translator package)
  
### Python Dependencies

Install the necessary Python dependencies using the following command:

```bash
pip install -r requirements.txt
```
#### Project Structure

/project-directory
│
├── /static
│   ├── styles.css         # CSS for styling the frontend
│   └── script.js          # JavaScript for handling frontend logic
│
├── /templates
│   └── index.html         # HTML file for the frontend interface
│
└── app.py                 # Flask backend code

##### Setup Instructions

Step 1: Clone the repository

```bash
git clone https://github.com/SarthakRoongta/language-translation-chatbot.git
cd language-translation-chatbot
```
Step 2: Install Dependencies

```bash
pip install -r requirements.txt
```

Step 3: Set Up Environment Variables
```bash
export OPENAI_API_KEY= "YOUR OPENAI KEY"
```
