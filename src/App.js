import React from 'react';
import './App.css';

import Footer from './footer';
import logo from "./logocom.png";
import Pexels1 from "./pexels1.jpg";
import Pexels2 from "./pexels1.jpg";
import Pexels3 from "./pexels1.jpg";
import Pexels4 from "./pexels1.jpg";
import Pexels from "./pexels2.jpg";

// import images from './images.png/laogocom.jpg';


function App() {
  return (
    <React.Fragment>
    
    <div>
      <nav>
        <div className="navcontainer">
          <div className="compamylogo">
            <a><img src={logo} alt="compamylogo" width="50px" /></a>
          </div>
          <div className="manuebar">
            <div>
              <a href="#">Home</a>
            </div>
            <div>
              <a href="#">About</a>
            </div>
            <div>
              <a href="#">Service</a>
            </div>
            <div>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="Herocontainer">
        <form>
          <div className="Herosection1">
            <p className="contactform">Contact Form</p>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            <br />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <br />
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value=""></option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <br />
            <label htmlFor="subject">Subject</label><br />
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '130px' }}></textarea>
            <br />
            <button className="submit">Submit</button>
          </div>
        </form>

        <div className="Herosection2">
          <div className="Heroimage">
            <h1>Lets deliver your test</h1>
            <img src={Pexels1} alt="" />
            <img src={Pexels2} alt="" />
            <img src={Pexels3} alt="" />
            <img src={Pexels4} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt eligendi quam officia veritatis quibusdam error minus officiis? <br />
              Sequi, quis quidem et ducimus ut cum ullam amet a libero, eius eaque qui illo id non ipsam suscipit optio veritatis earum.<br />
              <button className="buynow">Buy Now</button></p>
          </div>
        </div>

        <div className="Herosection3">
        <img src={Pexels} alt="" /><br />
          <button className="buttoncome">Come have more</button>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt eligendi quam officia veritatis quibusdam error minus officiis?
              Sequi, quis quidem et ducimus ut cum ullam amet a l</p>
        </div>
      </div>
      

    </div>

    <Footer />
    </React.Fragment>
  );
}



export default App;
