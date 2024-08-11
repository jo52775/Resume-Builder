import React, { FC } from "react";
import "./Message.css";

interface MessageProps {
  type: "success" | "error";
  text: string;
}

const Message: FC<MessageProps> = ({ type, text }) => {
  return <div className={`message ${type}`}>{text}</div>;
};

export default Message;
