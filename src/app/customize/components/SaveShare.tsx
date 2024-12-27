import React from 'react';

export default function SaveShare() {
  const handleSave = () => {
    alert('Your configuration has been saved!');
  };

  const handleShare = () => {
    alert('Share functionality coming soon!');
  };

  return (
    <div className="save-share mt-6">
      <button
        onClick={handleSave}
        className="mr-4 p-2 bg-blue-500 text-white rounded-lg transition-all hover:scale-105"
      >
        Save Configuration
      </button>
      <button
        onClick={handleShare}
        className="p-2 bg-green-500 text-white rounded-lg transition-all hover:scale-105"
      >
        Share
      </button>
    </div>
  );
}
