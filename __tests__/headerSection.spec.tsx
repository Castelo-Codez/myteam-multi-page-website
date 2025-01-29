import HeaderSection from "@/components/headerSection";
import "@testing-library/jest-dom";
import {render} from "@testing-library/react";

describe("test header section", () => {
    it("check the content", () => {
        const headerSec = render(<HeaderSection />);
        expect(headerSec.getByRole("banner")).toBeInTheDocument();
        expect(headerSec.getByAltText("logo")).toBeInTheDocument();
        const sidebarOpener = headerSec.getByTitle("open sidebar");
        const sidebar = headerSec.asFragment().querySelector("aside");
        expect(sidebarOpener).toBeInTheDocument();
    });
});
