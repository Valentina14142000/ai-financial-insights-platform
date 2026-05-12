import InsightCard from './InsightCard';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <InsightCard title="Income" value="$5,000" />
        <InsightCard title="Expenses" value="$2,150" />
        <InsightCard title="Savings" value="$2,850" />
      </div>

      <div className="bg-white rounded-2xl shadow p-6 h-72">
        <h2 className="text-xl font-semibold mb-4">Spending Chart</h2>

        <div className="h-48 flex items-center justify-center text-gray-400">
          Chart Coming Next Step
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-3">AI Insights</h2>

        <ul className="space-y-2 text-gray-700">
          <li>• Rent is your highest expense category.</li>
          <li>• Transport spending increased 18% this month.</li>
          <li>• You can save $250 by reducing food delivery.</li>
        </ul>
      </div>
    </div>
  );
}
