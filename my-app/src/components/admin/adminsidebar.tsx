export default function AdminSidebar() {
  return (
    <aside className="w-[280px] bg-[#0B1120] text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-8">
        <h1 className="text-4xl font-bold">frontward</h1>
      </div>

      {/* Workspace Card */}
      <div className="mx-4 bg-[#1A2236] rounded-2xl p-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center font-bold">
            FW
          </div>

          <div>
            <p className="font-semibold">Frontward HQ</p>
            <p className="text-sm text-gray-400">
              Admin workspace
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 flex-1">
        <p className="text-xs uppercase text-gray-500 mb-4">
          Workspace
        </p>

        <ul className="space-y-3">
          <li className="bg-[#1A2236] rounded-xl p-4">
            Overview
          </li>

          <li className="p-4 text-gray-400">Clients</li>

          <li className="p-4 text-gray-400">
            Subscriptions
          </li>

          <li className="p-4 text-gray-400">Hosting</li>

          <li className="p-4 text-gray-400">Billing</li>
        </ul>

        <p className="text-xs uppercase text-gray-500 mt-12 mb-4">
          Manage
        </p>

        <div className="p-4 text-gray-400">
          Settings
        </div>
      </nav>
    </aside>
  );
}