import React, { FC, useState } from "react";
import type { PageProps } from "gatsby";
import {
  Box,
  Link as ChakraLink,
  Flex
} from "@chakra-ui/react";
import LeftDesktopSection from "../components/screen/LeftScreenPage";
import { Helmet } from "react-helmet";
import RightScreenPage from "../components/screen/RightScreenPage";
import NavigationButton from "../components/button/NavigationButton";
import MusicButton from "../components/button/MusicButton";
import ScrollPage from "../components/screen/section-pages/ScrollPage";


const IndexPage: FC<PageProps> = () => {
  const [showScrollPage, setScollPage] = useState(false);

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>The Wedding of Tiffany & Jared by Invitato</title>
      </Helmet>
       <Flex
        height="100vh"
        direction="row"
        width="100%"
        color="alternativeColorText"
      >
        <LeftDesktopSection />
        {showScrollPage ? (
          <>
            <ScrollPage />
            <Box position="fixed" bottom="12px" left="12px" zIndex="11">
              <Box>
                <NavigationButton />
                <MusicButton />
              </Box>
            </Box>
          </>
        ) : (
          <RightScreenPage setScrollPage={setScollPage} />
        )}
      </Flex>
    </>
  );
};

export default IndexPage;