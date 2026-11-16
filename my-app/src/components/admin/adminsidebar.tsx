import {
  LayoutDashboard,
  Users,
  Layers3,
  Server,
  CreditCard,
  Settings,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="w-[280px] bg-[#0B1120] text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">frontward</h1>
      </div>

      {/* Workspace Card */}
      <div className="mx-4 bg-[#1A2236] rounded-2xl p-4 mb-8 border border-slate-700/40">
        <div className="flex items-center justify-between">
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

          <ChevronRight
            size={18}
            className="text-slate-400"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 flex-1">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
          Workspace
        </p>

        <ul className="space-y-2">
          {/* Active Item */}
          <li className="bg-[#1A2236] rounded-xl px-4 py-3 flex items-center gap-3 border-l-4 border-indigo-500">
            <LayoutDashboard size={18} />
            <span>Overview</span>
          </li>

          <li className="px-4 py-3 flex items-center justify-between text-gray-400 hover:text-white hover:bg-[#1A2236] rounded-xl transition-all">
            <div className="flex items-center gap-3">
              <Users size={18} />
              <span>Clients</span>
            </div>

            <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">
              24
            </span>
          </li>

          <li className="px-4 py-3 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#1A2236] rounded-xl transition-all">
            <Layers3 size={18} />
            <span>Subscriptions</span>
          </li>

          <li className="px-4 py-3 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#1A2236] rounded-xl transition-all">
            <Server size={18} />
            <span>Hosting</span>
          </li>

          <li className="px-4 py-3 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#1A2236] rounded-xl transition-all">
            <CreditCard size={18} />
            <span>Billing</span>
          </li>
        </ul>

        <p className="text-xs uppercase tracking-wider text-gray-500 mt-12 mb-4">
          Manage
        </p>

        <div className="px-4 py-3 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#1A2236] rounded-xl transition-all">
          <Settings size={18} />
          <span>Settings</span>
        </div>
      </nav>

      {/* Bottom Help Button */}
      <div className="p-4">
        <button className="w-12 h-12 rounded-xl bg-[#1A2236] flex items-center justify-center text-gray-400 hover:text-white transition-all">
          <HelpCircle size={20} />
        </button>
      </div>
    </aside>
  );
}