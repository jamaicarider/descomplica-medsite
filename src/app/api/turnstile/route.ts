import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Configuracao do Turnstile pendente no ambiente." },
      { status: 500 },
    );
  }

  let token = "";

  try {
    const payload = (await request.json()) as { token?: string };
    token = payload.token?.trim() || "";
  } catch {
    return NextResponse.json({ error: "Payload invalido." }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({ error: "Token do Turnstile ausente." }, { status: 400 });
  }

  const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
    }),
  });

  if (!verifyResponse.ok) {
    return NextResponse.json({ error: "Falha ao validar o Turnstile." }, { status: 502 });
  }

  const verification = (await verifyResponse.json()) as {
    success?: boolean;
    [key: string]: unknown;
  };

  if (!verification.success) {
    return NextResponse.json({ error: "Validacao do Turnstile nao concluida." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
