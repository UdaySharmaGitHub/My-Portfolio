import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
const Asides = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
            <figure className="avatar-box">
                <img src={"/images/ME.jpg"} 
                 alt="Uday Sharma"
                 width="80"
                 />
            </figure>
            <div className="info-content">
                <h1 className="name">Code With Uday</h1>
                <p className="title">Front-End Developer</p>
            </div>

            <button className="info_more-btn">
            <span>Show Contacts</span>
            <GiClawSlashes />
          </button>
        </div>

    {/* Contact info */}
    <div className="sidebar-info_more">
          <hr className="separator2"></hr>

            <ul className="contacts-list">

            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mrudaysharma4600@gmail.com" className="contact-link">
                mrudaysharma4600@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="mrudaysharma4600@gmail.com" className="contact-link">
                +91 987XXXXXXX
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time>
                2003-06-26
                </time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address >
                India
                </address>
              </div>
            </li> 
            

            


            </ul>
          
    </div>
        

    </aside>
  )
}

export default Asides