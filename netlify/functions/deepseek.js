exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body || "{}");

    const question = body.question || "Ingen fråga mottagen.";
    const userAnswer = body.answer || "Inget svar mottaget.";

    const prompt = `
Du får ett samtalskort med en fråga och ett svar från användaren.
Fråga: "${question}"
Svar: "${userAnswer}"
Ge en varm, kort och reflekterande respons på svenska.
`;

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.DEEPSEEK_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200
      })
    });

    const data = await response.json();

    console.log("Fick body:", body);
    console.log("DeepSeek RAW:", data);

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
