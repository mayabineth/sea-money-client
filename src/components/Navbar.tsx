import Wrapper from "../assets/wrappers/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { toggleSidebar } from "../features/cartSlice";
import GmailLogout from "./GmailLogout";
const Navbar = () => {
  const { userName, successRegister } = useSelector((store: any) => store.cart);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          {successRegister && (
            <button
              type="button"
              className="btn"
              onClick={() => setShowLogout(!showLogout)}
            >
              <FaUserCircle />
              {userName}
              <FaCaretDown />
            </button>
          )}
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            {/* <button type="button" className="dropdown-btn" onClick={logoutUser}>
              logout
            </button> */}
            <GmailLogout />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
