import HomeSec3 from "@/components/HomeSec3";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

//@ts-expect-error
describe("testing home section 3", () => {
    //@ts-expect-error
    test("testing content", () => {
        render(<HomeSec3 />);
        //@ts-expect-error
        expect(
            screen.getByRole("heading", {
                level: 2,
            })
        ).toBeInTheDocument(); //@ts-expect-error
        expect(
            screen
                .getByRole("heading", {
                    level: 2,
                })
                .textContent?.split(" ")
        ).toContain("Delivering"); //@ts-expect-error
        expect(screen.getAllByRole("listitem").length).toBe(3);
    });
});
