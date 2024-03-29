import { useState, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Link,
  Drawer,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@uikit/standard/components";
import { ListItemButtonProps } from "@uikit/standard/components";
import { NAVBAR } from "@uikit/standard/config";
import Logo from "@blog-frontend/components/Logo";
import Iconify from "@blog-frontend/components/Iconify";
import Scrollbar from "@blog-frontend/components/Scrollbar";
import { IconButtonAnimate } from "@blog-frontend/components/animate";
import { NavSectionVertical } from "@blog-frontend/components/nav-section";

import { MenuProps, MenuItemProps } from "./type";

const ListItemStyle = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    ...theme.typography.body2,
    textTransform: "capitalize",
    height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
    color: theme.palette.text.secondary,
  })
);

// ----------------------------------------------------------------------

export default function MenuMobile({ isOffset, isHome, navConfig }: MenuProps) {
  const { pathname } = useRouter();

  const [open, setOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isHome && { color: "common.white" }),
          ...(isOffset && { color: "text.primary" }),
        }}
      >
        <Iconify icon={"eva:menu-2-fill"} />
      </IconButtonAnimate>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List disablePadding>
            {navConfig.map((link) => (
              <MenuMobileItem key={link.title} item={link} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

type MenuMobileItemProps = {
  item: MenuItemProps;
};

function MenuMobileItem({ item }: MenuMobileItemProps) {
  const { pathname } = useRouter();
  const { title, path, icon, children } = item;
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const isActive = pathname === path;

  if (children) {
    return (
      <>
        <ListItemStyle onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Iconify
            icon={
              isOpen
                ? "eva:arrow-ios-downward-fill"
                : "eva:arrow-ios-forward-fill"
            }
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={isOpen} unmountOnExit>
          <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <NavSectionVertical
              navConfig={children}
              sx={{
                "& .MuiList-root:last-of-type .MuiListItemButton-root": {
                  height: 200,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  bgcolor: "background.neutral",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    "url(/assets/illustrations/illustration_dashboard.png)",
                  "& > *:not(.MuiTouchRipple-root)": { display: "none" },
                },
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }

  if (title === "Documentation") {
    return (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        <ListItemStyle>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
        </ListItemStyle>
      </Link>
    );
  }

  return (
    <NextLink href={path} passHref>
      <ListItemStyle
        sx={{
          ...(isActive && {
            color: "primary.main",
            fontWeight: "fontWeightMedium",
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity
              ),
          }),
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
    </NextLink>
  );
}
