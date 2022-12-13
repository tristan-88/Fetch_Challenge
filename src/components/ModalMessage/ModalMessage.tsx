import React from "react";
import "./ModalMessage.css";

interface ResponseOKProps {
  [key: string]: any;
  responseOk: boolean;
}

function ModalMessage(props: ResponseOKProps) {
  const { responseOk }: { responseOk: boolean } = props;
  return (
    <div className="response_message_container" data-testid="messageDiv">
      {responseOk
        ? "Form has been successfully Submitted"
        : "Error has occurred please look at the console"}
    </div>
  );
}

export default ModalMessage;
