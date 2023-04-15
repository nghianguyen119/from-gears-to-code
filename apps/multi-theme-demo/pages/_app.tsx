import "@blog-frontend/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { SettingsValueProps } from "@uikit/types/theme";
import Head from "next/head";
import ThemeProvider from "@uikit/standard/theme";
import { SettingsProvider } from "@uikit/standard/contexts/SettingsContext";
import App, { AppProps, AppContext } from "next/app";
import cookie from "cookie";
import { getSettings } from "@uikit/standard/utils/getSettings";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  settings: SettingsValueProps;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SettingsProvider defaultSettings={settings}>
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </SettingsProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
