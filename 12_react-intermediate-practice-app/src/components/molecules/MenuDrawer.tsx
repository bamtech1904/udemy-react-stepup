import { Button, Drawer } from "@chakra-ui/react";
import type { FC } from "react";
import { MenuIconButton } from "@/components/atoms/button/MenuIconButton";

export const MenuDrawer: FC = () => {
  return (
    <Drawer.Root placement="start" size="xs">
      <MenuIconButton />
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
  );
};
