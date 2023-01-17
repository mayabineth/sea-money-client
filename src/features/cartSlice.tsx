import { createSlice } from "@reduxjs/toolkit";
import { type } from "../utils/interfaces";
import { movements, messages, assets, connections } from "../utils/data";
const initialState: type = {
  successRegister: false,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  showSidebar: false,
  isEditing: false,

  userName: "name",

  movements: movements,
  assets: assets,
  connections: connections,
  messages: messages,

  totalIncome: 0,
  totalOutcome: 0,
  numOfPages: 1,
  page: 1,

  isOpenRemove: false,
  isOpenEdit: false,
  isOpenAdd: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    displayAlert: (state) => {
      state.showAlert = true;
      state.alertType = "danger";
      state.alertText = "Please provide all values!";
    },
    clearAlert: (state) => {
      state.showAlert = true;
      state.alertType = "";
      state.alertText = "";
    },
    // setUpUserBegin: (state) => {
    //   state.isLoading = true;
    // },
    // setUpUserSuccess: (state) => {
    //   state.isLoading = true;
    //   state.showAlert = true;
    //   state.alertType = "";
    //   state.alertText = "";
    // },
    // setUpUserError: (state) => {
    //   state.isLoading = false;
    //   state.showAlert = true;
    //   state.alertType = "danger";
    //   state.alertText = "error on login to gmail";
    // },
    // logoutUser: (state) => {
    //   state.userId = "";
    // }
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
    onLoginRegister: (state) => {
      state.successRegister = true;
    },
    onLogoutRegister: (state) => {
      state.successRegister = false;
    },
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    createMoveBegin: (state) => {
      state.isLoading = true;
    },
    createMoveSuccess: (state) => {
      state.isLoading = false;
      state.showAlert = true;
      state.alertType = "success";
      state.alertText = "new move";
    },
    createMoveError: (state) => {
      state.isLoading = false;
      state.showAlert = true;
      state.alertType = "danger";
      state.alertText = "error in create movement";
    },
    createAssetBegin: (state) => {
      state.isLoading = true;
    },
    createAssetSuccess: (state) => {
      state.isLoading = false;
      state.showAlert = true;
      state.alertType = "danger";
      state.alertText = "error in create asset";
    },
    openModalEdit: (state, { payload }) => {
      state.isOpenEdit = true;
      // state.clickedItemEdit = payload;
    },
    closeModalEdit: (state) => {
      state.isOpenEdit = false;
    },
    openModalRemove: (state, { payload }) => {
      state.isOpenRemove = true;
      // state.clickedItemRemove = payload;
    },
    closeModalRemove: (state) => {
      state.isOpenRemove = false;
    },
    openModalAdd: (state) => {
      state.isOpenAdd = true;
    },
    closeModalAdd: (state) => {
      state.isOpenAdd = false;
    },
    // handleChange: (state, { payload }) => {
    //   const val = payload.name;
    //   state.val = payload.value;
    // },
    // handleChange: (state, { payload: { name, value } }) => {
    //   state[name] = value;
    // },
  },
});

export const {
  displayAlert,
  toggleSidebar,
  onLogoutRegister,
  onLoginRegister,
  setUserName,
  openModalAdd,
  closeModalAdd,
} = cartSlice.actions;

export default cartSlice.reducer;
