import React from 'react';
import '../style/OurLatestBlog.css'
import { posts3 } from '../shared/OurLastBlog';
import { OurLastCard } from '../components/BlogContent/OurLastCard'

export const OurLatestBlog = () => {



    const blogbost4 = posts3.map((item) => {
        return (

            <OurLastCard
                key={item.id}
                title={item.title}
                text={item.text}
                img={item.img}

            />

        )


    })



    return (
        <div className='OurBlog' id='Blog'>
            <div className='header11'>
                <p className='event-text3'>Our Latest Blog</p>
                <p className='many-words3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum.</p>
            </div>



            <div className='ours2'>

                <div className='sectionss2'>

                    {blogbost4}


                </div>

            </div>

            <div className='footer19'>
                <button className='adds'>View All</button>
            </div>


        </div>
    );
};

export default OurLatestBlog;