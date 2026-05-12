import { Transaction } from '@/types/finance';

export function parseCSV(text: string): Transaction[] {
  if (!text || !text.trim()) {
    throw new Error('CSV input is empty');
  }

  const lines = text.trim().split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length < 2) {
    throw new Error('CSV must include a header row and at least one data row');
  }

  const rows = lines.slice(1);

  return rows.map((line, index) => {
    const cells = line.split(',');

    if (cells.length < 4) {
      throw new Error(`Row ${index + 2} is malformed: expected 4 columns`);
    }

    const [date, description, category, amount] = cells;
    const parsedAmount = Number(amount?.trim());

    if (!date?.trim() || !description?.trim() || !category?.trim() || Number.isNaN(parsedAmount)) {
      throw new Error(`Row ${index + 2} contains invalid values`);
    }

    return {
      date: date.trim(),
      description: description.trim(),
      category: category.trim(),
      amount: parsedAmount,
    };
  });
}
