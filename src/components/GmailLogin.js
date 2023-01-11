import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { onLoginRegister, setUserName } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const clientId =
  "991547087961-lonkkqd7l4h2oe85lq15ogrje6flu0tv.apps.googleusercontent.com";

function GmailLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    console.log("login-success", res.profileObj);
    dispatch(onLoginRegister());
    dispatch(setUserName(res.profileObj.givenName));
    navigate("/");
  };
  const onFailure = (res) => {
    console.log("login-fail", res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default GmailLogin;
