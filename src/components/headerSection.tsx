import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import {useState} from "react";
import MainSideBar from "./Sidebar";
import SidebarOpener from "./SidebarOpener";
import NavLinks from "./NavLinks";
export default function HeaderSection() {
    const [sidebarOpenerState, setNewState] = useState<boolean>(false);
    return (
        <header
            role="banner"
            data-testid="header"
            aria-label="header"
            className="py-14  text-white bg-color-midnight-green"
        >
            <div className="container text-color-white flex items-center justify-between flex-wrap">
                <div className=" flex gap-x-14 items-center">
                    <Link href="/">
                        <Image
                            alt="logo"
                            src="/logo.svg"
                            height={150}
                            role="img"
                            width={100}
                            loading="lazy"
                            className="sm:w-full"
                        />
                    </Link>
                    <NavLinks additionalStyle="hidden md:block" />
                </div>
                <Button isLight={true} additionalStyle="hidden md:block" />
                <SidebarOpener
                    sidebarOpenerState={sidebarOpenerState}
                    setNewState={setNewState}
                />
                <MainSideBar
                    sidebarOpenerState={sidebarOpenerState}
                    setNewState={setNewState}
                />
            </div>
        </header>
    );
}
