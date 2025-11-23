// netlify/functions/api.js
const fetch = require('node-fetch'); // behövs om du kör Node <18

exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: "Hej! Skriv en kort hälsning på svenska." }],
        max_tokens: 100
      })
    });

    const data = await response.json();
    console.log("API response:", JSON.stringify(data, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        reply: data.choices[0]?.message?.content || data.choices[0]?.text || "No reply found"
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Error: " + error.message })
    };
  }
};

