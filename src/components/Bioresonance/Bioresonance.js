import Image from "next/image"
import img1 from '../../../public/assets/Doux hiver.jpg'

export default function Bioresonance() {
    return (
        <section id="Biorésonance">
            
            <div data-aos='flip-right'data-aos-easing="linear" data-aos-duration="1000">
                <h2>Biorésonance</h2>
                <p>L'acquisition du Rayonex , outil de biorésonance dans ma pratique de naturopathe apporte un vrai soulagement dès la première consultation , cet appareil qui envoie  des basses fréquences soulage, détend , apporte un bien-être incomparable immédiat.  

Cette thérapie  peut bénéficier à tous,  enfants à partir de 3 ans personnes âgées.
La seule contrainte est pour les porteurs de pace-maker qui ne peuvent recevoir d'ondes.</p>
            </div>
            <div data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000">
                <Image  src={img1} width={1500} height={1500} layout="responsive" alt="Beatrice Fabry, naturopathe" />
            </div>
        </section>
    )
}
