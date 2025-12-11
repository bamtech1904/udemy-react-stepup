import {
  CloseButton,
  Dialog,
  Field,
  Input,
  Stack,
  WrapItem,
} from "@chakra-ui/react";
import type { FC } from "react";
import { UserCard } from "./UserCard";

type Props = {
  user: {
    username: string;
    name: string;
  };
};

export const UserDetailDialog: FC<Props> = (props) => {
  const { user } = props;
  return (
    <Dialog.Root motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <WrapItem mx="auto">
          <UserCard
            imageUrl="https://picsum.photos/800"
            userName={user.username}
            fullName={user.name}
          />
        </WrapItem>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content padding={6}>
          <Dialog.Header>
            <Dialog.Title>ユーザー詳細</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body mx={4}>
            <Stack gap={4}>
              <Field.Root>
                <Field.Label>名前</Field.Label>
                <Input value="じゃけぇ" readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>フルネーム</Field.Label>
                <Input value="Takumi Okada" readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>MAIL</Field.Label>
                <Input value="12345@example.com" readOnly />
              </Field.Root>
              <Field.Root>
                <Field.Label>TEL</Field.Label>
                <Input value="090-1111-2222" readOnly />
              </Field.Root>
            </Stack>
          </Dialog.Body>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
