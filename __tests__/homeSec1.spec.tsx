import HomeSec1 from "@/components/HomeSec1";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
 //@ts-expect-error
describe(" testing home section 1 content", () => {
    //@ts-expect-error
    test("testing content exist or not", () => {
        render(<HomeSec1 />);
        //@ts-expect-error
        expect(
            screen.getByRole("heading", {
                level: 1,
            })
        ).toBeInTheDocument(); //@ts-expect-error
        expect(
            screen.getByText("inding the right people and b", {
                exact: false,
            })
        ).toBeInTheDocument();
    });
});
