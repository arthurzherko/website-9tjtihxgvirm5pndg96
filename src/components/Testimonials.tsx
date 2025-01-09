import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, avatar, role, content, rating }) => (
  <Card className="h-full flex flex-col">
    <CardContent className="flex-grow pt-6">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < rating ? 'currentColor' : 'none'} />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
    </CardContent>
    <CardFooter className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </CardFooter>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: &quot;Sarah Johnson&quot;,
      avatar: &quot;/avatars/sarah.jpg&quot;,
      role: &quot;Fitness Enthusiast&quot;,
      content: &quot;FitTrack has completely transformed my workout routine. The ability to track my progress and set goals has kept me motivated like never before!&quot;,
      rating: 5
    },
    {
      name: &quot;Michael Chen&quot;,
      avatar: &quot;/avatars/michael.jpg&quot;,
      role: &quot;Marathon Runner&quot;,
      content: &quot;As a runner, I love how FitTrack integrates with my other devices to give me a complete picture of my fitness. It&apos;s become an essential part of my training.&quot;,
      rating: 4
    },
    {
      name: &quot;Emily Rodriguez&quot;,
      avatar: &quot;/avatars/emily.jpg&quot;,
      role: &quot;Yoga Instructor&quot;,
      content: &quot;The workout planning feature in FitTrack has made it so easy for me to create and stick to a balanced routine. My clients love it too!&quot;,
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;