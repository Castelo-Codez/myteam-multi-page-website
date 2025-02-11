import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutSec3 from "@/components/AboutSec3";

//@ts-expect-error

describe("testing about section 3", () => {
    //@ts-expect-error
    test("testing content", () => {
        render(<AboutSec3 />); //@ts-expect-error
        expect(
            screen.getByRole("heading", {
                level: 2,
            })
        ).toBeInTheDocument();
        //@ts-expect-error
        expect(
            screen.getByRole("heading", {
                level: 2,
            }).textContent
        ).toBe("Some of our clients"); //@ts-expect-error
        expect(screen.getAllByRole("listitem").length).toBe(5);
    });
});
