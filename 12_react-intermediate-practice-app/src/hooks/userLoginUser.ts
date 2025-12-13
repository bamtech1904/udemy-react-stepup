import {
  LoginUserContext,
  type LoginUserContextType,
} from "@/components/contexts/LoginUserContext";
import { useContext } from "react";

// return省略記法
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
