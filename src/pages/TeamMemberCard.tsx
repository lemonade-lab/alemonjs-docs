import React from 'react'
import styles from './teamMemberCard.styles.module.css'

// 定义团队成员信息的类型
interface TeamMember {
  avatar: string
  name: string
  role?: string // 将 role 定义为可选
  githubUrl: string
}

// 团队成员信息
const teamMembers: TeamMember[] = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/110824794?v=4',
    name: '柠檬',
    role: '队长',
    githubUrl: 'https://github.com/ningmengchongshui'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/120736499?v=4',
    name: 'whrgg',
    role: '后端',
    githubUrl: 'https://github.com/whrgg'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/113702528?v=4',
    name: 'CCCdk',
    role: '前端',
    githubUrl: 'https://github.com/CCCdk'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/62873988?v=4',
    name: 'snowtafir',
    role: '文档',
    githubUrl: 'https://github.com/snowtafir'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/163821852?v=4',
    name: 'qiuyu159',
    role: 'bot',
    githubUrl: 'https://github.com/qiuyu159'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/136248441?v=4',
    name: 'AAmiaom',
    role: 'bot',
    githubUrl: 'https://github.com/AAmiaom'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/142967939?v=4',
    name: 'ztygod',
    role: 'bot',
    githubUrl: 'https://github.com/ztygod'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/74760542?v=4',
    name: 'sioncovy',
    role: 'bot',
    githubUrl: 'https://github.com/sioncovy'
  }
]

const TeamMemberCard: React.FC = () => {
  return (
    <div className={styles.teamContainer}>
      {teamMembers.map((member, index) => (
        <a
          key={index}
          href={member.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.memberCard}
        >
          <img alt={member.name} src={member.avatar} className={styles.memberAvatar} />
          <div className={styles.memberInfo}>
            <h3>{member.name}</h3>
            {member.role && <p>{member.role}</p>} {/* 只有当 role 存在时才渲染 p 元素 */}
          </div>
        </a>
      ))}
    </div>
  )
}

export default TeamMemberCard
