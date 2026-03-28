const axios = require("axios");
const Prompt = require("../models/prompt");

exports.askAI = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "AI Flow App",
        },
      }
    );
    const aiText = response.data.choices[0].message.content;
    res.json({ response: aiText });

  } catch (error) {
    console.log(" FULL ERROR:", error.response?.data || error.message);

    res.status(500).json({
      error: "AI request failed",
      details: error.response?.data || error.message,
    });
  }
};

exports.savePrompt = async (req, res) => {
  try {
    const { prompt, response } = req.body;

    const newData = new Prompt({ prompt, response });
    await newData.save();

    res.json({ message: "Saved successfully" });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Save failed" });
  }
};


exports.getHistory = async (req, res) => {
  try {
    const data = await Prompt.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
};