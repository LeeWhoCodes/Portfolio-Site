import mailIcon from './assets/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import GHIcon from './assets/github-mark-white.png'
import LIIcon from './assets/LI-In-Bug.png'

import BrowserLink from './BrowserLink'
import './BrowserWindow.css'

function BrowserWindow() {
    return (
        <section className='browser-window'>
            <div className='browser-top-bar'>
                <h2 className='browser-header'>Contact</h2>
            </div>
            <h2 className='browser-tab-bar'>Contact</h2>
            <nav className='link-container'>
                <BrowserLink image={mailIcon} text="leewhocodes@gmail.com" />
                <BrowserLink image={mailIcon} text="Linked in" />
                <BrowserLink image={mailIcon} text="Github" />
            </nav>
        </section>
    );
}

export default BrowserWindow