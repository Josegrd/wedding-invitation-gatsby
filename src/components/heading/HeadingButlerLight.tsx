import React, { FC } from 'react';
import { Heading } from '@chakra-ui/react';

interface HeadingButlerLightProps {
  margin?: string;
  padding?: string;
  fontSize?: string;
  lineHeight?: string;
  text: string;
}

const HeadingButlerLight: FC<HeadingButlerLightProps> = ({
  margin,
  padding,
  text,
  fontSize,
  lineHeight,
}) => {
  return (
    <>
      <Heading
        as="h2"
        fontWeight={'300'}
        fontSize={`${fontSize ? fontSize : '4xl'}`}
        fontFamily="butler_light"
        margin={margin}
        padding={padding}
        lineHeight={lineHeight}
      >
        {text}
      </Heading>
    </>
  );
};

export default HeadingButlerLight;
