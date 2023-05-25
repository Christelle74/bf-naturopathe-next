import Image from "next/image"
import img1 from '../../../public/assets/20a516517a0dce1493c94fb53554b8fc.webp'


export default function Physionutrition() {
    return (
        <section id="Physionutrition">
            
            <article data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000">
                <h2>Physionutrition</h2>
                <p>
                La physionutrition est une démarche de soins qui englobe l’étude clinique physiologique et biologique, ainsi que la prise en charge des déséquilibres et des déficiences en macro et micronutriments, leurs synergies et leurs antagonismes d’action. 
                    <br /><br />
                    Plus spécifiquement, elle étudie le rôle des acides gras essentiels, des vitamines, des oligo-éléments, des acides aminées, des probiotiques et des neuromédiateurs, ainsi que les phénomènes biochimiques et cliniques liés au stress oxydatif, à l’exercice physique, à l’équilibre de la flore intestinale et à l’immunologie. 
                    <br /><br />
                    
                </p>
                <Image  src={img1}  alt="Beatrice Fabry, naturopathe" sizes='100vw' placeholder='blur'/>
            </article>
            <article data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000">
                
                <p>
                    Elle permet de moduler l’expression des gênes par la nutrition. 
                    Elle me permet de vous accompagner dans la prise en charge de nombreuses pathologies. 
                    <br /><br />
                    Entre 1995 et 2002, une étude appelée SUVIMAX avait pour objectif de décrire les apports en nutriments de l’alimentation sur 18 000 personnes, toute tranche d’âge confondue, dans différentes régions, pendant 8 ans. 
                    <br /><br />
                    L’analyse des apports en macronutriments a montré une diminution des apports énergétiques totaux, une augmentation des glucides totaux et une diminution des lipides. 
                    <br /><br />
                    Cette analyse a montré que 70 %  de la population avait des apports nutritionnels inférieurs à 2/3 des apports recommandés. 
                    <br /><br />
                    Ces personnes avaient pourtant une alimentation plutôt équilibrée. 
                    La pauvreté naturelle des sols, leur lessivage, le raffinage des céréales, les pesticides, la pasteurisation, la stérilisation, la ionisation, les cuissons haute température, la conservation et les traitements, font que les aliments ont une faible densité nutritionnelle.
                    <br /><br />
                    Une alimentation diversifiée ne suffit donc plus à couvrir les besoins micronutritionnels. La micro nutrition devient dès lors indispensable ! 
                </p>
            </article>
            
        </section>
    )
}
