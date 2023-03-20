import Image from "next/image"
import logo from '../../../public/assets/LOGO-BF-FOND-TRANSPARENT_440px.png'
import Link from "next/link"
import styles from './Logo.module.css'


export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link href='/'><Image src={logo} sizes='100vw' alt="Beatrice Fabry naturopathe"/></Link>
        </div>
    )
}
