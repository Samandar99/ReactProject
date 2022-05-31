import React from 'react';
import '../style/MeetOur.css';


import { OurMeetCard } from './BlogContent/OurMeetCard';
import { posts1 } from '../shared/OurMeetBlog';


export const MeetOur = () => {


    const blogPosts1 = posts1.map((item) => {
        return (
            <OurMeetCard
                key={item.id}
                name={item.name}
                jobs={item.jobs}
                foto={item.foto}


            />
        )
    })


    return (
        <div className='containers-fulls' id='Meet'>
            <div className='headerr'>
                <p className='meet'>Meet with Our Mentor</p>
                <p className='meet-About'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet, vestibulum euismod nullam elementum. Urna, posuere nisi
                    sit gravida massa.
                </p>
            </div>

            <div className='ours1'>

                <div className='sectionss'>
                    {blogPosts1}

                </div>

            </div>
        </div>
    );
};

export default MeetOur;