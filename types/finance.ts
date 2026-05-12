export interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number;
}

export function parseCSV(text: string): Transaction[] {
  const lines = text.trim().split("\n");
  const rows = lines.slice(1);

  return rows.map((line) => {
    const [date, description, category, amount] = line.split(",");

    return {
      date: date?.trim(),
      description: description?.trim(),
      category: category?.trim(),
      amount: Number(amount),
    };
  });
}
