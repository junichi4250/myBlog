import Link from 'next/link'
import BlogCard from '../components/card/BlogCard'
import ProfileCard, { Profile } from '../components/card/ProfileCard'
import { client } from '../lib/client'
import MetaData from '../module/metaData/MetaData'
import { SiteUrl } from '../module/url/siteUrl'
import styles from './top.module.scss'

type Props = {
  blog: Blog[]
  profile: Profile
}

export type Blog = {
  id: string
  title: string
  body: string
  mainImage: ImageType
  categories: Category[]
  createdAt: string
  updatedAt: string
  publishedAt: number
}

export type Category = {
  id: string
  name: string
}

type ImageType = {
  url: string
  width: number
  height: number
}

export const Home: React.FC<Props> = ({ blog }) => {
  // データの仮置き
  const myProfile: Profile = {
    familyName: '加藤',
    lastName: '潤一',
    image: {
      url: '',
      width: 0,
      height: 0,
    },
  }
  return (
    <>
      <MetaData
        title={SiteUrl.Top.pageName}
        description={''}
        noDefaultDescription={false}
        ogpImageURI={''}
        url='/'
        type='website'
        twitterCardType='summary_large_image'
      />
      <main className={styles.topPage}>
        <div className={styles.mainSection}>
          <div>
            <ul>
              {blog.map((blog: Blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </ul>
          </div>

          {/* プロフィール */}
          <div className={styles.profileBlock}>
            <ProfileCard profile={myProfile} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
