import React from "react";
import Typical from "react-typical";
import {Button} from 'react-bootstrap'
import './Profile.css'
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Github,
  Google,
} from "react-bootstrap-icons";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">

            <a href="#">
              <i class="fa fa-facebook-square">
                <Facebook />
              </i>
            </a>
            <a href="#">
              <i class="">
                <Github />{" "}
              </i>{" "}
            </a>
            <a href="#">
              <i class="fa fa-facebook-instagram">
                <Instagram />
              </i>
            </a>
            <a href="#">
              <i class="fa fa-youtube-square">
                <Youtube />
              </i>
            </a>
            <a href="#">
              <i class="fa fa-twitter">
                <Twitter />
              </i>
            </a>
            <a href="#">
              <i class="fa fa-twitter">
                <Linkedin />
              </i>
            </a>
            <a href="#">
              <i class="fa fa-twitter">
                <Google />
              </i>
            </a>
              </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M  <span className="highlighted-text"> Yonas</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😍",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Mern Stack Developer",
                    1000,
                    "Cross Platform v",
                    1000,
                    "React/React Native Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Kanck of building applications with fron and back end
              </span>
            </span>
          </div>
          <div className="profile-options">
              <button className="btn btn-outline-light">
                  {" "}
                  Hire Me {" "}
              </button>
              <a href='fullcv.pdf' download="Yonas fullcv.pdf">
                  <Button className="btn highlighted-btn">Get Resume</Button>
              </a>
          </div>
        </div>

<div className="profile-picture">
    <div className="profile-picture-background"></div>
</div>



      </div>
    </div>
  );
}

export default Profile;
