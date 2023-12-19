import './Home.css';
import { Link } from 'react-router-dom';
import HomeListContainer from './HomeListContainer';
import FashionLink from '../../images/homeMenu1.JPG'
import OtherLink from '../../images/homeMenu5.jpg';
import '../Button.css';
import PrintsLink from '../../images/homeMenu2.JPG';
import FrontEndLink from '../../images/homeMenu4.JPG';

export default function Home() {

    const scrollToTop = () => {
        console.log('Clicked link, scrolling to top');
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      }

    return (
        <>
            <div className="hero-container">
                <div>Welcome to <br></br>my portfolio!</div>
                <Link to="/about" onClick={scrollToTop}>
                    <button className="transparent-button">Find out more about me</button>
                </Link>
             </div>

            <h1 id="whatIDo">What I do</h1>
             <div className="list-boxes-container"> 
                <HomeListContainer page="/fashion" image={FashionLink} pageName1="Fashion" pageName2="Design" alt="Fashion Link"/>
                <HomeListContainer page="/prints" image={PrintsLink} pageName1="Print" pageName2="Design" alt="Print Design Link" />
                <HomeListContainer page="/web-design" image="image3" pageName1="Web" pageName2="Design" alt="Web Design Link" />
                <HomeListContainer page="/front-end" image={FrontEndLink} pageName1="Front End Development" pageName2="" alt="Front End Development Link" />
                <HomeListContainer page="/projects" image={OtherLink} pageName1="Other" pageName2="Projects" alt="Other Projects Link" />
             </div>
            
        </>
       
    )
}