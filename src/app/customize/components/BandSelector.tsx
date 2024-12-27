import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
interface BandSelectorProps {
  bands: { id: string, name: string, price: number, image: string }[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function BandSelector({ bands, selected, onSelect }: BandSelectorProps) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="band-selector grid grid-cols-1 gap-1"
  >
      <h2 className="text-lg font-semibold">Select Band</h2>
      <div className="overflow-x-visible mt-4 flex gap-2">
        {bands.map((band) => (
          <div
            key={band.id}
            className={`cursor-pointer p-2 border rounded-lg transition-all hover:scale-105 ${selected === band.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onSelect(band.id)}
          >
            <Image src={`${band.image}`} alt={band.name} width={24} height={24} className="w-24 h-24 object-cover mb-4" />
            <p className="text-center">{band.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
