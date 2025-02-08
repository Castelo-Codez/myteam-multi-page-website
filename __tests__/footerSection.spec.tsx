import "@testing-library/jest-dom";
import Footer from "@/components/Footer";
import {render, screen} from "@testing-library/react";
//@ts-expect-error
describe("testing footer comp", () => {
    //@ts-expect-error
    test("check the content", () => {
        render(<Footer />); //@ts-expect-error
        expect(screen.getByAltText("logo")).toBeInTheDocument(); //@ts-expect-error
        expect(
            screen.getByText("987 Hillcrest Lane", {
                exact: false,
            })
        ).toBeInTheDocument(); //@ts-expect-error
        expect(screen.getAllByRole("link").length).toBe(5); //@ts-expect-error
        expect(
            screen.getByText("Copyright 2020. All Rights Reserved")
        ).toBeVisible();
    });
});
