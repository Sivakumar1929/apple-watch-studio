"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CaseSelector from './components/CaseSelector';
import BandSelector from './components/BandSelector';
import SizeSelector from './components/SizeSelector';
import CollectionSwitcher from './components/CollectionSwitcher';
import PriceDisplay from './components/PriceDisplay';
import SaveShare from './components/SaveShare';
import WatchPreview from './components/WatchPreview';
import { cases, bands, sizes, basePrice } from '@/app/utils/data';

export default function CustomizePage() {
  const [, setIsPageVisible] = useState(false);

  useEffect(() => {
    setIsPageVisible(true);
  }, []);

  const [selectedCase, setSelectedCase] = useState(cases[0].id);
  const [selectedBand, setSelectedBand] = useState(bands[0].id);
  const [selectedSize, setSelectedSize] = useState(sizes[0].id);
  const [selectedCollection, setSelectedCollection] = useState('Series 10');

  const casePrice = cases.find((c) => c.id === selectedCase)?.price || 0;
  const bandPrice = bands.find((b) => b.id === selectedBand)?.price || 0;
  const sizePrice = sizes.find((s) => s.id === selectedSize)?.price || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="customize-page p-4"
    >
      <h1 className="text-2xl font-bold mb-6">Customize Your Apple Watch</h1>
      <CollectionSwitcher collections={['Series 10', 'Hermès', 'SE']} selected={selectedCollection} onSelect={setSelectedCollection} />
      
      <WatchPreview caseType={selectedCase} bandType={selectedBand} size={selectedSize} />
      
      <SizeSelector sizes={sizes} selected={selectedSize} onSelect={setSelectedSize} />
      
      <CaseSelector cases={cases} selected={selectedCase} onSelect={setSelectedCase} />
      <BandSelector bands={bands} selected={selectedBand} onSelect={setSelectedBand} />

      <PriceDisplay basePrice={basePrice} casePrice={casePrice} bandPrice={bandPrice} sizePrice={sizePrice} />
      <SaveShare />
    </motion.div>
  );
}
