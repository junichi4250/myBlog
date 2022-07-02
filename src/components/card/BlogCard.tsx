import { Card, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { Blog } from '../../pages'

type Props = {
  blog: Blog
}

const useStyles = makeStyles({
  card: {
    width: '200px',
    margin: '30px 20px',
    padding: '30px',
    cursor: 'pointer',
  },
})

const BlogCard: React.FC<Props> = ({ blog }) => {
  const classes = useStyles()
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className={classes.card}>{blog.title}</div>
    </Link>
  )
}

export default BlogCard
