import React from "react";


interface ResponseOKProps {
  [key: string]: any;
  responseOk: boolean;
}

function ModalMessage(props: ResponseOKProps) {
  const { responseOk }: { responseOk: boolean } = props;
  return (
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
