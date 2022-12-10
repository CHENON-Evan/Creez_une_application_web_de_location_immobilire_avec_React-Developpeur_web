import Header from "../Header";
import Footer from "../Footer";
import Dropdown from "../dropdown/Dropdown";
import coverAbout from "../../assets/about.png"
import '../../styles/About.css'

const About = () => {
    const reliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    return (
        <>
            <Header/>
            <div className="title__image">
            <img src={coverAbout} alt="cover__about" className="coverAbout"/>
            </div>
            <div className="body__about">
                <Dropdown title="Fiabilité" item={reliability} sizeClass="large" />
                <Dropdown title="Respect" item={respect} sizeClass="large" />
                <Dropdown title="Service" item={service} sizeClass="large" />
                <Dropdown title="Sécurité" item={security} sizeClass="large" />
            </div>
            <Footer />
        </>
    )
}

export default About;