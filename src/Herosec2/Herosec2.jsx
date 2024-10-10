import './Herosec2.css';



const Herosec2 = () => {

  return(

    <div className="Herosec2-Container">
      <div className="trackDeli">
        <h5>Track Delivery</h5>
          <>
        <input placeholder='Delivery Receipt Number'/>
        <button>Search</button>
        </>
      </div>

      <section className="ShippingCost">
        <h5>Shipping Cost</h5>
        <input placeholder='Place of origin'/>
        <input placeholder='Destination Area'/>
        <input placeholder='Weight'/>
        <button>Continue</button>
      </section>
   </div>
  )
}


export default Herosec2