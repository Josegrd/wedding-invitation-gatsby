import React from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import OpeningSection from './OpeningSection';
import WelcomeSection from './WelcomeSection';

const ScrollPage = () => {
  return (
    <Flex
      width={'100%'}
      justify={'center'}>
    <Box
      width={'100%'}
      overflowY="auto"
      height="100vh"
      marginLeft={{ base: '0', lg: 'calc(100% - 500px)' }}
    >
      <WelcomeSection />
      <OpeningSection />
    </Box>
    </Flex>
  );
};

export default ScrollPage;
