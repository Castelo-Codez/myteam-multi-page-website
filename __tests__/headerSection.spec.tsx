import "@testing-library/jest-dom";
import {screen, render} from "@testing-library/react";
import HeaderSection from "@/components/headerSection";
import useEvent from "@testing-library/user-event";
//@ts-expect-error
describe("test header section", () => {
    //@ts-expect-error
    test("check the content", () => {
        render(<HeaderSection />); //@ts-expect-error
        expect(screen.getByTestId("header")).toBeInTheDocument(); //@ts-expect-error
        expect(screen.getByAltText("logo")).toBeInTheDocument();
    }); //@ts-expect-error
    test("check clicking in the hamburger button will show the sidbar", async () => {
        const headerSec = render(<HeaderSection />);
        const user = useEvent.setup();
        const sidebarOpener = headerSec.getByTitle("open sidebar");
        const sidebar = headerSec.getByTestId("aside-1"); //@ts-expect-error
        expect(sidebarOpener).toBeInTheDocument(); //@ts-expect-error
        expect(sidebar).toBeInTheDocument(); //@ts-expect-error
        expect(sidebarOpener).toBeVisible(); //@ts-expect-error
        expect(sidebar).not.toBeVisible();
        await user.click(sidebarOpener); //@ts-expect-error
        expect(sidebar).toBeVisible();
    });
});
