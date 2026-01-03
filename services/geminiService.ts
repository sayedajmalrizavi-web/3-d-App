
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialized using direct process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are Aditya's personal 3D Design AI Assistant. 
Aditya is a world-class 3D designer specializing in environment art, character modeling, and procedural motion graphics.
Your goal is to help visitors understand Aditya's work, discuss 3D design trends (like Blender, Unreal Engine 5, Octane Render), 
and provide creative brainstorming for 3D concepts. 
Be sophisticated, artistic, and technical where appropriate. 
If asked about Aditya's contact, mention he is available for freelance opportunities.
Keep responses concise and engaging.
`;

export const getDesignAdvice = async (history: ChatMessage[], message: string) => {
  try {
    // Correctly using ai.models.generateContent for text-based conversational responses
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // Directly accessing .text property of the response object
    return response.text || "I'm sorry, I couldn't generate a response right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The creative neural network is currently recalibrating. Please check back in a moment.";
  }
};
