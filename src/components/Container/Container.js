import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";



export default function Container(props) {
    return (
        <>
            <Navigation/>
            {props.children}
            <Footer/>
        </>
    )
}