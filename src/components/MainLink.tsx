import Link from "next/link";

export default function MainLink({href}: {href: string}) {
    if (href == "home") {
        href = "";
    }
    return (
        <Link className="text-color-white text-[1.2rem] font-[600]" href={`/${href}`}>
            {href === "" ? "home" : href}
        </Link>
    );
}
