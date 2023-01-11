export interface moveType {
  moveDate: string;
  moveDetail: string;
  moveSum: string;
  moveCategory:string;
  moveType: string;

}
export interface msgType {
  msgTitle: string;
  msgContent: string;
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

  assetId: string;
  assetSum: string;
  assetDetail: string;
  assetStartDate: string;
  assetEndDate: string;

  movements: moveType[];
  assets: string[];
  connections: string[];
  messages: msgType[];

  totalIncome: 0;
  totalOutcome: 0;
  numOfPages: 1;
  page: 1;
}
