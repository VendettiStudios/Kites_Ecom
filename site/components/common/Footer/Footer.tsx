// needs work

import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './Footer.module.css'
import Container from '@components/ui/Container/Container'
import Image from 'next/image'
interface Props {
    className?: string
    children?: any
}


const links = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/kitesbycarlamanuel',
    },
    {
        name: 'Location',
        url: '/Location',
    },
    {
        name: 'Contact',
        url: '/Contact',
    },
    {
        name: 'Policies',
        url: '/Policies',
    },
]


const Footer: FC<Props> = ({ className }) => {
    const rootClassName = cn(s.root, className)

    return (
        <footer className={rootClassName}>
            <Container>
                <div className={s.container}>
                <div className={s.links} >
            {links.map((link, index) => (
              <Link key={index} href={link.url} style={{ textDecoration: 'none' }}>
                <span className={s.link} >{link.name}</span>
              </Link>
            ))}
          </div>
                </div>
                <div className={s.imageContainer}>
                    <Image className={s.logo} src="/footerLogo.png" alt="nav Logo" width={359} height={510} priority />
                </div>
                <div className={s.footerText}>
                    <span>&copy; 2023 Kites by Carla Manuel, Inc. All rights reserved.</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
