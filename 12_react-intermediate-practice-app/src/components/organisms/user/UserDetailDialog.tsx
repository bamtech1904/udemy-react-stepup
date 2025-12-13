import {
  CloseButton,
  Dialog,
  Field,
  Input,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState, type ChangeEvent, type FC } from "react";
import { UserCard } from "./UserCard";
import { useSelectUser } from "@/hooks/useSelectorUser";
import type { User } from "@/types/api/user";
import { useLoginUser } from "@/hooks/userLoginUser";
import { PrymaryButton } from "@/components/atoms/button/PrymaryButton";

type Props = {
  users: Array<User>;
  // isAdmin?: boolean;
};

export const UserDetailDialog: FC<Props> = (props) => {
  const { onSelectUser, selectedUser } = useSelectUser();
  const { users } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(selectedUser?.username ?? "");
    setName(selectedUser?.name ?? "");
    setEmail(selectedUser?.email ?? "");
    setPhone(selectedUser?.phone ?? "");
  }, [selectedUser]);

  const { loginUser } = useLoginUser();
  const isAdmin = loginUser?.isAdmin;
  // console.log(loginUser);
  // console.log(selectedUser);

  const onClickUser = (id: number) => {
    // console.log(id);
    onSelectUser({ id, users });
  };

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onClickUpdate = () => {
    alert();
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
            <Dialog.Content padding={2}>
              <Dialog.Header>
                <Dialog.Title>ユーザー詳細</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body mx={4}>
                <Stack gap={4}>
                  <Field.Root>
                    <Field.Label>名前</Field.Label>
                    <Input
                      value={username}
                      onChange={onChangeUserName}
                      readOnly={!isAdmin}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>フルネーム</Field.Label>
                    <Input
                      value={name}
                      onChange={onChangeName}
                      readOnly={!isAdmin}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>MAIL</Field.Label>
                    <Input
                      value={email}
                      onChange={onChangeEmail}
                      readOnly={!isAdmin}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>TEL</Field.Label>
                    <Input
                      value={phone}
                      onChange={onChangePhone}
                      readOnly={!isAdmin}
                    />
                  </Field.Root>
                </Stack>
              </Dialog.Body>
              {isAdmin && (
                <Dialog.Footer>
                  <PrymaryButton onClick={onClickUpdate}>更新</PrymaryButton>
                </Dialog.Footer>
              )}
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
