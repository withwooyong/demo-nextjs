import Head from "next/head";
import Nav from "./Nav";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Layout keyword" />
        <meta name="contents" content="Layout content" />
      </Head>
      <Nav />
      <div>{children}</div>
    </>
  );
}
