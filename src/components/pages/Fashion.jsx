import './Fashion.css';
import InstinctsCover from '../../images/fashion/instincts/instincts1.jpg';
import FashionReel from "../FashionReel";
import KeserüCover from '../../images/fashion/keserü/keserü111.JPG';
import ShirtCover from '../../images/fashion/shirt/shirt1.jpg';
import OpArtCover from '../../images/fashion/op art/opart1.jpg';

function Fashion() {
    return (
        <>
            <div className="fashion-header">Fashion Design</div>

            <h1 id="my-projects">Projects</h1>
            <div className="fashion-reel">
                <FashionReel src={InstinctsCover} alt="Instincts link" title="INSTINCTS" page="/instincts" />
                <FashionReel src={KeserüCover} alt="Keserü link" title="KESERÜ" page="/keseru" />
                <FashionReel src={ShirtCover} alt="Shirt link" title="SHIRT" page="/shirt" />
                <FashionReel src={OpArtCover} alt="Op Art link" title="OP ART" page="/op-art" />
            </div>
        </>
        
)}

export default Fashion;