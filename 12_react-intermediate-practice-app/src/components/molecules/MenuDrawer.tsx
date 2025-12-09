import { Button, Drawer } from "@chakra-ui/react";
import type { FC } from "react";
import { MenuIconButton } from "@/components/atoms/button/MenuIconButton";
import { Link } from "react-router";

export const MenuDrawer: FC = () => {
  return (
    <Drawer.Root placement="start" size="xs">
      <Drawer.Context>
        {(context) => (
          <>
            <MenuIconButton />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Body p={0} bg="gray.100">
                  <Button
                    w="100%"
                    bg="white"
                    color="black"
                    _hover={{ bg: "gray.100" }}
                    onClick={() => context.setOpen(false)}
                    asChild
                  >
                    <Link to="/home">TOP</Link>
                  </Button>
                  <Button
                    w="100%"
                    bg="white"
                    color="black"
                    _hover={{ bg: "gray.100" }}
                    onClick={() => context.setOpen(false)}
                    asChild
                  >
                    <Link to="/home/user_management">ユーザー一覧</Link>
                  </Button>
                  <Button
                    w="100%"
                    bg="white"
                    color="black"
                    _hover={{ bg: "gray.100" }}
                    onClick={() => context.setOpen(false)}
                    asChild
                  >
                    <Link to="/home/setting">設定</Link>
                  </Button>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </>
        )}
      </Drawer.Context>
    </Drawer.Root>
  );
};
