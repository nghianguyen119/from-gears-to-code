import { CustomShadowOptions } from "@uikit/standard/theme/shadows";

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}
