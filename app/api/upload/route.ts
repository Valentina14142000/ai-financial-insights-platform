import { NextResponse } from 'next/server';
import { parseCSV } from '@/lib/csv';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const csvText = body.csv;
    const transactions = parseCSV(csvText);

    return NextResponse.json({
      success: true,
      count: transactions.length,
      transactions,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload failed';
    const status = message.startsWith('Row') || message.includes('CSV') ? 400 : 500;

    return NextResponse.json(
      { success: false, message },
      { status }
    );
  }
}
