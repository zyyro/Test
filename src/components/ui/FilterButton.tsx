interface FilterButtonProps {
  label: string;
  active?: boolean;
}

export default function FilterButton({ label, active }: FilterButtonProps) {
  return (
    <button
      className={`px-4 py-1 rounded-full text-sm font-medium transition
        ${
          active
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-700 hover:text-white"
        }`}
    >
      {label}
    </button>
  );
}
