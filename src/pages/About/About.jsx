import Service from "./Service"
import { useState,useEffect } from "react"
import Testimonial from "./Testimonial"

const About = () => {

  //  Getting the Testimonial data From JSON file availabel in Public folder
  const [testimonials, setTestimonials] = useState([])
  useEffect(()=>{
    fetch('testimonial.json')
    .then((response)=>response.json())
    .then(data=>{
      console.log(data)
  setTestimonials(data)
})
  },[])

    //  Getting the Services data From JSON file availabel in Public folder
  const [serviceData, setServiceData] = useState([])
  useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setServiceData(data);
    })
  },[])

    return (
      <div className="about active">
         <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
  
      <section className="about-text">
        <p>
        A dynamic Full Stack Developer eager to bring a fresh perspective,
 adaptability, and enthusiasm to a dynamic team. I am working on upscaling
 my skills by learning data science. 
        </p>
  
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I
          add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your
          message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>
      
      {/* Services */}
      <section className="services">
        <h2 className="h3 service-title">What Im Doing</h2>
      </section>
        <ul className="service-list">
          {
            serviceData.map((service,index)=>(
              <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
            ))
          }
        </ul>

        {/* Testimonial */}
        <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map((testimonial,index)=>(
          <Testimonial key={index} 
          name={testimonial.name} 
          avatar={testimonial.avatar}
          testimonial={testimonial.testimonial}
           />
        ))}
      </ul>

      </section>

      {/*  Client Sectiom. */}
      <section className="clients">
        <h3 className="h3 clients-title">Client</h3>
        <ul className="clients-list has-scrollbar">
        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>
        </ul>
      </section>
      </div>
    )
  }
  
  export default About