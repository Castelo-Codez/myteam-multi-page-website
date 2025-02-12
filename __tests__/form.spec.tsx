import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "@/components/Form";
import userEvent from "@testing-library/user-event";

describe("testing form component", () => {
    test("test number 1 => user click submit without any info", async () => {
        render(<Form />);
        await userEvent.click(
            screen.getByText("submit", {
                exact: false,
            })
        );
        const errorMessages = screen.getAllByRole("paragraph");
        expect(errorMessages.length).toBe(4);
        expect(errorMessages[0].textContent).toBe(
            "Must Be At Least 3 Characters"
        );
        expect(errorMessages[1].textContent).toBe("Invalid Email");
        expect(errorMessages[0].textContent).toBe(
            "Must Be At Least 3 Characters"
        );
        expect(errorMessages[0].textContent).toBe(
            "Must Be At Least 3 Characters"
        );
    });
    test("test number 2 => validate Name Input and insure that the value is not a numeric value", async () => {
        render(<Form />);
        await userEvent.click(
            screen.getByText("submit", {
                exact: false,
            })
        );
        expect(screen.getAllByRole("paragraph")[0].textContent).toBe(
            "Must Be At Least 3 Characters"
        );
        await userEvent.type(screen.getByPlaceholderText("Name"), "12315");
        const ErrorPara = screen.getAllByRole("paragraph")[0];
        expect(ErrorPara.textContent).toBe("Name Cannot Be a Number");
        await userEvent.type(
            screen.getByPlaceholderText("Name"),
            "Eslam Gomaa"
        );
        expect(screen.getByPlaceholderText("Name").nextElementSibling).toBe(
            screen.getByPlaceholderText("Email")
        );
    });
    test("test number 3 => validate Email Input and insure that received Email is Correct", async () => {
        render(<Form />);
        await userEvent.click(
            screen.getByText("submit", {
                exact: false,
            })
        );
        expect(screen.getAllByRole("paragraph")[1].textContent).toBe(
            "Invalid Email"
        );
        const EmailInput = screen.getByPlaceholderText("Email");
        await userEvent.type(EmailInput, "castelo132@.com");
        expect(screen.getAllByRole("paragraph")[1].textContent).toBe(
            "Invalid Email"
        );
        EmailInput.value = "";
        await userEvent.type(EmailInput, "castelo132@gmail");
        expect(screen.getAllByRole("paragraph")[1].textContent).toBe(
            "Invalid Email"
        );
        EmailInput.value = "";
        await userEvent.type(
            screen.getByPlaceholderText("Email"),
            "castelo132@gmail.com"
        );
        expect(screen.getByPlaceholderText("Email").nextElementSibling).toBe(
            screen.getByPlaceholderText("Company")
        );
    });
    test("test number 4 => validate company Input and insure that is not empty and min is 3 and max is 20", async () => {
        render(<Form />);
        const titleInput = screen.getByPlaceholderText("Company");
        await userEvent.click(screen.getByText("Submit"));
        expect(screen.getAllByRole("paragraph")[3].textContent).toBe(
            "Must Be At Least 3 Characters"
        );
        await userEvent.type(titleInput, "ds");
        expect(screen.getAllByRole("paragraph")[3].textContent).toBe(
            "Must Be At Least 3 Characters"
        );
        titleInput.value = "";
        await userEvent.type(titleInput, "twitter");
        expect(titleInput.nextElementSibling).toBe(
            screen.getByPlaceholderText("title", {
                exact: false,
            })
        );
    });
    test("test number 5 => validate title input and insure that is not empty and min is 3 and max is 20", async () => {
        render(<Form />);
        const titleInput = screen.getByPlaceholderText("Title");
        await userEvent.click(screen.getByText("Submit"));
        expect(screen.getAllByRole("paragraph")[2].textContent).toBe(
            "Must Be At Least 3 Characters"
        );
        await userEvent.type(titleInput, "ds");
        expect(screen.getAllByRole("paragraph")[2].textContent).toBe(
            "Must Be At Least 3 Characters"
        );
        titleInput.value = "";
        await userEvent.type(titleInput, "twitter");
        expect(titleInput.nextElementSibling).toBe(
            screen.getByPlaceholderText("message", {
                exact: false,
            })
        );
    });
});
