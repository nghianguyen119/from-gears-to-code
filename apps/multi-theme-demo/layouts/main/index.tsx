import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Box, Link, Container, Typography, Stack } from "@mui/material";
import Logo from "@blog-frontend/components/Logo";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { pathname } = useRouter();

  const isHome = pathname === "/";

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      {children}
      <Box sx={{ flexGrow: 1 }} />
      <MainFooter />
    </Stack>
  );
}
