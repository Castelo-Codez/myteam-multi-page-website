import "@testing-library/jest-dom";
import {screen, render} from "@testing-library/react";
import HeaderSection from "@/components/headerSection";
import useEvent from "@testing-library/user-event";

describe("test header section", () => {
    test("check the content", () => {
        render(<HeaderSection />);
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByAltText("logo")).toBeInTheDocument();
    });
    test("check clicking in the hamburger button will show the sidbar", async () => {
        const headerSec = render(<HeaderSection />);
        const user = useEvent.setup();
        const sidebarOpener = headerSec.getByTitle("open sidebar");
        const sidebar = headerSec.getByTestId("aside-1");
        expect(sidebarOpener).toBeInTheDocument();
        expect(sidebar).toBeInTheDocument();
        expect(sidebarOpener).toBeVisible();
        expect(sidebar).not.toBeVisible();
        await user.click(sidebarOpener);
        expect(sidebar).toBeVisible();
    });
});
