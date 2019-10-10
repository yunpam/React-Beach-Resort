import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <Hero hero='defaultHero'>
            <Banner title='Luxurious Rooms' subtitle='Deluxe Rooms Starting at $299'>
                <Link to='/rooms/' className='btn btn-primary'>Return To Rooms</Link>
            </Banner>
        </Hero>
    )
}

export default Home
