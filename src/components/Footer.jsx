import React from 'react';
import '../style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/fontawesome-free-brands';

import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faLinkedinIn } from '@fortawesome/fontawesome-free-brands';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const objectText = [
    {
        id: 1,
        link: 'About Us',
    },
    {
        id: 2,
        link: 'Graduation',
    },
    {
        id: 3,
        link: 'Scholarship',
    },
    {
        id: 4,
        link: 'Admissions',
    },
    {
        id: 5,
        link: 'International',
    },
    {
        id: 6,
        link: 'Events',
    },
]
const Text_Support = [
    {
        id: 7,
        link: 'Language',
    },
    {
        id: 8,
        link: 'WordPress',
    },
    {
        id: 9,
        link: 'Privacy',
    },
    {
        id: 10,
        link: 'FAQs',
    },
    {
        id: 11,
        link: 'Support',
    },

]






const footer = () => {
    return (
        <div className='Container-footer' id='footer'>
            <div className='ChildFooter'>
                <div className='children-box'>
                    <p className='titleText'>Education</p>
                    <p className='aboutSite'>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam the elementum. Urna, posuere nisi sit gravid.</p>
                    <p className='folows'>Follow Us</p>

                    <div className='icon-brands'>
                        <div className='icon-back'>
                            <FontAwesomeIcon className='facebook' icon={faFacebookF} />
                        </div>

                        <div className='icon-back'>
                            <FontAwesomeIcon className='facebook' icon={faTwitter} />
                        </div>

                        <div className='icon-back'>
                            <FontAwesomeIcon className='facebook' icon={faInstagram} />
                        </div>
                        <div className='icon-back'>
                            <FontAwesomeIcon className='facebook' icon={faLinkedinIn} />
                        </div>


                    </div>






                </div>

                <div className='links-box'>
                    <p className='links-text'>Feature Links</p>

                    <ul className='links-text1'>
                        {objectText.map(userd => (
                            <li key={userd.id} className='linkword' >
                                <a href="#">
                                    <FontAwesomeIcon className='facebookw' icon={faAngleRight} />
                                    <a href="#" className='the'>{userd.link}</a>
                                </a>

                            </li>
                        ))}






                    </ul>




                </div>

                <div className='links-box-03'>
                    <p className='links-text'>Support</p>

                    <ul className='links-text1'>
                        {Text_Support.map(title => (


                            <li  key={title.id} className='linkword'>
                                <a href="#">
                                    <FontAwesomeIcon className='facebookw' icon={faAngleRight} />
                                    <a href="#" className='the'>{title.link}</a>
                                </a>

                            </li>
                        ))}

                    </ul>




                </div>


                <div className='ContactPlace'>
                    <p className='ContactTexts'>Contact Us</p>
                    <p className='location-text'>230,Mirpur Area, Mirpur 10, Dhaka,Bangladesh</p>

                    <div className='numberOne'>
                        <FontAwesomeIcon className='facebookw1' icon={faPhone} />
                        <p className='uros'>+017 4845 7269</p>

                    </div>
                    <div className='numberOne'>
                        <FontAwesomeIcon className='facebookw1' icon={faEnvelope} />
                        <p className='uros'>info@gmail.com</p>

                    </div>

                    <div className='numberOne'>
                        <FontAwesomeIcon className='facebookw1' icon={faGlobe} />
                        <p className='uros'>info@gmail.com</p>

                    </div>



                </div>


            </div>
        </div>
    );
};

export default footer;