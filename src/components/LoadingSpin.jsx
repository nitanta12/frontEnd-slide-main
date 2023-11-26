import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Spinner, Text, VStack } from '@chakra-ui/react';

const LoadingSpin = () => {
  const [fact, setFact] = useState('');
  
  useEffect(() => {
    const facts = [
      'Did you know that the first computer mouse was made of wood?',
      'Did you know that AI can recognize emotions in facial expressions, tone of voice, and text?',
      'Did you know that the first AI program was written in 1951 by Christopher Strachey?',
      'Did you know that robots can learn from humans by observing their actions?',
      'Did you know that AI-powered chatbots are used by many companies to improve customer service?',
      'Did you know that virtual reality can be used to simulate real-life experiences?',
      'Did you know that blockchain technology can be used to create secure and transparent systems for voting and record-keeping?',
      'Did you know that AI algorithms can analyze medical images to detect diseases such as cancer?',
      'Did you know that autonomous vehicles are being developed by companies such as Tesla and Google?',
      'Did you know that AI can be used to predict natural disasters and help with disaster response efforts?',
      'Did you know that AI can be used to create personalized recommendations for movies, music, and products?',
      'Did you know that facial recognition technology can be used for security and surveillance purposes?',
      'Did you know that AI is being used to develop personalized medicine and treatments for patients?',
      'Did you know that AI can help improve crop yields and reduce food waste in agriculture?',
      'Did you know that AI can be used to detect and prevent cyber attacks?',
      'Did you know that voice assistants such as Siri and Alexa use AI to understand and respond to user requests?',
      'Did you know that AI can be used to create realistic computer-generated graphics and animations?',
      'Did you know that AI can be used to analyze social media data and predict trends and sentiment?',
      'Did you know that 3D printing technology can be used to create prosthetic limbs and organs?',
      'Did you know that AI is being used to develop new materials and improve manufacturing processes?',
      'Did you know that AI can be used to analyze and interpret large amounts of scientific data?',
      'Did you know that blockchain technology can be used to create decentralized marketplaces and social networks?',
      'Did you know that AI-powered drones are being used for tasks such as search and rescue and environmental monitoring?',
      'Did you know that AI can be used to improve traffic flow and reduce congestion in cities?',
      'Did you know that AI can be used to create personalized learning experiences for students?',
      'Did you know that AI can be used to predict equipment failures in industrial settings?',
      'Did you know that AI can be used to create more efficient and sustainable energy systems?',
      'Did you know that AI can be used to analyze financial data and predict market trends?',
      'Did you know that AI can be used to create personalized workout plans and track fitness progress?',
      'Did you know that AI can be used to develop new video games and improve player experiences?'
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

