import Header from '../Header';
import Footer from '../Footer';
import Carrousel from '../carrousel/Carrousel';
import Tag from '../Tag';
import Dropdown from '../dropdown/DropdownLocation';
import Avatar from '../Avatar';
import Rating from '../Rating';
import { useParams } from 'react-router-dom';
import { locationList } from '../../data/locationList';
import { useEffect, useState } from 'react';
import '../../styles/Location.css';

function Location() {
  let { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const findLocation = () => {
        let location = null;
        locationList.forEach((locationFromList) => {
            if (locationFromList.id === id) {
                location = locationFromList;
            }
        });
        return location;
    };

    // Find the current location
    const currentLocation = findLocation();
    setLocation(currentLocation);

}, [id]);

  if (!location) {
    return <></>;
  }

  return (
    <>
      <Header />
      <div className="body location">
        <Carrousel slides={location.pictures} />
        <div className="presentation">
          <div className="location__header">
            <div className="title__subtitle">
              <h1>{location.title}</h1>
              <span>{location.location}</span>
            </div>
            <div className="tags">
              {location.tags.map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </div>
          </div>
          <div className='location__subheader'>
            <div className="host">
              <Avatar
                name={location.host.name}
                picture={location.host.picture}
              />
            </div>
            <div className="stars">
              <Rating rating={location.rating} />
            </div>
          </div>
        </div>
        <div className="description__equipements">
          <div className='description'>
          <Dropdown title="Description" item={location.description} />
          </div>
          <div className='equipements'>
          <Dropdown title="Équipements" items={location.equipments} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Location;
