import {
  CloseButton,
  Dialog,
  Field,
  Input,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import type { FC } from "react";
import { UserCard } from "./UserCard";
import { useSelectUser } from "@/hooks/useSelectorUser";
import type { User } from "@/types/api/user";

type Props = {
  users: Array<User>;
};

export const UserDetailDialog: FC<Props> = (props) => {
  const { onSelectUser, selectedUser } = useSelectUser();
  const { users } = props;

  // console.log(selectedUser);

  const onClickUser = (id: number) => {
    // console.log(id);
    onSelectUser({ id, users });
  };

  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {users.map((user) => (
        <Dialog.Root key={user.id} motionPreset="slide-in-bottom">
          <Dialog.Trigger asChild>
            <WrapItem mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://picsum.photos/800"
                userName={user.username}
                fullName={user.name}
                onClick={() => onClickUser(user.id)}
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
                    <Input value={selectedUser?.username} readOnly />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>フルネーム</Field.Label>
                    <Input value={selectedUser?.name} readOnly />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>MAIL</Field.Label>
                    <Input value={selectedUser?.email} readOnly />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>TEL</Field.Label>
                    <Input value={selectedUser?.phone} readOnly />
                  </Field.Root>
                </Stack>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Root>
      ))}
    </Wrap>
  );
};
