from flask import Flask, request, jsonify, render_template
from deep_translator import GoogleTranslator
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
# Set OpenAI API key

app = Flask(__name__, static_folder='static', template_folder='templates')  

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_input = data.get('message', '')
        target_language = data.get('language', 'en')

        if not user_input:
            raise ValueError("No message provided.")

        openai_response = client.chat.completions.create(model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_input}
        ])
        response_text = openai_response.choices[0].message.content.strip()


        translated_text = GoogleTranslator(source='auto', target=target_language).translate(response_text)

        return jsonify({'response': translated_text})

    except Exception as e:
        print(f"Server Error: {str(e)}")  
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
