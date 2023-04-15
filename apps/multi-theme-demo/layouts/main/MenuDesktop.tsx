import { m } from "framer-motion";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListItem,
  ListSubheader,
  CardActionArea,
} from "@uikit/standard/components";
import { LinkProps } from "@mui/material";
import Iconify from "@blog-frontend/components/Iconify";
import { MenuProps, MenuItemProps } from "./type";

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
}));

const LinkSubStyle = styled((props: LinkProps) => (
  <ListItem sx={{ p: 0 }}>
    <Link target="_blank" rel="noopener" {...props}>
      {props.children}
    </Link>
  </ListItem>
))(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create("color"),
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

export default function MenuDesktop({
  isOffset,
  isHome,
  navConfig,
}: MenuProps) {
  const { pathname } = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}

type MenuDesktopItemProps = {
  item: MenuItemProps;
  isHome: boolean;
  isOffset: boolean;
};

function MenuDesktopItem({ item, isHome, isOffset }: MenuDesktopItemProps) {
  const { pathname } = useRouter();

  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { title, path, children } = item;

  const isActive = (path: string) => pathname === path;

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={handleOpen}
          sx={{
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            ...(isHome && { color: "common.white" }),
            ...(isOffset && { color: "text.primary" }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Iconify
            icon={
              isOpen
                ? "eva:arrow-ios-upward-fill"
                : "eva:arrow-ios-downward-fill"
            }
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 80, left: 0 }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
          PaperProps={{
            sx: {
              px: 3,
              pt: 5,
              pb: 3,
              right: 16,
              m: "auto",
              borderRadius: 2,
              maxWidth: (theme) => theme.breakpoints.values.lg,
              boxShadow: (theme) => theme.customShadows.z24,
            },
          }}
        >
          <Grid container spacing={3}>
            {children.map((list) => {
              const { subheader, items } = list;

              return (
                <Grid
                  key={subheader}
                  item
                  xs={12}
                  md={subheader === "Dashboard" ? 6 : 2}
                >
                  <List disablePadding>
                    <ListSubheader
                      disableSticky
                      disableGutters
                      sx={{
                        display: "flex",
                        lineHeight: "unset",
                        alignItems: "center",
                        color: "text.primary",
                        typography: "overline",
                      }}
                    >
                      <IconBullet type="subheader" /> {subheader}
                    </ListSubheader>

                    {items.map((item) => (
                      <LinkSubStyle
                        key={item.title}
                        href={item.path}
                        sx={{
                          ...(isActive(item.path) && {
                            color: "text.primary",
                            typography: "subtitle2",
                          }),
                        }}
                      >
                        {item.title === "Dashboard" ? (
                          <CardActionArea
                            sx={{
                              py: 5,
                              px: 10,
                              borderRadius: 2,
                              color: "primary.main",
                              bgcolor: "background.neutral",
                            }}
                          >
                            <Box
                              component={m.img}
                              whileTap="tap"
                              whileHover="hover"
                              variants={{
                                hover: { scale: 1.02 },
                                tap: { scale: 0.98 },
                              }}
                              src="/assets/illustrations/illustration_dashboard.png"
                            />
                          </CardActionArea>
                        ) : (
                          <>
                            <IconBullet />
                            {item.title}
                          </>
                        )}
                      </LinkSubStyle>
                    ))}
                  </List>
                </Grid>
              );
            })}
          </Grid>
        </Popover>
      </>
    );
  }

  if (title === "Documentation") {
    return (
      <LinkStyle
        href={path}
        target="_blank"
        rel="noopener"
        sx={{
          ...(isHome && { color: "common.white" }),
          ...(isOffset && { color: "text.primary" }),
        }}
      >
        {title}
      </LinkStyle>
    );
  }

  return (
    <NextLink href={path} passHref>
      <LinkStyle
        sx={{
          ...(isHome && { color: "common.white" }),
          ...(isOffset && { color: "text.primary" }),
          ...(isActive(path) && {
            color: "primary.main",
          }),
        }}
      >
        {title}
      </LinkStyle>
    </NextLink>
  );
}

// ----------------------------------------------------------------------

export type IconBulletProps = {
  type?: "subheader" | "item";
};

function IconBullet({ type = "item" }: IconBulletProps) {
  return (
    <Box sx={{ width: 24, height: 16, display: "flex", alignItems: "center" }}>
      <Box
        component="span"
        sx={{
          ml: "2px",
          width: 4,
          height: 4,
          borderRadius: "50%",
          bgcolor: "currentColor",
          ...(type !== "item" && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  );
}