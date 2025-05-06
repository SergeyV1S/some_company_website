import type { IPostCreateMesasgeDTO } from "../../contact-us/_api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = (await request.json()) as IPostCreateMesasgeDTO;
  console.log(res);

  return NextResponse.json(
    { message: `Спасибо за проявленный интерес, ${res.name}!` },
    { status: 200 }
  );
}
