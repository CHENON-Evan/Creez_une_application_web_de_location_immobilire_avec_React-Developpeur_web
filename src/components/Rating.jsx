import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasCoffee} from '@fortawesome/free-solid-svg-icons'
import { faStar as farCoffee} from '@fortawesome/free-regular-svg-icons'
import '../styles/Rating.css'

const Rating = (props) => {
    const displayStars = () => {
        let stars = [];
        for (let $i = 1; $i <= 5; $i++) {
            if (props.rating >= $i) {
                stars.push(<FontAwesomeIcon key={$i} icon={fasCoffee} />);
            } else {
                stars.push(<FontAwesomeIcon key={$i} icon={farCoffee} />);
            }
        }
        return stars;
    }
    return (
        <div className="rating">
            {displayStars()}
        </div>
    )
}

export default Rating;