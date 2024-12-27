'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/custompreview');
  };

  return (
    <div className="landing-page flex flex-col items-center justify-center h-screen p-6">
    
  <h1 className="text-4xl font-bold tracking-tight text-center">Customize Your Watch</h1>
  <p className="mt-2 text-base text-center text-gray-600">Create your perfect Apple Watch look.</p>

      <motion.button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get Started
      </motion.button>
    </div>
  );
}
