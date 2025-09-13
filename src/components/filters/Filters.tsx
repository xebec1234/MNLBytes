"use client";

import React from "react";

type FiltersProps = {
  selected: string[];
  onChange: (filters: string[]) => void;
};

const Filters: React.FC<FiltersProps> = ({ selected, onChange }) => {
  const genres = ["Web App", "Mobile App", "Desktop App"];
  const technologies = ["Java", "PHP", "Next.js", "Laravel", "React", "Typescript"];

  const toggleFilter = (filter: string) => {
    if (selected.includes(filter)) {
      onChange(selected.filter((f) => f !== filter));
    } else {
      onChange([...selected, filter]);
    }
  };

  const renderSection = (title: string, items: string[]) => (
    <div className="mb-4">
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => toggleFilter(item)}
            className={`px-3 py-1 rounded-lg text-sm font-medium border transition ${
              selected.includes(item)
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderSection("Genre", genres)}
      {renderSection("Technology", technologies)}
    </div>
  );
};

export default Filters;
