import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Users, Rocket } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality B2B e-commerce solutions'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technology and creative solutions'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building strong partnerships with our clients and stakeholders'
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'Enabling businesses to scale and succeed in the digital marketplace'
  }
];

const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About RJAY Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are pioneering the future of B2B e-commerce, creating innovative solutions
            that connect businesses and drive growth in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              alt="Our Team"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To revolutionize B2B commerce by providing a secure, efficient, and
              user-friendly platform that enables businesses to thrive in the digital economy.
            </p>
            <p className="text-gray-600 text-lg">
              We believe in creating lasting partnerships and delivering exceptional value
              through innovative technology solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;