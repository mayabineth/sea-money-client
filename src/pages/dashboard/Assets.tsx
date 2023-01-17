import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { openModalAdd } from "../../features/cartSlice";

import AssetsTable from "../../components/AssetsTable";
import ModalAddAsset from "../../components/ModalAddAsset";

function Assets() {
  const { isOpenAdd } = useSelector((store: any) => store.cart);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h3>assets</h3>
      <button className="btn add-btn" onClick={() => dispatch(openModalAdd())}>
        add asset
      </button>
      {isOpenAdd && <ModalAddAsset />}
      <AssetsTable />
    </Wrapper>
  );
}

export default Assets;
