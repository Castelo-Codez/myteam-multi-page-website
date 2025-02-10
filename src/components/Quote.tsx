import Image from "next/image";

export default function Quote({
    quote,
    author,
    position,
}: {
    quote: string;
    author: string;
    position: string;
}) {
    const [firstName, lastName] = author.split(" ");
    return (
        <li className=" relative flex z-10 flex-col gap-y-3 items-center">
            <q className=" text-center text-color-white font-[500]">{quote}</q>
            <article className=" text-center">
                <h4 className=" text-color-rapture-blue text-[1.3rem] font-[700]">
                    {author}
                </h4>
                <h5 className=" italic text-[0.9rem] font-[500] text-gray-200">
                    {position}
                </h5>
            </article>
            <Image
                src={`/avatar-${firstName}-${lastName}.jpg`}
                alt={author}
                width={70}
                height={70}
                className=" rounded-full"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/spiner.svg"
            ></Image>

            <div
                aria-hidden="true"
                className=" absolute z-[-1] -top-5 left-2/4 -translate-x-2/4"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="56">
                    <path
                        fill="#2C6269"
                        d="M51.273 56c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C63.976 7.782 65.286 4.069 67 0H55.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C36.857 31.23 36 35.4 36 39.063c0 5.391 1.361 9.562 4.083 12.512C42.805 54.525 46.535 56 51.273 56zm-36 0c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C27.976 7.782 29.286 4.069 31 0H19.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C.857 31.23 0 35.4 0 39.063c0 5.391 1.361 9.562 4.083 12.512C6.805 54.525 10.535 56 15.273 56z"
                    />
                </svg>
            </div>
        </li>
    );
}
