import { UrlObject } from 'url'
import Link from 'next/link'
import React from 'react'
import styles from './breadcrumb.module.scss'

type Props = {
  links: Breadcrumb[]
}

type Breadcrumb = {
  label: string
  path: string | UrlObject
}

const Breadcrumb: React.FC<Props> = ({ links }) => {
  if (links.length === 0) return null
  return (
    <div className={styles.breadcrumb}>
      {links.map((link: Breadcrumb, index: number) => {
        return (
          <React.Fragment key={link.label}>
            {index > 0 && <span className={styles.guide}>{'>'}</span>}
            {link.path ? (
              <Link href={link.path}>
                <a className={styles.label}>{link.label}</a>
              </Link>
            ) : (
              <span className={styles.label__noLink}>{link.label}</span>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Breadcrumb
