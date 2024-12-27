'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';

interface CaseData {
  [key: string]: string;
}

interface BandData {
  [key: string]: string;
}

const caseData: CaseData = {
  titanium: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
  aluminum: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
};

const bandData: BandData = {
  stainlesssteel : "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  sportloop : "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL83_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=a3p5RDNCTHlpSnh6eE1kSXZuUXJ6NFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
  sportband: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLX3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TWYvajZ0Wi9GK0c4Q3Z5S1J6ejJ2VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  finewoman: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWW3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RW5hV0wrL0xmSE8rMHRSZVArazBMenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  braidedloop : "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY2P3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dlkybTZ4d2drVWNXZnNmdXVuKzNlRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
  sololoop : "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8E3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=OVp5Vlk0aWlkTlE0N2J3VWJDQ01hVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
  nikesport : "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU13_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eDlCSGVCUHVEVDZod0wyT3RnOEo0WVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM"
};

const WatchCustomization: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string>('titanium');
  const [selectedBand, setSelectedBand] = useState<string>('stainlesssteel');
  const [, setIsBandSelected] = useState<boolean>(false);

   const handleCaseSelect = (id: string) => {
    setSelectedCase(id);
    setIsBandSelected(false);
  };

  const handleBandSelect = (id: string) => {
    setSelectedBand(id);
    setIsBandSelected(true);
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="watch-customization-container flex flex-col items-center p-6"
  >
    
      <h1 className="text-3xl font-bold mb-4">Customize Your Watch</h1>
      
      <div className="flex gap-8 items-center mb-6">
        <div className="case-selector-container mb-6">
          <h2 className="text-xl font-semibold mb-4">Select Case</h2>
          <Image src={caseData[selectedCase]} alt="Selected Case" width={48} height={48} className="w-48 h-48 object-contain mb-4" />
          <div className="flex gap-4">
            {Object.keys(caseData).map((key) => (
              <div
                key={key}
                className={`cursor-pointer p-2 border rounded-lg text-center transition-all hover:scale-105 ${selectedCase === key ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleCaseSelect(key)}
              >
                <p>{key}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="watch-preview relative w-64 h-64 mt-30 ml-8">
          <Image src={bandData[selectedBand]} alt="Selected Band" width={100} className="w-full h-full object-contain absolute z-10" />
          <Image src={caseData[selectedCase]} alt="Watch Case" width={100} className="w-full h-full object-contain absolute z-20" />
        </div>
      </div>

      <div className="band-selector-container mt-8">
        <h2 className="text-xl font-semibold mb-4">Select Band</h2>
        <div className="flex gap-4">
          {Object.keys(bandData).map((bandKey) => (
            <div
              key={bandKey}
              className={`cursor-pointer p-2 border rounded-lg text-center transition-all hover:scale-105 ${selectedBand === bandKey ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleBandSelect(bandKey)}
            >
              <Image
                src={bandData[bandKey]}
                alt={bandKey}
                width={48}
                height={48}
                className="w-48 h-48 object-contain"
              />
              <p>{bandKey}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WatchCustomization;
