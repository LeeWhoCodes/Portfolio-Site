import profilePic from './assets/LeeHeadshot.jpg'
import './Hero.css'
import Shortcut from './Shortcut.jsx'

function Hero() {
    return (
        <>
            <img src={profilePic} alt="" className="profilePic" />
            <h1 className='name'>
                <span className='lee'>Lee</span><span className='who'>Who</span><span className='codes'>Codes</span>
            </h1>
            <nav>
                <Shortcut />
                <Shortcut />
                <Shortcut />
            </nav>
        </>
    );
}

export default Hero