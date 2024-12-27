import React from 'react';

interface SizeSelectorProps {
  sizes: { id: string, name: string, price: number }[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <div className="size-selector mb-6">
      <h2 className="text-lg font-semibold">Select Size</h2>
      <div className="flex gap-4 mt-4">
        {sizes.map((size) => (
          <div
            key={size.id}
            className={`cursor-pointer p-4 border-2 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 ${
              selected === size.id ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-700 border-transparent'
            }`}
            onClick={() => onSelect(size.id)}
          >
            <p>{size.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
