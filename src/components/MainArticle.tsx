export default function MainArticle({
    subject,
    additionalStylesForArticle,
}: {
    subject: string;
    additionalStylesForArticle?: string;
}) {
    return (
        <article
            className={`text-color-white font-[700] grid grid-cols-1  leading-[-2px] relative  ${additionalStylesForArticle}`}
        >
            <div
                aria-hidden="true"
                className=" w-10 h-1  hidden lg:block bg-color-rapture-blue"
            ></div>
            <p
                className={`leading-[1.8rem] lg:mt-20 text-center lg:text-left `}
            >
                {subject}
            </p>
        </article>
    );
}
