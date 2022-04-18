import React from "react";
import "./Footer.scss";
import yelp_img from "../../assets/img/yelp.jpg";
import facebook_img from "../../assets/img/facebook.jpg";
export default function Footer() {
  return (
    <footer>
      <div className="more-info">
        <div className="location">
          <p className="footer--title">Location</p>
          <p>
            <span>310 E Grand Ave</span>
            <span>El Segundo, CA 90245</span>
            <span>310 726-9194</span>
          </p>
        </div>
        <div className="socials">
          <p className="footer--title">Social Media</p>
          <a
            href="https://www.yelp.com/biz/stix-and-straws-el-segundo"
            alt="stix & straw yelp"
          >
            <img src={yelp_img} alt="yelp" />
          </a>
          <a
            href="https://www.facebook.com/StixandStraws"
            alt="stix & straw Facebook "
          >
            <img src={facebook_img} alt="facebook" />
          </a>
        </div>
      </div>
      <div className="work-credit">
        <hr />
        <p>Terms of Use | Copyright | Author</p>
      </div>
    </footer>
  );
}
