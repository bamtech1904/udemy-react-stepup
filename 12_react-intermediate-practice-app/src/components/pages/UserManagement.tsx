import { Wrap, WrapItem } from "@chakra-ui/react";
import type { FC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = () => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://picsum.photos/800"
          userName="じゃけぇ"
          fullName="Takumi Okada"
        />
      </WrapItem>
    </Wrap>
  );
};
