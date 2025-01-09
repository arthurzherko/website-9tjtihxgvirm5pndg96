import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, description, features, isPopular }) => (
  <Card className={`flex flex-col h-full ${isPopular ? 'border-primary shadow-lg' : ''}`}>
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-4xl font-bold mb-6">${price}<span className="text-xl font-normal text-gray-500">/mo</span></p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full" variant={isPopular ? 'default' : 'outline'}>
        {isPopular ? 'Start Free Trial' : 'Choose Plan'}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  const plans = [
    {
      title: &quot;Basic&quot;,
      price: 0,
      description: &quot;Perfect for getting started&quot;,
      features: [
        &quot;Workout tracking&quot;,
        &quot;Basic analytics&quot;,
        &quot;Goal setting&quot;
      ],
      isPopular: false
    },
    {
      title: &quot;Pro&quot;,
      price: 9.99,
      description: &quot;For serious fitness enthusiasts&quot;,
      features: [
        &quot;Advanced workout tracking&quot;,
        &quot;Detailed performance analytics&quot;,
        &quot;Custom workout plans&quot;,
        &quot;Nutrition tracking&quot;
      ],
      isPopular: true
    },
    {
      title: &quot;Elite&quot;,
      price: 19.99,
      description: &quot;For professional athletes&quot;,
      features: [
        &quot;All Pro features&quot;,
        &quot;Personal coaching&quot;,
        &quot;Advanced goal tracking&quot;,
        &quot;Priority support&quot;
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;