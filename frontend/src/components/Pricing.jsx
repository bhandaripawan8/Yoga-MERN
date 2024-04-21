import React from 'react';

const PricingPlans = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-black mb-8">Choose Your Plan</h2>
      <div className="flex justify-center">
        {/* Beginner Plan */}
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-4">
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-center mb-4">Beginner</h3>
            <div className="text-center text-2xl font-bold mb-4">&#x20A8; 1000<span className="text-base">/month</span></div>
            <ul className="text-sm text-black mb-6">
              <li className="mb-2">Access to 3 yoga classes per week</li>
              <li className="mb-2">Basic yoga poses instruction</li>
              <li className="mb-2">Weekly progress tracking</li>
            </ul>
            <button className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600">Choose Plan</button>
          </div>
        </div>

        {/* Intermediate Plan */}
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-4">
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-center mb-4">Intermediate</h3>
            <div className="text-center text-2xl font-bold mb-4">&#x20A8; 2000<span className="text-base">/month</span></div>
            <ul className="text-sm text-black mb-6">
              <li className="mb-2">Access to 5 yoga classes per week</li>
              <li className="mb-2">Advanced yoga poses instruction</li>
              <li className="mb-2">Monthly progress tracking</li>
              <li className="mb-2">Customized diet plan</li>
            </ul>
            <button className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600">Choose Plan</button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-4">
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-center mb-4">Pro</h3>
            <div className="text-center text-2xl font-bold mb-4">&#x20A8; 3000<span className="text-base">/month</span></div>
            <ul className="text-sm text-black mb-6">
              <li className="mb-2">Unlimited yoga classes per week</li>
              <li className="mb-2">Personalized yoga sessions</li>
              <li className="mb-2">Individualized progress tracking</li>
              <li className="mb-2">24/7 support</li>
              <li className="mb-2">Access to exclusive workshops</li>
            </ul>
            <button className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
