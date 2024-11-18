import './BlogCard.css'

// article
//  img
//  

function BlogCard({ title, image, desc, onHover, onLeave }) {
    return (
        <article className='blog-card-container' onMouseEnter={onHover} onMouseLeave={onLeave}>
            <img src={image} alt={title} className='blog-image' />
            <h3 className='blog-title'>{title}</h3>
            <p className='blog-description'>{desc}</p>
        </article>
    );
}

export default BlogCard