import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'
const Rooms = () => {
    return (
        <Hero hero='roomsHero'>
            <Banner title='Our Room'>
                <Link to='/' className='btn btn-primary'>
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Rooms
