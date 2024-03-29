import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function ErrorPage() {
    return (
        <Hero>
            <Banner title='404' subtitle='Page Not Found' >
                <Link to='/' className='btn btn-primary'>Return Home</Link>
            </Banner>
        </Hero>
    )
}
