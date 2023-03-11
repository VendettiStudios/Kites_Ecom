import { FC, useState } from 'react';
import Link from 'next/link';
import s from './Navbar.module.css';
import Container from '@components/ui/Container/Container';
import Image from 'next/image';
// import Hamburger from './Hamburger';

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
        <Container clean className={s.mainContainer}>
            <div className={s.nav}>
                <div className={s.hamburger}>
                    {/* <Hamburger onHamburgerClick={handleHamburgerClick} /> */}
                    <div
                        className={s.menu}
                        style={{ transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)" }}
                    >
                        <ul>
                            <li>New Arrivals</li>
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
                                                                <li>Tops</li>
                                                                <li>Bottoms</li>
                                                                <li>Dresses</li>
                                                                <li>Jumpsuits</li>
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
                                                                <li>Scarves</li>
                                                                <li>Bags</li>
                                                                <li>Hats</li>
                                                                <li>Shoes</li>
                                                                <li>Belts</li>
                                                                <li>Brooches</li>
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
                                                                <li>Earrings</li>
                                                                <li>Necklaces</li>
                                                                <li>Bracelets</li>
                                                                <li>Rings</li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                                <li>Decor</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li>Archive</li>
                            <li>Meet The Designer</li>
                            <li>Schedule A Styling</li>
                        </ul>
                    </div>
                    {isMenuOpen && (
                        <div className={s["menu-overlay"]} onClick={handleHamburgerClick} />
                    )}
                </div>
                <Image className={s.logo} src="/navLogo.png" alt="nav Logo" width={250} height={150} />
                <div className={s.bag}>
                    <Image src="/bag.png" alt="Cart icon" width={24} height={24} />
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
