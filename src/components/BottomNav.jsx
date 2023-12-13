import { Link } from 'react-router-dom';
import './NavBar.css';

export default function BottomNav() {
    return (
            <nav>
            <ul id="bottom-nav">
                <Link to="/fashion">Fashion Design</Link>
                <Link to="/prints">Print Design</Link>
                <Link to="/web-design">Web Design</Link>
                <Link to="/front-end">Front End Development</Link>
                <Link to="/projects">Other Projects</Link>
                <Link to="/about">About</Link>
            </ul>
        </nav>
    )
}