import img from './about.jpg'
function About()
{
    return(

        <> 
       
         <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
 
            <img src={img}  style={{width:"150%"}}className="img-fluid" alt=""/> 
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>About Mr. Arun</h3>
            <p className="fst-italic">
            Are you ready to learn from a true master of the craft? Meet Mr. Arun, a distinguished journalist with decades of experience in the field. Throughout his illustrious career, Mr. Arun has covered major events, conducted groundbreaking interviews, and earned accolades for his insightful reporting. Now, he's ready to share his wealth of knowledge and expertise with aspiring journalists like you.
            </p>
            <p className="fst-italic">
            Why Choose "Mastering Journalism" with Mr. Arun?
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Learn from the Best: Gain invaluable insights and practical tips from a seasoned journalist with a proven track record of excellence..</li>
              <li><i className="ri-check-double-line"></i> Benefit from Mr. Arun's firsthand experiences and learn how to navigate the ever-changing landscape of journalism.</li>
              <li><i className="ri-check-double-line"></i>Get hands-on experience and practical guidance to help you succeed in the competitive world of journalism</li>
              <li><i className="ri-check-double-line"></i>Exclusive Content: Access exclusive resources, case studies, and assignments designed to deepen your understanding of the field.</li>
            </ul>
            
          </div>
        </div>

      </div>
    </section>
  
        </>
        
    )
}

export default About