type StatsCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function StatsCard({
  title,
  value,
  description,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-5xl font-semibold mt-6">
        {value}
      </p>

      <p className="text-green-600 mt-4 text-sm">
        {description}
      </p>
    </div>
  );
}