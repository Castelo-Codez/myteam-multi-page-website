import HomeSec2 from "@/components/HomeSec2";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

//@ts-expect-error
describe("testing home section 2", () => {
    //@ts-expect-error
    it("testing content exist or not", () => {
        render(<HomeSec2 />); //@ts-expect-error
        expect(screen.getAllByRole("paragraph")[0]).toBeInTheDocument(); //@ts-expect-error
        expect(screen.getAllByRole("paragraph")[0].textContent).toBe(
            "Build & manage distributed teams like no one else."
        ); //@ts-expect-error
        expect(
            screen.getAllByRole("listitem")[0].querySelector("p")?.textContent
        ).toBe(
            "Our network is made up of highly experienced professionals who are passionate about what they do."
        ); //@ts-expect-error
        expect(
            screen.getAllByRole("listitem")[1].querySelector("p")?.textContent
        ).not.toBe(
            "Our network is made up of highly experienced professionals who are passionate about what they do."
        ); //@ts-expect-error
        expect(
            screen.getByText(
                "Our processes have been refined over years of implementation meaning our teams always deliver.",
                {
                    exact: true,
                }
            )
        ).toBeInTheDocument();
    });
});
