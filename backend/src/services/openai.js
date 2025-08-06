const { Configuration, OpenAIApi } = require('openai');
const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

async function generateSQL(nlQuery, schema) {
  const prompt = `
Given the following database schema:\n${schema}\n
Convert this natural language request to a safe SQL query:
"${nlQuery}"
Only output the SQL query.
`;
  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo-instruct",
    prompt,
    max_tokens: 100,
    temperature: 0,
    stop: ["#", ";"],
  });
  return response.data.choices[0].text.trim();
}

module.exports = { generateSQL };
