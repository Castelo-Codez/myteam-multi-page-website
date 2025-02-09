import AboutSec1 from "@/components/AboutSec1";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";

//@ts-expect-error
describe("testing about section 1", () => {
    //@ts-expect-error
    test("testing content", () => {
        render(<AboutSec1 />); //@ts-expect-error
        expect(
            screen.getByRole("heading", {
                level: 1,
            })
        ).toBeInTheDocument(); //@ts-expect-error
        expect(
            screen.getByText("About", {
                exact: true,
            })
        ).toBeVisible();
        //@ts-expect-error
        expect(screen.getByRole("paragraph").textContent?.split(" ")).toContain(
            "dynamic"
        ); //@ts-expect-error 
        expect(
            screen.getByRole("paragraph").textContent?.split(" ").length
        ).toBeGreaterThan(10);
    });
});
