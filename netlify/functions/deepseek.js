// netlify/functions/api.js

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "API Fungerar nu!",
      timestamp: new Date().toISOString()
    })
  };
};
