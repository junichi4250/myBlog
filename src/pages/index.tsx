import Link from "next/link";
import BlogCard from "../components/card/BlogCard";
import ProfileCard, { Profile } from "../components/card/ProfileCard";
import { client } from "../lib/client";
import MetaData from "../module/metaData/MetaData";
import { SiteUrl } from "../module/url/siteUrl";

export type Props = {
  blog: Blog[];
};

export type Blog = {
  id: string;
  title: string;
  body: string;
  category: Category;
  publishedAt: number;
};

type Category = {
  name: string;
};

export const Home: React.FC<Props> = ({ blog }) => {
  // データの仮置き
  const myProfile: Profile = {
    familyName: "苗字",
    lastName: "名前",
    role: "",
    image: {
      url: "",
      width: 0,
      height: 0,
    },
    createdAt: 0,
    publishedAt: 0,
    rebisedAt: "",
    updatedAt: "",
  };
  return (
    <>
      <MetaData
        title={SiteUrl.Top.pageName}
        description={""}
        noDefaultDescription={false}
        ogpImageURI={""}
        url="/"
        type="website"
        twitterCardType="summary_large_image"
      />
      <div>
        <ul>
          {blog.map((blog: Blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </ul>
      </div>

      {/* プロフィール */}
      {/* <div className={styles.profileBlock}> */}
      <ProfileCard targetProfile={myProfile} />
    </>
  );
};

export default Home;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
