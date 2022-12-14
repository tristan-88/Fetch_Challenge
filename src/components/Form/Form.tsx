import React, { useState, useEffect, CSSProperties } from "react";
import ModalMessage from "../ModalMessage/ModalMessage";
import { getFormData, postFormData } from "../../utils/apiHandler";

export interface StylesDictionary {
  [Key: string]: CSSProperties;
}

function Form() {
  type State = {
    name: string;
    abbreviation: string;
  };

  const [allOccupations, setAllOccupation] = useState<string[]>([]);
  const [allStates, setAllStates] = useState<[]>([]);
  const [occupation, setOccupation] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [responseOk, setResponseOk] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = "https://frontend-take-home.fetchrewards.com/form";
    postFormData(
      url,
      { setResponseOk },
      {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
        occupation,
        state,
      }
    );
  }

  useEffect(() => {
    const url = "https://frontend-take-home.fetchrewards.com/form";
    getFormData(url, {
      setAllStates,
      setAllOccupation,
    });
  }, []);

  useEffect(() => {
    if (name.trim() && email.trim() && password.trim()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, password]);

  return (
    <div className="App">
      <div className="flex min-h-screen bg-white">
        <div className="w-1/2 bg-cover md:block hidden image-div"></div>
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className=" text-gray-800 text-3xl font-medium">
              Fetch Front-End Challenge
            </h1>
            <h3 className="p-1 text-gray-700">
              Please submit your information
            </h3>
          </div>
          <form action="#" className="p-0" onSubmit={handleSubmit} data-testid="form">
            <div className="mt-5">
              <input
                type="text"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent input-title "
                placeholder="Full Name"
                name="Full Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                data-testid="name"
              ></input>
            </div>
            <div className="mt-5">
              <input
                type="text"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent input-title "
                placeholder="Email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                data-testid="email"
              ></input>
            </div>
            <div className="mt-5">
              <input
                type="password"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent input-title "
                placeholder="Password"
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                data-testid="password"
              ></input>
            </div>
            <div className="mt-5">
              <select
                onChange={(e) => {
                  setState(e.target.value);
                  console.log(e.target.value);
                }}
                value={state|| ""}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              >
                <option value="" disabled hidden>
                  Select Your State
                </option>
                {allStates &&
                  allStates.map((state: State, idx) => (
                    <option value={state.name} key={idx}>
                      {state.abbreviation}
                    </option>
                  ))}
              </select>
            </div>
            <div className="mt-5">
              <select
                onChange={(e) => {
                  setOccupation(e.target.value);
                }}
                value={occupation || ""}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              >
                <option value="" disabled hidden>
                  Select Occupation
                </option>
                {allOccupations &&
                  allOccupations.map((occupation: string, idx: number) => (
                    <option value={occupation} key={idx}>
                      {occupation}
                    </option>
                  ))}
              </select>
            </div>
            {/* 
            <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
               © Tristan Sanjuan
            </div> */}

            <div className="mt-10">
              <input
                type="submit"
                value="Submit"
                className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600 button-submit"
                disabled={isDisabled}
                data-testid="submit"
              ></input>
            </div>
          </form>
          <a className="" href="/login" data-test="Link">
            <span className="block  p-5 text-center text-gray-800  text-xs ">
              {responseOk && <ModalMessage responseOk={responseOk} />}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
