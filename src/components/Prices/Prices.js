import Image from "next/image"
import logo from '../../../public/assets/LOGO-BF-FOND-TRANSPARENT_440px.webp'
import styles from './Prices.module.css'

export default function Prices() {
    return (
        <section id="Tarifs" className={styles.tarifs}>
            <article data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000" className={styles.description}>
                <h2>Tarifs</h2>
                    <ul>
                        <li>Consultation naturopathie et biorésonance 1H30 : 60 €</li>
                        <li>Consultation Massage Amma 30 min : 30 €</li>
                    </ul>
                    <p>
                        N’hésitez pas à vous rapprocher de votre mutuelle, elles sont de plus en plus nombreuses à prendre en charge la naturopathie. 
                    </p>
            </article>

        </section>
    )
}
