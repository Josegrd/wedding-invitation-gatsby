import React from 'react';
import { Box } from '@chakra-ui/react';
import OpeningSection from './OpeningSection';
import WelcomeSection from './WelcomeSection';

const ScrollPage = () => {
  return (
    <Box
      width={{ base: '100%', lg: '500px' }}
      overflowY="auto"
      height="100vh"
      marginLeft={{ base: '0', lg: 'calc(100% - 500px)' }}
    >
      <WelcomeSection />
      <OpeningSection />
    </Box>
  );
};

export default ScrollPage;
