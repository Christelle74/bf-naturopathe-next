import Image from "next/legacy/image"
import logo from '../../../public/logo.png'
import Link from "next/link"
import styles from './Logo.module.css'


export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link href='/'><Image layout="intrinsic" src={logo} width={678} height={678} alt="Beatrice Fabry naturopathe"/></Link>
        </div>
    )
}
