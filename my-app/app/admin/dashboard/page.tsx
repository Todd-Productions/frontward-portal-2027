import AdminSidebar from "@/components/admin/AdminSidebar";
import StatsCard from "@/components/admin/StatsCard";

export default function AdminDashboard() {
  return (
    <main>
      <AdminSidebar />

      <section>
        <h1>Good morning, Alex.</h1>

        <StatsCard
          title="Monthly Revenue"
          value="$12,840"
        />

        <StatsCard
          title="Active Clients"
          value="24"
        />

        <StatsCard
          title="Subscriptions"
          value="41"
        />
      </section>
    </main>
  );
}