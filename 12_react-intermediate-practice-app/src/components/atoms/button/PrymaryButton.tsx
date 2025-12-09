import { Button } from "@chakra-ui/react";
import type { FC } from "react";

export const PrymaryButton: FC = () => {
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      ログイン
    </Button>
  );
};
