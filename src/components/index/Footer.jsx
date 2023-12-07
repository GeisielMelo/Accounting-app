import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import Facebook from "../../assets/svg/Facebook.svg";
import WhatsApp from "../../assets/svg/WhatsApp.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";

const Section = styled.footer`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(135deg, #393E46, #222831);
  width: 100%;
  padding: 100px 0;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 0;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
  }

  ul {
    display: flex;
    font-family: "Poppins", sans-serif;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  li {
    color: #fff;
    cursor: pointer;
    margin-right: 30px;
    list-style: none;
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
  button {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 3px solid #fff;
    background: transparent;
    color: #fff;
    cursor: not-allowed;
    width: max-content;
    font-family: "Poppins", sans-serif;
    p {
      padding: 10px;
    }
    span {
      padding: 10px;
      border-left: 3px solid #fff;
    }
  }
`;

const Info = styled.div`
  display: flex;
  color: #fff;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 50px 20px;
    gap: 30px;
  }

  .container {
    display: flex;
    gap: 10px;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0px;
    }
  }
  h1 {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
  }
  p {
    font-size: 15px;
    font-family: "Nunito", sans-serif;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #fff;
  margin: 20px 0;
`;

const Copyright = styled.div`
  text-align: right;
  color: #fff;
  font-family: "Nunito", sans-serif;
  @media (max-width: 768px) {
    text-align: left;
    margin: 0 20px;
  }
  img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 768px) {
      margin-left: 0px;
      margin-right: 10px;
    }
  }
  p {
    margin: 10px 0;
  }
  a {
    cursor: pointer;
    color: #cacaca;
  }
`;

const Footer = () => {
  const handleWhatsAppButtonClick = () => {
    const phone = "99 99 99999-9999";
    const message = "Hello, I would like more information about the system.";
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, "_blank");
  };

  return (
    <Section id="footer">
      <Contact>
        <Navigation>
          <ul>
            <li onClick={() => (window.location.href = "#")}>Services</li>
            <li onClick={() => (window.location.href = "#")}>About</li>
            <li onClick={() => (window.location.href = "#")}>Blog</li>
            <li onClick={() => (window.location.href = "mailto:app@email.com")}>Contact</li>
          </ul>
          <button>
            <p>Locales & Resources</p>
            <span>
              <SouthSharpIcon />
            </span>
          </button>
        </Navigation>

        <Line />

        <Info>
          <div className="container">
            <div>
              <HomeIcon />
            </div>
            <div>
              <h1>Address</h1>
              <p>N 99 | Road 1892</p>
              <p>Avenue, US.</p>
            </div>
          </div>

          <div className="container">
            <div>
              <MailSharpIcon />
            </div>
            <div>
              <h1>Email</h1>
              <p>Contact us</p>
              <p>app@email.com</p>
            </div>
          </div>

          <div className="container">
            <div>
              <CallSharpIcon />
            </div>
            <div>
              <h1>Phone</h1>
              <p>Contact us</p>
              <p>(000) 9 9999-9999</p>
            </div>
          </div>
        </Info>
      </Contact>

      <Copyright>
        <div>
          <img src={WhatsApp} alt="Instagram logo" onClick={handleWhatsAppButtonClick} />
          <img
            src={Facebook}
            alt="Facebook logo"
            onClick={() =>
              window.open("https://pt-br.facebook.com/people/", "_blank")
            }
          />
          <img src={Instagram} alt="Instagram logo" onClick={() => window.open("https://www.instagram.com", "_blank")} />
        </div>
        <p>© 2023 Accounting-app</p>
        <p>All rights reserved.</p>
        <p>
          Web Design by{" "}
          <a href="https://geisielmelo.netlify.app/" target="_blank" rel="noreferrer">
            GeisielMelo
          </a>
        </p>
      </Copyright>
    </Section>
  );
};

export default Footer;
