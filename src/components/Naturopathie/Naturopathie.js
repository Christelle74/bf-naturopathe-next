import Image from "next/image"
import img1 from '../../../public/assets/Doux hiver.webp'


export default function Naturopathie() {
    return (
        <section id="Naturopathie">
            <article data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000">
                <Image  src={img1}  alt="Beatrice Fabry, naturopathe" sizes='100vw' placeholder='blur'/>
            </article>
            <article data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000">
                <h2>Naturopathie</h2>
                <h3>Qu'est-ce que la naturopathie?</h3>
                <p>Un naturopathe, c’est un praticien de santé, un hygiéniste de vie. Quelqu’un qui considère le patient dans sa globalité psychique et physiologique.</p>    
            </article>
            
        </section>
    )
}
