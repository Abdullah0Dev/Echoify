// require("dotenv").config();
import express from "express";
import cors from "cors";
import { Client } from "@gradio/client";
// initialize  our app

const app = express();
app.use(cors());
app.use(express.json());
// Routes
app.get("/", (req, res) => {
  res.send("Hell from our backend");
});

app.post("/generate-tts", async (req, res) => {
  const { text, voice } = req.body;
  try {
    const client = await Client.connect("yaseenuom/text-script-to-audio");
    const result = await client.predict("/predict", {
      text,
      voice: voice || "en-US-BrianNeural - en-US (Male)",
      rate: 1,
      pitch: 1,
    });

    console.log(result.data);
    return res.status(200).json({ url: result.data[0].url });
  } catch (error) {
    console.log("something went wrong:", error);
  }
});

const PORT = 4000; //  process.env.PORT ||

app.listen(PORT, () => {
  console.log(`App is listing on http://localhost:${PORT}`);
});
