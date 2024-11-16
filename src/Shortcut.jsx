import profilePic from './assets/LeeHeadshot.jpg'
import './Shortcut.css'

function Shortcut() {
    return (
        <button>
            <img src={profilePic} alt="" />
            <p>vs code</p>
        </button>
    );
}

export default Shortcut