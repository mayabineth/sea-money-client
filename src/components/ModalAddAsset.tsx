import Wrapper from "../assets/wrappers/Modal";
import { useDispatch } from "react-redux";
import FormRow from "./FormRow";
import { useState } from "react";
import { assetTypeNoID } from "../utils/interfaces";
import { closeModalAdd } from "../features/cartSlice";

const ModalAddAsset = () => {
  const dispatch = useDispatch();

  const [assetData, setAssetData] = useState<assetTypeNoID>({
    name: "",
    sum: "",
    category: "",
    currency: "",
    estimatedAnnualReturn: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(closeModalAdd());
  };
  const handleJobInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setAssetData({ ...assetData, [name]: value });
  };
  return (
    <Wrapper>
      <aside className="modal-container">
        <div className="modal">
          <div className="line-down">
            <h4>add new asset</h4>
          </div>
          <div className="form-center">
            <FormRow
              type="text"
              labelText="name"
              name="name"
              value={assetData.name}
              handleChange={handleJobInput}
            />
            <FormRow
              type="text"
              labelText="sum"
              name="sum"
              value={assetData.sum}
              handleChange={handleJobInput}
            />
            <FormRow
              type="text"
              labelText="category"
              name="category"
              value={assetData.category}
              handleChange={handleJobInput}
            />
            <FormRow
              type="text"
              labelText="currency"
              name="currency"
              value={assetData.currency}
              handleChange={handleJobInput}
            />
            <FormRow
              type="text"
              labelText="estimated annual return"
              name="estimatedAnnualReturn"
              value={assetData.estimatedAnnualReturn}
              handleChange={handleJobInput}
            />
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn submit-btn"
              onClick={handleSubmit}
            >
              submit
            </button>
            <button
              className="btn cancel-btn"
              onClick={() => {
                dispatch(closeModalAdd());
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};
export default ModalAddAsset;
