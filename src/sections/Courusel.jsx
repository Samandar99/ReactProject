import React from 'react';
import '../style/Courusel.css'
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

import foto33 from '../imagesections/Jony1.png';
import foto34 from '../imagesections/Mukter2.png';
import foto35 from '../imagesections/JonySing3png.png';

const data = [
    {
        id: 1,
        username: 'Jony Ahmed',
        testimonial: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
        jobs: 'UI/UX Student',
        foto: foto33,

    },

    {
        id: 2,
        username: 'Dennis',
        testimonial: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
        jobs: 'Mukter Hossain',
        foto: foto35,

    },

    {
        id: 3,
        username: 'John',
        testimonial: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
        jobs: 'UI/UX Student',
        foto: foto35,

    },

    {
        id: 4,
        username: 'Jovo',
        testimonial: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
        foto: foto33,
        jobs: 'PHP programming',
    },

    {
        id: 5,
        username: 'Azamat',
        testimonial: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
        jobs: 'languages Javascript',
        foto: foto35,
    },

    {
        id: 6,
        username: 'Usmon',
        testimonial: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.',
        jobs: 'languages Python',
        foto: foto34,
    },





]




const Courusel = (props) => {
    return (
        <div className='Can'>
            <div className='Can__header'>
                <p className='sayword'>What Our Students Say</p>
                <p className='sayStudent'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non
                    dictumst in leo. Lorem ipsum dolor sit amet.
                </p>
            </div>


            <div className='container1'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map(user => (
                        <SwiperSlide key={user.id}>
                            <div className='cons89'>
                                <div className='user-image'>
                                    <p className='aboutwordss'> {user.testimonial}</p>
                                    <div className='Jong'>
                                        <img className='JonyFoto' key={user.id} src={user.foto} alt="" />
                                        <div className='left'>
                                            <p className='Ahmadtext'>{user.username}</p>
                                            <p className='AhmadJob'>{user.jobs}</p>
                                        </div>



                                    </div>


                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>




        </div>
    );
};

export default Courusel;