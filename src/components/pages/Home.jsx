import './Home.css';
import { Link } from 'react-router-dom';
import HomeListContainer from './HomeListContainer';
import FashionLink from '../../images/homeMenu1.JPG'
import OtherLink from '../../images/homeMenu5.jpg';
import '../Button.css';
import PrintsLink from '../../images/homeMenu2.JPG';
import FrontEndLink from '../../images/homeMenu4.JPG';

export default function Home() {
    return (
        <>
            <div className="hero-container">
                <div>Welcome to <br></br>my portfolio!</div>
                <Link to="/about">
                    <button className="transparent-button">Find out more about me</button>
                </Link>
             </div>

            <h1 id="whatIDo">What I do</h1>
             <div className="list-boxes-container"> 
                <HomeListContainer page="/fashion" image={FashionLink} pageName="Fashion Design" alt="Fashion Link"/>
                <HomeListContainer page="/prints" image={PrintsLink} pageName="Print Design" alt="Print Design Link" />
                <HomeListContainer page="/web-design" image="image3" pageName="Web Design" alt="Web Design Link" />
                <HomeListContainer page="/front-end" image={FrontEndLink} pageName="Front End Development" alt="Front End Development Link" />
                <HomeListContainer page="/projects" image={OtherLink} pageName="Other Projects" alt="Other Projects Link" />
             </div>
            
        </>
       
    )
}