import { GoogleGenAI, Type } from "@google/genai";
import { PlaceType, GeminiConnectionResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateConnectionSpark = async (place: PlaceType): Promise<GeminiConnectionResponse> => {
  const model = 'gemini-2.5-flash';

  const systemInstruction = `
    You are a warm, empathetic expert in child development and prevention science, similar to a modern Mr. Rogers or a friendly librarian.
    Your goal is to help families connect in everyday spaces.
    Keep language simple, accessible (plain language), and encouraging.
    Focus on curiosity, reflection, and "evidence with empathy".
    Do not be academic or clinical. Be neighborly.
  `;

  const prompt = `
    A family is currently at the ${place}.
    Generate three things for them:
    1. A "Conversation Starter": A simple question a parent can ask a child to spark imagination.
    2. A "Tiny Activity": A quick, fun interaction they can do right now (e.g., counting colors, finding patterns).
    3. A "Parent Reflection": A thought for the adult about why this moment matters for development.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conversationStarter: { type: Type.STRING },
            activity: { type: Type.STRING },
            reflection: { type: Type.STRING },
          },
          required: ["conversationStarter", "activity", "reflection"],
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as GeminiConnectionResponse;
  } catch (error) {
    console.error("Gemini generation error:", error);
    // Fallback in case of error
    return {
      conversationStarter: "What is the most interesting thing you see right now?",
      activity: "Let's count how many blue things we can find.",
      reflection: "Simply noticing things together builds a shared understanding of the world."
    };
  }
};