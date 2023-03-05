import { Icon, IconifyIcon } from "@iconify/react";
import { Box, BoxProps } from "@uikit/standard/components";
import { SxProps } from "@uikit/standard/system";

interface Props extends BoxProps {
  sx?: SxProps;
  icon: IconifyIcon | string;
}

export default function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
