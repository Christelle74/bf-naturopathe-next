import Image from "next/legacy/image"
import logo from '../../../public/logo.png'
import styles from './Logo.module.css'


export default function Logo() {
    return (
        <div className={styles.logo}>
            <a href='/'><Image layout="intrinsic" src={logo} width={678} height={678} alt="Beatrice Fabry naturopathe"/></a>
        </div>
    )
}
