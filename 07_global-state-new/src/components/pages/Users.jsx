import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useAtom } from "jotai";
import { userState } from "../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇ-${val}`,
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=724&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "12345@example.com",
    phone: "090-1234-5678",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  // 管理者フラグの切り替え
  const [userInfo, setUserInfo] = useAtom(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
