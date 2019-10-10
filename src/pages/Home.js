import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            <Hero hero='defaultHero'>
                <Banner title='Luxurious Rooms' subtitle='Deluxe Rooms Starting at $299'>
                    <Link to='/rooms/' className='btn btn-primary'>Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
        </>
    )
}

export default Home
