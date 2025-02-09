import {useRouter} from "next/router";

export default function Button({
    isLight,
    additionalStyle = "",
}: {
    isLight: boolean;
    additionalStyle?: string;
}) {
    const router = useRouter();
    return (
        <>
            {isLight ? (
                <button
                    className={
                        " py-[8px] px-[40px]  rounded-3xl font-[700] text-[1.2rem]   border-[2px] border-white " +
                        additionalStyle
                    }
                    onClick={() => {
                        router.push("/contact-us");
                    }}
                    aria-label="contact us"
                    title="contact us"
                    role="link"
                >
                    contact us
                </button>
            ) : (
                <button
                    className={
                        " py-[8px] px-[40px] rounded-3xl  font-[700] text-[1.2rem]    border-[2px]  border-color-dark-green " +
                        additionalStyle
                    }
                    onClick={() => {
                        router.push("/contact-us");
                    }}
                    aria-label="contact us"
                    title="contact us"
                    role="link"
                >
                    contact us
                </button>
            )}
        </>
    );
}
