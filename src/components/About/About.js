import Image from "next/image"
import img1 from '../../../public/assets/Doux hiver.jpg'


export default function About() {
    return (
        <section id="A propos de moi">
            
            <div data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000">
                <h2>A propos de moi</h2>
                <p>Naturopathe, diplômée du CENA® , en 2005 (Centre Européen de Naturopathie Appliquée).
J'ai ensuite suivi les cours d'homéopathie du Dr Roland Sananès pendant 2 ans au Collège Français des Sciences Humaines de Paris et je continue à me former régulièrement sur les dernières recherches en MAC (médecines alternatives et complémentaires).</p>
            </div>
            <div data-aos='flip-left'data-aos-easing="linear" data-aos-duration="1000">
                <Image  src={img1} width={1500} height={1500} layout="responsive" alt="Beatrice Fabry, naturopathe" />
            </div>
            
        </section>
    )
}
