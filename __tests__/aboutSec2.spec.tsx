import AboutSec2 from "@/components/AboutSec2";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";

//@ts-expect-error
describe("testing about section 2", () => {
    //@ts-expect-error
    test("testing content", () => {
        render(<AboutSec2 />);
        //@ts-expect-error
        expect(
            screen.getByRole("heading", {
                level: 2,
            })
        ).toBeInTheDocument(); //@ts-expect-error
        expect(
            screen.getByRole("heading", {
                level: 2,
            }).textContent
        ).toBe("Meet the directors"); //@ts-expect-error
        expect(screen.getAllByRole("list")[0
            
        ].children.length).toBe(6);
    });
});
