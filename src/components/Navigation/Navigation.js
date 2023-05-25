import Logo from "../Logo/Logo";
import { useState } from 'react';
import Image from 'next/image';
import hamburger from '../../../public/assets/hamburger.webp'
import close from '../../../public/assets/close.svg'


export default function Navigation() {
    const links = ["Accueil", "Mon Parcours", "Naturopathie", "Biorésonance", "Physionutrition", "Massage Amma", "Tarifs", "Contact", "Avis"]
    const [currentLink, setCurrentLink]=useState(0);
    const [navActive, setNavActive]=useState(false);

    const handleActiveLink = (index)=> {
        setCurrentLink(index)
        setNavActive(false)
    }
    
    
    return (
        <header>
            <nav className="nav">
                <Logo/>
                <div className={`${navActive ? "navActive" : ""} menu`}>
                    <ul>
                        {links.map((link, index)=>(
                            <li
                                key={index}
                                onClick={()=> handleActiveLink()}
                                className={currentLink === index ? "active" : ""}
                            >
                                <a href={'#'+link}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={"hamburger"} onClick={()=>setNavActive(!navActive)}>
                    {navActive ? (
                        <Image src={close}  alt="close"/>
                        ) : (
                        <Image src={hamburger}  alt="open menu"/>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}
