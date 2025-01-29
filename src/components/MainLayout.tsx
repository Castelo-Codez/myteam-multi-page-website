import { ReactNode } from "react";
import HeaderSection from "./headerSection";

export default function MainLayout({children}: {children: ReactNode}) {
    return (
        <>
            <HeaderSection />
            {children}
        </>
    );
}
