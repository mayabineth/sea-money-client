import GmailLogin from "../components/GmailLogin";
import GmailLogout from "../components/GmailLogout";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import saving from "./saving.svg";
import RegisterLogo from "../assets/images/landingLogo.svg";

const clientId =
  "991547087961-lonkkqd7l4h2oe85lq15ogrje6flu0tv.apps.googleusercontent.com";

function Register() {
  useEffect(() => {
    function start() {
      gapi.client.init({ clientId: clientId, scope: "" });
    }
    gapi.load("client:auth2", start);
  }, []);
  return (
    <Wrapper className="full-page">
      <div className="form">
        <div className="gmailLogin">
          <GmailLogin />
        </div>
        <img src={RegisterLogo} alt="registerLogo" className="img main-img" />

        {/* <GmailLogout /> */}
      </div>
    </Wrapper>
  );
}

export default Register;
