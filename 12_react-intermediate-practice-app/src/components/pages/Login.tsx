import { Box, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import type { FC } from "react";
import { PrymaryButton } from "@/components/atoms/button/PrymaryButton";

export const Login: FC = () => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Box borderBottom="sm" my={4} borderColor="gray.200" />
        <Stack gap={6} py={4} px={10}>
          <Input placeholder="ユーザーID" />
          <PrymaryButton />
        </Stack>
      </Box>
    </Flex>
  );
};
