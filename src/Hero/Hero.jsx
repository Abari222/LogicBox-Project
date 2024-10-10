import "./Hero.css";
import HeroImage from "../assets/HeroImage.png"


const Hero = () => {
  return (
    <div className="Hero-Container">
      {/* <div className="Hero-Pic">
      <img src={DeliveryPic} alt="delivery picture"/>
      </div> */}
       {/* <div className="overlay"></div> */}
      <div className="content">
        <h3>Efficient Routes,
        Seamless Delivery.</h3>
        <p>We’re creating a smart inventory management system that optimize stock levels, simplifies order processing, and dynamically picks the most efficient shipping routes. Additionally, we’ll enhance communication with customers through
real-time tracking updates.</p>
        <div>
        <button className="button">Click here</button>
      </div>
      </div>
    </div>
  )
}

export default Hero