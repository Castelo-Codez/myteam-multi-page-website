import { ReactNode } from "react";
import HeaderSection from "./headerSection";
import ReadyToGS from "./ReadyToGetStartedSec";

export default function MainLayout({children}: {children: ReactNode}) {
    return (
        <>
            <HeaderSection />
            {children}
            <ReadyToGS/>
        </>
    );
}
