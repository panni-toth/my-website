import { Link } from "react-router-dom";
import './pages/Fashion.css';

export default function FashionReel({ src, alt, title, page }) {
    return (
        
            <div className="fashion-reel-image-wrapper">
                <Link to={page} onClick={scrollToTop}>
                <img src={src} alt={alt} className="fashion-reel-images"></img>
                </Link>
                <div>{title}</div>
            </div>
       
    )
}

const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // for smooth scroll (optional)
      });
    }