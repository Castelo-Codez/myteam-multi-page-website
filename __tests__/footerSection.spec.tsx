import "@testing-library/jest-dom";
import Footer from "@/components/Footer";
import {render, screen} from "@testing-library/react";

describe("testing footer comp", () => {
    test("check the content", () => {
        render(<Footer />);
        expect(screen.getByAltText("logo")).toBeInTheDocument();
        expect(
            screen.getByText("987 Hillcrest Lane", {
                exact: false,
            })
        ).toBeInTheDocument();
        expect(screen.getAllByRole("link").length).toBe(5);
        expect(
            screen.getByText("Copyright 2020. All Rights Reserved")
        ).toBeVisible();
    });
});
