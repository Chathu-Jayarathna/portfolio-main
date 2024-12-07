import React from "react";

export const PersonalDetailsTable = () => {
  const details = [
    { label: "Name", value: "Chathushi Jayarathna" },
    { label: "Email", value: "chathushi0707@gmail.com" },
    { label: "Phone", value: "(+94) 742269976" },
    { label: "Birthday", value: "07th July 2000" },
    { label: "Location", value: "Bandarawela, Sri Lanka" },
  ];

  return (
    <div className="rounded-xl shadow-lg w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <div className="space-y-4">
            {details.slice(0, 3).map((detail, index) => (
              <div
                key={index}
                className="flex justify-between bg-[#161A31]/50 p-4 rounded-md transition-all duration-200 hover:bg-[#1F223B] border-b border-[#2a2e47]"
              >
                <span className="text-white font-semibold hover:text-[#5094c8]">{detail.label}:</span>
                <span className="text-[#C1C2D3]">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="space-y-4">
            {details.slice(3).map((detail, index) => (
              <div
                key={index}
                className="flex justify-between bg-[#161A31]/50 p-4 rounded-md transition-all duration-200 hover:bg-[#1F223B] border-b border-[#2a2e47]"
              >
                <span className="text-white font-semibold hover:text-[#5094c8]">{detail.label}:</span>
                <span className="text-[#C1C2D3]">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsTable;
