import Header from "../Header";
import Footer from "../Footer"
import Carrousel from "../carrousel/Carrousel";
import Tag from "../Tag";
import Dropdown from "../dropdown/DropdownLocation";
import Rating from "../Rating";
import {useParams} from "react-router-dom";
import { locationList } from '../../data/locationList'
import {useEffect, useState} from "react";
import '../../styles/Location.css'

function Location() {
    let { id } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        locationList.forEach((locationFromList) => {
            if (locationFromList.id === id) {
                setLocation(locationFromList);
                return false;
            }
        });
    }, [id]);

    if (!location) {
        return <></>;
    }

    return (
        <>
            <Header/>
                <div className="body location">
                    <Carrousel slides={location.pictures} />
                    <div cl>
                        <div className="title">
                            <h1>{location.title}</h1>
                        <div className="subtitle"><span>{location.location}</span></div>
                        </div>
                        <div className="tags">
                            {location.tags.map((tag, i) => <Tag key={i} tag={tag}/>)}
                        </div>
                        <div className="host">
                        <div className="host__name"><span>{location.host.name}</span></div>
                        <div className="host__picture"><img src={location.host.picture} alt="host"/></div>
                    </div>
                </div>
                <Rating rating={location.rating}/>
                <div className="description__equipements">
                <Dropdown title="Description" item={location.description}  />
                <Dropdown title="Équipements" items={location.equipments}  />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Location;