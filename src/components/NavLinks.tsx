import MainLink from "./MainLink";

export default function NavLinks({
    additionalStyle,
}: {
    additionalStyle?: string;
}) {
    return (
        <nav
            role="navigation"
            aria-label="navigation"
            className={`${additionalStyle}`}
        >
            <ul role="list" className=" flex gap-x-8">
                <li role="list item">
                    <MainLink href="home" />
                </li>
                <li role="list item">
                    <MainLink href="about" />
                </li>
            </ul>
        </nav>
    );
}
