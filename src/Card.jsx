import './Card.css'

// article
//  img
//  

function Card({ title, image, onHover, onLeave }) {
    return (
        <article onMouseEnter={onHover} onMouseLeave={onLeave}>
            <img src={image} alt={title} className='project-image' />
            <h3 className='project-title'>{title}</h3>
        </article>
    );
}

export default Card