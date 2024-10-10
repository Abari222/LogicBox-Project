import './Herosec6.css';
import cardPics1 from '../assets/cardPics1.png';
import cardPics2 from '../assets/cardPics2.png';
import cardPics3 from '../assets/cardPics3.png';
import cardPics4 from '../assets/cardPics4.png';
import cardPics5 from '../assets/cardPics5.png';


const Herosec6 = () => {
  return (
    <div className="container">
      <div className="header">
        {/* <h1>Title Here</h1> */}
        <h2>Transporting across the globe.</h2>
      </div>

      <div className="triangle-Container">
      <div className="triangle">
        <div className="cards">
        <img className="card" src={cardPics1} />
        <img className="card" src={cardPics2} />
        <img className="card" src={cardPics3} />
        <img className="card" src={cardPics4} />
        <img className="card" src={cardPics5} />
          {/* <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 4</div>
          <div className="card">Card 5</div>
          <div className="card">Card 6</div> */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Herosec6;