import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function Connections() {
  const { connections } = useSelector((store: any) => store.cart);

  return (
    <Wrapper>
      <h3>connections</h3>
      <div className="cons">
        {connections.map((con: string, index: string) => {
          return (
            <div className="con" key={index}>
              <span className="icon">
                <FaUser />
              </span>
              {con}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Connections;
