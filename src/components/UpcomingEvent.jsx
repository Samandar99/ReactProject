import React from 'react';
import '../style/UpcomingEvent.css'


import { posts2 } from '../shared/EventBlog';
import { EventCard } from '../components/BlogContent/EventCard'


export const UpcomingEvent = () => {



    const blogbosts3 = posts2.map((item) => {
        return (
            <EventCard
                key={item.id}
                title={item.title}
                img={item.img}

            />
        )


    })



    return (
        <div className='Total' id='Event'>
            <div className='header09'>
                <p className='event-text'>Upcoming Event</p>
                <p className='many-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum.</p>
            </div>




            <div className='ours2'>

                <div className='sectionss1'>
                    {blogbosts3}
                </div>

            </div>


        </div>
    );
};

export default UpcomingEvent;