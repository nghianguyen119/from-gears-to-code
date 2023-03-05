import { ReactNode } from "react";

import MainLayout from "./main";

type Props = {
  children: ReactNode;
  variant?: "main";
};

export default function Layout({ variant = "main", children }: Props) {
  return <MainLayout>{children}</MainLayout>;
}
