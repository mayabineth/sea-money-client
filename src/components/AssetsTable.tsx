// import Wrapper from "../assets/wrappers/DashboardFormPage";
import { assetType } from "../utils/interfaces";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { openModalRemove } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function AssetsTable() {
  const dispatch = useDispatch();
  const { assets } = useSelector((store: any) => store.cart);
  const [order, setOrder] = useState("ASC");
  const [data, setData] = useState(assets);
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
          <th onClick={() => sorting("name")}>name</th>
          <th onClick={() => sorting("sum")}>sum</th>
          <th onClick={() => sorting("category")}>category</th>
          <th onClick={() => sorting("currency")}>currency</th>
          <th onClick={() => sorting("estimatedAnnualReturn")}>
            estimated Annual Return
          </th>
          <th className="icons-th"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((asset: assetType) => {
          const { id, name, sum, category, currency, estimatedAnnualReturn } =
            asset;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{sum}</td>
              <td>{category}</td>
              <td>{currency}</td>
              <td>{estimatedAnnualReturn}</td>
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

export default AssetsTable;
