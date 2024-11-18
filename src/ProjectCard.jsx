import './ProjectCard.css'

// article
//  img
//  

function ProjectCard({ title, image, onHover, onLeave }) {
    return (
        <article className='project-card-container' onMouseEnter={onHover} onMouseLeave={onLeave}>
            <img src={image} alt={title} className='project-image' />
            <h3 className='project-title'>{title}</h3>
        </article>
    );
}

export default ProjectCard