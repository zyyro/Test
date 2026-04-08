type ChardCardProps = {
  title: string;
  children: React.ReactNode;
  right?: React.ReactNode;
};
export default function ChartCard({ title, children, right }: ChardCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow border p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {right && <div>{right}</div>}
      </div>

      <div className="w-full overflow-x-auto">{children}</div>
    </div>
  );
}
