import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

// import Logo from './Logo'
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/cartSlice";

const SmallSidebar = () => {
  const { showSidebar } = useSelector((store: any) => store.cart);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          {/* <h3>logosmall</h3> */}
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
