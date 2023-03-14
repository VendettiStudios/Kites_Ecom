import { FC, useState } from 'react';
import Link from 'next/link';
import s from './Navbar.module.css';
import Container from '@components/ui/Container/Container';
import Image from 'next/image';
import Hamburger from '../Hamburger/Hamburger';

interface Link {
    href: string
    label: string
}

interface NavbarProps {
    links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
    const [isApparelOpen, setIsApparelOpen] = useState(false);
    const [isJewelryOpen, setIsJewelryOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const handleShopClick = () => {
        setIsShopOpen((prevIsShopOpen) => {
            setIsAccessoriesOpen(false);
            setIsApparelOpen(false);
            setIsJewelryOpen(false);
            return !prevIsShopOpen;
        });
    };

    const handleAccessoriesClick = (e: React.MouseEvent<HTMLLIElement>) => {
        if (e.currentTarget.className.includes(s["menu-item-accessories"])) {
            e.stopPropagation();
            setIsAccessoriesOpen(!isAccessoriesOpen);
        }
    };

    const handleApparelClick = (e: React.MouseEvent<HTMLLIElement>) => {
        e.stopPropagation();
        setIsApparelOpen(!isApparelOpen);
    };

    const handleJewelryClick = (e: React.MouseEvent<HTMLLIElement>) => {
        e.stopPropagation();
        setIsJewelryOpen(!isJewelryOpen);
    };
    return (
        <nav>
            <Container clean className={s.mainContainer}>
                <div className={s.nav}>
                    <div className={s.hamburger}>
                        <Hamburger onHamburgerClick={handleHamburgerClick} />
                        <div
                            className={s.menu}
                            style={{ transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)" }}
                        >
                            <ul>
                                <Link className={s.link} href="/new-arrivals">
                                    <li >New Arrivals</li>
                                </Link>
                                <li
                                    onClick={handleShopClick}
                                    className={`${s["menu-item-shop"]} ${isShopOpen ? s["active"] : ""
                                        }`}
                                >
                                    Shop
                                    {isShopOpen && (
                                        <div className={s["sub-menu-container"]}>
                                            <div className={s["sub-menu"]}>
                                                <ul>
                                                    <li
                                                        onClick={handleApparelClick}
                                                        className={`${s["menu-item-apparel"]} ${isApparelOpen ? s["active"] : ""
                                                            }`}
                                                    >
                                                        Apparel
                                                        {isApparelOpen && (
                                                            <div className={s["sub-menu"]}>
                                                                <ul>
                                                                    <Link className={s.link} href='/tops'>
                                                                        <li>Tops</li>
                                                                    </Link>
                                                                    <Link className={s.link} href='/bottoms'>
                                                                        <li>Bottoms</li>
                                                                    </Link>
                                                                    <Link className={s.link} href="/dresses">
                                                                        <li>Dresses</li>
                                                                    </Link>
                                                                    <Link className={s.link} href="/jumpsuits">
                                                                        <li>Jumpsuits</li>
                                                                    </Link>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </li>
                                                    <li
                                                        onClick={handleAccessoriesClick}
                                                        className={`${s["menu-item-accessories"]} ${isAccessoriesOpen ? s["active"] : ""
                                                            }`}
                                                    >
                                                        Accessories
                                                        {isAccessoriesOpen && (
                                                            <div className={s["sub-menu"]}>
                                                                <ul>
                                                                    <Link className={s.link} href="/scarves">
                                                                        <li>Scarves</li>
                                                                    </Link>
                                                                    <Link className={s.link} href="/bags"></Link>
                                                                    <li>Bags</li>
                                                                    <Link className={s.link} href="/hats"></Link>
                                                                    <li>Hats</li>
                                                                    <Link className={s.link} href="/shoes"></Link>
                                                                    <li>Shoes</li>
                                                                    <Link className={s.link} href="/belts"></Link>
                                                                    <li>Belts</li>
                                                                    <Link className={s.link} href="/brooches"></Link>
                                                                    <li>Brooches</li>
                                                                    <Link className={s.link} href="/hair-pieces"></Link>
                                                                    <li>Hair Pieces</li>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </li>
                                                    <li
                                                        onClick={handleJewelryClick}
                                                        className={`${s["menu-item-jewelry"]} ${isJewelryOpen ? s["active"] : ""
                                                            }`}
                                                    >
                                                        Jewelry
                                                        {isJewelryOpen && (
                                                            <div className={s["sub-menu"]}>
                                                                <ul>
                                                                    <Link className={s.link} href="/earrings">
                                                                        <li>Earrings</li>
                                                                    </Link>
                                                                    <Link className={s.link} href="/necklaces">
                                                                        <li>Necklaces</li>
                                                                    </Link>
                                                                    <Link className={s.link} href="/bracelets">
                                                                        <li>Bracelets</li>
                                                                    </Link>
                                                                    <Link className={s.link} href="/rings">
                                                                        <li>Rings</li>
                                                                    </Link>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </li>
                                                    <Link className={s.link} href="/decor">
                                                        <li>Decor</li>
                                                    </Link>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <Link className={s.link} href="/archive">
                                    <li>Archive</li>
                                </Link>
                                <Link className={s.link} href="/meet-the-designer">
                                    <li>Meet The Designer</li>
                                </Link>
                                <Link className={s.link} href="/schedule-a-styling">
                                    <li>Schedule A Styling</li>
                                </Link>
                            </ul>
                        </div>
                        {isMenuOpen && (
                            <div className={s["menu-overlay"]} onClick={handleHamburgerClick} />
                        )}
                    </div>
                    {/* <Link className={s.link} href='/'> */}
                    <Image
                        className={s.logo}
                        src="/navLogo.png"
                        alt="nav Logo"
                        width={753}
                        height={256}
                        priority
                        quality={100}
                    />

                    {/* </Link> */}
                    <div className={s.bag}>
                        <Image src="/bag.png" alt="Cart icon" width={24} height={24} />
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
