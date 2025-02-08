export default function MainArticle({
    subject,
    additionalStyleForPattern,
    additionalStylesForPara,
}: {
    subject: string;
    additionalStyleForPattern?: string;
    additionalStylesForPara?: string;
}) {
    return (
        <article
            className={`text-color-white font-[700] grid grid-cols-1  leading-[-2px] relative  `}
        >
            <div
                aria-hidden="true"
                className={`w-10 h-1  ${additionalStyleForPattern}`}
            ></div>
            <p
                className={`leading-[1.8rem]  ${additionalStylesForPara} `}
            >
                {subject}
            </p>
        </article>
    );
}
