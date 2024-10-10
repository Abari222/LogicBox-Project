import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Herosec2 from '../Herosec2/Herosec2';
import Herosec3 from '../Herosec3/Herosec3';
import Herosec4 from '../Herosec4/Herosec4';
import Herosec5 from '../Herosec5/Herosec5';
import Herosec6 from '../Herosec6/Herosec6';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div className='App-Container'>
      <main className='App-Holder'>
        <section className='App-Content'>
          <Header/>
          <Hero/>
          <Herosec2/>
          <Herosec3/>
          <Herosec4/>
          <Herosec5/>
          <Herosec6/>
          <div className='App-Items'>
            <Outlet/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Layout