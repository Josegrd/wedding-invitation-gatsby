import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Box,
  Center,
  useColorMode,
  Code,
  CodeProps,
  Link as ChakraLink,
  Flex
} from "@chakra-ui/react";
import LeftDesktopSection from "../components/screen/LeftScreenPage";



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
       <Flex
        height="100vh"
        direction="row"
        width="100%"
        color="alternativeColorText"
      >
        <LeftDesktopSection />
      </Flex>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>The Wedding of Tiffany & Jared by Invitato</title>;
