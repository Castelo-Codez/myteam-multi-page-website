import {useForm} from "react-hook-form";
import * as zod from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = zod.object({
    name: zod
        .string()
        .min(3, {
            message: "Must Be At Least 3 Characters",
        })
        .max(20, {
            message: "Must Be At Most 20 Characters",
        })
        .refine((value) => isNaN(Number(value)), {
            message: "Name Cannot Be a Number",
        }),
    email: zod.string().email({
        message: "Invalid Email",
    }),
    company: zod
        .string({
            required_error: "Company Name Is Required",
            invalid_type_error: "Company Name Must Be A String",
        })
        .min(3, {
            message: "Must Be At Least 3 Characters",
        })
        .max(20, {
            message: "Must Be At Most 20 Characters",
        }),
    title: zod
        .string({
            required_error: "Title Is Required",
            invalid_type_error: "Title Must Be A String",
        })
        .min(3, {
            message: "Must Be At Least 3 Characters",
        })
        .max(10, {
            message: "Must Be At Most 10 Characters",
        }),
    message: zod.string(),
});

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data: any) => {
        if (!data) {
            return console.log("errors");
        }
        return console.log(data);
    };
    return (
        <form
            className=" flex flex-col gap-y-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                className=" block p-4 bg-transparent border-b font-[700] text-color-white text-[1rem]  border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
                id="name"
                placeholder="Name"
                {...register("name")}
            />
            {errors.name?.message && (
                <p className="  text-color-light-coral">
                    {errors.name?.message as string}
                </p>
            )}

            <input
                placeholder="Email"
                className=" block p-4 bg-transparent border-b font-[700] text-color-white text-[1rem]  border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
                id="email"
                {...register("email")}
            />
            {errors.email?.message && (
                <p className="  text-color-light-coral">
                    {errors.email?.message as string}
                </p>
            )}

            <input
                placeholder="Company"
                className=" block p-4 bg-transparent border-b font-[700] text-color-white text-[1rem]  border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
                id="company"
                {...register("company")}
            />
            {errors.company?.message && (
                <p className="  text-color-light-coral">
                    {errors.company?.message as string}
                </p>
            )}

            <input
                placeholder="Title"
                className=" block p-4 bg-transparent border-b font-[700] text-color-white text-[1rem]  border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
                id="title"
                {...register("title")}
            />
            {errors.title?.message && (
                <p className="  text-color-light-coral">
                    {errors.title?.message as string}
                </p>
            )}

            <textarea
                placeholder="Message *optional"
                {...register("message")}
                id="message"
                className=" resize-none p-4 bg-transparent font-[700] border-b text-color-white text-[1rem]  border-b-color-white focus-within:outline-none focus-within:border-color-rapture-blue"
            ></textarea>
            <input
                className=" block py-3 px-8 w-fit bg-color-white rounded-full text-[1.1rem] font-[900] mt-5 cursor-pointer"
                type="submit"
                value="Submit"
            />
        </form>
    );
}
