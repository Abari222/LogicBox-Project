import './Herosec5.css';
import DeliveryPic from '../assets/DeliveryPic.jpg';


const Herosec5 =()=>{


  return(
    <div className='Herosec5-Main'>
    <div className='Herosec5-Container'>
      <h4>Any Size With Affordable Prize</h4>
      <p><span>LogicBox</span> helps in creating a smart inventory management system that optimize stock levels, simplifies order processing, and dynamically picks the most efficient shipping routes. Additionally, we’ll enhance communication with customers through real-time tracking updates.</p>
    </div>
    
    <div className='downWrapper'>
      <img src={DeliveryPic} />
      <div className='costAirfreight'>

        <>
        <button>Click here</button>
        </>

        <>
        <h5>
        Cost of Airfreight
        </h5>
        <h5>
        Price
        </h5>
        </>

      </div>
    </div>
    </div>
  
    )
}


export default Herosec5;