import Container from '@/components/Container/Container'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    
    useEffect(()=>{
      Aos.init();
    }, [])

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
}
