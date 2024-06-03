import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'


const Header = ()=> {
    

    return (
        <header className='header'>
            <section>
                <div className='banner'>
                   <h2>Littel Lemon</h2>
                   <h3>Chicago</h3>
                   <p>we are a family owned Mediterranean restaurant,focused on traditional recipes served with amodern twist.</p>
                   

                   <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                    
                </div>

                <div className='banner-img'>
                    <img src= {bannerImg} alt='' />
                </div>
            </section>





        </header>
    );
};

export default Header;