import Gallery from '../Gallery';
import Header from '../Header';
import BannerHome from "../../assets/nature.png"
import Banner from "../../components/Banner"
import Footer from "../Footer";
import '../../styles/HomePage.css';

function HomePage() {
  return (
    <>
      <Header />
      <div className='body-home'>
        <div className="home__title">
        <Banner
          imgSrc={BannerHome}
          altTxt="paysage terre et mer"
          title="Chez vous, partout et ailleurs"
        />
        </div>
        <Gallery />
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
