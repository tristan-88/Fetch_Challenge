import {
  render,
  fireEvent,
  screen,
} from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import Form from "./Form";
import {
  fetchFormData,
  postingFormData,
} from "../../utils/apiHandler";
import axios from "axios";
import FeedbackMessage from "../FeedbackMessage/FeedbackMessage";

jest.mock("axios");

describe("Submit Button Disable/Enable", () => {
  test("Disabled (Submit Button) if user does not fill input fields", () => {
    render(<Form />);

    const submitButton = screen.getByTestId("submit");

    expect(submitButton).toHaveProperty("disabled", true);
  });

  test("Enables (Submit Button) if fields are not empty", () => {
    render(<Form />);

    const submitButton = screen.getByTestId("submit");
    const nameInput = screen.getByTestId("name");
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");

    //setting values to input fields to
    fireEvent.change(nameInput, { target: { value: "tristan sanjuan" } });
    fireEvent.change(emailInput, { target: { value: "tristan@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect((nameInput as HTMLInputElement).value).toBe("tristan sanjuan");
    expect((emailInput as HTMLInputElement).value).toBe("tristan@gmail.com");
    expect((passwordInput as HTMLInputElement).value).toBe("password");
    expect(submitButton).toHaveProperty("disabled");
  });
});

describe("Api Functions", () => {
  test("Get Options and States structure and values from Api call", async () => {
    const url = "https://frontend-take-home.fetchrewards.com/form";
    const testResponse = {
      data: {
        occupations: ["Head of Shrubbery"],
        states: [
          {
            name: "Alabama",
            abbreviation: "AL",
          },
        ],
      },
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
      testResponse
    );
    const mockFetchData = await fetchFormData(url);
    expect(mockFetchData).toEqual(testResponse);
    expect(mockFetchData.data).toHaveProperty("occupations");
    expect(mockFetchData.data).toHaveProperty("states");
  });

  test("Get successful result of the API call", async () => {
    const apiUrl = "https://frontend-take-home.fetchrewards.com/form";
    const testResponse = {
      status: 200,
      data: {
        occupations: ["Head of Shrubbery"],
        states: [
          {
            name: "Alabama",
            abbreviation: "AL",
          },
        ],
      },
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
      testResponse
    );
    const mockFetchData = await fetchFormData(apiUrl);
    expect(mockFetchData.data).toBeDefined();
    expect(mockFetchData.status).toBeGreaterThan(0);
    expect(mockFetchData.status).toBeGreaterThanOrEqual(200);
  });
});

describe("POST API", () => {
  test("Post Api of 200", async () => {
    const url = "https://frontend-take-home.fetchrewards.com/form";
    const testResponse = {
      data: {
        name: "Tristan",
        email: "tasj3188@gmail.com",
        password: "tsjtsj1234",
        occupation: "Gainfully Unemployed",
        state: "Arizona",
        id: "df138b94-8f2f-45eb-b65a-a896dc7e6da2",
      },
      status: 201,
    };
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue(
      testResponse
    );

    const response = await postingFormData(url, {
      name: "Tristan",
      email: "tasj3188@gmail.com",
      password: "tsjtsj1234",
      occupation: "Gainfully Unemployed",
      state: "Arizona",
    });

    expect(response).toEqual(testResponse);
    expect(response.data).toBeDefined();
    expect(response.status).toBeGreaterThanOrEqual(201);
  });

  test("Posting to Api and testing onSubmit with feedback div showing after.", async () => {
    render(<Form />);

    const submitButton = screen.getByTestId("submit");
    const nameInput = screen.getByTestId("name");
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(nameInput, { target: { value: "tristan sanjuan" } });
    fireEvent.change(emailInput, { target: { value: "tristan@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect((nameInput as HTMLInputElement).value).toBe("tristan sanjuan");
    expect((emailInput as HTMLInputElement).value).toBe("tristan@gmail.com");
    expect((passwordInput as HTMLInputElement).value).toBe("password");
    expect(submitButton).toHaveProperty("disabled");

    render(<FeedbackMessage responseOk={true} />);
    const messageDiv = screen.getByTestId("feedback");
    expect(messageDiv.innerHTML).toEqual(
      "Form has been successfully Submitted"
    );
  });

  test("Error Div and message to show if error on submit", () => {
    render(<FeedbackMessage responseOk={false} />);

    const messageDivError = screen.getByTestId("feedback");

    expect(messageDivError.innerHTML).toEqual(
      "Error has occurred please look at the console"
    );
  });
});
