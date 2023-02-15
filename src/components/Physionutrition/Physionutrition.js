import Image from "next/image"
import img1 from '../../../public/assets/Doux hiver.jpg'


export default function Physionutrition() {
    return (
        <section id="Physionutrition">
            
            <div data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000">
                <Image  src={img1} width={1500} height={1500} layout="responsive" alt="Beatrice Fabry, naturopathe" />
            </div>
            <div data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000">
                <h2>Physionutrition</h2>
                <p>C'est quoi ?</p>
            </div>
            
        </section>
    )
}
