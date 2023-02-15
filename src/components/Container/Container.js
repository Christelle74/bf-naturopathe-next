import Footer from "../Footer/Footer";
import Header from "../Header/Header";



export default function Container(props) {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}