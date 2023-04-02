import Head from "next/head";

const HeadInfo = ({ title, keyword, content }: any) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keyword} />
      <meta name="contents" content={content} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "HeadInfo title",
  keyword: "HeadInfo keyword",
  content: "HeadInfo content",
};

export default HeadInfo;
