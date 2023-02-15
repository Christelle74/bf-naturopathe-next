import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Logo/>
            <Navigation/>
        </div>
    )
}
