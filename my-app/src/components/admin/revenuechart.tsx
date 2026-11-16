export default function RevenueChart() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 h-[320px]">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Revenue
          </h2>

          <p className="text-sm text-gray-500">
            Monthly recurring revenue
          </p>
        </div>

        <button className="border rounded-lg px-3 py-1.5 text-sm text-gray-600">
          Last 6 months
        </button>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-3">
          <h3 className="text-3xl font-semibold">
            $12,840
          </h3>

          <span className="text-green-600 text-sm bg-green-50 px-2 py-1 rounded-full">
            +8.4%
          </span>
        </div>
      </div>

      <div className="mt-6 h-[170px] rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-400">
        Chart Placeholder
      </div>
    </div>
  );
}