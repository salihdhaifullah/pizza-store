import { useSession } from 'next-auth/react';
import Avatar from './Avatar';
import { IoImagesOutline } from 'react-icons/io5'
import { BsLink45Deg } from 'react-icons/bs'
import { useForm } from 'react-hook-form'

interface FormData {
    title: string
    body: string
    image: string
}

const Post = () => {
    const { data: session } = useSession();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: FormData) => console.log(data);
    console.log(watch());

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-md  top-16 z-50 sticky border border-gray-300 bg-slate-100 shadow-md p-2">
            <label className="sr-only" htmlFor="title">Title</label>
            {errors.title?.message && (
                <label className="flex flex-1 justify-center items-center flex-col w-full text-red-600" htmlFor="title">{errors.title?.message}</label>
            )}
            <div className="flex items-center space-x-3">
                <Avatar />

                <input
                    {...register('title', {
                        required: "this filed is required", minLength: {
                            value: 3,
                            message: "Min length is 3 chares"
                        }
                    })}
                    disabled={!session}
                    className="p-2 pl-5 flex flex-1 rounded-md outline-none bg-gray-50"
                    type="text"
                    id="title"
                    placeholder={`${session
                        ? "Create a title for your post"
                        : "Sing in to create a post"}
                    `} />
                <IoImagesOutline className="icon" />
                <BsLink45Deg className="icon" />
            </div>

            {watch("title") && (
                <div className="min-w-full justify-center items-center flex fledx-1">
                    <label className="sr-only" htmlFor="body">body</label>

                    {errors.body?.message && (
                        <label className="flex flex-1 justify-center items-center flex-col w-full text-red-600" htmlFor="title">{errors.title?.message}</label>
                    )}

                    <input
                        {...register('body', {
                            required: "this filed is required", minLength: {
                                value: 10,
                                message: "Min length is 10 chares"
                            }
                        })}
                        disabled={!session}
                        className="p-2 pl-5 flex flex-1 rounded-md outline-none bg-gray-50"
                        type="text"
                        id="body"
                        placeholder={`${session
                            ? "Create a body for your post"
                            : "Sing in to create a post"}
                    `} />
                </div>
            )}
        </form>
    )
}

export default Post