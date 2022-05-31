import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const OurMeetCard = (props) => {


    return (
        <div className='cols'>
            <img className='teacherd' src={props.foto} alt="" />
            <p className='tought'>{props.name}</p>
            <p className='seo'>{props.jobs}</p>
            <div className='boolean'>
                <div className='userd'></div>
                <p className='ks'>8.2k</p>
                <FontAwesomeIcon className='yellow' icon={faStar}> </FontAwesomeIcon>
                <p className='yellow1'>4.5</p>
                <p className='coursep'>25+ Courses</p>

            </div>
        </div>
    )


}