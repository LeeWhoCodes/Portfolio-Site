import phDay from './assets/phDay.jpg';
import phNight from './assets/phNight.jpg';
import phHouse from './assets/phHouse.jpg';

import React, { useState } from 'react';
import BlogCard from './BlogCard';
import './WordWindow.css'

function WordWindow() {
    const [description, setDescription] = useState('Hello');

    const projects = [
        {
            id: 1,
            title: 'blog 1',
            image: phDay,
            description: 'blog number 1',
        },
        {
            id: 2,
            title: 'blog 2',
            image: phHouse,
            description: 'blog number 2',
        },
        {
            id: 3,
            title: 'blog 3',
            image: phNight,
            description: 'blog number 3',
        },
    ];

    return (
        <section className='word-window'>
            <h2 className='word-header'>Projects</h2>
            <div className='card-container'>
                {projects.map((project) => (
                    <BlogCard
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        desc={project.description}
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

export default WordWindow