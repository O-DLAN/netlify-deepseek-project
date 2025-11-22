import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  try {
    // Här kommer ditt DeepSeek API-anrop
    const response = {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "DeepSeek API fungerar!",
        timestamp: new Date().toISOString()
      })
    };
    
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Något gick fel" })
    };
  }
};