type InfoCardProps = {
  label: string;
  value: string | number | undefined;
};

const InfoCard = ({ label, value }: InfoCardProps) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-bold text-[#006cb7] m-1">{label}</p>

      <div className="bg-gray-50 shadow p-4 rounded-xl">
        <p className="font-bold text-lg text-[#354958]">{value ?? "-"}</p>
      </div>
    </div>
  );
};
export default InfoCard;
