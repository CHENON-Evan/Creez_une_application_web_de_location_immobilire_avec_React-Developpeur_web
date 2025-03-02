import { locationList } from '../data/locationList'
import '../styles/Gallery.css'
import Thumb from "./Thumb";
import {useState} from "react";

function Gallery() {
    const [locations] = useState(locationList);
    return (
        <ul className='gallery'>
            {locations.map((location, i) => (
                <Thumb key={i} location={location} />
            ))}
        </ul>
    );
}


export default Gallery;