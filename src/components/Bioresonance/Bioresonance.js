import Image from "next/image"
import rayonex from '../../../public/assets/rayonex.webp'
import rayonex1 from '../../../public/assets/rayonex1.webp'
import rayonex2 from '../../../public/assets/rayonex2.webp'
import styles from './Bioresonance.module.css'

export default function Bioresonance() {
    return (
        <section id="Biorésonance">
            
            <article data-aos='flip-right'data-aos-easing="linear" data-aos-duration="1000">
                <h2>Biorésonance</h2>
                <h3>Mon approche de soins:</h3>
                <p>    
                    Tout d’abord, je recherche l’étiologie de vos maux, plus simplement, je cherche la cause d’un mal chronique ou aigu.
                    <br /><br />
                    Ensuite, je fais le point sur votre alimentation, car une bonne santé passe par une bonne façon de s’alimenter. 
                    Ce que j’appelle le réglage alimentaire individualisé.
                    <br /><br />
                    J'utilise en séance un  outil de physique quantique, le RAYONEX, qui permet de détecter les déséquilibres organiques ; des fréquences sont émises et testées grâce à des détecteurs, puis réharmonisées par l'appareil.
                    <br /><br />
                    Cet outil, développé selon les travaux du Dr Paul Schmidt par la société RAYONEX, est déjà utilisé par les allemands depuis 1982 et fait l'objet de constantes évolutions.
                    <br /><br />
                    
                    Enfin, je vous propose des remèdes naturels efficaces, sans effets secondaires (phytothérapie, bourgeons de plantes, homéopathie, aromathérapie et fréquences de biorésonance).
                    </p>
                <div className={styles.bioresonance}>
                    <Image src={rayonex1}  alt="Beatrice Fabry, naturopathe, bioresonance, rayonex"  sizes='50vw' placeholder='blur'/>
                    <Image src={rayonex2}  alt="Beatrice Fabry, naturopathe, bioresonance, rayonex"  sizes='50vw' placeholder='blur'/>
                </div>
                    
            </article>
            <article data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000" >
                <div className={styles.bioresonance}>
                    <Image src={rayonex}  alt="Beatrice Fabry, naturopathe, bioresonance, rayonex"  sizes='100vw' placeholder='blur'/>
                </div>
                <p>
                    <br /><br />
                    Exemples de nombreuses applications du Rayonex : recherche des allergies alimentaires, métaux lourds, recherche des carences en oligo-éléments et vitamines, rééquilibrage et ré-harmonisation  des déséquilibres trouvés. Soulagement des douleurs tendineuses, arthrosiques..
                    <br /><br />
                    Une étude allemande récente (2019), en double aveugle sur 54 patients (17 hommes, 37 femmes de 27 à 84 ans), présentant des douleurs du rachis cervical a montré une amélioration significative des symptômes douloureux sans aucun effet indésirable, après 12 séances de rayonex. 
                </p>
            </article>
        </section>
    )
}
