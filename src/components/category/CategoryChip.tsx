import Link from 'next/link'
import React from 'react'
import styles from './categoryChip.module.scss'
import { Category } from '@/pages'

type Props = {
  category: Category
  onClick: () => void
}

const CategoryChip: React.FC<Props> = ({ category, onClick }) => {
  return (
    <Link href={''}>
      <a className={`${styles.categoryBadge} ${styles.categoryBadge__linkStyle}`} onClick={onClick}>
        {category.name}
      </a>
    </Link>
  )
}

export default CategoryChip
