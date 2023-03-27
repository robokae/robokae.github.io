import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import ContactForm from "./ContactForm";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const EMAIL = "alexanderhom19@gmail.com";

function Contact() {
  const [emailPopupClicked, setEmailPopupClicked] = useState(false);

  const handleEmailPopupClick = () => {
    setEmailPopupClicked(true);
    navigator.clipboard.writeText(EMAIL);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__content">
        <h2 className="contact-section__heading">Let's Work Together</h2>
        <div className="contact-section__details">
          <p className="contact-section__text">
            If you like my work and want to reach out for collaboration, feel
            free to send me an email or connect with me through my LinkedIn, and
            I will try to get back to you as soon as possible.
          </p>
          <div className="contact-section__contact-details-container">
            <div className="contact-section__contact-detail">
              <FontAwesomeIcon
                className="contact-section__contact-detail-icon"
                icon={faGithub}
              />
              <a
                className="contact-section__link"
                href="https://github.com/robokae"
              >
                GitHub
              </a>
            </div>
            <div className="contact-section__contact-detail">
              <FontAwesomeIcon
                className="contact-section__contact-detail-icon"
                icon={faEnvelope}
              />
              <p
                id="email"
                className="contact-section__text contact-section__text--email"
                onMouseLeave={() => {
                  setEmailPopupClicked(false);
                }}
                onClick={handleEmailPopupClick}
              >
                alexanderhom19@gmail.com
              </p>
              <div className="tooltip-container">
                <Tooltip
                  anchorId="email"
                  className="custom-tooltip"
                  content={
                    emailPopupClicked ? "Email copied" : "Click to copy email"
                  }
                  place="bottom"
                />
              </div>
            </div>
            <div className="contact-section__contact-detail">
              <FontAwesomeIcon
                className="contact-section__contact-detail-icon"
                icon={faLinkedin}
              />
              <a
                className="contact-section__link"
                href="https://www.linkedin.com/in/alexander-hom-94811b188/"
              >
                LinkedIn
              </a>
            </div>
          </div>
          {/* <ContactForm className="contact-section__contact-form" /> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;