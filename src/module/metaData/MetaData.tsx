import Head from "next/head";
import React from "react";
import { format, UrlObject } from "url";
import defaultImages from "../../assets/images/jun-blog.png";

type Props = {
  title: string;
  description: string;
  noDefaultDescription: boolean;
  ogpImageURI: string;
  url: string | UrlObject;
  type: OgType;
  twitterCardType: TwitterCardType;
};

type OgType = "website" | "article";

type TwitterCardType = "summary" | "summary_large_image";

const metaData: React.FC<Props> = ({
  title,
  description,
  noDefaultDescription,
  ogpImageURI,
  url,
  type,
  twitterCardType,
}) => {
  const DEFAULT_TITLE = " | jun blog";
  const DEFAULT_DESCRIPTION =
    "jun blogは、エンジニアの技術発信ブログサービスです。現役エンジニア目線からの最新技術の" +
    "発信や、情報を幅広く学ぶことができます。";

  const metaTitle = `${title}${DEFAULT_TITLE}`;
  const formattedDescription = description
    ? `${description}${DEFAULT_DESCRIPTION}`
    : DEFAULT_DESCRIPTION;

  const isDisplayMetaDescription = noDefaultDescription
    ? description
    : formattedDescription;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={isDisplayMetaDescription} />
      {/*TODO ページのデフォルトURLが決まったら追記*/}
      <meta property="og:url" content={format(url)} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={isDisplayMetaDescription} />
      <meta property="og:image" content={ogpImageURI ?? defaultImages.src} />
      <meta property="og:site_name" content="jun blog" />

      {/* ツイッター ================================================================================================== */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={isDisplayMetaDescription} />
      <meta name="twitter:image" content={ogpImageURI ?? defaultImages.src} />
    </Head>
  );
};

export default metaData;
