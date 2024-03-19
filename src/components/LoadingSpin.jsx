import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Spinner, Text, VStack } from '@chakra-ui/react';

const LoadingSpin = () => {
  const [fact, setFact] = useState('');
  
  useEffect(() => {
    const facts = [
      'धैर्य चाहिन्छ',
      'It might take several minutes',
      'Please Wait'
   ];

  const getRandomFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
  };
  getRandomFact(); // Set the initial fact
  const interval = setInterval(getRandomFact, 20000); // Change the fact every 20 seconds
  return () => clearInterval(interval);
}, []);

  return (
    <Fragment>
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="z-50">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 mr-4">
                <Spinner size="xl" color={"#00df9a"} />
              </div>
              <VStack>
              <h2 className="text-white font-bold text-xl tracking-wide">Generating Slides</h2>
              <Text className="text-white text-sm">Estimated time is less than 2 minutes.</Text>
              </VStack>
            </div>
            <div className="flex items-center justify-center pt-5">
                <h2 className="text-[#00df9a] md:text-lg text-sm mt-2 pl-8">{fact}</h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoadingSpin;

