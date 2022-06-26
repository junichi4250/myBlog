import Link from "next/link";
import { client } from "../lib/client";

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
  return (
    <div>
      <ul>
        {blog.map((blog: Blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
