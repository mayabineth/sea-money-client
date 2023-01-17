import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { openModalAdd } from "../../features/cartSlice";

import AssetsTable from "../../components/AssetsTable";
import ModalAddAsset from "../../components/ModalAddAsset";
import ModalRemove from "../../components/ModalRemove";

function Assets() {
  const { isOpenAdd, isOpenRemove } = useSelector((store: any) => store.cart);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h3>assets</h3>
      <button className="btn add-btn" onClick={() => dispatch(openModalAdd())}>
        add asset
      </button>
      {isOpenAdd && <ModalAddAsset />}
      {isOpenRemove && <ModalRemove />}
      <AssetsTable />
    </Wrapper>
  );
}

export default Assets;
