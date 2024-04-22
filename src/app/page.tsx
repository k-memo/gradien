import Logo from "../../components/logo";
import "./style/application.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="landing-page">
      <div className="landing-page-greeting">
        <h1>
          GR
          <Logo />
          DIEN
        </h1>
        <p className="sub">FIND YOUR COLORPALETTE</p>
        <button>Get Started</button>
      </div>
      <section>
        <h2>WHY YOU NEED COLOR ANALYSIS</h2>
        <div>
          <div>
            <span style = "font-size:30px">emoji</span>
            <h3>PERSONALIZED STYLE</h3>
            <p>Discover your colors for effortless, flattering outfits.</p>
          </div>
          <div>
            <span style = "font-size:30px">emoji</span>
            <h3>PROFESSIONAL IMAGE</h3>
            <p>Project competence with a polished appearance</p>
          </div>
          <div>
            <span style = "font-size:30px">emoji</span>
            <h3>CONFIDENCE BOOST</h3>
            <p>Feel confident and make lasting impressions.</p>
          </div>
          <div>
            <span style = "font-size:30px">emoji</span>
            <h3>Versatile Coordination</h3>
            <p>Mix and match effortlessly for cohesive style.</p>
          </div>
        </div>
      </section>
      <section>
        <h2>CONTACT US</h2>
        <p>Have a question or just want to say hello? We'd love to hear from you!  
          Feel free to reach out to us using the contact form, or connect  with us via email or phone. </p>
          
          <FontAwesomeIcon icon={PHONE} className="phone-icon" />
          <p>0000 00000000</p>
          <FontAwesomeIcon icon={MAIL} className="mail-icon" />
          <p>0000000@0000.com</p>
          <FontAwesomeIcon icon={ADRESSE} className="adresse-icon" />
          <p>000000000000000000</p>


       <div>            
        <h3>Tell us about youtself</h3>
            <form action="/submit" method="post">
              <label for="email">Email:</label><br>
              <input type="email" id="email" name="email" required><br><br>
              <label for="message">Message:</label><br>
              <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
              <input type="submit" value="Submit">
          </form>
        </div>
        </section>
        <footer>
       <p> © Datenschutz | Impressum </p>
        </footer>
     
      


    </main>
  );
}
