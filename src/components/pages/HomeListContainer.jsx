import './Home.css';
import { Link } from 'react-router-dom';

export default function HomeListContainer({ page, image, pageName1, pageName2, alt}) {

    const scrollToTop = () => {
        console.log('Clicked link, scrolling to top');
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

    return (
        <div className="list-box">
            <Link to={page} onClick={scrollToTop}>
            <img src={image} className="home-list-img" alt={alt}/>
            </Link>
            <div>{pageName1}<br/>{pageName2}</div>
         </div>
    )
}