import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { openModalAdd } from "../../features/cartSlice";

import MovementsTable from "../../components/MovementsTable";
import ModalAddMove from "../../components/ModalAddMove";
import ModalRemove from "../../components/ModalRemove";
function Movements() {
  const { isOpenAdd, isOpenRemove } = useSelector((store: any) => store.cart);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h3>movements</h3>
      <button className="btn add-btn" onClick={() => dispatch(openModalAdd())}>
        add movement
      </button>
      {isOpenAdd && <ModalAddMove />}
      {isOpenRemove && <ModalRemove />}
      <MovementsTable />
    </Wrapper>
  );
}

export default Movements;
