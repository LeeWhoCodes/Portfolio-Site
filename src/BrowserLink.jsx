import './BrowserLink.css'

function BrowserLink({ image, text }) {
    return (
        <div>
            <img className='browser-images' src={image} />
            <p className='contact-text'>{text}</p>
        </div>
    );
}

export default BrowserLink