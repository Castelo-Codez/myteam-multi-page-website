import Image from "next/image";
import NavLinks from "./NavLinks";

export default function LeftLayer() {
    return (
        <ul className=" grid grid-cols-1 gap-y-5 sm:grid-cols-2">
            <li>
                <ul className=" grid grid-cols-1 gap-y-5 sm:gap-y-8 items-center">
                    <li>
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            className="mx-auto sm:mx-0 sm:w-[150px]"
                            width={130}
                            height={130}
                        />
                    </li>
                    <li className=" flex justify-center sm:justify-start">
                        <NavLinks />
                    </li>
                </ul>
            </li>
            <li>
                <article className=" text-color-gray font-[700] leading-[-2px] text-center sm:text-right xl:text-left ">
                    <address className=" not-italic">
                        987 Hillcrest Lane <br /> Irvine, CA <br />
                        California 92714
                    </address>
                    <span> Call Us : 949-833-7432 </span>
                </article>
            </li>
        </ul>
    );
}
