import { closeModalRemove } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/Modal";

function ModalRemove() {
  const dispatch = useDispatch();
  const { clickedItemRemove } = useSelector((store: any) => store.cart);
  return (
    <Wrapper>
      <aside className="modal-container">
        <div className="modal">
          <h4>remove {clickedItemRemove} from table?</h4>
          <div className="btn-container">
            <button
              type="submit"
              className="btn submit-btn"
              onClick={() => {
                // dispatch(removeItem(clickedItemRemove));
                dispatch(closeModalRemove());
              }}
            >
              confirm
            </button>
            <button
              className="btn cancel-btn"
              onClick={() => {
                dispatch(closeModalRemove());
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
}
export default ModalRemove;
