import React, { useState, useEffect } from "react";
import ModalMessage from "../ModalMessage/ModalMessage";
import { getFormData, postFormData } from "../../utils/apiHandler";

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
      <p>We still here</p>
      <div className="form_div">
        <form className="form_main" onSubmit={handleSubmit}>
          <div className="input_div">
            <div className="form-div">
              {/* <label>Title </label> */}
              <input
                type="text"
                name="Full Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="input-title"
                placeholder="Full Name"
                data-testid="name"
              ></input>
            </div>
            <div className="form-div">
              {" "}
              {/* <label>Title </label> */}
              <input
                type="password"
                name="Full Name"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="input-title"
                placeholder="Password"
                data-testid="password"
              ></input>
            </div>
            <div className="form-div">
              {/* <label>Title </label> */}
              <input
                type="email"
                name="Full Name"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input-title"
                placeholder="Email"
                data-testid="email"
              ></input>
            </div>
            <div className="form-div">
              <label>States</label>
              <select
                onChange={(e) => {
                  setState(e.target.value);
                  console.log(e.target.value);
                }}
                value={state}
              >
                {allStates &&
                  allStates.map((state: State, idx) => (
                    <option value={state.name} key={idx}>
                      {state.abbreviation}
                    </option>
                  ))}{" "}
              </select>
            </div>
            <div className="form-div">
              <label>Occupations</label>
              <select
                onChange={(e) => {
                  setOccupation(e.target.value);
                }}
                value={occupation}
              >
                {allOccupations &&
                  allOccupations.map((occupation: string, idx: number) => (
                    <option value={occupation} key={idx}>
                      {occupation}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="submit-button">
            <button
              className="button-submit"
              type="submit"
              disabled={isDisabled}
              data-testid="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {responseOk && <ModalMessage responseOk={responseOk} />}
    </div>
  );
}

export default Form;
