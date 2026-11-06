import AdminSidebar from "@/src/components/admin/adminsidebar";
import DashboardHeader from "@/src/components/admin/dashboardheader";
import StatsCard from "@/src/components/admin/statscard";
import RevenueChart from "@/src/components/admin/revenuechart";

export default function AdminDashboard() {
  return (
    <div className="flex bg-[#F7F8FC] min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-10">
        <DashboardHeader />

        <div className="grid grid-cols-4 gap-6">
          <StatsCard
            title="Monthly recurring revenue"
            value="$12,840"
            description="+ 8.4% from last month"
          />

          <StatsCard
            title="Active clients"
            value="24"
            description="2 onboarded this month"
          />

          <StatsCard
            title="Active subscriptions"
            value="41"
            description="Across 5 service types"
          />

          <StatsCard
            title="Needs attention"
            value="3"
            description="2 cards · 1 support ticket"
          />
        </div>

        <div className="mt-8">
          <RevenueChart />
        </div>
      </main>
    </div>
  );
}