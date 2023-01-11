import { FaExchangeAlt } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

const links = [
  { id: 1, text: "movements", path: "/", icon: <FaExchangeAlt /> },
  { id: 2, text: "assets", path: "assets", icon: <BsCurrencyExchange /> },
  { id: 3, text: "connections", path: "connections", icon: <FaUserFriends /> },
  {
    id: 4,
    text: "system messages",
    path: "system-messages",
    icon: <AiFillMessage />,
  },
];

export default links;
