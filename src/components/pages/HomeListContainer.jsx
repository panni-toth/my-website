import './Home.css';
import { Link } from 'react-router-dom';

export default function HomeListContainer({ page, image, pageName, alt}) {
    return (
        <div className="list-box">
            <Link to={page}>
            <img src={image} className="home-list-img" alt={alt}/>
            </Link>
            <div>{pageName}</div>
         </div>
    )
}