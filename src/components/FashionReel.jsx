import './pages/Fashion.css';

export default function FashionReel({ src, alt, title }) {
    return (
        <div>
        <img src={src} alt={alt} className="fashion-reel-images"></img>
        <div>{title}</div>
    </div>
    )
}