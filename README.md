# LingoTranslate Translation Chatbot

This project is a language translation chatbot that uses OpenAI's GPT-3.5 Turbo model for generating responses and Google Translate for translating the responses into different languages. The chatbot is built using Flask for the backend and a simple HTML/CSS/JavaScript frontend.

## Features

- Generate AI-powered responses using OpenAI's GPT-3.5 Turbo model.
- Translate the chatbot's responses into multiple languages.
- A simple and responsive frontend.
- Backend powered by Flask with OpenAI and Deep Translator integration.

### Prerequisites

Before running the project, ensure that you have the following installed:

- Python 3.7 or higher
- pip (Python package installer)
- OpenAI API Key (You can obtain it [here](https://beta.openai.com/signup/))
- Google Translator API (Deep Translator package)
  
#### Python Dependencies

Install the necessary Python dependencies using the following command:

```bash
pip install -r requirements.txt
```

##### Setup Instructions

Step 1: Clone the repository

```bash
git clone https://github.com/SarthakRoongta/LingoTranslate.git

```
Step 2: Install Dependencies

```bash
pip install -r requirements.txt
```

Step 3: Set Up Environment Variables
```bash
export OPENAI_API_KEY= "YOUR OPENAI KEY"
```
Step 4: Run the Application
To start the Flask server, use the following command:
```bash
python app.py
```
Step 5: Access the Chatbot
Open your browser and go to
```bash
http://127.0.0.1:5000/
```

You should now be able to interact with the chatbot and receive translated responses in the selected language.

###### Usage

Enter a message in the input box.
Select the target language for translation from the dropdown.
Click "Send" to receive a response from the chatbot, which will be translated into the selected language.
