import React from 'react';
import '../style/Courses.css';

const Courses = () => {
    return (
        <div className='block' id='Courses'>
            <div className='wrap'>
                <div className='box-left'>
                    <p className='texts'>Find Your Course That Makes Bright Future</p>
                    <p className='texts1'>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.
                        malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut
                        dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi,
                    </p>
                    <p className='texts2'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.
                    </p>
                    <button className='buttonName'> Learn More</button>
                </div>
                <div className='box-right'>
                    <div className='icons'>
                        <div className='hert'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;