export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <p className="text-indigo-500 font-semibold uppercase text-sm">
          Monday, May 19
        </p>

        <h1 className="text-5xl font-semibold mt-4">
          Good morning, Alex.
        </h1>

        <p className="text-gray-500 mt-4">
          Here's what's happening across your client
          accounts.
        </p>
      </div>

      <button className="bg-indigo-500 text-white px-6 py-4 rounded-2xl font-semibold">
        + New Client
      </button>
    </div>
  );
}