import React, { useState } from 'react';
// import { links } from '../shared/dataNavbar';
import '../style/navbar.css';

import { Anchor } from 'antd';

const { Link } = Anchor;

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");

        } else setIcon("nav__toggler");
    }



    return (
        <nav className='nav'>
            <a href="#" className='nav__brand'>
                Education
            </a>
            <ul id='sod' className={active}>
                <Anchor targetOffset="65" className='nav__item'>
                    <Link href="#Hero" className='nav__link' title="Home" />
                </Anchor>

                <Anchor targetOffset="5" className='nav__item'>
                    <Link href="#Courses" className='nav__link' title="Courses"/>
                </Anchor>
                <Anchor targetOffset="5" className='nav__item'>
                    <Link href="#Page" className='nav__link' title="Page" />
                </Anchor>
                <Anchor targetOffset="5" className='nav__item'>
                    <Link href="#Cours" className='nav__link' title="Blog" />
                </Anchor>
                <Anchor targetOffset="5" className='nav__item'>
                    <Link href="#Event" className='nav__link' title="Contact" />
                </Anchor>




                <div className='avto'>
                    <Anchor targetOffset="215" className=''>
                        <Link href="#Forma" className='btn1' title="Singin" />

                    </Anchor>


                    <button className='btn2'>Sing Up</button>

                </div>
            </ul>



            <div onClick={navToggle} className={icon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    );
};

export default Navbar;