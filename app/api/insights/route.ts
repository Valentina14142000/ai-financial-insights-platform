import { NextResponse } from "next/server";
import { Transaction } from "@/types/finance";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !Array.isArray(body.transactions)) {
      return NextResponse.json(
        { success: false, message: "Request must include a transactions array." },
        { status: 400 }
      );
    }

    const transactions: Transaction[] = body.transactions;

    const income = transactions
      .filter((t) => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
      .filter((t) => t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const savings = income - expenses;

    return NextResponse.json({
      success: true,
      summary: {
        income,
        expenses,
        savings,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Insights failed";

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}