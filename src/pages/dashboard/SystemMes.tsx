import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector } from "react-redux";
import { msgType } from "../../utils/interfaces";
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
        {messages.map((msg: msgType, id: string) => {
          return (
            <div className="msg" key={id}>
              <div className="header">{msg.title}</div>
              <div className="content">{msg.content}</div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default SystemMes;
