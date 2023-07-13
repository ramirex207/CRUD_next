import { NextResponse } from "next/server";

export async function GET(req,{ params }) {
    const id = params.id;
    console.log(id);
    return NextResponse.json(id)
} 