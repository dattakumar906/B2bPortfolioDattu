import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Package, MessageCircle, CreditCard, Truck, Star } from 'lucide-react';

const journeySteps = [
  { icon: ShoppingCart, title: 'Browse Products', description: 'Search and discover products from verified vendors' },
  { icon: MessageCircle, title: 'Negotiate', description: 'Chat with sellers and negotiate bulk prices' },
  { icon: CreditCard, title: 'Secure Payment', description: 'Complete transaction with multiple payment options' },
  { icon: Truck, title: 'Track Order', description: 'Real-time updates on order status' },
  { icon: Star, title: 'Review', description: 'Rate your experience and provide feedback' }
];

const JourneyStep = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex items-center gap-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {index < journeySteps.length - 1 && (
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: '100%' } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="absolute left-8 top-16 w-0.5 bg-blue-200 h-16"
        />
      )}
    </motion.div>
  );
};

const UserJourney = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">User Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a seamless B2B transaction process from start to finish
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {journeySteps.map((step, index) => (
            <JourneyStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserJourney;