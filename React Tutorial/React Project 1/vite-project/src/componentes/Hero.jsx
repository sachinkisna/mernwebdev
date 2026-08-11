import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
function Hero() {
    return (
        <div className="hero">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />            
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image1} alt="" />

        </div>
    )
}

export default Hero;