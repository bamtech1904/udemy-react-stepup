import { Center, Spinner } from "@chakra-ui/react";
import { useEffect, type FC } from "react";
import { useAllUsers } from "@/hooks/useAllUsers";
import { UserDetailDialog } from "@/components/organisms/user/UserDetailDialog";

export const UserManagement: FC = () => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <UserDetailDialog users={users} />
      )}
    </>
  );
};
