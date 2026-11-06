export default function RevenueChart() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-8 h-[400px]">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Revenue
          </h2>

          <p className="text-gray-500">
            Monthly recurring revenue
          </p>
        </div>

        <div className="border rounded-xl px-4 py-2">
          Last 6 months
        </div>
      </div>

      <div className="mt-8">
        <p className="text-5xl font-semibold">
          $12,840
        </p>

        <span className="text-green-600">
          +8.4%
        </span>
      </div>

      <div className="h-[220px] bg-indigo-50 mt-8 rounded-2xl flex items-center justify-center text-indigo-400">
        Chart Placeholder
      </div>
    </div>
  );
}