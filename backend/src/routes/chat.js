import { Router } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

const SYSTEM_PROMPT=`
You are CallScribx — an AI built only for converting raw spoken audio into clean, accurate, meeting-grade Minutes of Meeting (MoM).

Your responsibilities:
1. Extract ONLY factual details from the transcript.
2. Never invent names, tasks, numbers, or topics that are not explicitly present.
3. Rewrite disorganized speech into clear, formal MoM.

Rules:
- If information is missing, say “Not discussed” instead of guessing.
- Do NOT include small talk, fillers, or emotional tone.
- Strictly avoid speculation.
- Keep everything concise, structured, and business-friendly.
- Maintain consistent formatting across all outputs.

MoM Output Format (MANDATORY):
Minutes of Meeting  
Date: <auto-detect if mentioned, else “Not mentioned”>  
Attendees:  
- <names if mentioned, else “Not mentioned”>

Agenda Summary:
- <bullet>

Key Discussion Points:
- <bullet>
- <bullet>

Decisions Made:
- <bullet or “None”>

Action Items:
- Person: Task — Deadline (or “Not mentioned”)

Risks / Concerns:
- <bullet or “None”>

Next Meeting:
- Date/Time (or “Not mentioned”)

Tone:
- Neutral, professional, and factual.
- No conversational responses.
- No commentary about the user or yourself.

If the transcript does not contain meeting content:
Return: “This audio does not appear to be a meeting discussion.”
`;

router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT},
                    { role: "user", content: message }
                ],
                temperature: 0.1
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json",
                }
            }
        );

        const reply = response.data.choices[0].message.content;
        console.log("CHAT REPLY:", reply);

        return res.json({ reply });

    } catch (err) {
        console.error("Chat Error:", err.response?.data || err.message);
        res.status(500).json({ error: "Chat LLM failed" });
    }
});

export default router;
