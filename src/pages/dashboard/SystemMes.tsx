import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector } from "react-redux";
import { msgType } from "../../utils/interf";
function SystemMes() {
  const { messages } = useSelector((store: any) => store.cart);
  if (messages.length === 0) {
    return (
      <Wrapper>
        <h2>No messages to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>system messages</h3>
      <div className="msgs">
        {messages.map((msg: msgType, index: string) => {
          return (
            <div className="msg" key={index}>
              <div className="header">{msg.msgTitle}</div>
              <div className="content">{msg.msgContent}</div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default SystemMes;
