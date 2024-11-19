import '/.BrowserLink.css'

function BrowserLink({ image, text }) {
    return (
        <div>
            <img src={image} />
            <p>{text}</p>
        </div>
    );
}