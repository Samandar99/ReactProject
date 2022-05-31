import React from 'react';
import '../style/Forma.css'

const Forma = () => {
    return (
        <div id='Forma' className='containerForma'>
            <div className='containerForma-Child'>
                <div className='childForm'>
                    <p className='say-text'>What Our Students Say</p>
                    <p className='about-say'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet.</p>


                    <div className='footerChildes'>

                        <input placeholder='Enter your email' className='fow' type="text" />
                        <button type='button' className='ons'>Subscribe</button>


                    </div>


                </div>
            </div>

        </div>
    );
};

export default Forma;