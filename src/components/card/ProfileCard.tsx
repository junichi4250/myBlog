import React from 'react'
// icon
import IconAndLink from '../icon/IconAndLink'
// style
import styles from './profileCard.module.scss'

type Props = {
  targetProfile: Pick<Profile, 'image' | 'familyName' | 'lastName' | 'role'>
}

export type Profile = {
  familyName: string
  lastName: string
  role: string
  image: ImageType
  createdAt: number
  publishedAt: number
  rebisedAt: string
  updatedAt: string
}

type ImageType = {
  url: string
  width: number
  height: number
}

const ExternalLinks = {
  Twitter: 'https://twitter.com/test',
  Github: 'https://github.com/junichi4250',
}

const getFullName = (familyName: string, lastName: string): string => {
  return `${familyName} ${lastName}`
}

const ProfileCard: React.FC<Props> = ({ targetProfile }) => {
  return (
    <div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${targetProfile.image.url})` }}
        role='img'
      ></div>
      <div className={styles.fullName}>
        {getFullName(targetProfile.familyName, targetProfile.lastName)}
      </div>
      <div className={styles.role}>{targetProfile.role}</div>
      <IconAndLink
        iconType='GITHUB'
        label={'Github'}
        className={styles.marginTop}
        externalLink={ExternalLinks.Github}
      />
    </div>
  )
}

export default ProfileCard
