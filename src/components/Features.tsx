import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart2, Calendar, Target } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <Card className="h-full">
    <CardHeader>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: &quot;Workout Tracking&quot;,
      description: &quot;Log your exercises, sets, reps, and weights with ease. Track your progress over time.&quot;
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: &quot;Goal Setting&quot;,
      description: &quot;Set personalized fitness goals and track your progress towards achieving them.&quot;
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-primary" />,
      title: &quot;Performance Analytics&quot;,
      description: &quot;Visualize your fitness journey with detailed charts and performance metrics.&quot;
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: &quot;Workout Planning&quot;,
      description: &quot;Plan your workouts in advance and get reminders to stay on track with your routine.&quot;
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features to Boost Your Fitness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;