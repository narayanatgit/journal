import About from "./About";
import Model from "./Model";
import Dataset from "./Dataset"
import Footer from "./Footer";
import Contact from "./Contact";
import Info from "./Info";
function Header()
{

    return( <>
    <header id="header"  style={{background:"black"}}className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a href="index.html">Journalistic</a></h1>
     

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#dataset">Course Overview</a></li>
          <li><a className="nav-link scrollto" href="#services">Course Timeline</a></li>
       
         
          
         
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="#about" className="get-started-btn scrollto">Get Started</a>

    </div>
  </header>
  <>
  <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1>Welcome to Mastering Journalism with Mr. Arun<span></span></h1>
          <h2>Unlock the Secrets of Journalism from a Seasoned Expert</h2>
        </div>
      </div>


    </div>
  </section>
</>
<About/>
<Dataset/>
<Model/>
<Info/>
<Contact/>
<Footer/>
</>

    )
}

export default Header;