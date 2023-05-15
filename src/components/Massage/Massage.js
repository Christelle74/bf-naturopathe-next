import Image from "next/image"
import img1 from '../../../public/assets/20230225_164533(0).jpg'
import img2 from '../../../public/assets/20230225_164727.jpg'
import img3 from '../../../public/assets/20230225_171914.jpg'
import img4 from '../../../public/assets/20230225_171946.jpg'
import img5 from '../../../public/assets/20230225_172043.jpg'
import styles from './Massage.module.css'

export default function Massage() {
    return (
        <section id="Massage Amma">

            <article data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000">
                <h2>Massage Amma</h2>
                <p>
                    Le massage Amma est un shiatsu sur chaise adaptée sur laquelle vous êtes particulièrement détendu. 
                    <br /><br />
                    Il se pratique habillé et travaille sur les méridiens d’acupuncture. 
                    <br /><br />
                    Il inclut massage et accupressure du dos, du crâne, des bras et des mains. 
                    <br /><br />
                    J’ai rajouté le massage et l’accupression des jambes qui le rend plus complet ! 
                    <br /><br /><br />
                    J'interviens dans plusieurs entreprises dont le CSE prend en charge tout ou partie du prix du massage. 
                    <br />
                    J'interviens également en centre de vacances.
                </p>

                    <div className={styles.massage}>
                        <Image  src={img2}  alt="Beatrice Fabry, massage Amma"  sizes='100vw' placeholder='blur'/>
                    </div>
            </article>
            
            <article data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000">
                <div className={styles.gallery}>
                    <Image  src={img5}  alt="Beatrice Fabry, massage Amma"   placeholder='blur'/>
                    <Image   src={img4}  alt="Beatrice Fabry, massage Amma"  placeholder='blur'/>
                    <Image   src={img3}  alt="Beatrice Fabry, massage Amma"  placeholder='blur'/>
                    <Image   src={img1}  alt="Beatrice Fabry, massage Amma"  placeholder='blur'/>
                </div>
            </article>

        </section>
    )
}
