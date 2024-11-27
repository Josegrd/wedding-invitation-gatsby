import React from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import OpeningSection from './OpeningSection';
import WelcomeSection from './WelcomeSection';

const ScrollPage = () => {
  const widthScrollSection = useBreakpointValue({ base: 'none', lg: 'block' });

  return (
    <Flex
      width={{base: '100%', lg: '500px'}}
      justify={'center'}>
    <Box
      width={{ base: '100%', lg: '500px' }}
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
