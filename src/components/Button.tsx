export default function Button({
    isLight,
    additionalStyle = "",
}: {
    isLight: boolean;
    additionalStyle?: string;
}) {
    return (
        <>
            {isLight ? (
                <button
                    className={
                        " py-[8px] px-[25px]  rounded-3xl font-[500] text-[1rem]   border-[2px] border-white " +
                        additionalStyle
                    }
                    aria-label="contact us"
                    title="contact us"
                    type="button"
                    role="button"
                >
                    contact us
                </button>
            ) : (
                <button
                    className={
                        " py-[8px] px-[25px] rounded-23l  font-[500] text-[1rem]    border-[2px] border-p-cyprus " +
                        additionalStyle
                    }
                    aria-label="contact us"
                    title="contact us"
                    type="button"
                    role="button"
                >
                    contact us
                </button>
            )}
        </>
    );
}
