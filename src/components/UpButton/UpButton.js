import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styles from './UpButton.module.css'


export default function UpButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    
    if (typeof window !== "undefined"){
    window.addEventListener('scroll', toggleVisible);
    }
    return (
        <button aria-label='remonter en haut du site Béatrice Fabry' className={styles.upButton}>
            <FaArrowCircleUp onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
        </button>
    );
}
