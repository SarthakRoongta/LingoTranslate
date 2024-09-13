
# LingoSwift Translator

## Overview
LingoSwift Translator is a dynamic language translation tool that leverages the Google Translate API to enable real-time multilingual communication. It allows users to input text in one language and translate it into another, supporting languages such as English, Spanish, French, and Hindi.

## Features
- Real-time translation between multiple languages.
- Simple and intuitive user interface for easy language selection and text input.
- Utilizes Google Translate API for accurate and fast translations.
- Displays both the original and translated text for easy comparison.

## Technologies Used
- **HTML**: For structuring the web interface.
- **CSS**: To style the interface.
- **JavaScript**: For handling user input, making API calls, and updating the UI dynamically.
- **Google Translate API**: For performing translations between different languages.

## How It Works
1. The user inputs text in a selected language.
2. The tool sends the text to the Google Translate API.
3. The API responds with a translation into the desired target language.
4. The original and translated text are displayed in the interface for easy comparison.

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/yourusername/lingoswift-translator.git
    ```
2. Navigate to the project directory:
    ```
    cd lingoswift-translator
    ```
3. Open the `index.html` file in your browser to use the translator.

## API Setup
To use the Google Translate API, you'll need to add your API key:
1. Sign up for the [Google Cloud Platform](https://cloud.google.com/).
2. Create a new project and enable the Google Translate API.
3. Generate an API key and replace the placeholder `'YOUR_GOOGLE_TRANSLATE_API_KEY'` in `script.js` with your API key.

## Usage
- Select the input language from the "Your Language" dropdown menu.
- Select the target translation language from the "Target Language" dropdown menu.
- Type the text you want to translate in the input box.
- Click "Translate" to view the translation result below.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- This project was made possible by the Google Translate API.
