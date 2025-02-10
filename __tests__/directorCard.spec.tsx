import DirectorCard from "@/components/DirectorCard";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//@ts-expect-error
describe("testing director card", () => {
    //@ts-expect-error

    it("testing content", async () => {
        render(
            <DirectorCard
                director="Cristian Duncan"
                position="Co-founder & COO"
                quote="Distributed teams required unique processes. You need to approach work in a new way."
            />
        ); //@ts-expect-error
        expect(
            screen.getAllByRole("heading", {
                level: 4,
            })[0]
        ).toBeInTheDocument(); //@ts-expect-error
        expect(
            screen.getAllByRole("heading", {
                level: 4,
            })[0].textContent
        ).toBe("Cristian Duncan"); //@ts-expect-error
        expect(
            screen.getAllByRole("heading", {
                level: 4,
            })[1].textContent
        ).toBe("Cristian Duncan");
        await userEvent.click(screen.getByRole("button")); //@ts-expect-error
        expect(screen.getByRole("button").previousElementSibling?.classList).toContain(
            "-rotate-y-180"
        );
    });
});
