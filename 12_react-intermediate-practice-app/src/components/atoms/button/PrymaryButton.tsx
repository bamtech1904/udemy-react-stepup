import { Button } from "@chakra-ui/react";
import type { FC } from "react";

type Props = {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrymaryButton: FC<Props> = (props) => {
  const { onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
    >
      ログイン
    </Button>
  );
};
