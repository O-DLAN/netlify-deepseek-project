exports.handler = async function(event, context) {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "DeepSeek API fungerar! 🎉",
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Något gick fel" })
    };
  }
};