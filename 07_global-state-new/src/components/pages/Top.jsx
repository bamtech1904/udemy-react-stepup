import styled from "styled-components";
import { useNavigate } from "react-router";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import React from "react";
import { useSetAtom } from "jotai";
import { userState } from "../store/userState";

export const Top = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetAtom(userState);

  const onClickAdmin = () => {
    // 管理者フラグをグローバルstateとして定義
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
