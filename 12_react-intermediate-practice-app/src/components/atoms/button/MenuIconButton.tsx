import { Drawer, IconButton } from "@chakra-ui/react";
import type { FC } from "react";
import { FaBars } from "react-icons/fa";

export const MenuIconButton: FC = () => {
  return (
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
  );
};
