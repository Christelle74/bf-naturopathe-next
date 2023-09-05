import Head from 'next/head'
import Image from 'next/image'
import Photo from './../../public/assets/Béa_2014.webp'
import styles from '@/styles/Home.module.css'
import About from '@/components/About/About'
import Naturopathie from '@/components/Naturopathie/Naturopathie'
import Bioresonance from '@/components/Bioresonance/Bioresonance'
import Contact from '@/components/Contact/Contact'
import Massage from '@/components/Massage/Massage'
import Physionutrition from '@/components/Physionutrition/Physionutrition'
import Prices from '@/components/Prices/Prices'
import Testimonials from '@/components/Testimonials/Testimonials'
import UpButton from '@/components/UpButton/UpButton'


export default function Home() {
  return (
    <>
      <Head>
        <title>Beatrice Fabry, naturopathe, massage Amma, physionutritionniste, Thérapeute en biorésonance, Massages pour personnes âgées, Massages assis pour entreprises</title>
        <meta property="og:title" content="Beatrice Fabry, Perpignan, Montner, naturopathe, massage Amma, physionutritionniste, Thérapeute en biorésonance, Massages pour personnes âgées, Massages assis en entreprises" />
        
        <meta name="description" content="Beatrice Fabry, Perpignan, Montner, naturopathe, massage Amma, physionutritionniste, Thérapeute en biorésonance, Massages pour personnes âgées, Massages assis en entreprises, reçoit du lundi au samedi, de 8h à 19h, à Perpignan et Montner." key="desc" />
        <meta property="og:description" content="Beatrice Fabry, naturopathe, massage Amma, physionutritionniste, Thérapeute en biorésonance, Massages pour personnes âgées, Massages assis en entreprises, reçoit du lundi au samedi, de 8h à 19h, à Perpignan et Montner." key="desc" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
          <section id="Accueil">
              <article data-aos='flip-right' data-aos-easing="linear" data-aos-duration="1000" className='image'>
                  <Image src={Photo} alt="Beatrice Fabry, naturopathe"  sizes='100vw' placeholder='blur'/>
              </article>
              <article data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000" className={styles.presentation}>
                  <h1>Béatrice FABRY</h1>
                  <ul>
                    <li>Naturopathe</li>
                    <li>Thérapeute en biorésonance</li>
                    <li>Physionutritionniste diplômée IEPP</li>
                    <li>Massage Amma</li>
                    <li>Massages pour personnes âgées</li>
                    <li>Massages assis en entreprise</li>
                    
                  </ul>
                  
                  <a href = '#Contact' aria-label='contactez-moi'>Contactez-moi</a>
              </article>
          </section>
          <About/>
          <Naturopathie/>
          <Bioresonance/>
          <Physionutrition/>
          <Massage/>
          <Prices/>
          <Contact/>
          <Testimonials/>
          <UpButton/>      
      </main>
    </>
  )
}
