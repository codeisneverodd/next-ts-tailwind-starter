import { Box } from "components";
import Head from "next/head";
import { tw } from "utils/tailwindMerge";

export default function Home() {
  return (
    <>
      <Head>
        <title>codeisneverodd</title>
        <meta
          name="description"
          content="Generated by codeisneverodd's starter kit"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 pt-8">
        <h1 className="text-3xl">홈</h1>
        <Box>하이</Box>
      </main>
    </>
  );
}
