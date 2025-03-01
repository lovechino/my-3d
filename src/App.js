import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Experience } from './Components/Experience';
import { Home } from './Components/Home';

import { NavBar } from './Components/Navbar';
import { Product } from './Components/Product';
function App() {
  return (
     <div className=" overflow-x-hidden text-black-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <NavBar/>
        <Home />
        <About />
        <Product />
        <Experience />
        <Contact />
      </div>
      
     </div>
  );
}

export default App;
