import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

export interface SetStatesOccupations {
  setAllStates: Dispatch<SetStateAction<[]>>;
  setAllOccupation: Dispatch<SetStateAction<string[]>>;
}

export async function fetchFormData(url: string) {
  const response = await axios.get(url);
  return response;
}

export async function getFormData(
  url: string,
  setStateHooks: SetStatesOccupations
) {
  const { setAllStates, setAllOccupation } = setStateHooks;
  const response = await fetchFormData(url);
  const { states, occupations } = response.data;
  setAllStates(states);
  setAllOccupation(occupations);
}

interface SetStateResponse {
  setResponseOk: Dispatch<SetStateAction<boolean>>;
}

interface FormFields {
  name: string;
  email: string;
  password: string;
  occupation: string;
  state: string;
}

export async function postingFormData (url: string, args: FormFields){
    const response = await axios.post(url, args);
    return response;
}

export async function postFormData(
  url: string,
  setStateHooks: SetStateResponse,
  args: FormFields
) {
  const { setResponseOk } = setStateHooks;
  try {
    const response = await postingFormData(url, args)
    if (response.status === 201) {
      setResponseOk(true);
    }
  } catch (e) {
    setResponseOk(false);
    console.error(e);
  }
}
