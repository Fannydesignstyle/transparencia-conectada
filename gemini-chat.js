#!/usr/bin/env node

import readline from 'readline';
import https from 'https';

// Reemplaza con tu API key de Gemini
const API_KEY = 'TU_API_KEY_AQUI';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Chat con Gemini ===');
console.log('Escribe "salir" para terminar la conversación\n');

function askGemini(question) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      contents: [{
        parts: [{
          text: question
        }]
      }]
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: `/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(responseData);
          const answer = response.candidates[0].content.parts[0].text;
          resolve(answer);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

function chat() {
  rl.question('Tú: ', async (input) => {
    if (input.toLowerCase() === 'salir') {
      console.log('¡Hasta luego!');
      rl.close();
      return;
    }

    try {
      console.log('Pensando...');
      const response = await askGemini(input);
      console.log(`Gemini: ${response}\n`);
      chat();
    } catch (error) {
      console.error('Error:', error.message);
      chat();
    }
  });
}

chat();