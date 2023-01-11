import { createSlice } from "@reduxjs/toolkit";
import { type } from "../utils/interf";
import { movements, messages, connections } from "../utils/data";
const initialState: type = {
  successRegister: false,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  showSidebar: false,
  isEditing: false,

  userName: "name",

  assetId: "",
  assetSum: "",
  assetDetail: "",
  assetStartDate: "",
  assetEndDate: "",

  movements: movements,
  assets: [],
  connections: connections,
  messages: messages,

  totalIncome: 0,
  totalOutcome: 0,
  numOfPages: 1,
  page: 1,
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
  },
});

export const {
  displayAlert,
  toggleSidebar,
  onLogoutRegister,
  onLoginRegister,
  setUserName,
} = cartSlice.actions;

export default cartSlice.reducer;
