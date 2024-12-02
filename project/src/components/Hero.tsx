import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import Platform3D from './Platform3D';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={48} className="text-blue-400" />
            <h1 className="text-5xl font-bold tracking-tight">RJAY Technologies</h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Revolutionizing B2B E-commerce with our Cutting-edge Multivendor Platform
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Explore Platform
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-96">
        <Platform3D />
      </div>
    </div>
  );
};

export default Hero;