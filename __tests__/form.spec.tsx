import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "@/components/Form";
import userEvent from "@testing-library/user-event";

//@ts-expect-error
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
        await userEvent.type(screen.getByPlaceholderText("Name"), "Eslam");
        await userEvent.click(
            screen.getByText("submit", {
                exact: false,
            })
        );
        expect(screen.getByPlaceholderText("Name").nextElementSibling).toBe(
            screen.getByPlaceholderText("Email")
        );
    });
});
