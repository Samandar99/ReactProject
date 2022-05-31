
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';




export const EventCard = (props) => {

    return (
        <div  className='cols2'>

            <img className='foto44' src={props.img} alt="" />
            <p className='colleg'>{props.title}</p>

            <div className='timet'>
                <FontAwesomeIcon className='yellowo' icon={faClockFour}> </FontAwesomeIcon>
                <p className='pm'>4.00 pm - 8.00 pm</p>
                <FontAwesomeIcon className='yellowo1' icon={faLocationDot}></FontAwesomeIcon>
                <p className='pm1'>Dhaka Bangladesh</p>
            </div>

        </div>
    )



}