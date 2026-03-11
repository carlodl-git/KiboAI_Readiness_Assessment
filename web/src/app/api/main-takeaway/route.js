import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured on the server." },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { companyName, notes, overallScore, dimensionScores } = body || {};

    if (!Array.isArray(notes) || notes.length === 0) {
      return NextResponse.json(
        { error: "No notes were provided to generate a takeaway." },
        { status: 400 },
      );
    }

    const notesText = notes
      .map((n, idx) => {
        const dim = n.dimensionTitle || n.dimensionId || "Unknown dimension";
        const q = n.question || n.id || `Note ${idx + 1}`;
        return `Dimension: ${dim}\nQuestion: ${q}\nNote: ${n.note}`;
      })
      .join("\n\n---\n\n");

    const dimScoreLines = dimensionScores
      ? Object.entries(dimensionScores)
          .map(([k, v]) => `${k}: ${Number(v).toFixed(1)}`)
          .join(", ")
      : "";

    const userContent = [
      companyName ? `Company: ${companyName}` : null,
      typeof overallScore === "number"
        ? `Overall readiness score: ${overallScore.toFixed(1)} (1–5)`
        : null,
      dimScoreLines ? `Dimension scores: ${dimScoreLines}` : null,
      "Per-question notes:",
      notesText,
    ]
      .filter(Boolean)
      .join("\n\n");

    const openAiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            {
              role: "system",
              content:
                "You are an expert AI strategy consultant. Given structured workshop notes, write a concise, executive-ready main takeaway that connects the dots across dimensions. Focus on clarity, plain language, and business impact. Keep it to 3–6 sentences.",
            },
            {
              role: "user",
              content: userContent,
            },
          ],
          max_tokens: 350,
          temperature: 0.6,
        }),
      },
    );

    if (!openAiResponse.ok) {
      const errorText = await openAiResponse.text();
      console.error("OpenAI API error:", errorText);
      return NextResponse.json(
        { error: "Failed to generate takeaway from OpenAI." },
        { status: 502 },
      );
    }

    const data = await openAiResponse.json();
    const takeaway =
      data?.choices?.[0]?.message?.content?.trim?.() ||
      "Unable to generate a main takeaway from the provided notes.";

    return NextResponse.json({ takeaway });
  } catch (err) {
    console.error("Error in /api/main-takeaway:", err);
    return NextResponse.json(
      { error: "Unexpected error while generating takeaway." },
      { status: 500 },
    );
  }
}

