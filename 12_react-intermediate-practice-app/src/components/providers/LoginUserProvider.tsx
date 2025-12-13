import { useState, type ReactNode } from "react";
import {
  LoginUserContext,
  type LoginUser,
} from "@/components/contexts/LoginUserContext";

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
