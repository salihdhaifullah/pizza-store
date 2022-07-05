import Avatar from './Avatar';
import { IoImagesOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'
import supabase from '../libs/supabase/supabaseClient';
import { v4 } from 'uuid';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import prisma from './../libs/prisma/prisma';

interface FormData {
    title: string
    body: string
    image: File | null,
    tags: string
}

const Post = () => {
    const { data: session } = null as any;
    const FileRef = useRef<HTMLInputElement | null>(null)
    const [haveTags, setHaveTags] = useState(false)


    const [form, setForm] = useState<FormData>({
        title: '',
        body: '',
        image: null,
        tags: ''
    });

    const { title, body, image } = form;

    useEffect(() => {
        console.log(session)
    }, [session])

    useEffect(() => {
        const tags = form.tags.split(' ').filter(tag => tag.length > 0)
    }, [form.tags])


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        // if (haveTags && form.tags.length > 0) {
        //     setTagsArray(form.tags.split(' ').filter(tag => tag.length > 0))
        // }

        if (session) {
            e.preventDefault();
            if (image && title && body) {
                const baseImageUrl = 'https://myfemqoikddiauxrrwoj.supabase.co/storage/v1/object/public/images'
                const imageUrl = `${session.user?.name}/${v4()}`
            //     try {
            //         await supabase.storage.from("images").upload(imageUrl, image)
            //         await client.query({
            //             query: INSERT_POST,
            //             variables: {
            //                 title: title,
            //                 body: body,
            //                 image: `${baseImageUrl}/${imageUrl}`,
            //                 tags: form.tags,
            //                 userName: session.user?.name
            //             }
            //         })
            //         console.log('success');
            //     }
            //     catch (error: any) {
            //         console.log(error);
            //         throw new Error(error)
            //     }
            //     return;
            // }
            // if (title && body) {
            //     try {
            //         await client.query({
            //             query: INSERT_POST,
            //             variables: {
            //                 title,
            //                 body,
            //                 image: null,
            //                 tags: form.tags,
            //                 userName: session.user?.name,
            //             }
            //         })
            //         console.log('success');
            //     } catch (error: any) {
            //         console.log(error);
            //     }
            }
        }
    };

    const clear = () => {
        setForm({
            title: '',
            body: '',
            image: null,
            tags: ''
        })
    }


    return (
        <form onSubmit={(e) => onSubmit(e)} className="rounded-md p-4 top-16 z-50 sticky border border-gray-300 bg-slate-100 shadow-md">
            <div className="flex items-center space-x-3 ">
                <label className="sr-only" htmlFor="title">Title:{" "}</label>
                <Avatar shadow />

                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, title: e.target.value })}
                    disabled={!session}
                    required
                    className="p-2 pl-5 focus:border shadow-md border-blue-600 flex flex-1 rounded-md outline-none bg-gray-50"
                    type="text"
                    value={form.title}
                    id="title"
                    placeholder={`${session
                        ? "Create a title for your post"
                        : "Sing in to create a post"}
                    `} />

                <div className='relative group w-fit flex'>

                    <label htmlFor="image" className="">
                        <IoImagesOutline className={`icon ${image && "text-blue-500"} group  `} />
                        <input
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setForm({ ...form, image: e.currentTarget.files![0] }) }}
                            disabled={!session}
                            className="w-0 h-0 z-[0] opacity-0 border-0 absolute"
                            type="file"
                            ref={FileRef}
                            accept="image/*"
                            id="image"
                            placeholder={`${session
                                ? "upload an image for your post"
                                : "Sing in to create a post"}
                                    `} /> </label>

                    <div className="absolute bg-white group-hover:flex text-center transition-all shadow-md hidden rounded-md top-[-45px] right-[30px] p-1 z-[400]">
                        <p className="text-gray-700 text-sm p-1 w-[50px] h-[50px]">{image ? "upload success" : "Upload image"}</p>
                    </div>
                </div>

                <div onClick={() => setHaveTags(true)} className='relative group w-fit flex'>
                    <BsLink45Deg className="icon group  " />
                    <div className="absolute bg-white group-hover:flex text-center transition-all shadow-md hidden rounded-md top-[-45px] right-[30px] p-1 z-[400]">
                        <p className="text-gray-700 text-sm p-1 w-[50px] h-[50px]">Add tags</p>
                    </div>
                </div>

            </div>
            {form.title && (
                <>
                    {haveTags && (
                        <div className="flex flex-row items-center space-y-2">
                            <label className="mr-5 font-bold text-lg" htmlFor="tags">Tags:{" "}</label>
                            <input
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, tags: e.target.value })}
                                disabled={!session}
                                required
                                className="p-2 pl-5 focus:border shadow-md border-blue-600 flex flex-1 rounded-md outline-none bg-gray-50"
                                type="text"
                                value={form.tags}
                                id="tags"
                                placeholder={`${session
                                    ? "Add tags"
                                    : "Sing in to create a post"}
                                    `} />
                            <AiOutlineClose onClick={() => setHaveTags(false)} className='icon mx-7' />
                        </div>
                    )}
                    <div className="flex items-center mt-4 px-8 ">
                        <label htmlFor="post" className="sr-only">Post</label>
                        <div className="flex items-center justify-center flex-1">
                            <textarea id="post"
                                required
                                value={form.body}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, body: e.target.value })}
                                className="min-h-[40vh] focus:border border-blue-600 shadow-md p-2 flex flex-1 outline-none bg-gray-50  border-0 text-gray-900 rounded-md"
                                placeholder="Create your Post body">
                            </textarea>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 w-full px-8 py-2.5 text-lg'>
                        <button className=" text-white shadow-md bg-blue-500  p-[6px] rounded-md" type="submit">
                            {session ? "Create Post" : "Sing in to create a post"}
                        </button>

                        <button onClick={clear} className=" p-[6px] shadow-md text-gray-900 bg-gray-400 rounded-md" type="button">
                            Clear post
                        </button>
                    </div>
                </>
            )}
        </form>
    )
}

export default Post