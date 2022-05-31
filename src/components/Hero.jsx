import React from 'react';
import '../style/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/fontawesome-free-brands'

const Hero = () => {
   return (

      <div>
         <div className='contant2' id='Hero'>
            <div className='box'>
               <div className='words'>
                  <p className='text'>Self-Paced Learning Courses Online</p>

                  <div className='words1'>
                     <p className='dolor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.</p>
                  </div>

                  <div className='here'>
                     <button className='click'>Start a coures</button>
                  </div>
               </div>


               <div className='title'>
                  <div className='itema'>
                     <div className='iconses'>
                        <div className='drow'></div>
                        <div className='drow1'></div>
                     </div>
                     <div className='numbers'>
                        <p className='kis'>1400+</p>
                        <p className='kis1'>Online Courses</p>

                     </div>

                  </div>
                  <div className='itema'>
                     <div className='iconses1'>

                        <FontAwesomeIcon className='es' icon="fa-brands fa-youtube" />
                     </div>
                     <div className='numbers'>
                        <p className='kis'>1400+</p>
                        <p className='kis1'>Online Courses</p>

                     </div>
                  </div>
                  <div className='itema'>
                     <div className='iconses2'>

                     </div>
                     <div className='numbers'>
                        <p className='kis'>1400+</p>
                        <p className='kis1'>Online Courses</p>

                     </div>
                  </div>
               </div>


            </div>
         </div>

      </div>


   );
};

export default Hero;