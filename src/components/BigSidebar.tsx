import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { showSidebar } = useSelector((store: any) => store.cart);
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <h3>
              Sea<span>Money</span>
            </h3>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
