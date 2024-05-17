
const Contact = () => {
  return (
    <section className="contact" data-page="contact">

    <header>
      <h2 className="h2 article-title">Contact</h2>
    </header>

    <section className="mapbox" data-mapbox>
      <figure>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55361.61482199151!2d77.85362609254217!3d29.861363053871468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36e08b35119%3A0x798f5dc25ebd0a72!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1715835943144!5m2!1sen!2sin"
       width="400" height="300" loading="lazy" title="Google Map"></iframe>
      </figure>
    </section>

    <section className="contact-form">

      <h3 className="h3 form-title">Contact Form</h3>

      <form action="#" className="form" data-form>

        <div className="input-wrapper">
          <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

          <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
        </div>

        <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

        <button className="form-btn" type="submit" data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>

      </form>

    </section>

  </section>
  )
}

export default Contact