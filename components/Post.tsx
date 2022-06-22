import { useSession } from 'next-auth/react';
import Avatar from './Avatar';
import { IoImagesOutline } from 'react-icons/io5'
import { BsLink45Deg } from 'react-icons/bs'
import supabase from '../lib/supabaseClient';
import {v4} from 'uuid';
import { ChangeEvent, FormEvent, MutableRefObject, useRef, useState } from 'react';

interface FormData {
    title: string
    body: string
    image: File | null
}

const Post = () => {
    const { data: session } = useSession();
    const FileRef = useRef<HTMLInputElement | null>(null)


    const [form, setForm] = useState<FormData>({
        title: '',
        body: '',
        image: null
    });

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        if (session) {
            e.preventDefault();
            const { title, body, image } = form;
            if (image && title && body) {
                console.log(image);
                const { data, error } = await supabase.storage.from("images").upload(`${session?.user?.name}/${v4()}`, image)
                if (error) {
                    console.log(error);
                } else {
                    console.log(data);
                }
            }
        }
    };



    return (
        <form onSubmit={(e) => onSubmit(e)} className="rounded-md  top-16 z-50 sticky border border-gray-300 bg-slate-100 shadow-md p-2">
            {/* {true && (
                <label className="flex flex-1 justify-center items-center flex-col w-full text-red-600" htmlFor="title">{true}</label>
            )} */}
            <div className="flex items-center space-x-3">
                <label className="text-gray-700 text-lg font-bold" htmlFor="title">Title:{" "}</label>

                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, title: e.target.value })}
                    disabled={!session}
                    className="p-2 pl-5 flex flex-1 rounded-md outline-none bg-gray-50"
                    type="text"
                    id="title"
                    placeholder={`${session
                        ? "Create a title for your post"
                        : "Sing in to create a post"}
                    `} />

                {/* <IoImagesOutline className="icon" />
                <BsLink45Deg className="icon" /> */}

            </div>

            <div className="min-w-full flex flex-1">
                <label htmlFor="post" className="text-gray-700 mr-4  text-lg font-bold">Post:{" "}</label>
                <div className="flex items-center space-x-3 flex-1">
                    <textarea id="post"
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, body: e.target.value })}
                        className="min-h-[40vh] max-h-[40vh] flex outline-none border-0 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg"
                        placeholder="Create your Post body">
                    </textarea>
                </div>
            </div>

            <div className="min-w-full justify-center items-center flex flex-1">
                <label htmlFor="image" className="text-gray-700 mr-4  text-lg font-bold">Post:{" "}</label>

                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setForm({ ...form, image: e.currentTarget.files![0] }) }}
                    disabled={!session}
                    className="p-2 pl-5 flex flex-1 rounded-md outline-none bg-gray-50"
                    type="file"
                    ref={FileRef}
                    accept="image/*"
                    id="image"
                    placeholder={`${session
                        ? "upload an image for your post"
                        : "Sing in to create a post"}
                `} />
            </div>

            <button className="flex justify-center items-center w-full p-2.5 text-sm text-white bg-blue-500 rounded-md" type="submit">
                {session ? "Create Post" : "Sing in to create a post"}
            </button>
        </form>
    )
}

export default Post