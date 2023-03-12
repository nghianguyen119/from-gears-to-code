import Head from "next/head";
import Layout from "@blog-frontend/layouts";
import { Box } from "@uikit/standard/components";

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>From Gear To Code</title>
        <meta name="description" content="A personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ height: 1400 }}>Hello</Box>
    </>
  );
}
