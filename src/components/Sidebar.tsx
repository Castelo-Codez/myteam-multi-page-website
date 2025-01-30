import Button from "./Button";
import MainLink from "./MainLink";

export default function MainSideBar({
    sidebarOpenerState,
    setNewState,
}: {
    sidebarOpenerState: boolean;
    setNewState: CallableFunction;
}) {
    return (
        <aside
            data-testid="aside-1"
            style={{
                visibility: sidebarOpenerState ? "visible" : "hidden",
            }}
            className={`fixed w-[260px]  md:hidden transition duration-150 bg-color-police-blue   h-full z-[1111] top-0 right-0 ${
                sidebarOpenerState
                    ? 'translate-x-0 visible after:content-[""] after:absolute after:top-0 after:h-full after:md:hidden  after:bg-color-overlay after:w-[1000px] after:right-[260px]'
                    : "translate-x-full invisible "
            }`}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <ul role="list" className="py-14 p-8">
                <li role="listitem" className="flex justify-end mb-14">
                    <button
                        type="button"
                        aria-label="close sidebar"
                        title="close sidebar"
                        onClick={() => {
                            setNewState(!sidebarOpenerState);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="17"
                        >
                            <path
                                fill="#FFF"
                                fillRule="evenodd"
                                d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                            />
                        </svg>
                    </button>
                </li>
                <li role="listitem" className=" mb-7">
                    <MainLink href="home" />
                </li>
                <li role="listitem" className="mb-14">
                    <MainLink href="about" />
                </li>
                <li role="listitem" className="mb-11 flex justify-center">
                    <Button isLight={true} additionalStyle="px-[38px]" />
                </li>
            </ul>
            <div aria-hidden={true} className=" absolute bottom-44 -right-14">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                >
                    <g fill="none" fillRule="evenodd">
                        <path fill="#2C6269" d="M100 100H0V0h100z" />
                        <path
                            fill="#F67E7E"
                            d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"
                        />
                        <path
                            fill="#79C8C7"
                            d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"
                        />
                    </g>
                </svg>
            </div>
        </aside>
    );
}
