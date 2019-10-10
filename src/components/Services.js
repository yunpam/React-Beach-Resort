import React, { Component } from 'react'
import { FaHiking, FaBeer, FaShuttleVan, FaCocktail } from 'react-icons/fa'

import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free Cocktail',
                info: 'Lorem ipsum venerbache defenere monviciu terdredij'
            },
            {
                icon: <FaHiking />,
                title: 'Hiking',
                info: 'Lorem ipsum venerbache defenere monviciu terdredij'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Lorem ipsum venerbache defenere monviciu terdredij'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Lorem ipsum venerbache defenere monviciu terdredij'
            },
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                    {
                        this.state.services.map((item, index) => {
                            return (
                                <article key={index} className='service'>
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })
                    }
                </div>
            </section>

        )
    }
}
