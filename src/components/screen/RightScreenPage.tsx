import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import HeadingPoppins from '../heading/HeadingPoppins';
import HeadingNewsreaderItalic from '../heading/HeadingNewsreaderItalic';
import HeadingButlerLight from '../heading/HeadingButlerLight';
import OpenButton from '../button/OpenButton';

interface RightSectionProps {
  setScrollPage: Dispatch<SetStateAction<boolean>>;
}

const RightSection: FC<RightSectionProps> = ({ setScrollPage }) => {
  const [loading, setLoading] = useState(false);

  const handleOpenClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setScrollPage(true);
    }, 1800);
  };

  return (
    <>
    <Flex
      width={'100%'}
      justify={'center'}>
      <Box
        height={'100vh'}
        position="relative"
        width="500px"
        marginLeft={{ base: '0', lg: 'calc(100% - 500px)' }}
      >
        <Box
          flex="none"
          width="100%"
          bgImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/Image-right-screen.jpg')"
          bgSize="cover"
          bgPosition="center"
          color="alternativeColorText"
          p={8}
          height={'100vh'}
          padding={'2rem'}
          marginLeft={{ base: '0', lg: 'auto' }}
        >
          <HeadingPoppins text="WEDDING ANNOUNCEMENT" margin="60px 0 8px 0" />
          <Box
            display={'flex'}
            justifyContent={'center'}
            height={'calc(90% - 130px)'}
            marginTop={'82px'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Box textAlign={'center'} marginTop={'47px'}>
              <HeadingButlerLight text="TIFFANY & JARED" />
              <HeadingNewsreaderItalic text="#TImetoshaRE" />
            </Box>

            <Box>
              <OpenButton handleClick={handleOpenClick} loading={loading} />
            </Box>
          </Box>
        </Box>
      </Box>
      </Flex>
    </>
  );
};

export default RightSection;
