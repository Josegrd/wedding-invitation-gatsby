import React, { FC } from 'react';
import { Heading } from '@chakra-ui/react';

interface HeadingNewsreaderItalicProps {
  margin?: string;
  padding?: string;
  text: string;
}

const HeadingNewsreaderItalic: FC<HeadingNewsreaderItalicProps> = ({
  margin,
  padding,
  text,
}) => {
  return (
    <>
      <Heading
        as="h2"
        fontWeight={'300'}
        fontFamily="newsreader_italic"
        fontStyle={'italic'}
        fontSize={'4xl'}
        margin={margin}
        padding={padding}
      >
        {text}
      </Heading>
    </>
  );
};

export default HeadingNewsreaderItalic;
