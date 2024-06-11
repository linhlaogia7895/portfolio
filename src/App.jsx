import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=' bg-primary'>
        <div className='bg-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <About />
          <Tech />
          <Experience />
          <Works />
          <Contact />
          <StarsCanvas />
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;