import { Link } from 'react-router-dom';
import '../styles/Thumb.css';

const Thumb = ({ location }) => {
  return (
    <Link to={'/location/' + location.id}>
      <div className="thumb">
        <img className="thumb-cover" src={location.cover} alt="thumb cover" />
        <div className="filter"></div>
        <span className="thumb-name">{location.title}</span>
      </div>
    </Link>
  );
};

export default Thumb;
