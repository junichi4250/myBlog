import { Blog, Category } from '..'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import { client } from '../../lib/client'
import { pagesPath } from '../../module/url/pagesPath'
import { SiteUrl } from '../../module/url/siteUrl'
import styles from './detail.module.scss'
import CategoryChip from '@/components/category/CategoryChip'

type Props = {
  blog: Blog
}

const formattedPublishedDate = (targetDate: string): string => {
  const publishedDate: Date = new Date(targetDate)

  return (
    `${publishedDate.getFullYear()}年` +
    `${publishedDate.getMonth() + 1}月` +
    `${publishedDate.getDate()}日`
  )
}

export const Detail: React.FC<Props> = ({ blog }) => {
  const breadcrumb: Breadcrumb[] = [
    {
      path: pagesPath.$url().pathname,
      label: SiteUrl.Top.pageName,
    },
    {
      path: pagesPath.$url().pathname,
      label: SiteUrl.Top.pageName,
    },
    {
      path: pagesPath.$url().pathname,
      label: blog.title,
    },
  ]
  return (
    <main>
      <Breadcrumb links={breadcrumb} />
      <h1 className='heading1'>{blog.title}</h1>
      <div className={styles.publishedDate}>{blog.publishedAt}</div>
      <div className={styles.categoriesFlow}>
        {blog.categories.map((category: Category) => (
          // - サファリでgapが効かない為仕方なく親クラスを仕様
          <div key={category.id} className={styles.container}>
            <CategoryChip category={category} onClick={() => undefined} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Detail

// データ取得
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: Blog }) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}
