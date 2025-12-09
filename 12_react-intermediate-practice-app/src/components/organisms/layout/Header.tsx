import {
  Box,
  Button,
  Drawer,
  Flex,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import type { FC } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";

export const Header: FC = () => {
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer " }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <Drawer.Root placement="start" size="xs">
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="メニューボタン"
              size="sm"
              variant="plain"
              display={{ base: "block", md: "none" }}
            >
              <FaBars />
            </IconButton>
          </Drawer.Trigger>
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Body p={0} bg="gray.100">
                <Button
                  w="100%"
                  bg="white"
                  color="black"
                  _hover={{ bg: "gray.100" }}
                >
                  TOP
                </Button>
                <Button
                  w="100%"
                  bg="white"
                  color="black"
                  _hover={{ bg: "gray.100" }}
                >
                  ユーザー一覧
                </Button>
                <Button
                  w="100%"
                  bg="white"
                  color="black"
                  _hover={{ bg: "gray.100" }}
                >
                  設定
                </Button>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </Flex>
    </>
  );
};
