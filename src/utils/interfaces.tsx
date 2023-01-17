export interface moveType {
  id: string;
  date: string;
  name: string;
  sum: string;
  category: string;
  type: string;
}
export interface moveTypeNoID {
  date: string;
  name: string;
  sum: string;
  category: string;
  type: string;
}
export interface assetTypeNoID {
  name: string;
  sum: string;
  category: string;
  currency: string;
  estimatedAnnualReturn: string;
}
export interface assetType {
  id: string;
  name: string;
  sum: string;
  category: string;
  currency: string;
  estimatedAnnualReturn: string;
}
export interface msgType {
  id: string;
  title: string;
  content: string;
}
export interface userType {
  id: string;
  name: string;
  age: string;
  defaultCurrency: string;
}
export interface type {
  successRegister: boolean;
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  showSidebar: boolean;
  isEditing: boolean;

  userName: string;

  movements: moveType[];
  assets: assetType[];
  connections: string[];
  messages: msgType[];

  totalIncome: 0;
  totalOutcome: 0;
  numOfPages: 1;
  page: 1;

  isOpenRemove: boolean;
  isOpenEdit: boolean;
  isOpenAdd: boolean;
}
