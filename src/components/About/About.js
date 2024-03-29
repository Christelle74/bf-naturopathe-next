import Image from "next/image"
import img1 from '../../../public/assets/Doux hiver.webp'



export default function About() {
    return (
        <section id="Mon Parcours" className="about">
            
            <article data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000">
                <h2>Mon Parcours</h2>
                
                    <p>
                        Très jeune, j’ai été sensibilisée aux médecines alternatives et je sentais que l’alimentation tenait un grand rôle dans notre forme physique.
                        <br />
                        Maman d’un petit garçon en 2002, atteint d’un grave eczéma et ne voulant pas le soigner avec des antibiotiques ou de la cortisone, j’ai compris qu’il n’y avait qu’en me formant aux médecines douces que je pourrais soigner naturellement mon fils.
                        <br /><br />
                        Ce que j’ai donc fait par un premier diplôme en naturopathie, dispensé par le CENA®, en 2005 (Centre Européen de Naturopathie Appliquée).
                        <br /><br />
                        J'ai ensuite suivi les cours d'homéopathie du Dr Roland Sananès pendant 2 ans au Collège Français des Sciences Humaines de Paris, puis une formation en nutrithérapie à l’IEPP.
                        <br /><br />
                        Je continue à me former régulièrement sur les dernières recherches en MAC (médecines alternatives et complémentaires). 
                        Aujourd’hui, je suis heureuse d’avoir un grand garçon qui n’aura pas vu une once de cortisone ni d’antibiotique et qui n’a plus aucune sequelle ni récidive  !
                    </p>    
                        
            </article>
            <article data-aos='flip-left'data-aos-easing="linear" data-aos-duration="1000">
                <Image  src={img1}  alt="Beatrice Fabry, naturopathe, physionutritionniste, bioresonance, massage Amma" sizes='100vw' placeholder='blur'/>
                
                <ul>
                    <li>Diplômée en nathuropathie (CENA - Robert Masson - 2005)</li>
                    <li>Diplômée en Physionutrition (IEPP 2017)</li>
                    <li>Certificat de Thérapeute en biorésonance (certification allemande 2018)</li>
                    <li>Diplômée en Massage AMMA sur chaise (shiatsu sur chaise ) (Ecole AZENDAY - Toulouse 2019)</li>
                    <li>Diplômée en massage assis, massage pour personnes âgées et massage relaxant à l'huile (Ecole Azenday - Toulouse 2019) </li>
                </ul>
                
            </article>
            
        </section>
    )
}
