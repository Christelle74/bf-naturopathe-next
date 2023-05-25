import card1 from '../../../public/assets/seyedeh-hamideh-kazemi-g50hO8_M-Fs-unsplash.webp'
import Image from 'next/image.js';
import { FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.css'



export default function Testimonials() {
    

    return (
        <section id="Avis" >
            <article data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000" className={styles.testimonials}>
                <h2>Vos avis</h2>
                <div className={styles.testimonialContainer}>
                    <div className={styles.testimonialCard +" "+ styles.card1}>
                        <Image src={card1}  alt=""/>
                        <h3 className={styles.name}>Françoise T.</h3>
                        <p>Je recommande l expertise de Madame Fabry qui est très à l écoute mais qui donne les bonnes indications pour régler des problèmes de santé chronique.</p>
                        <p className={styles.date}>Visité en août 2019</p>
                        <div className={styles.star}>
                            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                    </div>
                
                    <div className={styles.testimonialCard +" "+ styles.card1}>
                        <Image src={card1}  alt=""/>
                        <h3 className={styles.name}>Christelle P.</h3>
                        <p>Béatrice est une nathuropathe très avenante, souriante et à l'écoute de son patient. Elle est très professionnel ! Je la recommande vivement.</p>
                        <p className={styles.date}>Visité en novembre 2022</p>
                        <div className={styles.star}>
                            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>
                    </div>
                </div>
            </article>
            
        </section>
    )
}
