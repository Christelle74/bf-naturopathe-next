import React, {useState} from 'react';
// import IconNext from '../../../public/assets/next-icon.svg';
// import IconPrev from '../../../public/assets/previous-icon.svg';
// import data from '../../../public/data.js';
// import Image from 'next/image.js';
import styles from './Testimonials.module.css'



export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleClickPrev = () => {
        if (index === 0) return setIndex(data.length - 1);
        setIndex(index - 1);
    }

    const handleClickNext = () => {
        if(index === data.length - 1) return setIndex(0);
        setIndex(index + 1);
    }

    return (
        <section id="Avis" >
            <div data-aos='flip-left' data-aos-easing="linear" data-aos-duration="1000" className={styles.testimonials}>
                <h2>Vos avis</h2>
                {/* <div className={styles.slider}>
                    <div className={styles.sliderImages}>
                        {/* <div className={styles.imageWrapper}>
                            <Image width={100} height={200} src={`/public/${data[index].picture}`} /> 
                        </div> 
                    </div>
                    <div className={styles.sliderButtons}>
                        <button onClick={() => handleClickPrev()}>
                            <IconPrev />
                        </button>
                        <button onClick={() => handleClickNext()}>
                            <IconNext />
                        </button> 
                    </div>
                </div>
                <div className={styles.testimonial}>
                     <p className={styles.testimonialContent}>
                        “ {`${data[index].testimonial}`} ”
                    </p>
                    <div className={styles.testimonialAuthor}>
                        <p className={styles.testimonialAuthorName}>{`${data[index].name}`}</p>
                        <p className={styles.testimonialAuthorJob}>{`${data[index].job}`}</p>
                    </div> 
                </div>  */}
            </div>
            
        </section>
    )
}
