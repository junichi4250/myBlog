import { Blog } from '..'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import { client } from '../../lib/client'
import { pagesPath } from '../../module/url/pagesPath'
import { SiteUrl } from '../../module/url/siteUrl'

type Props = {
  blog: Blog
}

export const BlogId: React.FC<Props> = ({ blog }) => {
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
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <p>{blog.category && `${blog.category.name}`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  )
}

export default BlogId

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
