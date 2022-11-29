import Gallery from '../Gallery';
import Header from '../Header';
import Footer from "../Footer";
import '../../styles/HomePage.css';
import '../../styles/mobile.css'

function HomePage() {
  return (
    <>
      <Header />
      <div className='body-home'>
        <div className="title">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <Gallery />
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
