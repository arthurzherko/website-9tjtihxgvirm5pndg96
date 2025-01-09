import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Track Your Fitness Journey with FitTrack</h1>
            <p className="text-xl text-gray-600 mb-8">Achieve your fitness goals with our intuitive mobile app. Track workouts, set milestones, and stay motivated on the go.</p>
            <div className="flex space-x-4">
              <Button size="lg">Download Now</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <img src="/hero-image.png" alt="FitTrack App" className="w-full h-auto rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;