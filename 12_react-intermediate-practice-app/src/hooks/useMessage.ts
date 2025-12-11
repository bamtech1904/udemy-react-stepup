import { toaster } from "@/components/ui/toaster";

type Props = {
  title: string;
  type: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const showMessage = (props: Props) => {
    const { title, type } = props;
    toaster.create({
      title,
      type,
      duration: 2000,
      closable: true,
    });
  };
  return { showMessage };
};
