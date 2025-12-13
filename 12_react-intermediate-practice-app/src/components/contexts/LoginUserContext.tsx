import type { User } from "@/types/api/user";
import { createContext, type Dispatch, type SetStateAction } from "react";

export type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  // & で型追加
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);
