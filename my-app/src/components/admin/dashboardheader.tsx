export default function DashboardHeader() {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <p className="text-indigo-500 font-semibold uppercase tracking-[0.18em] text-xs">
          Monday, May 19
        </p>

        <h1 className="text-[20px] leading-tight font-medium tracking-tight text-slate-900 mt-2">
          Good morning, Alex.
        </h1>

        <p className="text-[18px] text-slate-500 mt-2">
          Here's what's happening across your client accounts.
        </p>
      </div>

      <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white px-7 py-3 rounded-2xl font-medium shadow-sm">
        + New client
      </button>
    </div>
  );
}