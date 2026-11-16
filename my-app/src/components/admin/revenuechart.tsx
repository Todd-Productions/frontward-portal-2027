export default function RevenueChart() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 h-[320px]">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">
            Revenue
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Monthly recurring revenue
          </p>
        </div>

        <div className="border rounded-lg px-3 py-1.5 text-sm">
          Last 6 months
        </div>
      </div>

      <div className="mt-5">
        <p className="text-3xl font-semibold">
          $12,840
        </p>

        <span className="text-sm text-green-600">
          +8.4%
        </span>
      </div>

      <div className="h-[150px] bg-indigo-50 mt-5 rounded-xl flex items-center justify-center text-sm text-indigo-400">
        Chart Placeholder
      </div>
    </div>
  );
}