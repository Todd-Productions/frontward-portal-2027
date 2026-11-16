import { ChevronRight } from "lucide-react";

const alerts = [
  {
    title: "Card expires soon",
    subtitle: "Fieldwork Coffee • •••• 4242",
    time: "12 days",
    color: "bg-amber-100",
  },
  {
    title: "New support request",
    subtitle: "Lunar Health • DNS configuration",
    time: "2h ago",
    color: "bg-red-100",
  },
  {
    title: "Setup email unopened",
    subtitle: "Brightside Labs • Sent 3 days ago",
    time: "3 days",
    color: "bg-indigo-100",
  },
];

export default function NeedsAttention() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 h-[320px]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">
            Needs attention
          </h2>

          <p className="text-sm text-gray-500">
            Items to take care of
          </p>
        </div>

        <button className="text-indigo-500 text-sm font-medium">
          View all
        </button>
      </div>

      <div className="space-y-5">
        {alerts.map((alert) => (
          <div
            key={alert.title}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl ${alert.color}`}
              />

              <div>
                <p className="font-medium text-sm">
                  {alert.title}
                </p>

                <p className="text-xs text-gray-500">
                  {alert.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">
                {alert.time}
              </span>

              <ChevronRight
                size={14}
                className="text-gray-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}