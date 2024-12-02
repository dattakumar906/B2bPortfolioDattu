import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users2, UserCog, Building2 } from 'lucide-react';

const roles = [
  {
    id: 'buyer',
    icon: Users2,
    title: 'Buyer',
    description: 'Access to product catalog, order management, and communication tools',
    features: ['Browse Products', 'Place Bulk Orders', 'Track Shipments', 'Chat with Sellers']
  },
  {
    id: 'seller',
    icon: Building2,
    title: 'Seller',
    description: 'Tools for inventory management, order processing, and customer engagement',
    features: ['Manage Listings', 'Process Orders', 'Analytics Dashboard', 'Customer Support']
  },
  {
    id: 'admin',
    icon: UserCog,
    title: 'Admin',
    description: 'Complete platform control and monitoring capabilities',
    features: ['User Management', 'Content Moderation', 'Analytics', 'System Configuration']
  }
];

const RoleCard = ({ role, isSelected, onClick }) => {
  const { icon: Icon, title, description } = role;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-xl transition-colors ${
        isSelected ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-50'
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg ${
          isSelected ? 'bg-blue-400' : 'bg-blue-100'
        }`}>
          <Icon className={`w-6 h-6 ${
            isSelected ? 'text-white' : 'text-blue-500'
          }`} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className={`${isSelected ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>
    </motion.div>
  );
};

const RoleFeatures = ({ features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-2 gap-4"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg shadow-sm"
        >
          <p className="text-gray-800 font-medium">{feature}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const RoleDemonstration = () => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Roles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the different roles and their capabilities within our B2B ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              isSelected={selectedRole.id === role.id}
              onClick={() => setSelectedRole(role)}
            />
          ))}
        </div>

        <div className="bg-gray-100 p-8 rounded-xl">
          <AnimatePresence mode="wait">
            <RoleFeatures key={selectedRole.id} features={selectedRole.features} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RoleDemonstration;