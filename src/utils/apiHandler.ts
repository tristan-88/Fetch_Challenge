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
  try{const { setAllStates, setAllOccupation } = setStateHooks;
    const response = await fetchFormData(url);
    if (response) {
      const { states, occupations } = response.data;
    setAllStates(states);
    setAllOccupation(occupations);
    }
  } catch(e) {
    console.error(e)
  }
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
    const response = await axios.post(url, args).catch();
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
