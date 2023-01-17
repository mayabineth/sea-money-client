// import Wrapper from "../assets/wrappers/DashboardFormPage";
import { moveType } from "../utils/interfaces";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { openModalRemove } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function MovementsTable() {
  const dispatch = useDispatch();
  const { movements } = useSelector((store: any) => store.cart);
  const [order, setOrder] = useState("ASC");
  const [data, setData] = useState(movements);
  const sorting = (col: string) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => sorting("date")}>Date</th>
          <th onClick={() => sorting("name")}>name</th>
          <th onClick={() => sorting("sum")}>sum</th>
          <th onClick={() => sorting("category")}>category</th>
          <th onClick={() => sorting("type")}>type</th>
          <th className="icons-th"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((move: moveType) => {
          const { id, date, name, sum, category, type } = move;
          return (
            <tr key={id}>
              <td>{date}</td>
              <td>{name}</td>
              <td>{sum}</td>
              <td>{category}</td>
              <td>{type}</td>
              <td>
                <button className="btn-icon">
                  <AiFillEdit />
                </button>
                <button
                  className="btn-icon"
                  onClick={() => dispatch(openModalRemove(name))}
                >
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MovementsTable;
