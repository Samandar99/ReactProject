import React from 'react';
import '../style/Work.css';
import { posts } from '../shared/prjocetData';
import { BlogCard } from '../components/BlogContent/BlogCard';





export const Work = () => {



    const blogPosts = posts.map((item) => {
        return (

            <BlogCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}

            />
        )
    })


    return (
        <div className='wrappers' id='Page'>
            <div className='thing'>
                <div className='con'>
                    <p className='work-text'>Learn More Online</p>
                    <p className='wors'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit. </p>
                </div>
                <div className='informations'>
                    {blogPosts}

                </div>


            </div>





        </div>
    );
};

export default Work;