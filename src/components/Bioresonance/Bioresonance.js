import Image from "next/image"
import rayonex from '../../../public/assets/rayonex.jpg'

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
                    Enfin, je vous propose des remèdes naturels efficaces, sans effets secondaires (phytothérapie, bourgeons de plantes, homéopathie, aromathérapie et fréquences de biorésonance).
                    <br /><br />
                    Cet outil de  biorésonance (issu de la médecine quantique), le RAYONEX, permet de détecter les déséquilibres et apporte un bienfait immédiat en réharmonisant les dysfonctionnements.
                    <br /><br />
                    A l'aide de la biorésonance, des fréquences sont émises et testées. En utilisant des détecteurs, on teste les déséquilibres organiques que l'on rééquilibre  grâce aux fréquences.
                    <br /><br />
                    Cet appareil, développé selon les travaux du Dr Paul Schmidt par la société RAYONEX, est déjà utilisé par les allemands depuis 1982 et fait l'objet de constantes évolutions.
                    <br /><br />
                    Exemples de nombreuses applications du Rayonex : recherche des allergies alimentaires, métaux lourds, recherche des carences en oligo-éléments et vitamines, rééquilibrage et ré-harmonisation  des déséquilibres trouvés. Soulagement des douleurs tendineuses, arthrosiques..
                    <br /><br />
                    Une étude allemande récente (2019), en double aveugle sur 54 patients (17 hommes, 37 femmes de 27 à 84 ans), présentant des douleurs du rachis cervicale a montré une amélioration significative des symptômes douloureux sans aucun effet indésirable, après 12 séances de rayonex. 
                </p>
            </article>
            <article data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000" >
                <Image src={rayonex}  alt="Beatrice Fabry, naturopathe, bioresonance, rayonex" layout='responsive' sizes='100vw' placeholder='blur'/>
                <p>
                    <br /><br />
                    Exemples de nombreuses applications du Rayonex : recherche des allergies alimentaires, métaux lourds, recherche des carences en oligo-éléments et vitamines, rééquilibrage et ré-harmonisation  des déséquilibres trouvés. Soulagement des douleurs tendineuses, arthrosiques..
                    <br /><br />
                    Une étude allemande récente (2019), en double aveugle sur 54 patients (17 hommes, 37 femmes de 27 à 84 ans), présentant des douleurs du rachis cervicale a montré une amélioration significative des symptômes douloureux sans aucun effet indésirable, après 12 séances de rayonex. 
                </p>
            </article>
        </section>
    )
}
