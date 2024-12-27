import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
interface CaseSelectorProps {
  cases: { id: string, name: string, price: number, image: string }[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function CaseSelector({ cases, selected, onSelect }: CaseSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="case-selector flex space-x-4 overflow-x-auto pb-4"
    >
      {cases.map((caseOption) => (
        <div
          key={caseOption.id}
          onClick={() => onSelect(caseOption.id)}
          className={`p-4 border rounded-lg cursor-pointer transform transition-transform duration-300 ${
            selected === caseOption.id
              ? 'border-blue-500 scale-105'
              : 'hover:scale-105 hover:shadow-lg'
          }`}
        >
          <Image src={caseOption.image} alt={caseOption.name} width={24} height={24} className="w-24 h-24 object-cover" />
          <p className="mt-2 text-center">{caseOption.name}</p>
        </div>
      ))}
    </motion.div>
  );
}

