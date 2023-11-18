import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

const renderApp = () => {
    render(<App />);
    const nameLabel = screen.getByText(/이름/i);
    const nameInput = screen.getByRole("textbox");
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");
    return {nameLabel,nameInput,checkbox,button};
}

describe("App", () => {
  test("Label과 Input 그리고 버튼이 제대로 렌더링 되어야 함", () => {
    // arrange
    const {nameLabel,nameInput,checkbox,button} = renderApp();

    // assert
    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("이름을 입력하고 약관에 동의한 다음 버튼을 클릭하면 Alert 창으로 입력한 값이 출력되어야 함", () => {
    // arrange
    const alertMock = jest.fn();
    window.alert = alertMock;
    const {nameInput,checkbox,button} = renderApp();

    // act
    fireEvent.change(nameInput, { target: { value: "junsuk" } });
    fireEvent.click(checkbox);
    fireEvent.click(button);

    // assert
    expect(alertMock).toHaveBeenCalledWith("name: junsuk");
  });

  test("약관에 동의하지 않으면 alert 창이 출력되지 말아야 함", () => {
    // arrange
    const alertMock = jest.fn();
    window.alert = alertMock;
    const {nameInput,button} = renderApp();

    // act
    fireEvent.change(nameInput, { target: { value: "junsuk" } });
    fireEvent.click(button);

    // assert
    expect(alertMock).not.toHaveBeenCalled();
  });
});
