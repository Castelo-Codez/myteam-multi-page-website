export default function SidebarOpener({
    sidebarOpenerState,
    setNewState,
}: {
    sidebarOpenerState: boolean;
    setNewState: CallableFunction;
}) {
    return (
        <button
            type="button"
            role="button"
            aria-label="open sidebar"
            className=" md:hidden"
            title="open sidebar"
            onClick={(e) => {
                setNewState(!sidebarOpenerState);
                e.stopPropagation();
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
                <g fill="#FFF" fillRule="evenodd">
                    <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
                </g>
            </svg>
        </button>
    );
}
