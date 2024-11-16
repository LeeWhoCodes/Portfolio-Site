import phDay from './assets/phDay.jpg';
import phNight from './assets/phNight.jpg';
import phHouse from './assets/phHouse.jpg';

import React, { useState } from 'react';
import Card from './Card';
import './Window.css'

function Window() {
    const [description, setDescription] = useState('Hello');

    const projects = [
        {
            id: 1,
            title: 'Portfolio Webstie',
            image: phDay,
            description: 'this here website a personal portfolio project',
        },
        {
            id: 2,
            title: 'Budgeting Webapp',
            image: phHouse,
            description: 'A web app I created to help players of the game warframe find out where to get items so they can get back to playing',
        },
        {
            id: 3,
            title: 'Warframe Webapp',
            image: phNight,
            description: 'this here website a personal portfolio project',
        },
    ];

    return (
        <section className='window'>
            <div className='card-container'>
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        onHover={() => setDescription(project.description)}
                        onLeave={() => setDescription('')}
                    />
                ))}
            </div>
            {/* <div className='terminal'>
                <p>{description}</p>
            </div> */}
        </section>
    );
}

export default Window