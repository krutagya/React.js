import "./index.css";
import logo from "./Assests/OnePlus-Logo.png";
import kvpc2 from "./Assests/KV_pc2.png";
import kvpc6 from "./Assests/KV_pc_6000x1280.png";
import bigcard from "./Assests/big-card-pc.png";
import bigcard2 from './Assests/bigcard-pc2.png';
import bigcard3 from "./Assests/bigcard-pc (1).png";
import sbanner from "./Assests/SecondaryBanner_OnePlusNord4Lite5G_Desktop.png";
import sbanner2 from "./Assests/SecondaryBanner_OnePlusPad2_Desktop.png";
import sbanner3 from "./Assests/SecondaryBanner_OnePlusWatch2R_Desktop.png";

import React from "react";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo"><img src={logo} alt="Logo" /></div>
        <div className="nav-text1">Phone</div>
        <div className="nav-text2">Audio</div>
        <div className="nav-text3">Tablet</div>
        <div className="nav-text4">Wearables</div>
        <div className="nav-text5">About</div>
        <div className="nav-text6">Community</div>
        <div className="nav-text7">Support</div>
        <div className="login">
          <button className="login">login and Purchase</button>
        </div>
      </div>

      <div className="hero-sec1" data-aos="fade-right">
        <div className="hero-img1">
          <img src={kvpc2} alt="Bass-ed Brilliance" />
        </div>
        <div className="hero-img1-text">
          <h6>Bass-ed Brilliance</h6>
          <p>OnePlus Nord Buds 3</p>
        </div>
        <div className="hero-bottom">
          <div className="learnmore">
            <p>Up to 32dB Active Noise Cancellation | 2.0 | Up to 43 hrs Playback</p>
            <button className="button">Learn More</button>
          </div>
        </div>
      </div>

      <div className="hero-sec2" data-aos="fade-left">
        <div className="hero-img2"><img src={kvpc6} alt="Absurdly Good" /></div>
        <div className="hero-img2-text">
          <h6>Absurdly Good</h6>
          <h6>Powered by OnePlus Intelligence and AI</h6>
          <p>OnePlus Nord 4</p>
        </div>
        <div className="hero-button1">
          <div className="learnmore1">
            <p>Metal Unibody Design | Latest 2024 </p>
            <p>Snapdragon | 6-Year Fluency</p>
            <button className="button1">Learn More</button>
          </div>
        </div>
      </div>

      <div className="hero-img3-text" data-aos="slide-right">
        <div>
          <h6>Perfection at Play</h6>
          <p>Oneplus</p>
          <p>Buds Pro 3</p>
        </div>
        <div className="right-img">
          <img src={bigcard} alt="Buds Pro 3" />
        </div>
      </div>

      <div className="hero-button2">
        <div className="learnmore2">
          <p>Precision Tuned | Hi-Resolution audio | Adaptive Noise</p>
          <p>Canceling | Spatial Audio with head tracking</p>
          <button className="button2">Learn More</button>
        </div>
      </div>

      <div className="hero-img4-text" data-aos="slide-right">
        <div>
          <h1>It's time to move</h1>
          <p>OnePlus Watch</p>
          <p>2R</p>
        </div>
        <div className="right-img">
          <img src={bigcard2} alt="OnePlus Watch 2R" />
        </div>
      </div>

      <div className="hero-button3">
        <div className="learnmore3">
          <p>Up to 100 Hours Battery Life</p>
          <p>Enhanced Fitness Tracking</p>
          <button className="button3">Learn More</button>
        </div>
      </div>

      <div className="hero-img5-text" data-aos="slide-right">
        <div className="right-img">
          <img src={bigcard3} alt="OnePlus Watch 2R" />
        </div>
        <div>
          <h1>It's time to move</h1>
          <p>OnePlus Watch</p>
          <p>2R</p>
        </div>
      </div>

      <div className="hero-button4">
        <div className="learnmore4">
          <p>Up to 100 Hours Battery Life</p>
          <p>Enhanced Fitness Tracking</p>
          <button className="button4">Learn More</button>
        </div>
      </div>

      <div className="matrix">
        <div className="row1">
          <div className="box1" data-aos="fade-left">
            <img src={sbanner} alt="OnePlus Nord CE4 Lite 5G" />
            <div className="uppertext">
              <p className="txt">Absurdly Entertaining</p>
              <h1 className="txt">OnePlus Nord CE4 Lite 5G</h1>
              <p className="txt">5,500 mAh Battery | 80W SUPERVOOC</p>
              <p className="txt">120 Hz AMOLED Display | Aqua Touch</p>
            </div>
          </div>

          <div className="box2" data-aos="fade-right">
            <img src="https://wallpapers.com/images/featured/oneplus-nqecc8oomap78i1x.webp" alt="OnePlus Nord CE4 Lite 5G" />
            <p className="txt">Absurdly Entertaining</p>
            <h1 className="txt">OnePlus Nord CE4 Lite 5G</h1>
            <p className="txt">5,500 mAh Battery | 80W SUPERVOOC</p>
            <p className="txt">120 Hz AMOLED Display | Aqua Touch</p>
          </div>
        </div>

        <div className="row2">
          <div className="box3" data-aos="fade-left">
            <img src={sbanner2} alt="OnePlus Nord CE4 Lite 5G" />
            <p className="txt">Absurdly Entertaining</p>
            <h1 className="txt">OnePlus Nord CE4 Lite 5G</h1>
            <p className="txt">5,500 mAh Battery | 80W SUPERVOOC</p>
            <p className="txt">120 Hz AMOLED Display | Aqua Touch</p>
          </div>

          <div className="box4" data-aos="fade-right">
            <img src={sbanner3} alt="OnePlus Nord CE4 Lite 5G" />
            <p className="txt">Absurdly Entertaining</p>
            <h1 className="txt">OnePlus Nord CE4 Lite 5G</h1>
            <p className="txt">5,500 mAh Battery | 80W SUPERVOOC</p>
            <p className="txt">120 Hz AMOLED Display | Aqua Touch</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

