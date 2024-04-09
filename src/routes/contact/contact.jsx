import React from "react";
import Navbar from "../../components/navbar";
import { PiArrowBendRightDownLight } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="info">
          <div className="order">
            <div className="order-name">
              <h1>Sipariş</h1>
              <PiArrowBendRightDownLight
                className="arrow"
                size={50}
                color="#FF8C42"
              />
            </div>
            <a
              target="_blank"
              href="https://www.yemeksepeti.com/restaurant/owg6/pizza-owg6?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action"
            >
              <button>Yemeksepeti</button>
            </a>
          </div>
          <div className="contact">
            <div className="phone">
              <FiPhone size={50} color="#FF8C42" />
              <span>0551 888 1114</span>
            </div>
            <p>
              Merdivenköy, Hızırbey Cd. <br /> No:160/C, 34732 Kadıköy/İstanbul
            </p>
          </div>
        </div>
        <div className="map">
          <h1>Konumumuz</h1>
          <div className="map-wrapper">
            <img className="slice" src="/images/slice.png" alt="" />
            <div className="google-map">
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Merdivenk%C3%B6y,%20H%C4%B1z%C4%B1rbey%20Cd.%20No:160/C,%2034732%20Kad%C4%B1k%C3%B6y/%C4%B0stanbul+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
