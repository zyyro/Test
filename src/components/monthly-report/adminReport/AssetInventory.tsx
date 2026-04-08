"use client";

const BLUE = "#006cb7";

const assets = [
  { id: "A1023", device: "Laptop",       user: "ZyyRo",    status: "In Use",    condition: "Good"    },
  { id: "A2045", device: "Monitor",      user: "Lionel Messi",    status: "In Use",    condition: "Fair"    },
  { id: "A3078", device: "LCD Projector",user: "Lamine Yamal",    status: "Repair",    condition: "Damaged" },
  { id: "A4012", device: "Keyboard",     user: "David Backcam",     status: "In Use",    condition: "Good"    },
  { id: "A5033", device: "Printer",      user: "Yeang Siverr",    status: "Available", condition: "Good"    },
  { id: "A6019", device: "Webcam",       user: "Donald J Trump",   status: "In Use",    condition: "Fair"    },
];

const STATUS_STYLES: Record<string, string> = {
  "In Use":    "text-emerald-600 font-bold",
  "Available": "bg-emerald-500 text-white px-2 py-0.5 rounded-md text-xs font-bold",
  "Repair":    "bg-orange-500 text-white px-2 py-0.5 rounded-md text-xs font-bold",
};

const CONDITION_COLORS: Record<string, string> = {
  Good:    "text-gray-700",
  Fair:    "text-amber-600 font-semibold",
  Damaged: "text-red-500 font-semibold",
};

export default function AssetInventory() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-bold text-base" style={{ color: BLUE }}>Asset Inventory</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm">
              {["Asset ID", "Device", "User", "Status", "Condition"].map((h) => (
                <th key={h} className="px-5 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assets.map((a, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-blue-50/20 transition-colors">
                <td className="px-5 py-3.5 text-sm font-bold" style={{ color: BLUE }}>{a.id}</td>
                <td className="px-5 py-3.5 text-sm font-semibold text-gray-800">{a.device}</td>
                <td className="px-5 py-3.5 text-sm text-gray-600">{a.user}</td>
                <td className="px-5 py-3.5 text-sm">
                  <span className={STATUS_STYLES[a.status] ?? "text-gray-500 text-sm"}>
                    {a.status}
                  </span>
                </td>
                <td className={`px-5 py-3.5 text-sm ${CONDITION_COLORS[a.condition] ?? "text-gray-600"}`}>
                  {a.condition}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
