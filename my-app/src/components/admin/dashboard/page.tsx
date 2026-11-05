import AdminSidebar from "@/components/admin/AdminSidebar";
import StatsCard from "@/components/admin/StatsCard";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-2">
          Good Morning, Alex.
        </h1>

        <p className="text-gray-500 mb-8">
          Here's what's happening across your client
          accounts.
        </p>

        <div className="grid grid-cols-4 gap-4">
          <StatsCard
            title="Monthly Revenue"
            value="$12,840"
            subtitle="+8.4% from last month"
          />

          <StatsCard
            title="Active Clients"
            value="24"
            subtitle="2 onboarded this month"
          />

          <StatsCard
            title="Active Subscriptions"
            value="41"
            subtitle="Across 5 service types"
          />

          <StatsCard
            title="Needs Attention"
            value="3"
            subtitle="2 cards, 1 support ticket"
          />
        </div>
      </main>
    </div>
  );
}