import React from 'react';
import { motion } from 'framer-motion';

interface CollectionSwitcherProps {
  collections: string[];
  selected: string;
  onSelect: (collection: string) => void;
}

export default function CollectionSwitcher({ collections, selected, onSelect }: CollectionSwitcherProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="collection-switcher flex space-x-4"
    >
      {collections.map((collection) => (
        <button
          key={collection}
          onClick={() => onSelect(collection)}
          className={`px-4 py-2 rounded-lg transform transition-all duration-300 ${
            selected === collection
              ? 'bg-blue-500 text-white scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-100 hover:scale-105'
          }`}
        >
          {collection}
        </button>
      ))}
    </motion.div>
  );
}
