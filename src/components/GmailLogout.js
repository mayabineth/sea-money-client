import { GoogleLogout } from "react-google-login";
import { onLogoutRegister, setUserName } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const clientId =
  "991547087961-lonkkqd7l4h2oe85lq15ogrje6flu0tv.apps.googleusercontent.com";

function GmailLogout() {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    console.log("logout-success");
    dispatch(onLogoutRegister());
    dispatch(setUserName(""));
  };
  return (
    <div id="signInButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default GmailLogout;
