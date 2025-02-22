import React, { FC } from 'react';
import { Heading } from '@chakra-ui/react';

interface HeadingPoppinsProps {
  margin?: string;
  padding?: string;
  text: string;
}

const HeadingPoppins: FC<HeadingPoppinsProps> = ({
  margin,
  padding,
  text,
}) => {
  return (
    <>
      <Heading
        fontFamily={'poppins'}
        fontWeight={'bold'}
        fontSize={'md'}
        textTransform={'uppercase'}
        textAlign={'center'}
        letterSpacing={'2px'}
        margin={margin}
        padding={padding}
      >
        {text}
      </Heading>
    </>
  );
};

export default HeadingPoppins;
