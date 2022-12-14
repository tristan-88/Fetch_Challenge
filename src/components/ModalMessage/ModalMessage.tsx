import React from "react";
import "./ModalMessage.css";

interface ResponseOKProps {
  [key: string]: any;
  responseOk: boolean;
}

function ModalMessage(props: ResponseOKProps) {
  const { responseOk }: { responseOk: boolean } = props;
  return (
    // <div
    //   className="response_message_container block p-5 text-center text-gray-800 text-2xl "
    //   data-testid="messageDiv"
    // >
    //   {responseOk
    //     ? "Form has been successfully Submitted"
    //     : "Error has occurred please look at the console"}
    // </div>
    <div
      className={
        responseOk
          ? "bg-green-500 hover:bg-green-600 hover:shadow-lg transition duration-150 ease-linear backdrop-blur-xl z-20 max-w-md top-36 rounded-lg p-6 shadow"
          : "bg-red-600 hover:bg-red-800 hover:shadow-lg transition duration-150 ease-linear backdrop-blur-xl z-20 max-w-md top-36 rounded-lg p-6 shadow"
      }
    >
      <h1
        className={
          responseOk
            ? "text-xl text-slate-100 font-medium"
            : "text-xl text-rose-300 font-medium"
        }
      >
        {responseOk
          ? "Form has been successfully Submitted"
          : "Error has occurred please look at the console"}
      </h1>
      <div className="flex justify-between items-center"></div>
    </div>
  );
}

export default ModalMessage;
