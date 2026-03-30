import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

function jsonError(message, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const clientId = searchParams.get("clientId");
    if (!clientId) return jsonError("Missing clientId", 400);

    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("assessments")
      .select("data")
      .eq("client_id", clientId)
      .order("updated_at", { ascending: false });

    if (error) return jsonError(error.message, 500);
    return NextResponse.json({ assessments: (data || []).map((r) => r.data) });
  } catch (err) {
    return jsonError(err?.message || "Unexpected server error", 500);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { clientId, assessment } = body || {};
    if (!clientId) return jsonError("Missing clientId", 400);
    if (!assessment?.id) return jsonError("Missing assessment.id", 400);

    const nowIso = new Date().toISOString();
    const row = {
      id: assessment.id,
      client_id: clientId,
      company_name: assessment.companyName ?? null,
      consultant_name: assessment.consultantName ?? null,
      workshop_date: assessment.workshopDate ?? null,
      data: assessment,
      updated_at: nowIso,
    };

    const supabase = getSupabaseServerClient();
    const { error } = await supabase
      .from("assessments")
      .upsert(row, { onConflict: "id" });

    if (error) return jsonError(error.message, 500);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return jsonError(err?.message || "Unexpected server error", 500);
  }
}

