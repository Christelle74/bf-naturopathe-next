import styles from './Contact.module.css'

export default function Contact() {
    return (
        <section id="Contact" className={styles.contact}>

            <article data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000">
                <h2>Contactez-moi</h2>
                <p> Béatrice Fabry</p>
                <p> 7 rue de Cerdagne</p>
                <p>   66000 PERPIGNAN</p>

                <br />
                <br />

                <p> Téléphone :</p>
                <p><a href="tel:0614330348">06 14 33 03 48</a></p>

                <br />
                <br />

                <p>Mail :</p>
                <p><a href="mailto:fabry.beatrice@orange.fr">fabry.beatrice@orange.fr</a></p>
            </article>
            <article data-aos='zoom-in' data-aos-easing="linear" data-aos-duration="1000" className={styles.map}>
                <iframe  title="map beatrice fabry" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.4915332054497!2d2.8825158512702287!3d42.69331192188057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e471d425977%3A0x1b048975a2196ad8!2s7%20Rue%20de%20Cerdagne%2C%2066000%20Perpignan!5e0!3m2!1sfr!2sfr!4v1676391965304!5m2!1sfr!2sfr" width="350" height="450" style={{border:0, borderRadius:10}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </article>
            <article data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000">
                <h2>Horaires</h2>
                <br />
                <p>Sur rendez-vous :</p>
                <br />
                <p>Du lundi au samedi</p>
                
                <p>De 8h à 19h</p>
                <br /><br />
                <h2>Autres infos</h2>
                <p>Consultations possibles sur Montner</p>
                <p>English spoken</p>
            </article>
            
        </section>
    )
}
