import Link from 'next/link'
import React from 'react'
import { pagesPath } from '../../../module/url/pagesPath'
import styles from './footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerLinks}>
        <li className={styles.footerLink}>
          <Link href={pagesPath.disclaimer.$url().pathname}>
            <a className={styles.link}>免責事項</a>
          </Link>
        </li>
        <li className={styles.footerLink}>
          <Link href={pagesPath.privacy.$url().pathname}>
            <a className={styles.link}>プライバシーポリシー</a>
          </Link>
        </li>
        <li className={styles.footerLink} onClick={() => undefined}>
          <Link href={''}>
            <a className={styles.link}>プロフィール</a>
          </Link>
        </li>
      </ul>
      <p className={styles.copyright}>Copyright © Junichi Kato. All rights reserved</p>
    </footer>
  )
}

export default Footer
