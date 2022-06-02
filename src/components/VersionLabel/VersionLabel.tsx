import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

export const VersionLabel = (): ReactElement | null => {
  const tag = import.meta.env.VITE_GIT_TAG;

  if (!tag) {
    return null;
  }

  return (
    <Box position="absolute" right={0} top={0}>
      <Text fontSize="smaller">{tag}</Text>
    </Box>
  );
};
