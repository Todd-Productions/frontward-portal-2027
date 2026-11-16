import { ChevronRight } from "lucide-react";

const clients = [
  {
    initials: "NS",
    name: "Northstar Studio",
    email: "accounts@northstar.studio",
    plan: "Growth hosting",
    hosting: "Vercel",
    monthly: "$460/mo",
    status: "Active",
  },
  {
    initials: "FC",
    name: "Fieldwork Coffee",
    email: "finance@fieldwork.co",
    plan: "Managed commerce",
    hosting: "DigitalOcean",
    monthly: "$780/mo",
    status: "Action needed",
  },
  {
    initials: "CS",
    name: "Cedar & Stone",
    email: "hello@cedarstone.com",
    plan: "Essential hosting",
    hosting: "Netlify",
    monthly: "$180/mo",
    status: "Active",
  },
];
export default function RecentClients() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">
              Recent clients
            </h2>

            <p className="text-sm text-gray-500">
              Your latest client activity
            </p>
          </div>

          <button className="text-indigo-500 text-sm font-medium">
            View all clients
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-xs text-gray-400 uppercase">
            <th className="text-left p-6">Client</th>
            <th className="text-left">Subscription</th>
            <th className="text-left">Hosting</th>
            <th className="text-left">Monthly</th>
            <th className="text-left">Status</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <tr
              key={client.email}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-sm font-medium">
                    {client.initials}
                  </div>

                  <div>
                    <p className="font-medium">
                      {client.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {client.email}
                    </p>
                  </div>
                </div>
              </td>

              <td>{client.plan}</td>
              <td>{client.hosting}</td>
              <td>{client.monthly}</td>

              <td>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  {client.status}
                </span>
              </td>

              <td>
                <ChevronRight
                  size={16}
                  className="text-gray-400"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}