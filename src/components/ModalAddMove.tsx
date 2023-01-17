import Wrapper from "../assets/wrappers/Modal";
import { useDispatch } from "react-redux";
import FormRow from "./FormRow";
import { useState } from "react";
import { moveTypeNoID } from "../utils/interfaces";
import { closeModalAdd } from "../features/cartSlice";
import FormRowSelect from "./FormRowSelect";

const ModalAddMove = () => {
  const dispatch = useDispatch();
  const moveTypeOptions: string[] = ["income", "outcome"];
  const [moveData, setMoveData] = useState<moveTypeNoID>({
    date: "",
    name: "",
    sum: "",
    category: "",
    type: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(closeModalAdd());
    // if (!position || !company || !jobLocation) {
    //   displayAlert()
    //   return
    // }
    // createJob()
  };
  const handleJobInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setMoveData({ ...moveData, [name]: value });
  };
  return (
    <Wrapper>
      <aside className="modal-container">
        <div className="modal">
          <div className="line-down">
            <h4>add new movement</h4>
          </div>
          <div className="form-center">
            <FormRow
              type="text"
              labelText="Date"
              name="date"
              value={moveData.date}
              handleChange={handleJobInput}
            />
            <FormRow
              type="text"
              labelText="Name"
              name="name"
              value={moveData.name}
              handleChange={handleJobInput}
            />
            <FormRow
              type="text"
              labelText="Sum"
              name="sum"
              value={moveData.sum}
              handleChange={handleJobInput}
            />
            <FormRow
              type="text"
              labelText="category"
              name="category"
              value={moveData.category}
              handleChange={handleJobInput}
            />
            <FormRowSelect
              name="type"
              labelText="move type"
              value={moveData.type}
              handleChange={handleJobInput}
              list={moveTypeOptions}
            />
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn submit-btn"
              onClick={handleSubmit}
              // disabled={isLoading}
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
export default ModalAddMove;
