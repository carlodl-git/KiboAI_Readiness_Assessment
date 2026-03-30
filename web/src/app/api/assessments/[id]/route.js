import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

function jsonError(message, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function DELETE(req, { params }) {
  try {
    const { searchParams } = new URL(req.url);
    const clientId = searchParams.get("clientId");
    const id = params?.id;
    if (!clientId) return jsonError("Missing clientId", 400);
    if (!id) return jsonError("Missing id", 400);

    const supabase = getSupabaseServerClient();
    const { error } = await supabase
      .from("assessments")
      .delete()
      .eq("id", id)
      .eq("client_id", clientId);

    if (error) return jsonError(error.message, 500);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return jsonError(err?.message || "Unexpected server error", 500);
  }
}

