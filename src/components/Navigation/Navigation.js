import { useState } from 'react';
import Image from 'next/image';
import hamburger from '../../../public/assets/hamburger.png'
import close from '../../../public/assets/close.svg'
import styles from './Navigation.module.css'


export default function Navigation() {
    const links = ["Accueil", "A propos de moi", "Naturopathie", "Biorésonance", "Physionutrition", "Massage Amma", "Tarifs", "Contact", "Avis"]
    const [currentLink, setCurrentLink]=useState(0);
    const [navbar, setNavbar]=useState(false);

    const handleActiveLink = (index)=> {
        setCurrentLink(index)
        setNavbar(!navbar)
    }

    
    return (
        <nav className={styles.nav}>
            <ul className={navbar ? styles.mobileMenu : ''}>
                {links.map((link, index)=>(
                    <li
                        key={index}
                        onClick={()=> handleActiveLink(index)}
                        className={currentLink === index && styles.active}
                    >
                        <a href={'#'+link}>{link}</a>
                    </li>
                ))}
            </ul>
            <div className={styles.hamburger}>
                <button onClick={()=>setNavbar(!navbar)}>
                    {navbar ? (
                        <Image src={close} width={36} height={36} alt="close"/>
                    ) : (
                    <Image src={hamburger} width={36} height={36} alt="hamburger"/>
                    )
                    }
                </button>
            </div>
            
        </nav>
    )
}
