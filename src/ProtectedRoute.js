import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { successRegister } = useSelector((store) => store.cart);
  if (!successRegister) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
