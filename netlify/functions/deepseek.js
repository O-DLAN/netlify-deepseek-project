// netlify/functions/api.js
exports.handler = async function(event, context) {
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.DEEPSEEK_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: "Hej! Skriv en kort hälsning." }],
        max_tokens: 100
      })
    });
    
    const data = await response.json();
    console.log("DeepSeek svar:", data);
    
    // Bättre felhantering
    if (!data.choices || !data.choices[0]) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          reply: "DeepSeek returnerade tomt svar: " + JSON.stringify(data)
        })
      };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        reply: data.choices[0].message.content 
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        reply: "Error: " + error.message 
      })
    };
  }
};