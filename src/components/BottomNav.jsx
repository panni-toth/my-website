import { Link } from 'react-router-dom';
import './NavBar.css';

export default function BottomNav() {
    return (
            <nav>
            <ul >
                <Link className="bottom-nav" to="/fashion">Fashion Design</Link>
                <Link className="bottom-nav" to="/prints">Print Design</Link>
                <Link className="bottom-nav" to="/web-design">Web Design</Link>
                <Link className="bottom-nav" to="/front-end">Front End Development</Link>
                <Link className="bottom-nav" to="/projects">Other Projects</Link>
                <Link className="bottom-nav" to="/about">About</Link>
            </ul>
        </nav>
    )
}