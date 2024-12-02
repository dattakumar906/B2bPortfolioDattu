import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, ShoppingBag, MessageSquare, Bell, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Multi-vendor Support',
    description: 'Connect multiple sellers and buyers in a unified marketplace'
  },
  {
    icon: ShoppingBag,
    title: 'Bulk Orders',
    description: 'Streamlined process for large-scale B2B transactions'
  },
  {
    icon: MessageSquare,
    title: 'Real-time Chat',
    description: 'Integrated communication between buyers and sellers'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay updated with order status and important alerts'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Multiple payment gateways with escrow protection'
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'Support for diverse global audience'
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Platform Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover the powerful features that make our B2B platform stand out
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;